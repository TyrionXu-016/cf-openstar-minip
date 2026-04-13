# -*- coding: utf-8 -*-
import json

# 读取国考数据并修复category
with open('c:/Users/Administrator/WorkBuddy/20260407211806/gw_positions.json', 'r', encoding='utf-8') as f:
    gw_positions = json.load(f)

# 修复国考分类
for p in gw_positions:
    p['category'] = '国考'

# 添加各省省考岗位数据（真实职位名称和格式）
shengkao_positions = [
    {
        "id": 1001,
        "name": "税务局（省考）",
        "category": "省考",
        "subCategory": "基层税务分局一级科员",
        "description": "从事税收征管、纳税服务等工作",
        "work": "税收征管、纳税服务、税务稽查",
        "salary": "中等偏上",
        "promotion": "较慢，需5年以上",
        "requirements": {
            "majors": ["财政学", "税收学", "会计学", "审计学", "财务管理", "法学", "经济学", "金融学", "计算机科学与技术", "统计学"],
            "education": ["本科", "硕士"],
            "other": "学士学位"
        },
        "isThreeFree": False,
        "threeFreeNote": "",
        "tags": ["招录人数多", "专业广泛", "稳定性高", "省考大户"],
        "difficulty": "中等",
        "goodFor": ["财会类专业", "法律类专业", "经济类专业"]
    },
    {
        "id": 1002,
        "name": "市场监督管理局",
        "category": "省考",
        "subCategory": "基层市场监管所一级科员",
        "description": "从事市场综合监督管理、市场秩序监管等工作",
        "work": "市场准入、执法检查、消费者权益保护",
        "salary": "中等",
        "promotion": "中等",
        "requirements": {
            "majors": ["法学", "食品科学与工程", "药学", "机械类", "计算机科学与技术", "工商管理", "汉语言文学"],
            "education": ["本科", "硕士"],
            "other": "学士学位"
        },
        "isThreeFree": False,
        "threeFreeNote": "",
        "tags": ["执法类", "专业广泛", "工作强度适中"],
        "difficulty": "较易",
        "goodFor": ["法律类", "食品药学类", "机械类"]
    },
    {
        "id": 1003,
        "name": "公安局",
        "category": "省考",
        "subCategory": "基层派出所民警",
        "description": "维护社会治安秩序，处理各类警情",
        "work": "接处警、案件办理、治安管理、社区警务",
        "salary": "中等（含警衔补贴）",
        "promotion": "较慢",
        "requirements": {
            "majors": ["公安学", "侦查学", "治安学", "法学", "计算机科学与技术"],
            "education": ["本科", "专科"],
            "other": "限男性，需体能测试"
        },
        "isThreeFree": False,
        "threeFreeNote": "",
        "tags": ["警察编制", "体能测试", "男性优先", "需值夜班"],
        "difficulty": "较易",
        "goodFor": ["公安警校生", "法学类"]
    },
    {
        "id": 1004,
        "name": "人民法院",
        "category": "省考",
        "subCategory": "法官助理",
        "description": "协助法官处理案件审理相关工作",
        "work": "案件审理辅助、文书撰写、庭前准备",
        "salary": "中等偏上",
        "promotion": "明确",
        "requirements": {
            "majors": ["法学"],
            "education": ["本科", "硕士"],
            "other": "取得法律职业资格证书A证"
        },
        "isThreeFree": False,
        "threeFreeNote": "",
        "tags": ["法律类", "司法院校", "专业性强", "晋升明确"],
        "difficulty": "较难",
        "goodFor": ["法学类专业", "已过法考者"]
    },
    {
        "id": 1005,
        "name": "人民检察院",
        "category": "省考",
        "subCategory": "检察官助理",
        "description": "协助检察官办理审查逮捕、审查起诉等案件",
        "work": "案件审查、文书起草、出庭支持公诉",
        "salary": "中等偏上",
        "promotion": "明确",
        "requirements": {
            "majors": ["法学"],
            "education": ["本科", "硕士"],
            "other": "取得法律职业资格证书A证"
        },
        "isThreeFree": False,
        "threeFreeNote": "",
        "tags": ["法律类", "司法院校", "专业性强"],
        "difficulty": "较难",
        "goodFor": ["法学类专业", "已过法考者"]
    },
    {
        "id": 1006,
        "name": "司法局",
        "category": "省考",
        "subCategory": "社区矫正工作人员",
        "description": "从事社区矫正、普法宣传等工作",
        "work": "社区矫正、法治宣传、人民调解、安置帮教",
        "salary": "中等",
        "promotion": "较慢",
        "requirements": {
            "majors": ["法学", "社会学", "社会工作", "监狱学", "心理学"],
            "education": ["本科", "硕士"],
            "other": "学士学位"
        },
        "isThreeFree": False,
        "threeFreeNote": "",
        "tags": ["司法行政", "工作稳定", "专业相关"],
        "difficulty": "较易",
        "goodFor": ["法律类", "社会学类"]
    },
    {
        "id": 1007,
        "name": "人力资源和社会保障局",
        "category": "省考",
        "subCategory": "综合管理岗位",
        "description": "负责人力资源和社会保障相关工作",
        "work": "就业服务、社会保险、人事管理、劳动监察",
        "salary": "中等",
        "promotion": "中等",
        "requirements": {
            "majors": ["劳动与社会保障", "人力资源管理", "公共事业管理", "法学", "计算机科学与技术", "汉语言文学", "会计学"],
            "education": ["本科", "硕士"],
            "other": "学士学位"
        },
        "isThreeFree": False,
        "threeFreeNote": "",
        "tags": ["民生部门", "专业广泛", "工作稳定"],
        "difficulty": "中等",
        "goodFor": ["管理类", "法律类", "计算机类"]
    },
    {
        "id": 1008,
        "name": "民政局",
        "category": "省考",
        "subCategory": "基层民政工作人员",
        "description": "从事社会救助、基层政权建设等工作",
        "work": "社会救助、养老服务、基层治理、社会组织管理",
        "salary": "中等",
        "promotion": "较慢",
        "requirements": {
            "majors": ["社会学", "社会工作", "公共事业管理", "汉语言文学", "法学", "社会保障"],
            "education": ["本科", "硕士"],
            "other": "学士学位"
        },
        "isThreeFree": False,
        "threeFreeNote": "",
        "tags": ["民生部门", "工作稳定", "适合女生"],
        "difficulty": "较易",
        "goodFor": ["社会学类", "社会工作类"]
    },
    {
        "id": 1009,
        "name": "财政局",
        "category": "省考",
        "subCategory": "财政业务岗位",
        "description": "从事财政收支管理等工作",
        "work": "预算管理、国库支付、财政监督、绩效评价",
        "salary": "中等偏上",
        "promotion": "较慢",
        "requirements": {
            "majors": ["财政学", "税收学", "会计学", "审计学", "财务管理", "金融学", "经济学"],
            "education": ["本科", "硕士"],
            "other": "学士学位"
        },
        "isThreeFree": False,
        "threeFreeNote": "",
        "tags": ["财会类", "专业性强", "待遇较好"],
        "difficulty": "中等",
        "goodFor": ["财会类专业", "经济类专业"]
    },
    {
        "id": 1010,
        "name": "生态环境局",
        "category": "省考",
        "subCategory": "环境监察执法岗位",
        "description": "从事环境保护和生态文明建设相关工作",
        "work": "环境监测、环境监察、污染防治、生态保护",
        "salary": "中等",
        "promotion": "中等",
        "requirements": {
            "majors": ["环境科学与工程", "环境工程", "环境科学", "生态学", "化学", "生物学", "法学"],
            "education": ["本科", "硕士"],
            "other": "学士学位"
        },
        "isThreeFree": False,
        "threeFreeNote": "",
        "tags": ["环保执法", "专业性强", "户外工作"],
        "difficulty": "较易",
        "goodFor": ["环境类专业", "化学化工类"]
    },
    {
        "id": 1011,
        "name": "住房和城乡建设局",
        "category": "省考",
        "subCategory": "建设工程管理岗位",
        "description": "从事住房和城乡建设工作",
        "work": "工程质量监管、建筑市场管理、住房保障、物业管理",
        "salary": "中等偏上",
        "promotion": "中等",
        "requirements": {
            "majors": ["土木工程", "建筑学", "城乡规划", "工程管理", "工程造价", "给排水科学与工程", "建筑电气与智能化"],
            "education": ["本科", "硕士"],
            "other": "学士学位"
        },
        "isThreeFree": False,
        "threeFreeNote": "",
        "tags": ["建设部门", "专业性强", "男生优先"],
        "difficulty": "中等",
        "goodFor": ["土建类专业", "城市规划类"]
    },
    {
        "id": 1012,
        "name": "交通运输局",
        "category": "省考",
        "subCategory": "交通运输管理岗位",
        "description": "从事交通运输行业管理工作",
        "work": "公路养护、道路运输管理、交通执法、安全监管",
        "salary": "中等",
        "promotion": "中等",
        "requirements": {
            "majors": ["交通运输", "道路桥梁与渡河工程", "车辆工程", "物流工程", "交通工程", "土木工程", "法学"],
            "education": ["本科", "硕士"],
            "other": "学士学位"
        },
        "isThreeFree": False,
        "threeFreeNote": "",
        "tags": ["交通部门", "户外工作", "适合男生"],
        "difficulty": "较易",
        "goodFor": ["交通运输类", "土建类"]
    },
    {
        "id": 1013,
        "name": "教育局",
        "category": "省考",
        "subCategory": "教育管理岗位",
        "description": "从事教育行政管理工作",
        "work": "教育发展规划、学校管理、教师资格认定、教育督导",
        "salary": "中等",
        "promotion": "中等",
        "requirements": {
            "majors": ["教育学", "教育技术学", "学前教育", "汉语言文学", "数学与应用数学", "英语", "计算机科学与技术"],
            "education": ["本科", "硕士"],
            "other": "学士学位"
        },
        "isThreeFree": False,
        "threeFreeNote": "",
        "tags": ["教育系统", "工作稳定", "适合女生"],
        "difficulty": "中等",
        "goodFor": ["教育类专业", "师范类专业"]
    },
    {
        "id": 1014,
        "name": "卫生健康委员会",
        "category": "省考",
        "subCategory": "卫生健康管理岗位",
        "description": "从事医疗卫生管理工作",
        "work": "医疗服务监管、公共卫生管理、疾病预防控制、计划生育",
        "salary": "中等",
        "promotion": "中等",
        "requirements": {
            "majors": ["预防医学", "临床医学", "药学", "护理学", "公共卫生管理", "医学检验技术", "法学"],
            "education": ["本科", "硕士"],
            "other": "学士学位"
        },
        "isThreeFree": False,
        "threeFreeNote": "",
        "tags": ["医疗卫生", "专业性强", "工作稳定"],
        "difficulty": "较易",
        "goodFor": ["医学类专业", "公共卫生类"]
    },
    {
        "id": 1015,
        "name": "审计局",
        "category": "省考",
        "subCategory": "审计业务岗位",
        "description": "从事审计监督工作",
        "work": "财政财务审计、经济责任审计、重大工程审计",
        "salary": "中等偏上",
        "promotion": "较慢",
        "requirements": {
            "majors": ["审计学", "会计学", "财务管理", "财政学", "经济学", "法学", "计算机科学与技术"],
            "education": ["本科", "硕士"],
            "other": "学士学位"
        },
        "isThreeFree": False,
        "threeFreeNote": "",
        "tags": ["审计监督", "专业性强", "待遇较好"],
        "difficulty": "较难",
        "goodFor": ["财会类专业", "经济类专业"]
    },
    {
        "id": 1016,
        "name": "应急管理局",
        "category": "省考",
        "subCategory": "应急管理岗位",
        "description": "从事应急管理和安全生产监管工作",
        "work": "应急值守、灾害救援、安全生产监管、预案管理",
        "salary": "中等",
        "promotion": "中等",
        "requirements": {
            "majors": ["安全工程", "应急技术与管理", "消防工程", "化学工程与工艺", "机械类", "法学", "计算机科学与技术"],
            "education": ["本科", "硕士"],
            "other": "需要值班，适合男性"
        },
        "isThreeFree": False,
        "threeFreeNote": "",
        "tags": ["应急值守", "工作强度大", "适合男生"],
        "difficulty": "较易",
        "goodFor": ["安全工程类", "消防类"]
    },
    {
        "id": 1017,
        "name": "信访局",
        "category": "省考",
        "subCategory": "信访工作岗位",
        "description": "从事群众来信来访接待处理工作",
        "work": "信访接待、案件转办、督查督办、矛盾化解",
        "salary": "中等",
        "promotion": "较慢",
        "requirements": {
            "majors": ["不限专业"],
            "education": ["本科", "硕士"],
            "other": "学士学位"
        },
        "isThreeFree": True,
        "threeFreeNote": "专业不限！适合所有专业考生报考，竞争相对较大",
        "tags": ["三不限", "工作稳定", "工作压力大"],
        "difficulty": "很难",
        "goodFor": ["所有专业", "心理素质好者"]
    },
    {
        "id": 1018,
        "name": "乡镇政府",
        "category": "省考",
        "subCategory": "乡镇综合管理岗位",
        "description": "从事乡镇基层综合管理工作",
        "work": "基层治理、乡村振兴、民政社保、计划生育",
        "salary": "中等",
        "promotion": "较慢",
        "requirements": {
            "majors": ["不限专业"],
            "education": ["专科", "本科", "硕士"],
            "other": "服务基层项目人员优先"
        },
        "isThreeFree": True,
        "threeFreeNote": "专业不限！乡镇基层岗位，工作条件相对艰苦，但竞争较小",
        "tags": ["三不限", "基层岗位", "竞争较小", "包住宿"],
        "difficulty": "较易",
        "goodFor": ["所有专业", "愿意扎根基层者"]
    },
    {
        "id": 1019,
        "name": "街道办事处",
        "category": "省考",
        "subCategory": "街道综合管理岗位",
        "description": "从事街道社区管理和服务工作",
        "work": "社区治理、民政服务、综治维稳、计划生育",
        "salary": "中等",
        "promotion": "较慢",
        "requirements": {
            "majors": ["不限专业"],
            "education": ["本科", "硕士"],
            "other": "学士学位"
        },
        "isThreeFree": True,
        "threeFreeNote": "专业不限！城市街道办，工作环境较好",
        "tags": ["三不限", "城市岗位", "工作稳定"],
        "difficulty": "中等",
        "goodFor": ["所有专业"]
    },
    {
        "id": 1020,
        "name": "文化和旅游局",
        "category": "省考",
        "subCategory": "文化旅游管理岗位",
        "description": "从事文化、旅游、体育管理工作",
        "work": "文化市场管理、旅游监管、体育管理、文物保护",
        "salary": "中等",
        "promotion": "中等",
        "requirements": {
            "majors": ["旅游管理", "酒店管理", "文化产业管理", "文物与博物馆学", "艺术学", "汉语言文学", "新闻学"],
            "education": ["本科", "硕士"],
            "other": "学士学位"
        },
        "isThreeFree": False,
        "threeFreeNote": "",
        "tags": ["文旅系统", "工作轻松", "适合女生"],
        "difficulty": "较易",
        "goodFor": ["旅游管理类", "文史类专业"]
    }
]

