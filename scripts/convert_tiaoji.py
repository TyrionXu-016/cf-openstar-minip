# -*- coding: utf-8 -*-
import pandas as pd
import json
import re

print("=" * 60)
print("提取国考调剂职位数据")
print("=" * 60)

# 读取Excel文件，跳过标题行
df = pd.read_excel('c:/Users/Administrator/WorkBuddy/20260407211806/国考调剂职位表_2026.xlsx', header=0)

print(f"总行数（不含标题）: {len(df)}")
print(f"列名: {list(df.columns)}")
print()

# 提取需要的列
positions = []

for idx, row in df.iterrows():
    try:
        # 基础信息
        name = str(row.get('职位简介', '')) if pd.notna(row.get('职位简介')) else str(row.get('招考职位', ''))
        if name == 'nan' or not name:
            name = str(row.get('招考职位', '未知岗位'))
        
        # 机构信息
        department = str(row.get('招录机关', '')) if pd.notna(row.get('招录机关')) else ''
        sub_department = str(row.get('用人司局', '')) if pd.notna(row.get('用人司局')) else ''
        org_type = str(row.get('机构性质', '')) if pd.notna(row.get('机构性质')) else ''
        
        # 职位信息
        position_code = str(row.get('职位代码', '')) if pd.notna(row.get('职位代码')) else ''
        exam_category = str(row.get('考试类别', '')) if pd.notna(row.get('考试类别')) else ''
        level = str(row.get('机构层级', '')) if pd.notna(row.get('机构层级')) else ''
        
        # 人数
        recruit_count = int(row.get('招收人数', row.get('招考人数', 0))) if pd.notna(row.get('招收人数', row.get('招考人数'))) else 0
        need_adjust = int(row.get('需调剂人数', 0)) if pd.notna(row.get('需调剂人数')) else 0
        
        # 分数线
        xingce_score = float(row.get('行政职业能力测验分数线', 0)) if pd.notna(row.get('行政职业能力测验分数线')) else 0
        gongke_score = float(row.get('公共科目分数线', 0)) if pd.notna(row.get('公共科目分数线')) else 0
        zhuanke_score = float(row.get('专业科目分数线', 0)) if pd.notna(row.get('专业科目分数线')) else 0
        
        # 专业要求
        major_req = str(row.get('职位要求专业', '')) if pd.notna(row.get('职位要求专业')) else ''
        education = str(row.get('职位要求学历', '')) if pd.notna(row.get('职位要求学历')) else ''
        degree = str(row.get('职位要求学位', '')) if pd.notna(row.get('职位要求学位')) else ''
        politics = str(row.get('职位要求政治面貌', '')) if pd.notna(row.get('职位要求政治面貌')) else ''
        work_exp = str(row.get('职位要求基层工作最低年限', '')) if pd.notna(row.get('职位要求基层工作最低年限')) else ''
        project_exp = str(row.get('职位要求服务基层项目工作经历', '')) if pd.notna(row.get('职位要求服务基层项目工作经历')) else ''
        
        # 工作地点
        work_location = str(row.get('工作地点', '')) if pd.notna(row.get('工作地点')) else ''
        
        # 职位属性
        position_type = str(row.get('职位属性', '')) if pd.notna(row.get('职位属性')) else ''
        position_dist = str(row.get('职位分布', '')) if pd.notna(row.get('职位分布')) else ''
        
        # 备注
        notes = str(row.get('职位备注', '')) if pd.notna(row.get('职位备注')) else ''
        
        # 解析专业列表
        majors = []
        if major_req and major_req != 'nan':
            # 清理专业字符串
            major_clean = major_req.replace('；', ';').replace('，', ',').replace('、', ',')
            majors = [m.strip() for m in re.split(r'[,，;；]', major_clean) if m.strip() and m.strip() != '无限制']
        
        # 判断是否三不限
        is_three_free = False
        if (major_req == '无限制' or not majors) and education == '本科' and politics == '不限':
            is_three_free = True
        
        # 判断考试类别
        sub_cat = '其他'
        if '市（地）级' in exam_category or '市地' in exam_category:
            sub_cat = '市地级'
        elif '县（区）级' in exam_category or '县区' in exam_category:
            sub_cat = '县区级'
        
        position = {
            "id": f"tiaoji_{idx+1}",
            "name": name,
            "department": department,
            "subDepartment": sub_department,
            "category": "国考",
            "subCategory": sub_cat,
            "type": position_type if position_type != 'nan' else "普通职位",
            "distribution": position_dist if position_dist != 'nan' else "其他职位",
            "positionCode": str(position_code),
            "orgType": org_type,
            "examCategory": exam_category,
            "level": level,
            "recruitCount": recruit_count,
            "needAdjust": need_adjust,
            "requirements": {
                "majors": majors if majors else ["不限"],
                "education": education if education != 'nan' else "本科",
                "degree": degree if degree != 'nan' else "学士",
                "politics": politics if politics != 'nan' else "不限",
                "workExperience": work_exp if work_exp != 'nan' else "无限制",
                "projectExperience": project_exp if project_exp != 'nan' else "无限制"
            },
            "scores": {
                "xingce": xingce_score,
                "gongke": gongke_score,
                "zhuanke": zhuanke_score
            },
            "workLocation": work_location,
            "salary": "按国家规定",
            "promotion": "按公务员晋升制度",
            "isThreeFree": is_three_free,
            "notes": notes[:500] if notes != 'nan' else "",
            "isAdjust": True  # 标记为调剂职位
        }
        
        positions.append(position)
        
    except Exception as e:
        print(f"处理第{idx+1}行时出错: {e}")
        continue

print(f"成功提取 {len(positions)} 个调剂职位")

# 保存到JSON文件
output_path = 'c:/Users/Administrator/WorkBuddy/20260407211806/gw_tiaoji_positions.json'
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(positions, f, ensure_ascii=False, indent=2)

print(f"已保存到: {output_path}")

# 统计信息
print()
print("=" * 60)
print("统计信息")
print("=" * 60)

# 按机构性质统计
org_counts = {}
for p in positions:
    org_type = p.get('orgType', '未知')
    org_counts[org_type] = org_counts.get(org_type, 0) + 1

print("\n按机构性质统计:")
for org, count in sorted(org_counts.items(), key=lambda x: -x[1]):
    print(f"  {org}: {count}个岗位")

# 按考试类别统计
exam_counts = {}
for p in positions:
    cat = p.get('subCategory', '未知')
    exam_counts[cat] = exam_counts.get(cat, 0) + 1

print("\n按考试类别统计:")
for cat, count in sorted(exam_counts.items(), key=lambda x: -x[1]):
    print(f"  {cat}: {count}个岗位")

# 三不限岗位
three_free = [p for p in positions if p.get('isThreeFree')]
print(f"\n三不限岗位: {len(three_free)}个")

# 示例数据
print()
print("=" * 60)
print("示例数据")
print("=" * 60)
for p in positions[:3]:
    print(f"\n岗位: {p['name']}")
    print(f"  部门: {p['department']}")
    print(f"  考试类别: {p['subCategory']}")
    print(f"  招收人数: {p['recruitCount']}")
    print(f"  需调剂人数: {p['needAdjust']}")
    print(f"  专业要求: {p['requirements']['majors'][:3]}...")
    print(f"  工作地点: {p['workLocation']}")
    print(f"  三不限: {p['isThreeFree']}")
