# -*- coding: utf-8 -*-
import json
import re
import os

print("=" * 60)
print("生成精简版岗位数据")
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

# 精简数据结构
def simplify_position(p):
    """精简岗位数据，只保留核心字段"""
    simplified = {
        "id": p.get('id', p.get('positionCode', '')),
        "name": p.get('name', ''),
        "category": p.get('category', '国考'),
        "subCategory": p.get('subCategory', ''),
        "description": p.get('description', p.get('name', ''))[:100],
        "department": p.get('department', ''),
        "workLocation": p.get('workLocation', ''),
        "recruitCount": p.get('recruitCount', 1),
        "needAdjust": p.get('needAdjust', 0),
        "isThreeFree": p.get('isThreeFree', False),
        "isAdjust": p.get('isAdjust', False),
        "positionCode": p.get('positionCode', ''),
    }
    
    # 处理requirements字段
    req = p.get('requirements', {})
    if isinstance(req, dict):
        simplified['requirements'] = {
            "majors": req.get('majors', [])[:10],  # 只保留前10个专业
            "education": req.get('education', '本科'),
            "politics": req.get('politics', '不限'),
        }
    else:
        simplified['requirements'] = {
            "majors": [],
            "education": "本科",
            "politics": "不限",
        }
    
    # 处理分数
    scores = p.get('scores', {})
    if scores:
        simplified['scores'] = {
            "xingce": scores.get('xingce', 0),
            "gongke": scores.get('gongke', 0),
        }
    
    return simplified

# 精简所有数据
simplified_data = [simplify_position(p) for p in all_data]

print(f"精简后数据条数: {len(simplified_data)}")

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
print(f"输出文件: {output_file}")
print(f"文件大小: {file_size / 1024:.1f} KB")

# 同时生成一个JSON文件供下载
json_output = 'c:/Users/Administrator/WorkBuddy/20260407211806/juxing-engine/miniprogram/data/positions-mini.js'
with open(json_output, 'w', encoding='utf-8') as f:
    f.write('// 精简版岗位数据\\nconst positionsDB = ' + json.dumps(simplified_data, ensure_ascii=False, indent=2) + ';\\nmodule.exports = positionsDB;')

json_size = os.path.getsize(json_output)
print(f"\\n精简版JSON: {json_output}")
print(f"文件大小: {json_size / 1024:.1f} KB")

# 统计
guokao = [p for p in simplified_data if p.get('category') == '国考']
shengkao = [p for p in simplified_data if p.get('category') == '省考']
print(f"\\n统计:")
print(f"  国考: {len(guokao)} 个")
print(f"  省考: {len(shengkao)} 个")
