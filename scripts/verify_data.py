import json

with open('c:/Users/Administrator/WorkBuddy/20260407211806/juxing-engine/miniprogram/data/positions.js', 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find('const positionsDB = [')
if start > 0:
    json_str = content[start+18:]
    end = json_str.rfind('];')
    if end > 0:
        data = json.loads(json_str[:end+1])
        print(f'总计: {len(data)} 个岗位')
        
        guokao = [p for p in data if p.get('category') == '国考']
        shengkao = [p for p in data if p.get('category') == '省考']
        sanbuxian = [p for p in data if p.get('isThreeFree')]
        
        print(f'国考: {len(guokao)} 个')
        print(f'省考: {len(shengkao)} 个')
        print(f'三不限: {len(sanbuxian)} 个')
        
        print()
        print('=== 国考部分示例 (前3个) ===')
        for p in guokao[:3]:
            print(f"  {p['name']} - {p['subCategory']}")
            majors = p['requirements']['majors'][:3]
            print(f"    专业: {majors}...")
        
        print()
        print('=== 省考部分示例 (前3个) ===')
        for p in shengkao[:3]:
            print(f"  {p['name']} - {p['subCategory']}")
            print(f"    三不限: {p['isThreeFree']}")
            if p['isThreeFree']:
                print(f"    说明: {p['threeFreeNote']}")
