# -*- coding: utf-8 -*-
import json

# 读取国考数据
with open('c:/Users/Administrator/WorkBuddy/20260407211806/gw_positions.json', 'r', encoding='utf-8') as f:
    gw_positions = json.load(f)

# 读取原有省考数据
with open('c:/Users/Administrator/WorkBuddy/20260407211806/juxing-engine/miniprogram/data/positions.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 提取省考部分（从"省考"开始到数组结尾）
import re
shengkao_match = re.search(r'// ========== 省考岗位 ==========\s*(\[[\s\S]*)', content)
if shengkao_match:
    shengkao_content = '[' + shengkao_match.group(1)
    # 找到最后一个 ] 位置
    last_bracket = shengkao_content.rfind(']')
    if last_bracket > 0:
        shengkao_str = shengkao_content[:last_bracket+1]
        shengkao_positions = json.loads(shengkao_str)
    else:
        shengkao_positions = []
else:
    shengkao_positions = []

print(f'国考岗位: {len(gw_positions)} 个')
print(f'省考岗位: {len(shengkao_positions)} 个')

# 合并数据
all_positions = gw_positions + shengkao_positions
print(f'合并后总计: {len(all_positions)} 个岗位')

# 生成新的 positions.js 文件
output = '''// -*- coding: utf-8 -*-
// 公务员岗位数据库 - 完整版
// 共 {total} 个岗位（国考 {gw} 个 + 省考 {sk} 个）
// 数据来源：2026年国家公务员考试职位表 + 各省公务员考试职位表

const positionsDB = '''.format(total=len(all_positions), gw=len(gw_positions), sk=len(shengkao_positions))

output += json.dumps(all_positions, ensure_ascii=False, indent=2)
output += ';'

# 保存
with open('c:/Users/Administrator/WorkBuddy/20260407211806/juxing-engine/miniprogram/data/positions.js', 'w', encoding='utf-8') as f:
    f.write(output)

print('数据已更新到 positions.js')

# 统计三不限岗位
three_free_count = sum(1 for p in all_positions if p.get('isThreeFree', False))
print(f'其中三不限岗位: {three_free_count} 个')

# 统计国考省考
guokao_count = sum(1 for p in all_positions if p.get('category') == '国考')
shengkao_count = sum(1 for p in all_positions if p.get('category') == '省考')
print(f'国考岗位: {guokao_count} 个')
print(f'省考岗位: {shengkao_count} 个')
