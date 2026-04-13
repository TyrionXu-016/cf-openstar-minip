# -*- coding: utf-8 -*-
import pandas as pd
import json
import re

df = pd.read_excel('c:/Users/Administrator/WorkBuddy/20260407211806/国考职位表_2026.xls', header=1)
print(f'读取到 {len(df)} 条职位数据')

positions = []
for idx, row in df.iterrows():
    name = str(row.get('部门名称', '')).strip()
    if not name or name == 'nan': continue
    
    position_name = str(row.get('招考职位', '')).strip()
    description = str(row.get('职位简介', '')).strip()
    major = str(row.get('专业', '')).strip()
    education = str(row.get('学历', '')).strip()
    location = str(row.get('工作地点', '')).strip()
    exam_type = str(row.get('考试类别', '')).strip()
    
    is_three_free = '无限制' in major or major == 'nan' or major == ''
    
    if is_three_free:
        majors_list = ['不限专业']
        three_free_note = '专业不限，适合所有考生报考'
    else:
        majors_raw = major.replace('本科：', '').replace('研究生：', '').replace('；', '、').replace('，', '、')
        majors_list = [m.strip() for m in majors_raw.split('、') if m.strip()][:15]
        three_free_note = ''
    
    if '硕士' in education: edu_list = ['本科', '硕士', '博士']
    elif '专科' in education: edu_list = ['专科', '本科', '硕士', '博士']
    else: edu_list = ['本科', '硕士', '博士']
    
    category = '省考' if '省级' in exam_type else '国考'
    
    work_list = ['综合管理', '日常工作协调', '文稿撰写']
    tags = ['正式编制', '稳定']
    if is_three_free: tags.append('三不限')
    if '中央' in location: tags.append('中央机关')
    
    positions.append({
        'id': idx + 1,
        'name': name,
        'category': category,
        'subCategory': position_name,
        'description': description if description != 'nan' else '公务员岗位',
        'work': '、'.join(work_list),
        'salary': '中等偏上',
        'promotion': '晋升空间明确',
        'requirements': {
            'majors': majors_list,
            'education': edu_list,
            'other': education if education != 'nan' else ''
        },
        'isThreeFree': is_three_free,
        'threeFreeNote': three_free_note,
        'tags': tags,
        'difficulty': '中等',
        'goodFor': ['应往届毕业生', '符合专业要求者']
    })

print(f'成功转换 {len(positions)} 个岗位')
print('前3个岗位:')
for p in positions[:3]:
    print(f"  - {p['name']} ({p['subCategory']})")
    print(f"    专业: {p['requirements']['majors'][:3]}")
    print(f"    三不限: {p['isThreeFree']}")

# 保存为JSON
with open('c:/Users/Administrator/WorkBuddy/20260407211806/gw_positions.json', 'w', encoding='utf-8') as f:
    json.dump(positions, f, ensure_ascii=False, indent=2)
print(f'\n数据已保存到 gw_positions.json')
