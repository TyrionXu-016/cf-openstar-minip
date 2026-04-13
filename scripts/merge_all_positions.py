# -*- coding: utf-8 -*-
import json
import os
import re

print("=" * 60)
print("合并所有岗位数据到小程序数据库")
print("=" * 60)

# 读取现有的国考+省考数据
positions_file = 'c:/Users/Administrator/WorkBuddy/20260407211806/juxing-engine/miniprogram/data/positions.js'
with open(positions_file, 'r', encoding='utf-8') as f:
    content = f.read()
    
# 提取JSON - 跳过开头的注释
json_match = re.search(r'const positionsDB = (\[[\s\S]+\])\s*;?\s*$', content, re.MULTILINE)
if json_match:
    existing_positions = json.loads(json_match.group(1))
    print(f"现有岗位数量: {len(existing_positions)}")
    
    # 统计现有数据
    guokao = [p for p in existing_positions if p.get('category') == '国考']
    shengkao = [p for p in existing_positions if p.get('category') == '省考']
    print(f"  - 国考: {len(guokao)}")
    print(f"  - 省考: {len(shengkao)}")
else:
    print("无法解析现有数据")
    existing_positions = []

# 读取国考调剂职位数据
tiaoji_file = 'c:/Users/Administrator/WorkBuddy/20260407211806/gw_tiaoji_positions.json'
if os.path.exists(tiaoji_file):
    with open(tiaoji_file, 'r', encoding='utf-8') as f:
        tiaoji_positions = json.load(f)
    print(f"\n国考调剂职位数量: {len(tiaoji_positions)}")
else:
    print("调剂职位文件不存在")
    tiaoji_positions = []

# 检查现有国考职位代码，避免重复
existing_codes = set()
for p in existing_positions:
    code = p.get('positionCode', '')
    if code:
        existing_codes.add(str(code))

print(f"\n现有国考职位代码数量: {len(existing_codes)}")

# 过滤掉重复的调剂职位
new_tiaoji = []
duplicate_count = 0
for p in tiaoji_positions:
    code = str(p.get('positionCode', ''))
    if code and code in existing_codes:
        duplicate_count += 1
    else:
        new_tiaoji.append(p)

print(f"去重后新增调剂职位: {len(new_tiaoji)} (重复: {duplicate_count})")

# 合并数据
all_positions = existing_positions + new_tiaoji
print(f"\n合并后总岗位数: {len(all_positions)}")

# 重新统计
guokao_new = [p for p in all_positions if p.get('category') == '国考']
shengkao_new = [p for p in all_positions if p.get('category') == '省考']
sanbuxian_new = [p for p in all_positions if p.get('isThreeFree')]

print(f"\n最终统计:")
print(f"  - 国考: {len(guokao_new)} 个")
print(f"  - 省考: {len(shengkao_new)} 个")
print(f"  - 三不限: {len(sanbuxian_new)} 个")

# 生成新的positions.js文件
output_content = '''// -*- coding: utf-8 -*-
// 公务员岗位数据库 - 完整版
// 共 ''' + str(len(all_positions)) + ''' 个岗位
// 国考数据来源：2026年国家公务员考试职位表（官方）
// 国考调剂数据：2026年国考调剂职位表
// 省考数据：各省典型岗位示例

const positionsDB = ''' + json.dumps(all_positions, ensure_ascii=False, indent=2) + ''';

module.exports = positionsDB;
'''

# 写入文件
with open(positions_file, 'w', encoding='utf-8') as f:
    f.write(output_content)

print(f"\n✓ 已更新: {positions_file}")

# 显示文件大小
file_size = os.path.getsize(positions_file)
print(f"  文件大小: {file_size / 1024:.1f} KB")

# 显示部分调剂职位示例
print("\n" + "=" * 60)
print("新增调剂职位示例（前5个）")
print("=" * 60)
for p in new_tiaoji[:5]:
    print(f"\n岗位: {p['name'][:50]}...")
    print(f"  部门: {p['department']}")
    print(f"  工作地点: {p['workLocation']}")
    print(f"  招收人数: {p['recruitCount']}")
    print(f"  需调剂人数: {p['needAdjust']}")
    print(f"  专业要求: {', '.join(p['requirements']['majors'][:3])}")
