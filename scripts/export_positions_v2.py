# -*- coding: utf-8 -*-
import json
import re
import os

print("=" * 60)
print("生成超精简版岗位数据")
print("=" * 60)

# 读取原始数据
positions_file = 'c:/Users/Administrator/WorkBuddy/20260407211806/juxing-engine/miniprogram/data/positions.js'
with open(positions_file, 'r', encoding='utf-8') as f:
    content = f.read()

# 提取JSON
json_match = re.search(r'const positionsDB = (\[[\s\S]+\])\s*;?\s*$', content, re.MULTILINE)
if json_match:
    all_data = json.loads(json_match.group(1))
    print(f"读取到 {len(all_data)} 条数据")

# 分离国考基础职位和调剂职位
basic_positions = [p for p in all_data if not p.get('isAdjust', False)]
adjust_positions = [p for p in all_data if p.get('isAdjust', False)]

print(f"基础职位: {len(basic_positions)} 个")
print(f"调剂职位: {len(adjust_positions)} 个")

# 只保留部分调剂职位样本（每种类型保留10个）
# 按部门分组
from collections import defaultdict
dept_groups = defaultdict(list)
for p in adjust_positions:
    dept = p.get('department', '其他')
    dept_groups[dept].append(p)

# 每组取前5个
sampled_adjust = []
for dept, positions in dept_groups.items():
    sampled_adjust.extend(positions[:5])

print(f"采样调剂职位: {len(sampled_adjust)} 个")

# 合并
all_positions = basic_positions + sampled_adjust
print(f"总计: {len(all_positions)} 条数据")

# 超精简数据结构
def ultra_simplify(p):
    """超精简岗位数据"""
    req = p.get('requirements', {})
    if isinstance(req, dict):
        majors = req.get('majors', [])
        if isinstance(majors, list):
            majors = majors[:5]
        education = req.get('education', '本科')
        if isinstance(education, list):
            education = education[0] if education else '本科'
        politics = req.get('politics', '不限')
    else:
        majors = []
        education = '本科'
        politics = '不限'
    
    return {
        "id": p.get('id', p.get('positionCode', '')),
        "name": p.get('name', '')[:50],
        "category": p.get('category', '国考'),
        "subCategory": p.get('subCategory', '')[:30],
        "description": p.get('description', p.get('name', ''))[:80],
        "department": p.get('department', '')[:50],
        "workLocation": p.get('workLocation', '')[:30],
        "recruitCount": p.get('recruitCount', 1),
        "needAdjust": p.get('needAdjust', 0),
        "isThreeFree": p.get('isThreeFree', False),
        "isAdjust": p.get('isAdjust', False),
        "requirements": {
            "majors": majors,
            "education": education,
            "politics": politics,
        }
    }

simplified_data = [ultra_simplify(p) for p in all_positions]

# 生成JavaScript文件
output_content = '''// positions-data.js
// 精简版岗位数据

function getAllPositions() {
  return ''' + json.dumps(simplified_data, ensure_ascii=False, indent=2) + ''';
}

module.exports = { getAllPositions };
'''

# 保存
output_file = 'c:/Users/Administrator/WorkBuddy/20260407211806/juxing-engine/cloudfunctions/initPositions/positions-data.js'
with open(output_file, 'w', encoding='utf-8') as f:
    f.write(output_content)

file_size = os.path.getsize(output_file)
print(f"\\n输出文件: {output_file}")
print(f"文件大小: {file_size / 1024:.1f} KB")

# 生成精简版小程序数据文件
mini_content = '// 精简版岗位数据\\nconst positionsDB = ' + json.dumps(simplified_data, ensure_ascii=False, indent=2) + ';\\nmodule.exports = positionsDB;'
mini_file = 'c:/Users/Administrator/WorkBuddy/20260407211806/juxing-engine/miniprogram/data/positions-mini.js'
with open(mini_file, 'w', encoding='utf-8') as f:
    f.write(mini_content)

mini_size = os.path.getsize(mini_file)
print(f"\\n精简版小程序数据: {mini_file}")
print(f"文件大小: {mini_size / 1024:.1f} KB")

# 检查主包大小（不含positions.js）
project_dir = 'c:/Users/Administrator/WorkBuddy/20260407211806/juxing-engine/miniprogram'
total_size = 0
for root, dirs, files in os.walk(project_dir):
    for file in files:
        file_path = os.path.join(root, file)
        if 'positions' not in file:
            total_size += os.path.getsize(file_path)

print(f"\\n主包大小（不含岗位数据）: {total_size / 1024:.1f} KB")
print(f"加上精简数据后: {(total_size + mini_size) / 1024:.1f} KB")
print(f"2MB限制 = 2048 KB")
