# -*- coding: utf-8 -*-
import re
import json
import os

positions_file = 'c:/Users/Administrator/WorkBuddy/20260407211806/juxing-engine/miniprogram/data/positions.js'
with open(positions_file, 'r', encoding='utf-8') as f:
    content = f.read()

# 提取JSON
json_match = re.search(r'const positionsDB = (\[[\s\S]+\])\s*;?\s*$', content, re.MULTILINE)
if json_match:
    data = json.loads(json_match.group(1))
    
    # 统计
    guokao = [p for p in data if p.get('category') == '国考']
    shengkao = [p for p in data if p.get('category') == '省考']
    sanbuxian = [p for p in data if p.get('isThreeFree')]
    tiaoji = [p for p in data if p.get('isAdjust')]
    
    print('=' * 60)
    print('岗位数据库统计')
    print('=' * 60)
    print(f'总岗位数: {len(data)}')
    print(f'  - 国考: {len(guokao)} 个')
    print(f'  - 省考: {len(shengkao)} 个')
    print(f'  - 三不限: {len(sanbuxian)} 个')
    print(f'  - 调剂职位: {len(tiaoji)} 个')
    print()
    
    # 文件大小
    file_size = os.path.getsize(positions_file)
    print(f'文件大小: {file_size / 1024:.1f} KB')
    print()
    
    # 显示示例
    print('=' * 60)
    print('调剂职位示例')
    print('=' * 60)
    for p in tiaoji[:5]:
        print(f"\n{p['department']} - {p['name'][:40]}")
        print(f"  地点: {p['workLocation']}")
        print(f"  需调剂: {p['needAdjust']} 人")
        print(f"  专业: {', '.join(p['requirements']['majors'][:2])}")