# 合并所有数据
all_positions = gw_positions + shengkao_positions

print(f'国考岗位: {len(gw_positions)} 个')
print(f'省考岗位: {len(shengkao_positions)} 个')
print(f'合并后总计: {len(all_positions)} 个岗位')

# 统计
three_free_count = sum(1 for p in all_positions if p.get('isThreeFree', False))
guokao_count = sum(1 for p in all_positions if p.get('category') == '国考')
shengkao_count = sum(1 for p in all_positions if p.get('category') == '省考')
print(f'其中三不限岗位: {three_free_count} 个')
print(f'国考岗位: {guokao_count} 个')
print(f'省考岗位: {shengkao_count} 个')

# 生成positions.js文件
output = '''// -*- coding: utf-8 -*-
// 公务员岗位数据库 - 完整版
// 共 {total} 个岗位（国考 {gw} 个 + 省考 {sk} 个）
// 国考数据来源：2026年国家公务员考试职位表
// 省考数据：各省典型岗位示例

const positionsDB = '''.format(total=len(all_positions), gw=len(gw_positions), sk=len(shengkao_positions))

output += json.dumps(all_positions, ensure_ascii=False, indent=2)
output += ';\n\nexport default positionsDB;'

with open('c:/Users/Administrator/WorkBuddy/20260407211806/juxing-engine/miniprogram/data/positions.js', 'w', encoding='utf-8') as f:
    f.write(output)

print('数据已更新到 positions.js')
