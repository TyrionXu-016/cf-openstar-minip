// 精简版岗位数据
const positionsDB = [
  {
    "id": 1,
    "name": "中央办公厅",
    "category": "国考",
    "subCategory": "法务管理岗位一级主任科员及以下",
    "description": "从事法务管理相关工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "030105民商法",
        "030103宪法学与行政法学",
        "035102法律（法学）"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 2,
    "name": "中央办公厅",
    "category": "国考",
    "subCategory": "财务管理岗位一级主任科员及以下",
    "description": "从事财务管理相关工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "120203K会计学",
        "120204财务管理",
        "120201会计学",
        "1253会计"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 3,
    "name": "中央办公厅",
    "category": "国考",
    "subCategory": "工程监理岗位一级主任科员及以下",
    "description": "从事工程监理相关工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "081001土木工程",
        "120103工程管理",
        "120105工程造价",
        "125601工程管理",
        "081402结构工程"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 4,
    "name": "中央办公厅",
    "category": "国考",
    "subCategory": "文秘岗位一级主任科员及以下",
    "description": "从事综合文秘等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0301法学",
        "0501中国语言文学",
        "0602中国史"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 5,
    "name": "中央办公厅",
    "category": "国考",
    "subCategory": "党务岗位一级主任科员及以下",
    "description": "从事党建等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0305马克思主义理论",
        "0307中共党史党建学",
        "0308纪检监察学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 6,
    "name": "中央办公厅",
    "category": "国考",
    "subCategory": "服务管理岗位一级主任科员及以下",
    "description": "从事综合服务等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "030301社会学",
        "030302社会工作",
        "030306T老年学",
        "030307T社会政策"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 7,
    "name": "中央办公厅",
    "category": "国考",
    "subCategory": "卫生健康管理岗位一级主任科员及以下",
    "description": "从事卫生健康管理等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "1051临床医学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 8,
    "name": "中央办公厅",
    "category": "国考",
    "subCategory": "行政后勤岗位一级主任科员及以下",
    "description": "从事设备管理等行政后勤保障工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "081002建筑环境与能源应用工程"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 9,
    "name": "中央办公厅",
    "category": "国考",
    "subCategory": "财务管理岗位一级主任科员及以下",
    "description": "从事财务管理工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "120203K会计学",
        "120204财务管理"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 10,
    "name": "中央办公厅",
    "category": "国考",
    "subCategory": "宣传教育岗位一级主任科员及以下",
    "description": "从事领袖革命业绩、光辉思想、崇高风范的宣传工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "130309播音与主持艺术",
        "1301艺术学",
        "1354戏剧与影视（研究生报考本科阶段专业须为130309播音与主持艺术）"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 11,
    "name": "中央办公厅",
    "category": "国考",
    "subCategory": "信息管理岗位一级主任科员及以下",
    "description": "从事信息管理等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0807电子信息类",
        "0808自动化类",
        "0809计算机类",
        "0810信息与通信工程",
        "0811控制科学与工程"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 12,
    "name": "中央直属机关事务管理局",
    "category": "国考",
    "subCategory": "园林管理岗位一级主任科员及以下",
    "description": "从事园林绿化管理等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0901植物生产类",
        "0902自然保护与环境生态类",
        "0905林学类",
        "0907草学类"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 13,
    "name": "中央直属机关事务管理局",
    "category": "国考",
    "subCategory": "综合管理岗位一级主任科员及以下",
    "description": "从事综合管理等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "法学类",
        "政治学类",
        "马克思主义理论类",
        "中国语言文学类",
        "新闻传播学类"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 14,
    "name": "中央直属机关事务管理局",
    "category": "国考",
    "subCategory": "规划管理岗位一级主任科员及以下",
    "description": "从事规划管理等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0813建筑学",
        "0833城乡规划学",
        "0853城乡规划"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 15,
    "name": "中央直属机关事务管理局",
    "category": "国考",
    "subCategory": "工程管理岗位一级主任科员及以下",
    "description": "从事工程管理等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "081001土木工程",
        "081002建筑环境与能源应用工程",
        "081004建筑电气与智能化",
        "082801建筑学",
        "0814土木工程"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 16,
    "name": "中央直属机关事务管理局",
    "category": "国考",
    "subCategory": "资产管理岗位一级主任科员及以下",
    "description": "从事资产管理等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "020201K财政学",
        "120204财务管理",
        "120208资产评估",
        "020203财政学",
        "0256资产评估"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 17,
    "name": "中央直属机关事务管理局",
    "category": "国考",
    "subCategory": "信息管理岗位一级主任科员及以下",
    "description": "从事信息管理等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "080901计算机科学与技术",
        "080902软件工程",
        "080903网络工程",
        "0775计算机科学与技术",
        "0812计算机科学与技术"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 18,
    "name": "中央直属机关事务管理局",
    "category": "国考",
    "subCategory": "政策法规岗位一级主任科员及以下",
    "description": "从事政策法规等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0301法学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 19,
    "name": "中央直属机关事务管理局",
    "category": "国考",
    "subCategory": "综合管理岗位一级主任科员及以下",
    "description": "从事综合管理等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "哲学类",
        "法学类",
        "政治学类",
        "马克思主义理论类",
        "中国语言文学类"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 20,
    "name": "中央档案馆国家档案局",
    "category": "国考",
    "subCategory": "财务管理岗位一级主任科员及以下",
    "description": "从事财务管理等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "120203K会计学",
        "120204财务管理",
        "020201K财政学",
        "120201会计学",
        "1253会计"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 21,
    "name": "中央档案馆国家档案局",
    "category": "国考",
    "subCategory": "消防安全岗位一级主任科员及以下",
    "description": "从事消防安全管理等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "083102K消防工程",
        "0837安全科学与工程（须为消防安全方向）"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 22,
    "name": "中央档案馆国家档案局",
    "category": "国考",
    "subCategory": "财务管理岗位一级主任科员及以下",
    "description": "从事财务管理等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "120201会计学",
        "1253会计"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 23,
    "name": "中央档案馆国家档案局",
    "category": "国考",
    "subCategory": "消防安全岗位一级主任科员及以下",
    "description": "从事消防安全管理等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "081403/085905市政工程（给排水方向）",
        "085702安全工程（消防工程方向）"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 24,
    "name": "中央档案馆国家档案局",
    "category": "国考",
    "subCategory": "后勤管理岗位一级主任科员及以下",
    "description": "从事馆区园林绿化管理等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0834风景园林学",
        "0862/0953风景园林",
        "090706园林植物与观赏园艺"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 25,
    "name": "中央档案馆国家档案局",
    "category": "国考",
    "subCategory": "档案利用岗位一级主任科员及以下",
    "description": "从事查档咨询、接待利用、个人查证服务等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0602中国史（中国近现代史方向）",
        "0602L5中国近现代史"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 26,
    "name": "中央组织部",
    "category": "国考",
    "subCategory": "业务处室职位一级主任科员及以下",
    "description": "从事老干部相关工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "哲学（0101）",
        "政治学（0302）",
        "马克思主义理论（0305）",
        "中共党史党建学（0307）",
        "中国语言文学（0501）"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 27,
    "name": "中央组织部",
    "category": "国考",
    "subCategory": "业务处室职位一级主任科员及以下",
    "description": "从事机关行政、后勤等事务管理工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "马克思主义理论（0305）",
        "中共党史党建学（0307）",
        "中国语言文学（0501）",
        "建筑（0813",
        "0851）"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 28,
    "name": "中央对外联络部",
    "category": "国考",
    "subCategory": "英语翻译",
    "description": "从事有关英语国家联络调研工作，承担有关交替传译和同声传译任务。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "英语（同声传译",
        "口译）"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 29,
    "name": "中央对外联络部",
    "category": "国考",
    "subCategory": "综合调研一",
    "description": "从事综合调研等工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "政治学理论",
        "中外政治制度",
        "科学社会主义与国际共产主义运动",
        "中共党史",
        "国际政治"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 30,
    "name": "中央对外联络部",
    "category": "国考",
    "subCategory": "阿拉伯语翻译",
    "description": "从事有关阿拉伯语国家联络调研工作，承担有关交替传译和同声传译任务。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "阿拉伯语"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 31,
    "name": "中央对外联络部",
    "category": "国考",
    "subCategory": "朝鲜语翻译",
    "description": "从事有关朝鲜、韩国联络调研工作，承担有关交替传译和同声传译任务。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "朝鲜语（韩语）"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 32,
    "name": "中央对外联络部",
    "category": "国考",
    "subCategory": "法语翻译",
    "description": "从事有关法语国家联络调研工作，承担有关交替传译和同声传译任务。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "法语"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 33,
    "name": "中央对外联络部",
    "category": "国考",
    "subCategory": "西班牙语翻译",
    "description": "从事有关西班牙语国家联络调研工作，承担有关交替传译和同声传译任务。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "西班牙语"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 34,
    "name": "中央对外联络部",
    "category": "国考",
    "subCategory": "尼泊尔语翻译",
    "description": "从事有关尼泊尔联络调研工作，承担有关交替传译和同声传译任务。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "尼泊尔语"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 35,
    "name": "中央对外联络部",
    "category": "国考",
    "subCategory": "匈牙利语翻译",
    "description": "从事有关匈牙利联络调研工作，承担有关交替传译和同声传译任务。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "匈牙利语"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 36,
    "name": "中央对外联络部",
    "category": "国考",
    "subCategory": "综合调研二",
    "description": "从事综合调研等工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "政治学理论",
        "中外政治制度",
        "科学社会主义与国际共产主义运动",
        "中共党史",
        "国际政治"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 37,
    "name": "中央台办",
    "category": "国考",
    "subCategory": "业务司局岗位（一级主任科员及以下）",
    "description": "承担文稿起草和综合调研等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "理学类",
        "工学类"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 38,
    "name": "中央金融办、中央金融工委",
    "category": "国考",
    "subCategory": "综合业务处一级主任科员及以下",
    "description": "主要从事宏观经济金融政策协调、金融监管政策协调、文稿起草、综合管理等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0202应用经济学",
        "0251金融"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 39,
    "name": "中央金融办、中央金融工委",
    "category": "国考",
    "subCategory": "综合业务处一级主任科员及以下",
    "description": "主要从事监督问责、文稿起草、综合管理等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0202应用经济学",
        "0251金融",
        "0301法学",
        "0351法律"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 40,
    "name": "中央金融办、中央金融工委",
    "category": "国考",
    "subCategory": "综合业务处一级主任科员及以下",
    "description": "主要从事党建工作、文稿起草、综合管理等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0202应用经济学",
        "0251金融",
        "0301法学",
        "0305马克思主义理论",
        "0307中共党史党建学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 41,
    "name": "中央党史和文献研究院",
    "category": "国考",
    "subCategory": "编研岗一级主任科员及以下",
    "description": "主要从事党史文献编辑、研究、宣传教育等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "中共党史党建学",
        "中国史",
        "世界史",
        "哲学",
        "理论经济学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 42,
    "name": "中央党史和文献研究院",
    "category": "国考",
    "subCategory": "德语翻译岗一级主任科员及以下",
    "description": "主要从事党史和文献德语翻译工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "德语"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 43,
    "name": "中央党史和文献研究院",
    "category": "国考",
    "subCategory": "西班牙语翻译岗一级主任科员及以下",
    "description": "主要从事党史和文献西班牙语翻译工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "西班牙语"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 44,
    "name": "中国外文局",
    "category": "国考",
    "subCategory": "财务管理处一级主任科员及以下",
    "description": "负责经费核算与管理；负责编制、上报并批复全局部门决算及住房改革支出决算；负责财务分析有关工作；负责财会监督有关工作；负责相关文件的起草。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "1202工商管理学（会计学",
        "审计学）",
        "1253会计",
        "1257审计"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 45,
    "name": "中国浦东干部学院",
    "category": "国考",
    "subCategory": "学员工作二处一级主任科员及以下",
    "description": "从事学员管理工作、综合管理类事务",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0302政治学",
        "0303社会学（社会学）",
        "1202工商管理（人力资源管理）",
        "0302政治学",
        "0303社会学（社会学）"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 46,
    "name": "中国浦东干部学院",
    "category": "国考",
    "subCategory": "培训开发处一级主任科员及以下",
    "description": "从事培训项目开发、学员管理工作、综合管理类事务",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0201经济学（经济统计学）",
        "0203金融学（金融数学）",
        "0701数学",
        "0712统计学",
        "0202应用经济学（统计学）"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 47,
    "name": "中国井冈山干部学院",
    "category": "国考",
    "subCategory": "综合文字岗一级主任科员及以下",
    "description": "从事综合文字工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "理论经济学0201",
        "应用经济学0202",
        "法学03",
        "中国语言文学0501",
        "新闻传播学0503"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 48,
    "name": "中国井冈山干部学院",
    "category": "国考",
    "subCategory": "后勤保障处一级主任科员及以下",
    "description": "从事学院工程管理工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "土木类（0810）",
        "建筑类（0828）"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 49,
    "name": "中国延安干部学院",
    "category": "国考",
    "subCategory": "研究室一级主任科员及以下",
    "description": "干部教育工作相关政策研究与重要文稿起草",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "哲学",
        "经济学",
        "法学",
        "管理学",
        "教育学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 50,
    "name": "中国延安干部学院",
    "category": "国考",
    "subCategory": "后勤保障处一级主任科员及以下",
    "description": "后勤保障和物业监督管理",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "081002建筑环境与能源应用工程",
        "081003给排水科学与工程",
        "081004建筑电气与智能化",
        "085906人工环境工程"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 51,
    "name": "中国延安干部学院",
    "category": "国考",
    "subCategory": "业务处室一级主任科员及以下",
    "description": "培训组织与学员管理",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "哲学",
        "经济学",
        "法学",
        "管理学",
        "教育学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 52,
    "name": "全国人大",
    "category": "国考",
    "subCategory": "业务处一级主任科员及以下",
    "description": "为有关外事活动提供翻译服务；参与出访和接待工作；办理全国人大与有关国家议会交往的日常事务等。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "英语",
        "国际法学",
        "国际政治",
        "国际关系",
        "外交学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 53,
    "name": "全国人大",
    "category": "国考",
    "subCategory": "业务二处一级主任科员及以下",
    "description": "参与政府采购项目文件编制工作，从事采购需求标准和评价体系的研究与制订等。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "经济工程",
        "工程管理",
        "工程造价"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 54,
    "name": "全国政协",
    "category": "国考",
    "subCategory": "业务处室一级主任科员及以下（一）",
    "description": "从事相关领域专题研究、文稿起草工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "哲学（马克思主义哲学）",
        "法学（政治学",
        "法学",
        "马克思主义理论）",
        "历史学（中国史"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 55,
    "name": "全国政协",
    "category": "国考",
    "subCategory": "业务处室一级主任科员及以下（二）",
    "description": "从事相关专业工作、文稿起草工作、协商议政会议活动的组织协调工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "工学（软件工程",
        "计算机科学与技术",
        "电子科学与技术",
        "信息与通信工程",
        "安全科学与工程"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 56,
    "name": "全国政协",
    "category": "国考",
    "subCategory": "业务处室一级主任科员及以下（三）",
    "description": "从事外事工作、外事相关文稿起草工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "外国语言文学",
        "翻译（英语）"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 57,
    "name": "全国政协",
    "category": "国考",
    "subCategory": "业务处室一级主任科员及以下（四）",
    "description": "从事相关专业工作、文稿起草工作、协商议政会议活动的服务保障工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "财务管理",
        "会计",
        "审计"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 58,
    "name": "民建中央",
    "category": "国考",
    "subCategory": "对外交流处一级主任科员及以下",
    "description": "承担公务出国调研交流团组的筹备组织报批工作；承担港澳工商经济界的联络工作，推动港澳与内地的融合发展；负责筹备组织两岸交流项目。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "国际事务与国际关系（030204T）",
        "英语（050201）"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 59,
    "name": "民建中央",
    "category": "国考",
    "subCategory": "财务处一级主任科员及以下",
    "description": "从事机关出纳工作，负责办理现金、银行收付款业务（机关和工会）；贯彻执行国家财经法规和本单位财务管理制度；逐笔登记现金、汇款日记账，并结清余额，日清日结；职工医药",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "会计学（120203K）",
        "财务管理（120204）"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 60,
    "name": "民进中央",
    "category": "国考",
    "subCategory": "三处一级主任科员及以下",
    "description": "主要负责反映社情民意信息工作，组织落实有关会议、培训、活动，联系和服务民进中央参政议政特邀研究员、特邀信息员；参与年度重点考察调研。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "020101政治经济学",
        "0303社会学",
        "0351法律",
        "0401教育学",
        "0402心理学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 61,
    "name": "民进中央",
    "category": "国考",
    "subCategory": "综合处一级主任科员及以下",
    "description": "主要负责起草民进社会服务工作中长期规划和年度计划，起草相关规章制度，组织开展社会服务工作的调查研究和理论探索。承办民进中央联络委员会、开明画院、民进企业家联谊会",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "020101政治经济学",
        "0303社会学",
        "0351法律",
        "0401教育学",
        "0402心理学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 62,
    "name": "民进中央",
    "category": "国考",
    "subCategory": "年鉴处一级主任科员及以下",
    "description": "负责《中国民主促进会年鉴》的编撰与出版工作，联系、指导省级组织年鉴的编写工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "020101政治经济学",
        "0303社会学",
        "0351法律",
        "0401教育学",
        "0402心理学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 63,
    "name": "农工党中央",
    "category": "国考",
    "subCategory": "行政管理处一级主任科员及以下",
    "description": "从事本单位建设项目管理、采购与招投标管理等相关工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "081001土木工程",
        "120103工程管理",
        "120105工程造价",
        "120109T工程审计",
        "0814土木工程"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 64,
    "name": "农工党中央",
    "category": "国考",
    "subCategory": "干部组织处一级主任科员及以下",
    "description": "联系地方组织、参与党员干部教育培训、开展调研、文稿起草等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0301法学",
        "0302政治学",
        "1202工商管理学（人力资源管理）",
        "1204公共管理学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 65,
    "name": "致公党中央",
    "category": "国考",
    "subCategory": "综合处一级主任科员及以下",
    "description": "从事政府采购、招投标，基建工程管理类工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "土木工程（081001）",
        "建筑学（082801）",
        "工程造价（120105）",
        "工程审计（120109T）",
        "工商管理（120201K）"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 66,
    "name": "致公党中央",
    "category": "国考",
    "subCategory": "综合处一级主任科员及以下",
    "description": "从事民主党派社会服务和乡村振兴帮扶工作等，承担文稿起草、调查研究、综合协调、项目实施等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "经济学（020101）",
        "法学（030101K）",
        "教育学（040101）",
        "汉语言文学（050101）",
        "管理科学（120101）"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 67,
    "name": "台盟中央",
    "category": "国考",
    "subCategory": "档案处一级主任科员及以下",
    "description": "联系服务老同志，人事档案管理等。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "计算机科学与技术",
        "马克思主义理论",
        "劳动与社会保障"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 68,
    "name": "全国总工会",
    "category": "国考",
    "subCategory": "政策处一级主任科员及以下",
    "description": "1.参与党中央关于工人阶级和工会工作重要指示和论述的理论阐释工作；2.参与有关工人阶级、工人运动和工会工作重要理论问题的研究工作；3.参与全总重要文稿起草工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0201理论经济学",
        "0202应用经济学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 69,
    "name": "全国总工会",
    "category": "国考",
    "subCategory": "就业服务处一级主任科员及以下",
    "description": "1.研究劳动力市场结构变化和发展趋势；2.参与政策研究制定；3.组织大型专项活动；4.参与处室数智化建设与系统管理完善。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0701数学",
        "0711系统科学",
        "0714统计学",
        "120404社会保障"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 70,
    "name": "全国总工会",
    "category": "国考",
    "subCategory": "技能培训与技术创新处一级主任科员及以下",
    "description": "1、参与职工学历提升与技能培训、创新创造等方面调查研究和政策制定；2、有较强的数智化素养和人工智能应用能力；承担部门网络信息与数字化工作；3、参与职工技术帮扶活",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0802机械工程",
        "0808电气工程",
        "0809电子科学与技术",
        "0810信息与通信工程",
        "0811控制科学与工程"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 71,
    "name": "全国总工会",
    "category": "国考",
    "subCategory": "综合处一级主任科员及以下",
    "description": "1.参与部门工作计划、总结、通知、领导讲话等文稿起草；2.参与有关会议、活动、培训的组织；3.参与部门数智化建设项目工作；4.负责部门公文运转、档案管理等；5.",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0810 信息与通信工程",
        "0812 计算机科学与技术",
        "1201 管理科学与工程",
        "1205信息资源管理",
        "1405智能科学与技术"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 72,
    "name": "全国总工会",
    "category": "国考",
    "subCategory": "维稳工作处一级主任科员及以下",
    "description": "1.参与部门会议、活动等会务组织；2.参与做好调查研究、文稿撰写、信息收集、分析研判等工作；3.完成部门领导交办的其他工作；4.需要适应经常性出差。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0202应用经济学",
        "0302政治学",
        "0303社会学",
        "0305马克思主义理论",
        "0501中国语言文学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 73,
    "name": "全国总工会",
    "category": "国考",
    "subCategory": "财务监督处一级主任科员及以下",
    "description": "1.参与制定工会财务监督管理制度文件；2.参与预算（投资）评审、财务审计、资产评估与监督检查数据库的建设与管理；3.参与预算执行情况审计的组织协调；4.参与财务",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "020203财政学",
        "120201会计学",
        "0256资产评估"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 74,
    "name": "全国总工会",
    "category": "国考",
    "subCategory": "办公室一级主任科员及以下",
    "description": "1.参与部门工作计划、总结、通知、公函等公文起草工作和会议、活动等会务组织；2.参与部门综合性课题的调查研究和报告的起草；3.负责部门文电运转、档案管理、后勤管",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0808电气工程",
        "0812计算机科学与技术",
        "0816测绘科学与技术",
        "0817化学工程与技术",
        "0818地质资源与地质工程"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 75,
    "name": "全国总工会",
    "category": "国考",
    "subCategory": "国防科技工作部一级主任科员及以下",
    "description": "1.参与处室工作计划、总结、通知、公函等公文起草工作和会议、活动等会务组织；2.参与处室专项课题的调查研究和报告的起草；3.完成领导交办的其他工作；4.需要适应",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0810信息与通信工程",
        "0812计算机科学与技术",
        "0824船舶与海洋工程",
        "0825航空宇航科学与技术",
        "0826兵器科学与技术"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 76,
    "name": "全国总工会",
    "category": "国考",
    "subCategory": "综合处一级主任科员及以下",
    "description": "1.参与部门工作通知、公函、总结等公文起草工作和会议、活动等会务组织；2.参与部门综合性课题的调查研究和报告的起草；3.负责部门文电运转、档案管理、后勤管理等；",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0301法学",
        "0305马克思主义理论",
        "0501中国语言文学",
        "0552新闻与传播",
        "0812计算机科学与技术"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 77,
    "name": "全国妇联",
    "category": "国考",
    "subCategory": "业务处室一级主任科员及以下",
    "description": "参与领导重要讲话和指示批示的督办、综合性文稿起草、提议案办理等工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0101哲学",
        "0301法学",
        "0302政治学",
        "0303社会学",
        "1204公共管理学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 78,
    "name": "全国妇联",
    "category": "国考",
    "subCategory": "业务处室一级主任科员及以下",
    "description": "参与妇联组织建设、妇联干部教育培训等工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0101哲学",
        "0201理论经济学",
        "0202应用经济学",
        "0301法学",
        "0302 政治学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 79,
    "name": "全国妇联",
    "category": "国考",
    "subCategory": "科创服务处一级主任科员及以下",
    "description": "参与引领女性参与科技创新相关活动（如论坛、培训等）的方案起草、组织协调、文稿撰写等工作；参与促进女科技工作者发展的相关调查研究。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0701数学类",
        "0702物理学类",
        "0703化学类",
        "0809计算机类",
        "080717T人工智能"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 80,
    "name": "全国妇联",
    "category": "国考",
    "subCategory": "西亚非洲处一级主任科员及以下",
    "description": "对外交流（翻译）",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "英语（包括英语语言文学",
        "英语翻译",
        "口译",
        "同传）"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 81,
    "name": "全国妇联",
    "category": "国考",
    "subCategory": "联合国处一级主任科员及以下",
    "description": "对外交流（翻译）",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "英语（包括英语语言文学",
        "英语翻译",
        "口译",
        "同传）"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 82,
    "name": "全国妇联",
    "category": "国考",
    "subCategory": "党委办公室（精神文明办公室）一级主任科员及以下",
    "description": "参与机关党员思想政治引领、基层党组织建设、精神文明建设等党建工作及部门综合事务等。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0101哲学",
        "0301法学",
        "0303社会学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 83,
    "name": "中国作协",
    "category": "国考",
    "subCategory": "欧美处一级主任科员及以下",
    "description": "参与组织对外文学交流活动；承担日常西班牙语口笔译任务；参与日常文稿起草工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "西班牙语（050205）",
        "西班牙语言文学（050207）",
        "西班牙语笔译（055113）",
        "西班牙语口译（055114）"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 84,
    "name": "中国侨联",
    "category": "国考",
    "subCategory": "机关党委办公室一级主任科员及以下",
    "description": "从事党务、文稿起草、办文办会等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "法学0301",
        "统计学027000",
        "政治学0302",
        "马克思主义哲学010101",
        "马克思主义理论0305"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 85,
    "name": "全国友协",
    "category": "国考",
    "subCategory": "财务",
    "description": "从事机关预决算、财务管理和项目经费管理。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "会计学",
        "财务管理"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 86,
    "name": "全国友协",
    "category": "国考",
    "subCategory": "国际传播",
    "description": "承担文稿起草、会议组织、新闻宣传等工作，开展新媒体策划、创意剪辑等。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "国际新闻与传播",
        "国际传播"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 87,
    "name": "全国友协",
    "category": "国考",
    "subCategory": "外交学或国际关系学",
    "description": "开展与有关国家的友好交流与合作，承担举办对外友好交流活动的组织协调和翻译工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "外交学",
        "国际事务与国际关系"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 88,
    "name": "全国友协",
    "category": "国考",
    "subCategory": "阿拉伯语",
    "description": "开展与有关国家的友好交流与合作，承担举办对外友好交流活动的组织协调和翻译工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "阿拉伯语"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 89,
    "name": "全国友协",
    "category": "国考",
    "subCategory": "俄语",
    "description": "开展与有关国家的友好交流与合作，承担举办对外友好交流活动的组织协调和翻译工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "俄语"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 90,
    "name": "全国友协",
    "category": "国考",
    "subCategory": "葡萄牙语",
    "description": "开展与有关国家的友好交流与合作，承担举办对外友好交流活动的组织协调和翻译工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "葡萄牙语"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 91,
    "name": "全国友协",
    "category": "国考",
    "subCategory": "泰语",
    "description": "开展与有关国家的友好交流与合作，承担举办对外友好交流活动的组织协调和翻译工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "泰语"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 92,
    "name": "全国友协",
    "category": "国考",
    "subCategory": "意大利语",
    "description": "开展与有关国家的友好交流与合作，承担举办对外友好交流活动的组织协调和翻译工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "意大利语"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 93,
    "name": "外交学会",
    "category": "国考",
    "subCategory": "一级主任科员及以下（英语翻译）",
    "description": "负责有关国家及地区来访团组接待和办案工作，承担英文翻译（口、笔译）任务，跟踪研究有关国家及地区形势，开展外交外事调研，撰写调研材料，参与研讨会、论坛等大型活动筹",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "英语专业"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 94,
    "name": "中国贸促会",
    "category": "国考",
    "subCategory": "一级主任科员及以下",
    "description": "参与预决算管理、经费支出管理、绩效管理等工作；参与会计核算及财务年度报告编制工作；承担其他综合性事务工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "会计学",
        "财政学（020201K）",
        "审计学 会计学",
        "会计",
        "财政学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 95,
    "name": "中国贸促会",
    "category": "国考",
    "subCategory": "一级主任科员及以下",
    "description": "负责行政事业性国有资产报表等编制，承担内部审计和财会监督工作等。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "会计学",
        "会计",
        "财政学",
        "审计"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 96,
    "name": "中国贸促会",
    "category": "国考",
    "subCategory": "一级主任科员及以下",
    "description": "开展贸易投资相关领域和行业调研，起草综合性文稿，承担综合性事务工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "世界经济",
        "国际经济与贸易",
        "贸易经济",
        "国际经济发展合作",
        "国际贸易学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 97,
    "name": "中国贸促会",
    "category": "国考",
    "subCategory": "一级主任科员及以下",
    "description": "开展贸易投资相关领域和行业调研，起草综合性文稿，承担综合性事务工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "计算机科学与技术",
        "新能源汽车工程",
        "机器人工程",
        "人工智能",
        "智能科学与技术"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 98,
    "name": "中国贸促会",
    "category": "国考",
    "subCategory": "一级主任科员及以下",
    "description": "承担人事管理工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "人力资源管理",
        "劳动经济学",
        "劳动关系",
        "管理科学",
        "经济学（020101）"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 99,
    "name": "中国贸促会",
    "category": "国考",
    "subCategory": "一级主任科员及以下",
    "description": "承担人事管理工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "计算机科学与技术",
        "计算机技术",
        "人工智能",
        "大数据技术与工程",
        "信息与通信工程"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 100,
    "name": "中国贸促会",
    "category": "国考",
    "subCategory": "一级主任科员及以下",
    "description": "承担日常口、笔译任务；参与筹备、协调实施大型双边经贸活动；与国外对口组织及工商界人士联络事务；接待来访、组织出访等外事管理综合性事务；驻外代表处建设及业务指导。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "英语",
        "英语语言文学",
        "翻译（英语）",
        "国际经济与贸易",
        "贸易经济"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 101,
    "name": "中国贸促会",
    "category": "国考",
    "subCategory": "一级主任科员及以下",
    "description": "承担日常口、笔译任务；参与筹备、协调实施大型双边经贸活动；与国外对口组织及工商界人士联络事务；接待来访、组织出访等外事管理综合性事务；驻外代表处建设及业务指导。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "俄语",
        "俄语语言文学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 102,
    "name": "中国贸促会",
    "category": "国考",
    "subCategory": "一级主任科员及以下",
    "description": "承担日常口、笔译任务；参与筹备、协调实施大型双边经贸活动；与国外对口组织及工商界人士联络事务；接待来访、组织出访等外事管理综合性事务；驻外代表处建设及业务指导。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "阿拉伯语"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 103,
    "name": "中国贸促会",
    "category": "国考",
    "subCategory": "一级主任科员及以下",
    "description": "开展全球经济治理相关调研，起草综合性文稿，承担综合性事务工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "政治经济学",
        "世界经济",
        "国际贸易学",
        "国际经济与贸易",
        "国际商务"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 104,
    "name": "中国贸促会",
    "category": "国考",
    "subCategory": "一级主任科员及以下",
    "description": "联系国际组织，落实相关合作项目；参与多边经贸事务谈判和磋商，筹办重要经贸活动；接待来访团组、组织出访团组；承担口、笔译工作；撰写相关文稿；承担部门交办的其他工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "英语",
        "英语语言文学",
        "翻译（英语）",
        "区域经济学",
        "国际贸易学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 105,
    "name": "中国贸促会",
    "category": "国考",
    "subCategory": "一级主任科员及以下",
    "description": "开展贸易投资、产业促进相关领域和行业调研，参与组织筹备各类经贸活动，起草综合性文稿，承担综合性事务工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "国际经济与贸易",
        "国际贸易学",
        "国际商务",
        "电子信息工程",
        "人工智能"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 106,
    "name": "中国贸促会",
    "category": "国考",
    "subCategory": "一级主任科员及以下",
    "description": "承担世博会中国馆项目建设的协调、沟通工作，对项目设计、进度、质量、成本、造价、投资、安全等综合控制；承担世博会中国馆项目工程采购与招投标管理、工程合同管理等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "工程管理",
        "项目管理",
        "土木工程",
        "结构工程",
        "管理科学与工程"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 107,
    "name": "中国贸促会",
    "category": "国考",
    "subCategory": "一级主任科员及以下",
    "description": "承担出国经贸展览审批管理行政许可事项的实施、改革，会展行业服务等工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "法学",
        "法律",
        "国际法",
        "国际法学",
        "经济学（020101）"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 108,
    "name": "中国贸促会",
    "category": "国考",
    "subCategory": "一级主任科员及以下",
    "description": "承担展览会相关项目的预算编制、采购与招投标管理、合同管理等工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "工商管理",
        "会计学",
        "会计",
        "审计学",
        "审计"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 109,
    "name": "中国贸促会",
    "category": "国考",
    "subCategory": "一级主任科员及以下",
    "description": "负责配合开展立法、修法建议、中国贸促会知识产权工作、有关规范性文件合法性审核等工作。负责配合开展与各国、有关国际组织法律交流和平台构建，参与国际争议解决机制构建",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "法学理论",
        "宪法与行政法学",
        "诉讼法学",
        "民商法学",
        "经济法学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 110,
    "name": "中国贸促会",
    "category": "国考",
    "subCategory": "一级主任科员及以下",
    "description": "起草党的建设综合性文稿，承担综合性事务工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "思想政治教育",
        "汉语言文学",
        "法学",
        "法律",
        "审计学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 111,
    "name": "中国贸促会",
    "category": "国考",
    "subCategory": "一级主任科员及以下",
    "description": "从事驻外代表处相关工作。研究国别经贸政策；对外联络、协调、交涉；承担日常口、笔译任务；组织实施大型多双边经贸活动。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "英语",
        "英语语言文学",
        "翻译（英语）",
        "国际政治",
        "外交学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 112,
    "name": "中国贸促会",
    "category": "国考",
    "subCategory": "一级主任科员及以下",
    "description": "从事驻外代表处相关工作。研究国别经贸政策；对外联络、协调、交涉；承担日常口、笔译任务；组织实施大型多双边经贸活动。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "理论经济学",
        "应用经济学",
        "投资学",
        "统计学",
        "金融学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 113,
    "name": "中国贸促会",
    "category": "国考",
    "subCategory": "一级主任科员及以下",
    "description": "从事驻外代表处相关工作。开展贸易投资促进相关产业和行业调研；组织实施经贸展会论坛活动；办理综合性事务。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "机械工程",
        "建筑学",
        "能源与动力工程",
        "电子信息工程",
        "人工智能"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 114,
    "name": "中国残联",
    "category": "国考",
    "subCategory": "文电处一级主任科员及以下",
    "description": "承担公文处理等工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0101哲学",
        "0301法学",
        "0305马克思主义理论",
        "0501中国语言文学",
        "0503新闻传播学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 115,
    "name": "中国残联",
    "category": "国考",
    "subCategory": "教育处一级主任科员及以下",
    "description": "配合教育行政部门开展残疾人教育相关管理工作，负责盲文、手语的研究与推广工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "大学0401教育学类",
        "0501中国语言文学类",
        "0711心理学类",
        "0101哲学",
        "0301法学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 116,
    "name": "中国残联",
    "category": "国考",
    "subCategory": "业务处室一级主任科员及以下",
    "description": "承担人事管理服务及信息化建设相关工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0101哲学",
        "0701数学",
        "0714统计学",
        "0809电子科学与技术",
        "0810信息与通信工程"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 117,
    "name": "中国残联",
    "category": "国考",
    "subCategory": "办公室一级主任科员及以下",
    "description": "从事机关党建、群团工作等综合协调工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0101哲学",
        "0602中国史",
        "0301法学",
        "0302政治学",
        "0303社会学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 118,
    "name": "中国法学会",
    "category": "国考",
    "subCategory": "人事保卫处一级主任科员及以下",
    "description": "参与人事工作信息化建设、干部人事管理、安全保卫等工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "理学07",
        "工学08",
        "行政管理120401"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 119,
    "name": "中国法学会",
    "category": "国考",
    "subCategory": "会员工作处一级主任科员及以下",
    "description": "参与会员的发展、管理和服务，指导地方法学会法治论坛和相关活动，会员代表大会、理事会筹备等工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "法学0301",
        "马克思主义理论0305",
        "法律 0351",
        "工商管理学1202",
        "公共管理学1204"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 120,
    "name": "欧美同学会",
    "category": "国考",
    "subCategory": "一级主任科员及以下",
    "description": "负责文稿起草、行政事务管理工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0201经济学类",
        "0302政治学类",
        "0401教育学类",
        "0501中国语言文学类",
        "硕士：0201理论经济学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 121,
    "name": "欧美同学会",
    "category": "国考",
    "subCategory": "一级主任科员及以下",
    "description": "负责联络海外留学人员和留学人员团体，开展交流活动及其他外事工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "050201英语",
        "硕士：0502外国语言文学（英语）",
        "0551翻译（英语）"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 122,
    "name": "中国计划生育协会",
    "category": "国考",
    "subCategory": "组织宣传处一级主任科员及以下",
    "description": "分析研究、数据处理",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "应用统计",
        "统计学类"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 123,
    "name": "中国藏学研究中心",
    "category": "国考",
    "subCategory": "国内协调处一级主任科员及以下（一）",
    "description": "负责藏学信息技术相关建设、协调工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0807电子信息类",
        "0808自动化类",
        "0809计算机类 0811控制科学与工程",
        "0812计算机科学与技术",
        "0835软件工程"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 124,
    "name": "中国藏学研究中心",
    "category": "国考",
    "subCategory": "国内协调处一级主任科员及以下（二）",
    "description": "负责藏学数据资源相关建设、协调工作。",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "0304民族学",
        "0501中国语言文学",
        "0503新闻传播学",
        "0551翻译",
        "0552新闻与传播"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 1001,
    "name": "税务局（省考）",
    "category": "省考",
    "subCategory": "基层税务分局一级科员",
    "description": "从事税收征管、纳税服务等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "财政学",
        "税收学",
        "会计学",
        "审计学",
        "财务管理"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 1002,
    "name": "市场监督管理局",
    "category": "省考",
    "subCategory": "基层市场监管所一级科员",
    "description": "从事市场综合监督管理、市场秩序监管等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "法学",
        "食品科学与工程",
        "药学",
        "机械类",
        "计算机科学与技术"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 1003,
    "name": "公安局",
    "category": "省考",
    "subCategory": "基层派出所民警",
    "description": "维护社会治安秩序，处理各类警情",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "公安学",
        "侦查学",
        "治安学",
        "法学",
        "计算机科学与技术"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 1004,
    "name": "人民法院",
    "category": "省考",
    "subCategory": "法官助理",
    "description": "协助法官处理案件审理相关工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "法学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 1005,
    "name": "人民检察院",
    "category": "省考",
    "subCategory": "检察官助理",
    "description": "协助检察官办理审查逮捕、审查起诉等案件",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "法学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 1006,
    "name": "司法局",
    "category": "省考",
    "subCategory": "社区矫正工作人员",
    "description": "从事社区矫正、普法宣传等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "法学",
        "社会学",
        "社会工作",
        "监狱学",
        "心理学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 1007,
    "name": "人力资源和社会保障局",
    "category": "省考",
    "subCategory": "综合管理岗位",
    "description": "负责人力资源和社会保障相关工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "劳动与社会保障",
        "人力资源管理",
        "公共事业管理",
        "法学",
        "计算机科学与技术"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 1008,
    "name": "民政局",
    "category": "省考",
    "subCategory": "基层民政工作人员",
    "description": "从事社会救助、基层政权建设等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "社会学",
        "社会工作",
        "公共事业管理",
        "汉语言文学",
        "法学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 1009,
    "name": "财政局",
    "category": "省考",
    "subCategory": "财政业务岗位",
    "description": "从事财政收支管理等工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "财政学",
        "税收学",
        "会计学",
        "审计学",
        "财务管理"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 1010,
    "name": "生态环境局",
    "category": "省考",
    "subCategory": "环境监察执法岗位",
    "description": "从事环境保护和生态文明建设相关工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "环境科学与工程",
        "环境工程",
        "环境科学",
        "生态学",
        "化学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 1011,
    "name": "住房和城乡建设局",
    "category": "省考",
    "subCategory": "建设工程管理岗位",
    "description": "从事住房和城乡建设工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "土木工程",
        "建筑学",
        "城乡规划",
        "工程管理",
        "工程造价"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 1012,
    "name": "交通运输局",
    "category": "省考",
    "subCategory": "交通运输管理岗位",
    "description": "从事交通运输行业管理工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "交通运输",
        "道路桥梁与渡河工程",
        "车辆工程",
        "物流工程",
        "交通工程"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 1013,
    "name": "教育局",
    "category": "省考",
    "subCategory": "教育管理岗位",
    "description": "从事教育行政管理工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "教育学",
        "教育技术学",
        "学前教育",
        "汉语言文学",
        "数学与应用数学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 1014,
    "name": "卫生健康委员会",
    "category": "省考",
    "subCategory": "卫生健康管理岗位",
    "description": "从事医疗卫生管理工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "预防医学",
        "临床医学",
        "药学",
        "护理学",
        "公共卫生管理"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 1015,
    "name": "审计局",
    "category": "省考",
    "subCategory": "审计业务岗位",
    "description": "从事审计监督工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "审计学",
        "会计学",
        "财务管理",
        "财政学",
        "经济学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 1016,
    "name": "应急管理局",
    "category": "省考",
    "subCategory": "应急管理岗位",
    "description": "从事应急管理和安全生产监管工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "安全工程",
        "应急技术与管理",
        "消防工程",
        "化学工程与工艺",
        "机械类"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 1017,
    "name": "信访局",
    "category": "省考",
    "subCategory": "信访工作岗位",
    "description": "从事群众来信来访接待处理工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": true,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "不限专业"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 1018,
    "name": "乡镇政府",
    "category": "省考",
    "subCategory": "乡镇综合管理岗位",
    "description": "从事乡镇基层综合管理工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": true,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "不限专业"
      ],
      "education": "专科",
      "politics": "不限"
    }
  },
  {
    "id": 1019,
    "name": "街道办事处",
    "category": "省考",
    "subCategory": "街道综合管理岗位",
    "description": "从事街道社区管理和服务工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": true,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "不限专业"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": 1020,
    "name": "文化和旅游局",
    "category": "省考",
    "subCategory": "文化旅游管理岗位",
    "description": "从事文化、旅游、体育管理工作",
    "department": "",
    "workLocation": "",
    "recruitCount": 1,
    "needAdjust": 0,
    "isThreeFree": false,
    "isAdjust": false,
    "requirements": {
      "majors": [
        "旅游管理",
        "酒店管理",
        "文化产业管理",
        "文物与博物馆学",
        "艺术学"
      ],
      "education": "本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1",
    "name": "从事有关阿拉伯语国家联络调研工作，承担有关交替传译和同声传译任务。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事有关阿拉伯语国家联络调研工作，承担有关交替传译和同声传译任务。",
    "department": "中央对外联络部",
    "workLocation": "北京市海淀区",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "阿拉伯语"
      ],
      "education": "本科或硕士研究生",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_2",
    "name": "从事有关朝鲜、韩国联络调研工作，承担有关交替传译和同声传译任务。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事有关朝鲜、韩国联络调研工作，承担有关交替传译和同声传译任务。",
    "department": "中央对外联络部",
    "workLocation": "北京市海淀区",
    "recruitCount": 2,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "朝鲜语（韩语）"
      ],
      "education": "本科或硕士研究生",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_3",
    "name": "从事有关西班牙语国家联络调研工作，承担有关交替传译和同声传译任务。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事有关西班牙语国家联络调研工作，承担有关交替传译和同声传译任务。",
    "department": "中央对外联络部",
    "workLocation": "北京市海淀区",
    "recruitCount": 3,
    "needAdjust": 9,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "西班牙语"
      ],
      "education": "本科或硕士研究生",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_4",
    "name": "从事有关尼泊尔联络调研工作，承担有关交替传译和同声传译任务。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事有关尼泊尔联络调研工作，承担有关交替传译和同声传译任务。",
    "department": "中央对外联络部",
    "workLocation": "北京市海淀区",
    "recruitCount": 1,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "尼泊尔语"
      ],
      "education": "本科或硕士研究生",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_5",
    "name": "从事有关匈牙利联络调研工作，承担有关交替传译和同声传译任务。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事有关匈牙利联络调研工作，承担有关交替传译和同声传译任务。",
    "department": "中央对外联络部",
    "workLocation": "北京市海淀区",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "匈牙利语"
      ],
      "education": "本科或硕士研究生",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_6",
    "name": "对外交流（翻译）",
    "category": "国考",
    "subCategory": "其他",
    "description": "对外交流（翻译）",
    "department": "全国妇联",
    "workLocation": "北京市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "英语（包括英语语言文学",
        "英语翻译",
        "口译",
        "同传）"
      ],
      "education": "仅限硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_7",
    "name": "开展与有关国家的友好交流与合作，承担举办对外友好交流活动的组织协调和翻译工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "开展与有关国家的友好交流与合作，承担举办对外友好交流活动的组织协调和翻译工作",
    "department": "全国友协",
    "workLocation": "北京市",
    "recruitCount": 1,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "外交学",
        "国际事务与国际关系"
      ],
      "education": "本科或硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_8",
    "name": "开展与有关国家的友好交流与合作，承担举办对外友好交流活动的组织协调和翻译工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "开展与有关国家的友好交流与合作，承担举办对外友好交流活动的组织协调和翻译工作。",
    "department": "全国友协",
    "workLocation": "北京市",
    "recruitCount": 1,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "阿拉伯语"
      ],
      "education": "本科或硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_9",
    "name": "开展与有关国家的友好交流与合作，承担举办对外友好交流活动的组织协调和翻译工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "开展与有关国家的友好交流与合作，承担举办对外友好交流活动的组织协调和翻译工作。",
    "department": "全国友协",
    "workLocation": "北京市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "泰语"
      ],
      "education": "本科或硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_10",
    "name": "参与预决算管理、经费支出管理、绩效管理等工作；参与会计核算及财务年度报告编制工作；承担其他综合性事务",
    "category": "国考",
    "subCategory": "其他",
    "description": "参与预决算管理、经费支出管理、绩效管理等工作；参与会计核算及财务年度报告编制工作；承担其他综合性事务工作。",
    "department": "中国贸促会",
    "workLocation": "北京市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科：会计学",
        "财政学（020201K）",
        "审计学 研究生：会计学",
        "会计",
        "财政学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_11",
    "name": "承担日常口、笔译任务；参与筹备、协调实施大型双边经贸活动；与国外对口组织及工商界人士联络事务；接待来",
    "category": "国考",
    "subCategory": "其他",
    "description": "承担日常口、笔译任务；参与筹备、协调实施大型双边经贸活动；与国外对口组织及工商界人士联络事务；接待来访、组织出访等外事管理综合性事务；驻外代表处建设及业务指导。",
    "department": "中国贸促会",
    "workLocation": "北京市",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "阿拉伯语"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_12",
    "name": "从事科技管理相关工作，需具备较强的文字表达、组织协调沟通能力。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事科技管理相关工作，需具备较强的文字表达、组织协调沟通能力。",
    "department": "科学技术部",
    "workLocation": "北京市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学理论",
        "行政法学",
        "诉讼法学",
        "经济法学",
        "知识产权法学"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_13",
    "name": "从事对外交流合作、外事活动翻译等相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事对外交流合作、外事活动翻译等相关工作",
    "department": "工业和信息化部",
    "workLocation": "北京市西城区",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "0502外国语言文学",
        "0551翻译"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_14",
    "name": "主要从事与有关国家开展执法合作等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事与有关国家开展执法合作等工作",
    "department": "公安部",
    "workLocation": "北京市",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "阿拉伯语"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_15",
    "name": "从事外语翻译工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事外语翻译工作",
    "department": "公安部",
    "workLocation": "北京市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法语"
      ],
      "education": "本科或硕士研究生",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_16",
    "name": "从事外语翻译工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事外语翻译工作",
    "department": "公安部",
    "workLocation": "北京市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "西班牙语"
      ],
      "education": "本科或硕士研究生",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_17",
    "name": "主要从事与有关国家开展执法合作等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事与有关国家开展执法合作等工作",
    "department": "公安部",
    "workLocation": "北京市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "西班牙语"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_18",
    "name": "主要从事文件处理和公文写作等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事文件处理和公文写作等工作",
    "department": "公安部",
    "workLocation": "北京市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "0302政治学",
        "0305马克思主义理论",
        "0307中共党史党建学",
        "0501中国语言文学"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_32",
    "name": "从事泅渡教育训练工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事泅渡教育训练工作",
    "department": "北京市公安局特勤局",
    "workLocation": "北京市",
    "recruitCount": 1,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "01哲学",
        "02经济学",
        "03法学",
        "04教育学",
        "05文学"
      ],
      "education": "本科或硕士研究生",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_33",
    "name": "从事搏击教育训练工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事搏击教育训练工作",
    "department": "辽宁省公安厅特勤局",
    "workLocation": "辽宁省沈阳市",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "01哲学",
        "02经济学",
        "03法学",
        "04教育学",
        "05文学"
      ],
      "education": "本科或硕士研究生",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_34",
    "name": "从事搏击教育训练工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事搏击教育训练工作",
    "department": "上海市公安局特勤局",
    "workLocation": "上海市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "01哲学",
        "02经济学",
        "03法学",
        "04教育学",
        "05文学"
      ],
      "education": "本科或硕士研究生",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_35",
    "name": "从事搏击教育训练工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事搏击教育训练工作",
    "department": "江苏省公安厅特勤局",
    "workLocation": "江苏省南京市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "01哲学",
        "02经济学",
        "03法学",
        "04教育学",
        "05文学"
      ],
      "education": "本科或硕士研究生",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_36",
    "name": "从事搏击教育训练工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事搏击教育训练工作",
    "department": "江西省公安厅特勤局",
    "workLocation": "江西省南昌市红谷滩区",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "01哲学",
        "02经济学",
        "03法学",
        "04教育学",
        "05文学"
      ],
      "education": "本科或硕士研究生",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_37",
    "name": "从事搏击教育训练工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事搏击教育训练工作",
    "department": "山东省公安厅特勤局",
    "workLocation": "山东省济南市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "01哲学",
        "02经济学",
        "03法学",
        "04教育学",
        "05文学"
      ],
      "education": "本科或硕士研究生",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_38",
    "name": "从事搏击教育训练工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事搏击教育训练工作",
    "department": "广东省公安厅特勤局",
    "workLocation": "广东省广州市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "01哲学",
        "02经济学",
        "03法学",
        "04教育学",
        "05文学"
      ],
      "education": "本科或硕士研究生",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_39",
    "name": "从事搏击教育训练工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事搏击教育训练工作",
    "department": "广西壮族自治区公安厅特勤局",
    "workLocation": "广西壮族自治区南宁市",
    "recruitCount": 1,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "01哲学",
        "02经济学",
        "03法学",
        "04教育学",
        "05文学"
      ],
      "education": "本科或硕士研究生",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_40",
    "name": "从事泅渡教育训练工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事泅渡教育训练工作",
    "department": "重庆市公安局特勤局",
    "workLocation": "重庆市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "01哲学",
        "02经济学",
        "03法学",
        "04教育学",
        "05文学"
      ],
      "education": "本科或硕士研究生",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_41",
    "name": "主要从事基层所队执勤执法等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事基层所队执勤执法等工作",
    "department": "沈阳铁路公安局",
    "workLocation": "辽宁省锦州市",
    "recruitCount": 2,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大学本科：0305马克思主义理论类",
        "0809计算机类",
        "1204公共管理类",
        "研究生：0305马克思主义理论"
      ],
      "education": "本科及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_42",
    "name": "主要从事车站治安管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事车站治安管理等工作",
    "department": "西安铁路公安局",
    "workLocation": "陕西省",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大学本科：0809计算机类",
        "0501中国语言文学类",
        "1202工商管理类（审计学）",
        "研究生：0812计算机科学与技术",
        "0854电子信息（计算机类）"
      ],
      "education": "本科及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_43",
    "name": "主要从事火车站及线路治安管理、案件办理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事火车站及线路治安管理、案件办理等工作",
    "department": "济南铁路公安局",
    "workLocation": "山东省",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大学本科：0301法学类",
        "研究生：0301法学",
        "0351法律"
      ],
      "education": "本科及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_44",
    "name": "主要从事火车站及线路治安管理、案件办理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事火车站及线路治安管理、案件办理等工作",
    "department": "济南铁路公安局",
    "workLocation": "山东省",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大学本科：0301法学类",
        "研究生：0301法学",
        "0351法律"
      ],
      "education": "本科及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_45",
    "name": "主要从事线路治安管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事线路治安管理等工作",
    "department": "成都铁路公安局",
    "workLocation": "四川省",
    "recruitCount": 4,
    "needAdjust": 9,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大学本科：0501中国语言文学类",
        "0503新闻传播学类",
        "研究生：0501中国语言文学",
        "0503新闻传播学",
        "0552新闻与传播"
      ],
      "education": "本科及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_46",
    "name": "主要从事车站治安管理工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事车站治安管理工作",
    "department": "乌鲁木齐铁路公安局",
    "workLocation": "新疆维吾尔自治区阿勒泰地区",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大学本科：0301法学类",
        "0501中国语言文学类",
        "0807电子信息类",
        "0809计算机类",
        "研究生：0810信息与通信工程"
      ],
      "education": "本科及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_47",
    "name": "主要从事民航公安保卫和空防安全监管工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事民航公安保卫和空防安全监管工作",
    "department": "中国民用航空中南地区管理局公安局",
    "workLocation": "海南省三亚市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大学本科：0301法学类",
        "研究生：0301法学",
        "0351法律"
      ],
      "education": "本科或硕士研究生",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_48",
    "name": "主要从事办公自动化、技术保障等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事办公自动化、技术保障等工作",
    "department": "长春海关缉私局",
    "workLocation": "吉林省白山市长白朝鲜族自治县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "0809计算机类（计算机科学与技术",
        "新媒体技术）"
      ],
      "education": "仅限本科",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_49",
    "name": "主要从事案件侦办及审理审查工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事案件侦办及审理审查工作。",
    "department": "南京海关缉私局",
    "workLocation": "江苏省连云港市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "0301法学类（法学）",
        "0809计算机类（计算机科学与技术",
        "软件工程",
        "智能科学与技术",
        "数据科学与大数据技术）"
      ],
      "education": "仅限本科",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_50",
    "name": "主要从事情报分析、警务技术等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事情报分析、警务技术等工作",
    "department": "宁波海关缉私局",
    "workLocation": "浙江省宁波市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "0812计算机科学与技术",
        "0835软件工程",
        "0854电子信息（计算机技术",
        "软件工程",
        "人工智能"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_51",
    "name": "主要从事侦查、法制、情报等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事侦查、法制、情报等工作",
    "department": "拱北海关缉私局",
    "workLocation": "广东省珠海市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "0301法学类",
        "0501中国语言文学类"
      ],
      "education": "仅限本科",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_52",
    "name": "主要从事缉私侦查、法制等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事缉私侦查、法制等工作",
    "department": "黄埔海关缉私局",
    "workLocation": "广东省广州市",
    "recruitCount": 2,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "0301法学",
        "0351法律",
        "0812计算机科学与技术",
        "0835软件工程",
        "0854电子信息（计算机技术"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_53",
    "name": "主要从事综合保障、侦查、法制、情报等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事综合保障、侦查、法制、情报等工作",
    "department": "南宁海关缉私局",
    "workLocation": "广西壮族自治区崇左市龙州县",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大学本科：0301法学类（法学）",
        "1202工商管理类（会计学",
        "财务管理",
        "审计学）",
        "1204公共管理类（行政管理"
      ],
      "education": "本科及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_54",
    "name": "主要从事综合保障、侦查、法制、情报等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事综合保障、侦查、法制、情报等工作",
    "department": "南宁海关缉私局",
    "workLocation": "广西壮族自治区防城港市东兴市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "0301法学",
        "0351法律"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_55",
    "name": "从事综合文稿、文件报告起草审核等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事综合文稿、文件报告起草审核等工作。",
    "department": "司法部",
    "workLocation": "北京市西城区",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_56",
    "name": "从事收发文管理、档案管理等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事收发文管理、档案管理等工作。",
    "department": "司法部",
    "workLocation": "北京市西城区",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学"
      ],
      "education": "仅限硕士研究生",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_57",
    "name": "从事涉外立法起草和审查、涉外法治政策研究和实务、综合文稿起草等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事涉外立法起草和审查、涉外法治政策研究和实务、综合文稿起草等工作。",
    "department": "司法部",
    "workLocation": "北京市西城区",
    "recruitCount": 5,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_58",
    "name": "从事综合文稿起草、政策理论研究等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事综合文稿起草、政策理论研究等工作。",
    "department": "司法部",
    "workLocation": "北京市西城区",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学"
      ],
      "education": "仅限博士研究生",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_59",
    "name": "从事行政立法相关工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事行政立法相关工作。",
    "department": "司法部",
    "workLocation": "北京市西城区",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "民商法学",
        "经济法学",
        "宪法学与行政法学"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_61",
    "name": "承担全国法律援助案件质量建设及法律援助教育培训等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "承担全国法律援助案件质量建设及法律援助教育培训等工作。",
    "department": "司法部法律援助中心",
    "workLocation": "北京市西城区",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学"
      ],
      "education": "仅限博士研究生",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_62",
    "name": "从事财政预算监管业务工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事财政预算监管业务工作",
    "department": "财政部内蒙古监管局",
    "workLocation": "内蒙古自治区呼和浩特市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计"
      ],
      "education": "仅限硕士研究生",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_63",
    "name": "从事财政预算监管业务工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事财政预算监管业务工作",
    "department": "财政部青海监管局",
    "workLocation": "青海省西宁市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "会计",
        "审计",
        "财务管理"
      ],
      "education": "本科或硕士研究生",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_64",
    "name": "从事财政预算监管业务工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事财政预算监管业务工作",
    "department": "财政部宁夏监管局",
    "workLocation": "宁夏回族自治区银川市",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "财政学",
        "金融",
        "审计",
        "统计学"
      ],
      "education": "仅限硕士研究生",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_65",
    "name": "负责自然资源督察工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "负责自然资源督察工作",
    "department": "国家自然资源督察西安局",
    "workLocation": "陕西省西安市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "摄影测量与遥感（081602）",
        "地图制图学与地理信息工程（081603）",
        "遥感科学与技术（1404）"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_66",
    "name": "核与辐射安全监督相关工作,在华南五省（区）核设施现场常驻监督，需长期出差.",
    "category": "国考",
    "subCategory": "其他",
    "description": "核与辐射安全监督相关工作,在华南五省（区）核设施现场常驻监督，需长期出差.",
    "department": "生态环境部华南核与辐射安全监督站",
    "workLocation": "广东省深圳市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "0827核科学与技术",
        "085803核能工程"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_67",
    "name": "从事水运管理工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事水运管理工作",
    "department": "交通运输部",
    "workLocation": "北京市东城区",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "交通运输规划与管理（水运方向）",
        "海商法学",
        "国际法学"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_68",
    "name": "从事一线海事执法工作，需经常随船执法，水上工作，夜班较多",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事一线海事执法工作，需经常随船执法，水上工作，夜班较多",
    "department": "长江海事局",
    "workLocation": "湖北省荆州市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "轮机工程"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_69",
    "name": "从事一线海事执法工作，需经常随船执法，水上工作，夜班较多",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事一线海事执法工作，需经常随船执法，水上工作，夜班较多",
    "department": "长江海事局",
    "workLocation": "湖北省黄石市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电子科学与技术类",
        "信息与通信工程类",
        "计算机科学与技术类",
        "化学工程与技术类",
        "交通运输工程类"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_70",
    "name": "从事一线海事执法工作或船舶交管值班，需经常随船执法，水上工作，夜班较多。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事一线海事执法工作或船舶交管值班，需经常随船执法，水上工作，夜班较多。",
    "department": "长江海事局",
    "workLocation": "江西省九江市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "轮机工程"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_71",
    "name": "从事一线海事执法工作或船舶交管值班，需经常随船执法，水上工作，夜班较多",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事一线海事执法工作或船舶交管值班，需经常随船执法，水上工作，夜班较多",
    "department": "长江海事局",
    "workLocation": "安徽省马鞍山市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "轮机工程",
        "电气工程",
        "能源动力"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_72",
    "name": "从事一线海事执法工作或综合管理工作，需经常随船执法，水上工作，夜班较多",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事一线海事执法工作或综合管理工作，需经常随船执法，水上工作，夜班较多",
    "department": "长江海事局",
    "workLocation": "安徽省马鞍山市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "中国语言文学类",
        "外国语言文学类",
        "新闻传播学类",
        "新闻与传播类",
        "管理科学与工程类"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_75",
    "name": "从事基层一线海事执法工作或船舶交管值班，需经常随船执法，水上工作，夜班较多",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事基层一线海事执法工作或船舶交管值班，需经常随船执法，水上工作，夜班较多",
    "department": "江苏海事局",
    "workLocation": "江苏省扬州市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "航海技术（081803K）"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_76",
    "name": "海巡船艇专职船员岗位",
    "category": "国考",
    "subCategory": "其他",
    "description": "海巡船艇专职船员岗位",
    "department": "江苏海事局",
    "workLocation": "江苏省南通市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "航海技术（081803K）"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_77",
    "name": "基层海事执法",
    "category": "国考",
    "subCategory": "其他",
    "description": "基层海事执法",
    "department": "上海海事局",
    "workLocation": "上海市浦东新区",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学",
        "法律",
        "化学类",
        "电子信息类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_78",
    "name": "基层海事执法",
    "category": "国考",
    "subCategory": "其他",
    "description": "基层海事执法",
    "department": "上海海事局",
    "workLocation": "上海市宝山区",
    "recruitCount": 2,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "航海技术",
        "轮机工程"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_79",
    "name": "基层海事执法",
    "category": "国考",
    "subCategory": "其他",
    "description": "基层海事执法",
    "department": "上海海事局",
    "workLocation": "上海市宝山区",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学",
        "法律",
        "化学类",
        "电子信息类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_80",
    "name": "基层海事执法",
    "category": "国考",
    "subCategory": "其他",
    "description": "基层海事执法",
    "department": "上海海事局",
    "workLocation": "上海市崇明区",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学",
        "法律",
        "化学类",
        "电子信息类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_81",
    "name": "基层海事执法",
    "category": "国考",
    "subCategory": "其他",
    "description": "基层海事执法",
    "department": "上海海事局",
    "workLocation": "上海市浦东新区",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学",
        "法律",
        "化学类",
        "电子信息类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_86",
    "name": "主要从事基层海事执法工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事基层海事执法工作",
    "department": "辽宁海事局",
    "workLocation": "辽宁省营口市盖州市",
    "recruitCount": 2,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "航海技术"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_87",
    "name": "主要从事基层海事执法工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事基层海事执法工作",
    "department": "辽宁海事局",
    "workLocation": "辽宁省营口市站前区",
    "recruitCount": 2,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学门类",
        "环境科学与工程类",
        "化学类",
        "电子信息类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_88",
    "name": "主要从事基层海事执法工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事基层海事执法工作",
    "department": "辽宁海事局",
    "workLocation": "辽宁省营口市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海事管理",
        "海上安全与环境管理",
        "国际运输与物流"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_89",
    "name": "主要从事基层海事执法工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事基层海事执法工作",
    "department": "辽宁海事局",
    "workLocation": "辽宁省大连市旅顺口区",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学门类",
        "环境科学与工程类",
        "化学类",
        "电子信息类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_90",
    "name": "主要从事基层海事执法工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事基层海事执法工作",
    "department": "辽宁海事局",
    "workLocation": "辽宁省大连市瓦房店市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学门类",
        "环境科学与工程类",
        "化学类",
        "电子信息类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_94",
    "name": "主要从事基层海事执法或综合管理工作，按国家有关规定发放工资",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事基层海事执法或综合管理工作，按国家有关规定发放工资",
    "department": "河北海事局",
    "workLocation": "河北省沧州市黄骅市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "计算机类",
        "海洋工程类",
        "交通运输类（航海技术",
        "轮机工程",
        "船舶电子电气工程）"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_95",
    "name": "主要从事基层海事执法或综合管理工作，按国家有关规定发放工资",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事基层海事执法或综合管理工作，按国家有关规定发放工资",
    "department": "河北海事局",
    "workLocation": "河北省秦皇岛市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "航海技术"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_96",
    "name": "主要从事基层海事执法或综合管理工作，按国家有关规定发放工资",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事基层海事执法或综合管理工作，按国家有关规定发放工资",
    "department": "河北海事局",
    "workLocation": "河北省秦皇岛市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "轮机工程"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_97",
    "name": "从事基层一线海事执法或海巡船艇工作，需上船执法和夜间值班。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事基层一线海事执法或海巡船艇工作，需上船执法和夜间值班。",
    "department": "山东海事局",
    "workLocation": "山东省烟台市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "航海技术"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_98",
    "name": "从事基层一线海事执法或海巡船艇工作，需上船执法和夜间值班。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事基层一线海事执法或海巡船艇工作，需上船执法和夜间值班。",
    "department": "山东海事局",
    "workLocation": "山东省烟台市",
    "recruitCount": 2,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "航海技术"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_99",
    "name": "从事基层一线海事执法工作，需上船执法和夜间值班。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事基层一线海事执法工作，需上船执法和夜间值班。",
    "department": "山东海事局",
    "workLocation": "山东省烟台市",
    "recruitCount": 2,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "交通运输工程",
        "交通信息工程及控制",
        "航海科学与技术",
        "载运工具运用工程",
        "水路交通运输"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_100",
    "name": "从事基层一线海事执法或海巡船艇工作，需上船执法和夜间值班。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事基层一线海事执法或海巡船艇工作，需上船执法和夜间值班。",
    "department": "山东海事局",
    "workLocation": "山东省烟台市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "轮机工程"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_101",
    "name": "从事基层一线海事执法或海巡船艇工作，需上船执法和夜间值班。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事基层一线海事执法或海巡船艇工作，需上船执法和夜间值班。",
    "department": "山东海事局",
    "workLocation": "山东省烟台市",
    "recruitCount": 2,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "轮机工程"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_123",
    "name": "海巡船艇专职船员",
    "category": "国考",
    "subCategory": "其他",
    "description": "海巡船艇专职船员",
    "department": "浙江海事局",
    "workLocation": "浙江省宁波市",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "航海技术",
        "轮机工程"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_124",
    "name": "基层海事执法",
    "category": "国考",
    "subCategory": "其他",
    "description": "基层海事执法",
    "department": "浙江海事局",
    "workLocation": "浙江省台州市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "轮机工程"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_125",
    "name": "船员考试管理",
    "category": "国考",
    "subCategory": "其他",
    "description": "船员考试管理",
    "department": "浙江海事局",
    "workLocation": "浙江省杭州市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "航海技术",
        "轮机工程"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_126",
    "name": "基层海事执法",
    "category": "国考",
    "subCategory": "其他",
    "description": "基层海事执法",
    "department": "浙江海事局",
    "workLocation": "浙江省宁波市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "航海技术",
        "轮机工程"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_127",
    "name": "基层海事执法",
    "category": "国考",
    "subCategory": "其他",
    "description": "基层海事执法",
    "department": "浙江海事局",
    "workLocation": "浙江省舟山市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "航海技术"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_128",
    "name": "基层海事执法",
    "category": "国考",
    "subCategory": "其他",
    "description": "基层海事执法",
    "department": "福建海事局",
    "workLocation": "福建省福州市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海事管理",
        "海上安全与环境管理",
        "海上交通工程"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_129",
    "name": "基层海事执法",
    "category": "国考",
    "subCategory": "其他",
    "description": "基层海事执法",
    "department": "福建海事局",
    "workLocation": "福建省福州市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "航海技术"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_130",
    "name": "基层海事执法",
    "category": "国考",
    "subCategory": "其他",
    "description": "基层海事执法",
    "department": "福建海事局",
    "workLocation": "福建省厦门市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "航海技术"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_131",
    "name": "主要从事基层海事执法工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事基层海事执法工作",
    "department": "广东海事局",
    "workLocation": "广东省湛江市霞山区",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "航海技术"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_132",
    "name": "主要从事基层海事执法工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事基层海事执法工作",
    "department": "广东海事局",
    "workLocation": "广东省湛江市霞山区",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "轮机工程"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_133",
    "name": "主要从事基层海事执法工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事基层海事执法工作",
    "department": "广东海事局",
    "workLocation": "广东省湛江市徐闻县",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "航海技术"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_134",
    "name": "主要从事基层海事执法或综合管理工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事基层海事执法或综合管理工作",
    "department": "广东海事局",
    "workLocation": "广东省湛江市遂溪县",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学类",
        "海事管理",
        "航海技术",
        "轮机工程"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_135",
    "name": "主要从事基层海事执法工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事基层海事执法工作",
    "department": "广东海事局",
    "workLocation": "广东省湛江市霞山区",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "航海技术",
        "轮机工程"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_170",
    "name": "主要从事基层海事执法工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事基层海事执法工作",
    "department": "广西海事局",
    "workLocation": "广西壮族自治区北海市",
    "recruitCount": 3,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "航海技术"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_171",
    "name": "主要从事基层海事执法工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事基层海事执法工作",
    "department": "广西海事局",
    "workLocation": "广西壮族自治区北海市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "工学门类",
        "理学门类",
        "经济学门类",
        "法学门类",
        "文学门类"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_172",
    "name": "主要从事基层海事执法工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事基层海事执法工作",
    "department": "广西海事局",
    "workLocation": "广西壮族自治区防城港市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "航海技术"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_173",
    "name": "主要从事基层海事执法工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事基层海事执法工作",
    "department": "广西海事局",
    "workLocation": "广西壮族自治区防城港市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "轮机工程"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_174",
    "name": "主要从事基层海事执法工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事基层海事执法工作",
    "department": "广西海事局",
    "workLocation": "广西壮族自治区贵港市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "航海技术",
        "轮机工程"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_181",
    "name": "主要从事基层海事执法工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事基层海事执法工作",
    "department": "海南海事局",
    "workLocation": "海南省",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "航海技术"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_182",
    "name": "主要从事基层海事执法工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事基层海事执法工作",
    "department": "海南海事局",
    "workLocation": "海南省",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "轮机工程"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_183",
    "name": "主要从事基层海事执法工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事基层海事执法工作",
    "department": "海南海事局",
    "workLocation": "海南省",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "航海技术",
        "轮机工程"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_184",
    "name": "主要从事海事综合管理工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事海事综合管理工作",
    "department": "海南海事局",
    "workLocation": "海南省",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学",
        "政治学类",
        "管理类",
        "财务类",
        "计算机类"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_185",
    "name": "主要从事基层海事执法工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事基层海事执法工作",
    "department": "海南海事局",
    "workLocation": "海南省",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "船舶电子电气工程"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_198",
    "name": "船舶监督管理、船舶检验监督管理",
    "category": "国考",
    "subCategory": "其他",
    "description": "船舶监督管理、船舶检验监督管理",
    "department": "黑龙江海事局",
    "workLocation": "黑龙江省哈尔滨市",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "工学门类",
        "理学门类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_199",
    "name": "船员管理、船员考试管理",
    "category": "国考",
    "subCategory": "其他",
    "description": "船员管理、船员考试管理",
    "department": "黑龙江海事局",
    "workLocation": "黑龙江省哈尔滨市",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "工学门类",
        "理学门类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_200",
    "name": "从事基层海事执法相关工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事基层海事执法相关工作。",
    "department": "深圳海事局",
    "workLocation": "广东省深圳市",
    "recruitCount": 2,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "航海技术"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_201",
    "name": "从事基层海事执法相关工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事基层海事执法相关工作。",
    "department": "深圳海事局",
    "workLocation": "广东省深圳市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "航海技术",
        "轮机工程"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_202",
    "name": "从事基层海事执法相关工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事基层海事执法相关工作。",
    "department": "深圳海事局",
    "workLocation": "广东省深圳市",
    "recruitCount": 2,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海事管理",
        "海上安全与环境管理",
        "海上交通工程"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_203",
    "name": "从事基层海事执法相关工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事基层海事执法相关工作。",
    "department": "深圳海事局",
    "workLocation": "广东省深圳市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "交通运输类（水运方向）",
        "环境工程类",
        "计算机类",
        "通信与信息类"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_204",
    "name": "从事基层海事执法相关工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事基层海事执法相关工作。",
    "department": "深圳海事局",
    "workLocation": "广东省深圳市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "航海技术",
        "轮机工程"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_206",
    "name": "基层一线海事执法，需经常上船或从事船舶交管值班。",
    "category": "国考",
    "subCategory": "其他",
    "description": "基层一线海事执法，需经常上船或从事船舶交管值班。",
    "department": "连云港海事局",
    "workLocation": "江苏省连云港市连云区",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "航海技术"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_207",
    "name": "承担防汛抗旱日常管理、抢险救灾、防汛信息化建设等工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "承担防汛抗旱日常管理、抢险救灾、防汛信息化建设等工作",
    "department": "水利部黄河水利委员会",
    "workLocation": "山东省泰安市东平县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科：水利水电工程",
        "水文与水资源工程",
        "土木工程",
        "环境工程",
        "生态学"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_208",
    "name": "承担水利工程建设、施工机械管理、智慧黄河建设等工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "承担水利工程建设、施工机械管理、智慧黄河建设等工作",
    "department": "水利部黄河水利委员会",
    "workLocation": "山东省菏泽市郓城县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科：水利水电工程",
        "水文与水资源工程",
        "土木工程",
        "环境工程",
        "生态学"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_209",
    "name": "承担防汛抗旱日常管理、抢险救灾、防汛信息化建设等工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "承担防汛抗旱日常管理、抢险救灾、防汛信息化建设等工作",
    "department": "水利部黄河水利委员会",
    "workLocation": "山东省聊城市东阿县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科：水利水电工程",
        "水文与水资源工程",
        "土木工程",
        "环境工程",
        "生态学"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_210",
    "name": "承担防汛抗旱管理、防汛信息化建设等工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "承担防汛抗旱管理、防汛信息化建设等工作",
    "department": "水利部黄河水利委员会",
    "workLocation": "河南省濮阳市濮阳县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科：水利水电工程",
        "水文与水资源工程",
        "计算机科学与技术",
        "环境工程",
        "生态学"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_211",
    "name": "承担水利工程建设、工程运行技术管理等工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "承担水利工程建设、工程运行技术管理等工作",
    "department": "水利部黄河水利委员会",
    "workLocation": "河南省濮阳市范县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科：水利水电工程",
        "土木工程",
        "工程管理",
        "环境工程",
        "生态学"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_214",
    "name": "从事农业农村立法、法治审核等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事农业农村立法、法治审核等工作。",
    "department": "农业农村部",
    "workLocation": "北京市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "宪法学与行政法学",
        "刑法学",
        "民商法学"
      ],
      "education": "仅限博士研究生",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_215",
    "name": "从事职业健康管理相关工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事职业健康管理相关工作。",
    "department": "国家卫生健康委员会",
    "workLocation": "北京市西城区",
    "recruitCount": 1,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "核物理（070203）",
        "辐射防护及环境保护（082704）"
      ],
      "education": "本科或硕士研究生",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_216",
    "name": "医疗保健相关工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "医疗保健相关工作。",
    "department": "国家卫生健康委员会",
    "workLocation": "北京市西城区",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "临床医学（1002",
        "1051）",
        "口腔医学（1003",
        "1052）",
        "中医学（1005"
      ],
      "education": "仅限博士研究生",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_217",
    "name": "主要从事相关金融法律法规事务、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事相关金融法律法规事务、综合管理等工作",
    "department": "中国人民银行北京市分行",
    "workLocation": "北京市",
    "recruitCount": 2,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学（0301）",
        "法律（0351）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_218",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行河北省分行",
    "workLocation": "河北省石家庄市",
    "recruitCount": 12,
    "needAdjust": 17,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_219",
    "name": "主要从事相关金融法律法规事务、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事相关金融法律法规事务、综合管理等工作",
    "department": "中国人民银行河北省分行",
    "workLocation": "河北省石家庄市",
    "recruitCount": 5,
    "needAdjust": 17,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学（0301）",
        "法律（0351）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_220",
    "name": "主要从事金融科技建设和管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融科技建设和管理、综合管理等工作",
    "department": "中国人民银行河北省分行",
    "workLocation": "河北省石家庄市",
    "recruitCount": 5,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电子科学与技术（0809）",
        "信息与通信工程（0810）",
        "计算机科学与技术（0812）",
        "软件工程（0835）",
        "网络空间安全（0839）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_221",
    "name": "主要从事经济金融信息统计分析、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事经济金融信息统计分析、综合管理等工作",
    "department": "中国人民银行河北省分行",
    "workLocation": "河北省石家庄市",
    "recruitCount": 4,
    "needAdjust": 14,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "数学",
        "统计"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_222",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行山西省分行",
    "workLocation": "山西省太原市",
    "recruitCount": 12,
    "needAdjust": 20,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_223",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行内蒙古自治区分行",
    "workLocation": "内蒙古自治区呼和浩特市",
    "recruitCount": 5,
    "needAdjust": 17,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_224",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行内蒙古自治区分行",
    "workLocation": "内蒙古自治区呼和浩特市",
    "recruitCount": 3,
    "needAdjust": 8,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济金融类（不含统计",
        "国际商务",
        "资产评估",
        "经济与贸易类",
        "国际贸易等专业）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_225",
    "name": "主要从事会计财务、会计核算、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事会计财务、会计核算、综合管理等工作",
    "department": "中国人民银行内蒙古自治区分行",
    "workLocation": "内蒙古自治区呼和浩特市",
    "recruitCount": 2,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计",
        "财务管理",
        "审计"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_226",
    "name": "主要从事相关金融法律法规事务、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事相关金融法律法规事务、综合管理等工作",
    "department": "中国人民银行内蒙古自治区分行",
    "workLocation": "内蒙古自治区呼和浩特市",
    "recruitCount": 3,
    "needAdjust": 10,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学（0301）",
        "法律（0351）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_227",
    "name": "主要从事金融科技建设和管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融科技建设和管理、综合管理等工作",
    "department": "中国人民银行内蒙古自治区分行",
    "workLocation": "内蒙古自治区呼和浩特市",
    "recruitCount": 2,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电子科学与技术（0809）",
        "信息与通信工程（0810）",
        "计算机科学与技术（0812）",
        "软件工程（0835）",
        "网络空间安全（0839）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_230",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行辽宁省分行",
    "workLocation": "辽宁省沈阳市",
    "recruitCount": 5,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_231",
    "name": "主要从事相关金融法律法规事务、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事相关金融法律法规事务、综合管理等工作",
    "department": "中国人民银行辽宁省分行",
    "workLocation": "辽宁省沈阳市",
    "recruitCount": 3,
    "needAdjust": 7,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学（0301）",
        "法律（0351）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_232",
    "name": "主要从事金融科技建设和管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融科技建设和管理、综合管理等工作",
    "department": "中国人民银行辽宁省分行",
    "workLocation": "辽宁省沈阳市",
    "recruitCount": 3,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电子科学与技术（0809）",
        "信息与通信工程（0810）",
        "计算机科学与技术（0812）",
        "软件工程（0835）",
        "网络空间安全（0839）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_233",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行吉林省分行",
    "workLocation": "吉林省长春市",
    "recruitCount": 4,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_234",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行吉林省分行",
    "workLocation": "吉林省长春市",
    "recruitCount": 5,
    "needAdjust": 16,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济金融类（不含统计",
        "国际商务",
        "资产评估",
        "经济与贸易类",
        "国际贸易等专业）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_235",
    "name": "主要从事相关金融法律法规事务、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事相关金融法律法规事务、综合管理等工作",
    "department": "中国人民银行吉林省分行",
    "workLocation": "吉林省长春市",
    "recruitCount": 2,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学（0301）",
        "法律（0351）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_236",
    "name": "主要从事金融科技建设和管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融科技建设和管理、综合管理等工作",
    "department": "中国人民银行吉林省分行",
    "workLocation": "吉林省长春市",
    "recruitCount": 3,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电子科学与技术（0809）",
        "信息与通信工程（0810）",
        "计算机科学与技术（0812）",
        "软件工程（0835）",
        "网络空间安全（0839）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_237",
    "name": "主要从事经济金融信息统计分析、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事经济金融信息统计分析、综合管理等工作",
    "department": "中国人民银行吉林省分行",
    "workLocation": "吉林省长春市",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "数学",
        "统计"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_239",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行黑龙江省分行",
    "workLocation": "黑龙江省哈尔滨市",
    "recruitCount": 4,
    "needAdjust": 12,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_240",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行黑龙江省分行",
    "workLocation": "黑龙江省哈尔滨市",
    "recruitCount": 4,
    "needAdjust": 13,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济金融类（不含统计",
        "国际商务",
        "资产评估",
        "经济与贸易类",
        "国际贸易等专业）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_241",
    "name": "主要从事会计财务、会计核算、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事会计财务、会计核算、综合管理等工作",
    "department": "中国人民银行黑龙江省分行",
    "workLocation": "黑龙江省哈尔滨市",
    "recruitCount": 2,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计",
        "财务管理",
        "审计"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_242",
    "name": "主要从事相关金融法律法规事务、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事相关金融法律法规事务、综合管理等工作",
    "department": "中国人民银行黑龙江省分行",
    "workLocation": "黑龙江省哈尔滨市",
    "recruitCount": 2,
    "needAdjust": 9,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学（0301）",
        "法律（0351）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_243",
    "name": "主要从事金融科技建设和管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融科技建设和管理、综合管理等工作",
    "department": "中国人民银行黑龙江省分行",
    "workLocation": "黑龙江省哈尔滨市",
    "recruitCount": 2,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电子科学与技术（0809）",
        "信息与通信工程（0810）",
        "计算机科学与技术（0812）",
        "软件工程（0835）",
        "网络空间安全（0839）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_245",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行江苏省分行",
    "workLocation": "江苏省南京市",
    "recruitCount": 2,
    "needAdjust": 8,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "仅限博士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_246",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行福建省分行",
    "workLocation": "福建省福州市",
    "recruitCount": 14,
    "needAdjust": 14,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_247",
    "name": "主要从事金融科技建设和管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融科技建设和管理、综合管理等工作",
    "department": "中国人民银行福建省分行",
    "workLocation": "福建省福州市",
    "recruitCount": 4,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电子科学与技术（0809）",
        "信息与通信工程（0810）",
        "计算机科学与技术（0812）",
        "软件工程（0835）",
        "网络空间安全（0839）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_248",
    "name": "主要从事经济金融信息统计分析、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事经济金融信息统计分析、综合管理等工作",
    "department": "中国人民银行福建省分行",
    "workLocation": "福建省福州市",
    "recruitCount": 2,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "数学",
        "统计"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_249",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行山东省分行",
    "workLocation": "山东省济南市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "仅限博士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_250",
    "name": "主要从事货币发行、守库押运、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币发行、守库押运、综合管理等工作",
    "department": "中国人民银行河南省分行",
    "workLocation": "河南省郑州市",
    "recruitCount": 2,
    "needAdjust": 7,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "公安学（0306）",
        "警务（0353）",
        "公安技术（0838）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_251",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行湖北省分行",
    "workLocation": "湖北省孝感市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大学本科为理工科专业",
        "研究生为经济金融类专业（不含统计",
        "国际商务",
        "资产评估",
        "经济与贸易类"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_252",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行湖南省分行",
    "workLocation": "湖南省长沙市",
    "recruitCount": 2,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "仅限博士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_253",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行广东省分行",
    "workLocation": "广东省广州市",
    "recruitCount": 2,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "仅限博士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_254",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行广东省分行",
    "workLocation": "广东省广州市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济金融类（不含统计",
        "国际商务",
        "资产评估",
        "经济与贸易类",
        "国际贸易等专业）"
      ],
      "education": "仅限博士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_255",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行广西壮族自治区分行",
    "workLocation": "广西壮族自治区南宁市",
    "recruitCount": 8,
    "needAdjust": 23,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_256",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行广西壮族自治区分行",
    "workLocation": "广西壮族自治区南宁市",
    "recruitCount": 4,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济金融类（不含统计",
        "国际商务",
        "资产评估",
        "经济与贸易类",
        "国际贸易等专业）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_257",
    "name": "主要从事会计财务、会计核算、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事会计财务、会计核算、综合管理等工作",
    "department": "中国人民银行广西壮族自治区分行",
    "workLocation": "广西壮族自治区南宁市",
    "recruitCount": 4,
    "needAdjust": 11,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计",
        "财务管理",
        "审计"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_258",
    "name": "主要从事相关金融法律法规事务、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事相关金融法律法规事务、综合管理等工作",
    "department": "中国人民银行广西壮族自治区分行",
    "workLocation": "广西壮族自治区南宁市",
    "recruitCount": 3,
    "needAdjust": 10,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学（0301）",
        "法律（0351）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_259",
    "name": "主要从事金融科技建设和管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融科技建设和管理、综合管理等工作",
    "department": "中国人民银行广西壮族自治区分行",
    "workLocation": "广西壮族自治区南宁市",
    "recruitCount": 4,
    "needAdjust": 16,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电子科学与技术（0809）",
        "信息与通信工程（0810）",
        "计算机科学与技术（0812）",
        "软件工程（0835）",
        "网络空间安全（0839）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_261",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行海南省分行",
    "workLocation": "海南省海口市",
    "recruitCount": 10,
    "needAdjust": 39,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_262",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行海南省分行",
    "workLocation": "海南省海口市",
    "recruitCount": 3,
    "needAdjust": 7,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济金融类（不含统计",
        "国际商务",
        "资产评估",
        "经济与贸易类",
        "国际贸易等专业）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_263",
    "name": "主要从事会计财务、会计核算、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事会计财务、会计核算、综合管理等工作",
    "department": "中国人民银行海南省分行",
    "workLocation": "海南省海口市",
    "recruitCount": 4,
    "needAdjust": 11,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计",
        "财务管理",
        "审计"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_264",
    "name": "主要从事相关金融法律法规事务、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事相关金融法律法规事务、综合管理等工作",
    "department": "中国人民银行海南省分行",
    "workLocation": "海南省海口市",
    "recruitCount": 5,
    "needAdjust": 19,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学（0301）",
        "法律（0351）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_265",
    "name": "主要从事金融科技建设和管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融科技建设和管理、综合管理等工作",
    "department": "中国人民银行海南省分行",
    "workLocation": "海南省海口市",
    "recruitCount": 3,
    "needAdjust": 12,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电子科学与技术（0809）",
        "信息与通信工程（0810）",
        "计算机科学与技术（0812）",
        "软件工程（0835）",
        "网络空间安全（0839）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_267",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行重庆市分行",
    "workLocation": "重庆市",
    "recruitCount": 6,
    "needAdjust": 15,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_268",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行四川省分行",
    "workLocation": "四川省南充市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济金融类（不含统计",
        "国际商务",
        "资产评估",
        "经济与贸易类",
        "国际贸易等专业）"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_269",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行四川省分行",
    "workLocation": "四川省达州市",
    "recruitCount": 2,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大学本科为理工科专业",
        "研究生为经济金融类专业（不含统计",
        "国际商务",
        "资产评估",
        "经济与贸易类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_270",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行四川省分行",
    "workLocation": "四川省甘孜藏族自治州康定市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济金融类（不含统计",
        "国际商务",
        "资产评估",
        "经济与贸易类",
        "国际贸易等专业）"
      ],
      "education": "仅限硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_271",
    "name": "主要从事经济金融信息统计分析、综合管理等工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事经济金融信息统计分析、综合管理等工作",
    "department": "中国人民银行四川省分行",
    "workLocation": "四川省甘孜藏族自治州康定市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "数学",
        "统计"
      ],
      "education": "仅限硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_272",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行贵州省分行",
    "workLocation": "贵州省贵阳市",
    "recruitCount": 9,
    "needAdjust": 26,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_273",
    "name": "主要从事会计财务、会计核算、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事会计财务、会计核算、综合管理等工作",
    "department": "中国人民银行贵州省分行",
    "workLocation": "贵州省贵阳市",
    "recruitCount": 2,
    "needAdjust": 8,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计",
        "财务管理",
        "审计"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_274",
    "name": "主要从事相关金融法律法规事务、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事相关金融法律法规事务、综合管理等工作",
    "department": "中国人民银行贵州省分行",
    "workLocation": "贵州省贵阳市",
    "recruitCount": 2,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学（0301）",
        "法律（0351）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_275",
    "name": "主要从事金融科技建设和管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融科技建设和管理、综合管理等工作",
    "department": "中国人民银行贵州省分行",
    "workLocation": "贵州省贵阳市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电子科学与技术（0809）",
        "信息与通信工程（0810）",
        "计算机科学与技术（0812）",
        "软件工程（0835）",
        "网络空间安全（0839）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_276",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行云南省分行",
    "workLocation": "云南省昆明市",
    "recruitCount": 10,
    "needAdjust": 17,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_277",
    "name": "主要从事相关金融法律法规事务、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事相关金融法律法规事务、综合管理等工作",
    "department": "中国人民银行云南省分行",
    "workLocation": "云南省昆明市",
    "recruitCount": 2,
    "needAdjust": 8,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学（0301）",
        "法律（0351）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_278",
    "name": "主要从事金融科技建设和管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融科技建设和管理、综合管理等工作",
    "department": "中国人民银行云南省分行",
    "workLocation": "云南省昆明市",
    "recruitCount": 4,
    "needAdjust": 11,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电子科学与技术（0809）",
        "信息与通信工程（0810）",
        "计算机科学与技术（0812）",
        "软件工程（0835）",
        "网络空间安全（0839）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_279",
    "name": "主要从事经济金融信息统计分析、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事经济金融信息统计分析、综合管理等工作",
    "department": "中国人民银行云南省分行",
    "workLocation": "云南省昆明市",
    "recruitCount": 2,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "数学",
        "统计"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_280",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行云南省分行",
    "workLocation": "云南省昆明市",
    "recruitCount": 2,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大学本科为理工科专业",
        "研究生为经济金融类专业（不含统计",
        "国际商务",
        "资产评估",
        "经济与贸易类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_281",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行西藏自治区分行",
    "workLocation": "西藏自治区拉萨市",
    "recruitCount": 3,
    "needAdjust": 14,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济金融类（不含统计",
        "国际商务",
        "资产评估",
        "经济与贸易类",
        "国际贸易等专业）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_282",
    "name": "主要从事会计财务、会计核算、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事会计财务、会计核算、综合管理等工作",
    "department": "中国人民银行西藏自治区分行",
    "workLocation": "西藏自治区拉萨市",
    "recruitCount": 3,
    "needAdjust": 14,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计",
        "财务管理",
        "审计"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_283",
    "name": "主要从事相关金融法律法规事务、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事相关金融法律法规事务、综合管理等工作",
    "department": "中国人民银行西藏自治区分行",
    "workLocation": "西藏自治区拉萨市",
    "recruitCount": 2,
    "needAdjust": 9,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学（0301）",
        "法律（0351）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_284",
    "name": "主要从事金融科技建设和管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融科技建设和管理、综合管理等工作",
    "department": "中国人民银行西藏自治区分行",
    "workLocation": "西藏自治区拉萨市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大学本科：电子信息类（0807）",
        "计算机类（0809）",
        "研究生：电子科学与技术（0809）",
        "信息与通信工程（0810）",
        "计算机科学与技术（0812）"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_285",
    "name": "主要从事经济金融信息统计分析、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事经济金融信息统计分析、综合管理等工作",
    "department": "中国人民银行西藏自治区分行",
    "workLocation": "西藏自治区拉萨市",
    "recruitCount": 2,
    "needAdjust": 7,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "数学",
        "统计"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_288",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行陕西省分行",
    "workLocation": "陕西省西安市",
    "recruitCount": 2,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_289",
    "name": "主要从事会计财务、会计核算、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事会计财务、会计核算、综合管理等工作",
    "department": "中国人民银行陕西省分行",
    "workLocation": "陕西省西安市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计",
        "财务管理",
        "审计"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_290",
    "name": "主要从事经济金融信息统计分析、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事经济金融信息统计分析、综合管理等工作",
    "department": "中国人民银行陕西省分行",
    "workLocation": "陕西省西安市",
    "recruitCount": 2,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "数学",
        "统计"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_291",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行甘肃省分行",
    "workLocation": "甘肃省兰州市",
    "recruitCount": 7,
    "needAdjust": 26,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_292",
    "name": "主要从事会计财务、会计核算、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事会计财务、会计核算、综合管理等工作",
    "department": "中国人民银行甘肃省分行",
    "workLocation": "甘肃省兰州市",
    "recruitCount": 3,
    "needAdjust": 13,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计",
        "财务管理",
        "审计"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_293",
    "name": "主要从事相关金融法律法规事务、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事相关金融法律法规事务、综合管理等工作",
    "department": "中国人民银行甘肃省分行",
    "workLocation": "甘肃省兰州市",
    "recruitCount": 5,
    "needAdjust": 22,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学（0301）",
        "法律（0351）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_294",
    "name": "主要从事金融科技建设和管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融科技建设和管理、综合管理等工作",
    "department": "中国人民银行甘肃省分行",
    "workLocation": "甘肃省兰州市",
    "recruitCount": 5,
    "needAdjust": 18,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电子科学与技术（0809）",
        "信息与通信工程（0810）",
        "计算机科学与技术（0812）",
        "软件工程（0835）",
        "网络空间安全（0839）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_295",
    "name": "主要从事经济金融信息统计分析、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事经济金融信息统计分析、综合管理等工作",
    "department": "中国人民银行甘肃省分行",
    "workLocation": "甘肃省兰州市",
    "recruitCount": 3,
    "needAdjust": 15,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "数学",
        "统计"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_298",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行青海省分行",
    "workLocation": "青海省西宁市",
    "recruitCount": 10,
    "needAdjust": 49,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_299",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行青海省分行",
    "workLocation": "青海省西宁市",
    "recruitCount": 4,
    "needAdjust": 18,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济金融类（不含统计",
        "国际商务",
        "资产评估",
        "经济与贸易类",
        "国际贸易等专业）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_300",
    "name": "主要从事会计财务、会计核算、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事会计财务、会计核算、综合管理等工作",
    "department": "中国人民银行青海省分行",
    "workLocation": "青海省西宁市",
    "recruitCount": 2,
    "needAdjust": 10,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计",
        "财务管理",
        "审计"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_301",
    "name": "主要从事相关金融法律法规事务、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事相关金融法律法规事务、综合管理等工作",
    "department": "中国人民银行青海省分行",
    "workLocation": "青海省西宁市",
    "recruitCount": 2,
    "needAdjust": 10,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学（0301）",
        "法律（0351）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_302",
    "name": "主要从事金融科技建设和管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融科技建设和管理、综合管理等工作",
    "department": "中国人民银行青海省分行",
    "workLocation": "青海省西宁市",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电子科学与技术（0809）",
        "信息与通信工程（0810）",
        "计算机科学与技术（0812）",
        "软件工程（0835）",
        "网络空间安全（0839）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_304",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行宁夏回族自治区分行",
    "workLocation": "宁夏回族自治区银川市",
    "recruitCount": 3,
    "needAdjust": 13,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_305",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行宁夏回族自治区分行",
    "workLocation": "宁夏回族自治区银川市",
    "recruitCount": 5,
    "needAdjust": 19,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济金融类（不含统计",
        "国际商务",
        "资产评估",
        "经济与贸易类",
        "国际贸易等专业）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_306",
    "name": "主要从事会计财务、会计核算、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事会计财务、会计核算、综合管理等工作",
    "department": "中国人民银行宁夏回族自治区分行",
    "workLocation": "宁夏回族自治区银川市",
    "recruitCount": 6,
    "needAdjust": 23,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计",
        "财务管理",
        "审计"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_307",
    "name": "主要从事相关金融法律法规事务、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事相关金融法律法规事务、综合管理等工作",
    "department": "中国人民银行宁夏回族自治区分行",
    "workLocation": "宁夏回族自治区银川市",
    "recruitCount": 2,
    "needAdjust": 8,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学（0301）",
        "法律（0351）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_308",
    "name": "主要从事金融科技建设和管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融科技建设和管理、综合管理等工作",
    "department": "中国人民银行宁夏回族自治区分行",
    "workLocation": "宁夏回族自治区银川市",
    "recruitCount": 5,
    "needAdjust": 18,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电子科学与技术（0809）",
        "信息与通信工程（0810）",
        "计算机科学与技术（0812）",
        "软件工程（0835）",
        "网络空间安全（0839）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_311",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行新疆维吾尔自治区分行",
    "workLocation": "新疆维吾尔自治区乌鲁木齐市",
    "recruitCount": 12,
    "needAdjust": 49,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_312",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行新疆维吾尔自治区分行",
    "workLocation": "新疆维吾尔自治区乌鲁木齐市",
    "recruitCount": 4,
    "needAdjust": 17,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济金融类（不含统计",
        "国际商务",
        "资产评估",
        "经济与贸易类",
        "国际贸易等专业）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_313",
    "name": "主要从事会计财务、会计核算、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事会计财务、会计核算、综合管理等工作",
    "department": "中国人民银行新疆维吾尔自治区分行",
    "workLocation": "新疆维吾尔自治区乌鲁木齐市",
    "recruitCount": 4,
    "needAdjust": 19,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计",
        "财务管理",
        "审计"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_314",
    "name": "主要从事相关金融法律法规事务、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事相关金融法律法规事务、综合管理等工作",
    "department": "中国人民银行新疆维吾尔自治区分行",
    "workLocation": "新疆维吾尔自治区乌鲁木齐市",
    "recruitCount": 4,
    "needAdjust": 18,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学（0301）",
        "法律（0351）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_315",
    "name": "主要从事金融科技建设和管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融科技建设和管理、综合管理等工作",
    "department": "中国人民银行新疆维吾尔自治区分行",
    "workLocation": "新疆维吾尔自治区乌鲁木齐市",
    "recruitCount": 4,
    "needAdjust": 19,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电子科学与技术（0809）",
        "信息与通信工程（0810）",
        "计算机科学与技术（0812）",
        "软件工程（0835）",
        "网络空间安全（0839）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_324",
    "name": "主要从事经济金融信息统计分析、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事经济金融信息统计分析、综合管理等工作",
    "department": "中国人民银行大连市分行",
    "workLocation": "辽宁省大连市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "数学",
        "统计"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_325",
    "name": "主要从事相关金融法律法规事务、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事相关金融法律法规事务、综合管理等工作",
    "department": "中国人民银行大连市分行",
    "workLocation": "辽宁省大连市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学（0301）",
        "法律（0351）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_326",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行宁波市分行",
    "workLocation": "浙江省宁波市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "仅限博士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_327",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行宁波市分行",
    "workLocation": "浙江省宁波市",
    "recruitCount": 11,
    "needAdjust": 10,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_328",
    "name": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事货币政策、金融稳定、金融服务、外汇管理、综合管理等工作",
    "department": "中国人民银行厦门市分行",
    "workLocation": "福建省厦门市",
    "recruitCount": 6,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_329",
    "name": "主要从事金融科技建设和管理、综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融科技建设和管理、综合管理等工作",
    "department": "中国人民银行厦门市分行",
    "workLocation": "福建省厦门市",
    "recruitCount": 3,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电子科学与技术（0809）",
        "信息与通信工程（0810）",
        "计算机科学与技术（0812）",
        "软件工程（0835）",
        "网络空间安全（0839）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_330",
    "name": "从事审计业务工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事审计业务工作",
    "department": "审计署",
    "workLocation": "北京市",
    "recruitCount": 3,
    "needAdjust": 13,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学",
        "会计",
        "财务管理",
        "审计",
        "金融"
      ],
      "education": "仅限硕士研究生",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_331",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "北京海关",
    "workLocation": "北京市",
    "recruitCount": 4,
    "needAdjust": 7,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_332",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "天津海关",
    "workLocation": "天津市",
    "recruitCount": 7,
    "needAdjust": 7,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_333",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "天津海关",
    "workLocation": "天津市",
    "recruitCount": 3,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_334",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "天津海关",
    "workLocation": "天津市",
    "recruitCount": 5,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_335",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "石家庄海关",
    "workLocation": "河北省秦皇岛市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_336",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "石家庄海关",
    "workLocation": "河北省唐山市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_337",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "石家庄海关",
    "workLocation": "河北省唐山市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_338",
    "name": "从事海关一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关一线监管工作。",
    "department": "石家庄海关",
    "workLocation": "河北省廊坊市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_339",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "石家庄海关",
    "workLocation": "河北省沧州市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_341",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "太原海关",
    "workLocation": "山西省运城市",
    "recruitCount": 3,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_342",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "呼和浩特海关",
    "workLocation": "内蒙古自治区锡林郭勒盟",
    "recruitCount": 2,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_343",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "呼和浩特海关",
    "workLocation": "内蒙古自治区巴彦淖尔市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_344",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "呼和浩特海关",
    "workLocation": "内蒙古自治区乌海市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_345",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "满洲里海关",
    "workLocation": "内蒙古自治区呼伦贝尔市满洲里市",
    "recruitCount": 3,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_346",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "满洲里海关",
    "workLocation": "内蒙古自治区呼伦贝尔市海拉尔区",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_347",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "满洲里海关",
    "workLocation": "内蒙古自治区呼伦贝尔市满洲里市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_348",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "满洲里海关",
    "workLocation": "内蒙古自治区兴安盟乌兰浩特市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_349",
    "name": "从事海关口岸一线旅检及翻译工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线旅检及翻译工作。",
    "department": "满洲里海关",
    "workLocation": "内蒙古自治区呼伦贝尔市海拉尔区",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "蒙古语"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_350",
    "name": "从事海关一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关一线监管工作。",
    "department": "大连海关",
    "workLocation": "辽宁省",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_351",
    "name": "从事海关一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关一线监管工作。",
    "department": "大连海关",
    "workLocation": "辽宁省",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_352",
    "name": "从事海关一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关一线监管工作。",
    "department": "大连海关",
    "workLocation": "辽宁省",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_353",
    "name": "从事海关一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关一线监管工作。",
    "department": "大连海关",
    "workLocation": "辽宁省",
    "recruitCount": 2,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_354",
    "name": "从事海关一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关一线监管工作。",
    "department": "大连海关",
    "workLocation": "辽宁省",
    "recruitCount": 2,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_364",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "沈阳海关",
    "workLocation": "辽宁省沈阳市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_365",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "沈阳海关",
    "workLocation": "辽宁省沈阳市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_366",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "沈阳海关",
    "workLocation": "辽宁省阜新市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_367",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "沈阳海关",
    "workLocation": "辽宁省朝阳市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_368",
    "name": "从事海关稽查相关工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关稽查相关工作。",
    "department": "长春海关",
    "workLocation": "吉林省长春市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_369",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "长春海关",
    "workLocation": "吉林省长春市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_370",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "长春海关",
    "workLocation": "吉林省通化市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_371",
    "name": "从事海关政工、党建等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关政工、党建等工作。",
    "department": "长春海关",
    "workLocation": "吉林省延边朝鲜族自治州延吉市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "科学社会主义",
        "中国共产党历史",
        "思想政治教育",
        "马克思主义理论",
        "工会学"
      ],
      "education": "仅限本科",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_372",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "长春海关",
    "workLocation": "吉林省延边朝鲜族自治州珲春市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_376",
    "name": "从事海关口岸一线监管、货物查验工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管、货物查验工作。",
    "department": "哈尔滨海关",
    "workLocation": "黑龙江省",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关稽查",
        "海关检验检疫安全"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_377",
    "name": "从事海关口岸一线监管、货物查验工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管、货物查验工作。",
    "department": "哈尔滨海关",
    "workLocation": "黑龙江省",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关稽查",
        "海关检验检疫安全"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_378",
    "name": "从事海关口岸一线监管、货物查验工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管、货物查验工作。",
    "department": "哈尔滨海关",
    "workLocation": "黑龙江省",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关稽查",
        "海关检验检疫安全"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_379",
    "name": "从事海关口岸一线监管、货物查验工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管、货物查验工作。",
    "department": "哈尔滨海关",
    "workLocation": "黑龙江省",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "计算机类",
        "化学类",
        "化工与制药类",
        "机械类",
        "植物生产类"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_380",
    "name": "从事海关口岸一线监管、货物查验工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管、货物查验工作。",
    "department": "哈尔滨海关",
    "workLocation": "黑龙江省",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关稽查",
        "海关检验检疫安全"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_383",
    "name": "从事海关口岸一线货物查验、监管等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线货物查验、监管等工作。",
    "department": "上海海关",
    "workLocation": "上海市浦东新区",
    "recruitCount": 3,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_384",
    "name": "从事智慧海关建设，海关口岸一线货物查验、监管、卡口值守、物流监控、网络信息安全等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事智慧海关建设，海关口岸一线货物查验、监管、卡口值守、物流监控、网络信息安全等工作。",
    "department": "上海海关",
    "workLocation": "上海市浦东新区",
    "recruitCount": 2,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "计算机科学与技术",
        "软件工程",
        "网络工程",
        "信息安全",
        "智能科学与技术"
      ],
      "education": "本科或硕士研究生",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_385",
    "name": "从事海关口岸一线货物查验、监管等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线货物查验、监管等工作。",
    "department": "上海海关",
    "workLocation": "上海市浦东新区",
    "recruitCount": 3,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_386",
    "name": "从事海关口岸一线货物查验、监管、卡口值守、物流监控等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线货物查验、监管、卡口值守、物流监控等工作。",
    "department": "上海海关",
    "workLocation": "上海市浦东新区",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "植物保护",
        "植物科学与技术",
        "森林保护",
        "动物医学"
      ],
      "education": "本科或硕士研究生",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_387",
    "name": "从事海关口岸一线货物查验、监管等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线货物查验、监管等工作。",
    "department": "上海海关",
    "workLocation": "上海市虹口区",
    "recruitCount": 3,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科或硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_419",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "南京海关",
    "workLocation": "江苏省无锡市江阴市",
    "recruitCount": 2,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_420",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "南京海关",
    "workLocation": "江苏省连云港市",
    "recruitCount": 4,
    "needAdjust": 7,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_421",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "南京海关",
    "workLocation": "江苏省南通市",
    "recruitCount": 4,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_422",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "南京海关",
    "workLocation": "江苏省苏州市张家港市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_423",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "南京海关",
    "workLocation": "江苏省苏州市张家港市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_434",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "杭州海关",
    "workLocation": "浙江省杭州市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关稽查",
        "海关检验检疫安全"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_435",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "杭州海关",
    "workLocation": "浙江省杭州市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关稽查",
        "海关检验检疫安全"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_436",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "杭州海关",
    "workLocation": "浙江省温州市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关稽查",
        "海关检验检疫安全"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_437",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "杭州海关",
    "workLocation": "浙江省舟山市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关稽查",
        "海关检验检疫安全"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_438",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "杭州海关",
    "workLocation": "浙江省台州市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关稽查",
        "海关检验检疫安全"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_447",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "宁波海关",
    "workLocation": "浙江省宁波市",
    "recruitCount": 4,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_448",
    "name": "从事海关进出境货物查验、监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关进出境货物查验、监管工作。",
    "department": "宁波海关",
    "workLocation": "浙江省宁波市",
    "recruitCount": 3,
    "needAdjust": 8,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学",
        "数学",
        "化学",
        "材料科学与工程",
        "机械工程"
      ],
      "education": "仅限硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_449",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "宁波海关",
    "workLocation": "浙江省宁波市",
    "recruitCount": 4,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_450",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "合肥海关",
    "workLocation": "安徽省芜湖市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_451",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "合肥海关",
    "workLocation": "安徽省安庆市",
    "recruitCount": 3,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_452",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "合肥海关",
    "workLocation": "安徽省黄山市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_453",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "合肥海关",
    "workLocation": "安徽省蚌埠市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_454",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "合肥海关",
    "workLocation": "安徽省淮北市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_456",
    "name": "从事海关现场一线货物查验、监管等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关现场一线货物查验、监管等工作。",
    "department": "福州海关",
    "workLocation": "福建省福州市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_457",
    "name": "从事海关现场一线货物查验、监管等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关现场一线货物查验、监管等工作。",
    "department": "福州海关",
    "workLocation": "福建省福州市长乐区",
    "recruitCount": 4,
    "needAdjust": 8,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_458",
    "name": "从事海关现场一线货物查验、监管等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关现场一线货物查验、监管等工作。",
    "department": "福州海关",
    "workLocation": "福建省福州市马尾区",
    "recruitCount": 4,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_459",
    "name": "从事海关一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关一线监管工作。",
    "department": "厦门海关",
    "workLocation": "福建省泉州市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_460",
    "name": "从事海关一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关一线监管工作。",
    "department": "厦门海关",
    "workLocation": "福建省厦门市",
    "recruitCount": 3,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_461",
    "name": "从事海关一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关一线监管工作。",
    "department": "厦门海关",
    "workLocation": "福建省厦门市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_462",
    "name": "从事海关一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关一线监管工作。",
    "department": "厦门海关",
    "workLocation": "福建省厦门市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_463",
    "name": "从事海关一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关一线监管工作。",
    "department": "厦门海关",
    "workLocation": "福建省厦门市",
    "recruitCount": 3,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_467",
    "name": "从事海关进出境货物查验及监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关进出境货物查验及监管工作。",
    "department": "南昌海关",
    "workLocation": "江西省九江市",
    "recruitCount": 2,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_468",
    "name": "从事海关进出境货物查验及监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关进出境货物查验及监管工作。",
    "department": "南昌海关",
    "workLocation": "江西省赣州市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_469",
    "name": "从事海关进出境货物查验及监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关进出境货物查验及监管工作。",
    "department": "南昌海关",
    "workLocation": "江西省吉安市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_470",
    "name": "从事海关进出境货物查验及监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关进出境货物查验及监管工作。",
    "department": "南昌海关",
    "workLocation": "江西省上饶市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_471",
    "name": "从事海关进出境货物查验及监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关进出境货物查验及监管工作。",
    "department": "南昌海关",
    "workLocation": "江西省宜春市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_473",
    "name": "从事海关风险防控、智慧海关建设工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关风险防控、智慧海关建设工作。",
    "department": "青岛海关",
    "workLocation": "山东省青岛市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "数学与应用数学",
        "信息与计算科学",
        "数据计算及应用",
        "计算数学"
      ],
      "education": "本科或硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_474",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "青岛海关",
    "workLocation": "山东省青岛市",
    "recruitCount": 4,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_475",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "青岛海关",
    "workLocation": "山东省青岛市",
    "recruitCount": 3,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_476",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "青岛海关",
    "workLocation": "山东省青岛市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_477",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "青岛海关",
    "workLocation": "山东省青岛市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_486",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "济南海关",
    "workLocation": "山东省潍坊市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_487",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "济南海关",
    "workLocation": "山东省泰安市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_488",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "济南海关",
    "workLocation": "山东省东营市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_489",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "济南海关",
    "workLocation": "山东省德州市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_490",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "济南海关",
    "workLocation": "山东省聊城市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_491",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "郑州海关",
    "workLocation": "河南省南阳市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_492",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "郑州海关",
    "workLocation": "河南省许昌市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_493",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "郑州海关",
    "workLocation": "河南省濮阳市",
    "recruitCount": 2,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_494",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "郑州海关",
    "workLocation": "河南省驻马店市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_495",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "郑州海关",
    "workLocation": "河南省济源市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_496",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "武汉海关",
    "workLocation": "湖北省荆州市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_497",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "武汉海关",
    "workLocation": "湖北省荆门市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_498",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "武汉海关",
    "workLocation": "湖北省随州市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_499",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "武汉海关",
    "workLocation": "湖北省恩施土家族苗族自治州",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_500",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "武汉海关",
    "workLocation": "湖北省仙桃市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_501",
    "name": "从事海关一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关一线监管工作。",
    "department": "长沙海关",
    "workLocation": "湖南省长沙市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_502",
    "name": "从事海关一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关一线监管工作。",
    "department": "长沙海关",
    "workLocation": "湖南省长沙市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_503",
    "name": "从事海关一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关一线监管工作。",
    "department": "长沙海关",
    "workLocation": "湖南省株洲市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_504",
    "name": "从事海关一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关一线监管工作。",
    "department": "长沙海关",
    "workLocation": "湖南省衡阳市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_505",
    "name": "从事海关一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关一线监管工作。",
    "department": "长沙海关",
    "workLocation": "湖南省邵阳市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_507",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "广州海关",
    "workLocation": "广东省广州市",
    "recruitCount": 6,
    "needAdjust": 8,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_508",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "广州海关",
    "workLocation": "广东省广州市",
    "recruitCount": 5,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_509",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "广州海关",
    "workLocation": "广东省广州市",
    "recruitCount": 5,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_510",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "广州海关",
    "workLocation": "广东省广州市",
    "recruitCount": 5,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_511",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "广州海关",
    "workLocation": "广东省广州市",
    "recruitCount": 6,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_514",
    "name": "从事海关一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关一线监管工作。",
    "department": "深圳海关",
    "workLocation": "广东省深圳市",
    "recruitCount": 8,
    "needAdjust": 12,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_515",
    "name": "从事海关一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关一线监管工作。",
    "department": "深圳海关",
    "workLocation": "广东省深圳市",
    "recruitCount": 5,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_516",
    "name": "从事海关一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关一线监管工作。",
    "department": "深圳海关",
    "workLocation": "广东省深圳市",
    "recruitCount": 8,
    "needAdjust": 9,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_517",
    "name": "从事海关一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关一线监管工作。",
    "department": "深圳海关",
    "workLocation": "广东省深圳市",
    "recruitCount": 5,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_518",
    "name": "从事海关一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关一线监管工作。",
    "department": "深圳海关",
    "workLocation": "广东省深圳市",
    "recruitCount": 5,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_523",
    "name": "从事海关进出境货物查验监管、税收征管和海关检验检疫等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关进出境货物查验监管、税收征管和海关检验检疫等工作。",
    "department": "拱北海关",
    "workLocation": "广东省中山市",
    "recruitCount": 6,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理（120406TK）",
        "海关检验检疫安全（120415TK）",
        "海关稽查（120217TK）"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_524",
    "name": "从事海关进出境货物查验监管、税收征管和海关检验检疫等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关进出境货物查验监管、税收征管和海关检验检疫等工作。",
    "department": "拱北海关",
    "workLocation": "广东省珠海市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理（120406TK）",
        "海关检验检疫安全（120415TK）",
        "海关稽查（120217TK）"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_525",
    "name": "从事海关进出境货物查验监管、税收征管和海关检验检疫等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关进出境货物查验监管、税收征管和海关检验检疫等工作。",
    "department": "拱北海关",
    "workLocation": "广东省珠海市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理（120406TK）",
        "海关检验检疫安全（120415TK）",
        "海关稽查（120217TK）"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_526",
    "name": "从事海关进出境货物查验监管、税收征管和海关检验检疫等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关进出境货物查验监管、税收征管和海关检验检疫等工作。",
    "department": "拱北海关",
    "workLocation": "广东省珠海市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理（120406TK）",
        "海关检验检疫安全（120415TK）",
        "海关稽查（120217TK）"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_527",
    "name": "从事海关进出境货物查验监管、税收征管和海关检验检疫等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关进出境货物查验监管、税收征管和海关检验检疫等工作。",
    "department": "拱北海关",
    "workLocation": "广东省珠海市",
    "recruitCount": 4,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理（120406TK）",
        "海关检验检疫安全（120415TK）",
        "海关稽查（120217TK）"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_536",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "汕头海关",
    "workLocation": "广东省汕头市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_537",
    "name": "从事海关口岸一线货物查验工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线货物查验工作。",
    "department": "汕头海关",
    "workLocation": "广东省汕头市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "核工程与核技术",
        "辐射防护与核安全",
        "工程物理",
        "核化工与核燃料工程",
        "化学工程与工艺"
      ],
      "education": "仅限本科",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_538",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "汕头海关",
    "workLocation": "广东省汕头市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_539",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "汕头海关",
    "workLocation": "广东省汕头市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_540",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "汕头海关",
    "workLocation": "广东省汕头市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_549",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "黄埔海关",
    "workLocation": "广东省",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查。"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_550",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "黄埔海关",
    "workLocation": "广东省",
    "recruitCount": 2,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查。"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_551",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "黄埔海关",
    "workLocation": "广东省",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查。"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_552",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "黄埔海关",
    "workLocation": "广东省",
    "recruitCount": 3,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查。"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_553",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "黄埔海关",
    "workLocation": "广东省",
    "recruitCount": 2,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查。"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_562",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "江门海关",
    "workLocation": "广东省江门市",
    "recruitCount": 3,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_563",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "江门海关",
    "workLocation": "广东省江门市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_564",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "江门海关",
    "workLocation": "广东省江门市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_565",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "江门海关",
    "workLocation": "广东省江门市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_566",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "江门海关",
    "workLocation": "广东省江门市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_570",
    "name": "从事海关现场监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关现场监管工作。",
    "department": "湛江海关",
    "workLocation": "广东省湛江市",
    "recruitCount": 3,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_571",
    "name": "从事海关现场监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关现场监管工作。",
    "department": "湛江海关",
    "workLocation": "广东省湛江市",
    "recruitCount": 3,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_572",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "湛江海关",
    "workLocation": "广东省茂名市",
    "recruitCount": 3,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_573",
    "name": "从事海关国门安全信息技术、智慧海关建设工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关国门安全信息技术、智慧海关建设工作。",
    "department": "南宁海关",
    "workLocation": "广西壮族自治区",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "计算机科学与技术（0812）",
        "软件工程（0835）",
        "网络空间安全（0839）",
        "智能科学与技术（1405）",
        "电子科学与技术（0809）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_574",
    "name": "从事海关风险防控、智慧海关建设工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关风险防控、智慧海关建设工作。",
    "department": "南宁海关",
    "workLocation": "广西壮族自治区",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "数学（0701）",
        "统计学（0714）",
        "管理科学与工程（1201）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_575",
    "name": "从事货物查验、现场查验等海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事货物查验、现场查验等海关口岸一线监管工作。",
    "department": "南宁海关",
    "workLocation": "广西壮族自治区",
    "recruitCount": 5,
    "needAdjust": 9,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_576",
    "name": "从事货物查验、现场查验等海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事货物查验、现场查验等海关口岸一线监管工作。",
    "department": "南宁海关",
    "workLocation": "广西壮族自治区",
    "recruitCount": 6,
    "needAdjust": 10,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_577",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "海口海关",
    "workLocation": "海南省",
    "recruitCount": 2,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关稽查",
        "海关检验检疫安全"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_578",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "海口海关",
    "workLocation": "海南省",
    "recruitCount": 4,
    "needAdjust": 8,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关稽查",
        "海关检验检疫安全"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_579",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "海口海关",
    "workLocation": "海南省",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关稽查",
        "海关检验检疫安全"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_580",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "海口海关",
    "workLocation": "海南省",
    "recruitCount": 3,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关稽查",
        "海关检验检疫安全"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_581",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "重庆海关",
    "workLocation": "重庆市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_582",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "重庆海关",
    "workLocation": "重庆市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_583",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "重庆海关",
    "workLocation": "重庆市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_584",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "重庆海关",
    "workLocation": "重庆市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_585",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "重庆海关",
    "workLocation": "重庆市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_586",
    "name": "从事海关一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关一线监管工作。",
    "department": "成都海关",
    "workLocation": "四川省成都市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_587",
    "name": "从事海关一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关一线监管工作。",
    "department": "成都海关",
    "workLocation": "四川省绵阳市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_588",
    "name": "从事海关一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关一线监管工作。",
    "department": "成都海关",
    "workLocation": "四川省泸州市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_589",
    "name": "从事海关一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关一线监管工作。",
    "department": "成都海关",
    "workLocation": "四川省德阳市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_590",
    "name": "从事海关一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关一线监管工作。",
    "department": "成都海关",
    "workLocation": "四川省广元市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_595",
    "name": "从事海关口岸一线监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作",
    "department": "贵阳海关",
    "workLocation": "贵州省贵阳市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_596",
    "name": "从事海关一线监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关一线监管工作",
    "department": "贵阳海关",
    "workLocation": "贵州省毕节市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_597",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "昆明海关",
    "workLocation": "云南省德宏傣族景颇族自治州瑞丽市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_598",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "昆明海关",
    "workLocation": "云南省德宏傣族景颇族自治州瑞丽市",
    "recruitCount": 2,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_599",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "昆明海关",
    "workLocation": "云南省德宏傣族景颇族自治州盈江县",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_600",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "昆明海关",
    "workLocation": "云南省德宏傣族景颇族自治州陇川县",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_601",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "昆明海关",
    "workLocation": "云南省保山市腾冲市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_610",
    "name": "从事海关口岸一线监管、货物查验工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管、货物查验工作。",
    "department": "拉萨海关",
    "workLocation": "西藏自治区日喀则市",
    "recruitCount": 3,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_611",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "西安海关",
    "workLocation": "陕西省西安市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_612",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "西安海关",
    "workLocation": "陕西省西安市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_613",
    "name": "从事海关一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关一线监管工作。",
    "department": "西安海关",
    "workLocation": "陕西省西安市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_614",
    "name": "从事海关口岸一线货物查验监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线货物查验监管工作。",
    "department": "兰州海关",
    "workLocation": "甘肃省兰州市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_615",
    "name": "从事海关口岸一线货物查验监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线货物查验监管工作。",
    "department": "兰州海关",
    "workLocation": "甘肃省天水市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_616",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "西宁海关",
    "workLocation": "青海省海西蒙古族藏族自治州格尔木市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_617",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "银川海关",
    "workLocation": "宁夏回族自治区银川市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_618",
    "name": "从事海关口岸一线监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管工作。",
    "department": "银川海关",
    "workLocation": "宁夏回族自治区石嘴山市",
    "recruitCount": 2,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_619",
    "name": "从事海关口岸一线监管、货物查验工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管、货物查验工作。",
    "department": "乌鲁木齐海关",
    "workLocation": "新疆维吾尔自治区克孜勒苏柯尔克孜自治州乌恰县",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_620",
    "name": "从事海关口岸一线监管、货物查验工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管、货物查验工作。",
    "department": "乌鲁木齐海关",
    "workLocation": "新疆维吾尔自治区伊犁哈萨克自治州霍尔果斯市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_621",
    "name": "从事海关口岸一线监管、货物查验工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管、货物查验工作。",
    "department": "乌鲁木齐海关",
    "workLocation": "新疆维吾尔自治区伊犁哈萨克自治州霍尔果斯市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_622",
    "name": "从事海关口岸一线监管、货物查验工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管、货物查验工作。",
    "department": "乌鲁木齐海关",
    "workLocation": "新疆维吾尔自治区博尔塔拉蒙古自治州阿拉山口市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_623",
    "name": "从事海关口岸一线监管、货物查验工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事海关口岸一线监管、货物查验工作。",
    "department": "乌鲁木齐海关",
    "workLocation": "新疆维吾尔自治区塔城地区塔城市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "海关管理",
        "海关检验检疫安全",
        "海关稽查"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_628",
    "name": "从事税收、社会保险费和非税收入征管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税收、社会保险费和非税收入征管工作",
    "department": "国家税务总局河北省税务局",
    "workLocation": "河北省秦皇岛市昌黎县",
    "recruitCount": 2,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "财政学类",
        "金融学类",
        "经济与贸易类",
        "统计学类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_629",
    "name": "从事税收、社会保险费和非税收入征管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税收、社会保险费和非税收入征管工作",
    "department": "国家税务总局河北省税务局",
    "workLocation": "河北省衡水市故城县",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "财政学类",
        "金融学类",
        "经济与贸易类",
        "统计学类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_630",
    "name": "从事税务相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务相关工作",
    "department": "国家税务总局内蒙古自治区税务局",
    "workLocation": "内蒙古自治区呼和浩特市赛罕区",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "数学类",
        "统计学类",
        "电子信息类",
        "计算机类"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_631",
    "name": "从事税务相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务相关工作",
    "department": "国家税务总局内蒙古自治区税务局",
    "workLocation": "内蒙古自治区呼和浩特市赛罕区",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "数学类",
        "统计学类",
        "电子信息类",
        "计算机类"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_632",
    "name": "从事税务相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务相关工作",
    "department": "国家税务总局内蒙古自治区税务局",
    "workLocation": "内蒙古自治区呼和浩特市赛罕区",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "数学类",
        "统计学类",
        "电子信息类",
        "计算机类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_633",
    "name": "从事税务相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务相关工作",
    "department": "国家税务总局内蒙古自治区税务局",
    "workLocation": "内蒙古自治区兴安盟科尔沁右翼中旗",
    "recruitCount": 2,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学类",
        "政治学类",
        "马克思主义理论类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_634",
    "name": "从事税务相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务相关工作",
    "department": "国家税务总局内蒙古自治区税务局",
    "workLocation": "内蒙古自治区通辽市扎鲁特旗",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学类",
        "政治学类",
        "马克思主义理论类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_635",
    "name": "从事基层税务机关税收征收管理、纳税服务、行政管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事基层税务机关税收征收管理、纳税服务、行政管理等工作",
    "department": "国家税务总局辽宁省税务局",
    "workLocation": "辽宁省沈阳市新民市",
    "recruitCount": 4,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "财政学类",
        "财会审计类",
        "社会保障类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_636",
    "name": "从事基层税务机关税收征收管理、纳税服务、行政管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事基层税务机关税收征收管理、纳税服务、行政管理等工作",
    "department": "国家税务总局辽宁省税务局",
    "workLocation": "辽宁省沈阳市法库县",
    "recruitCount": 3,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "财政学类",
        "金融学类",
        "财会审计类",
        "社会保障类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_637",
    "name": "从事基层税务机关税收征收管理、纳税服务、行政管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事基层税务机关税收征收管理、纳税服务、行政管理等工作",
    "department": "国家税务总局辽宁省税务局",
    "workLocation": "辽宁省沈阳市康平县",
    "recruitCount": 4,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "财政学类",
        "金融学类",
        "财会审计类",
        "社会保障类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_638",
    "name": "从事基层税务机关税收征收管理、纳税服务、行政管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事基层税务机关税收征收管理、纳税服务、行政管理等工作",
    "department": "国家税务总局辽宁省税务局",
    "workLocation": "辽宁省抚顺市东洲区",
    "recruitCount": 2,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "财政学类",
        "金融学类",
        "财会审计类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_639",
    "name": "从事基层税务机关税收征收管理、纳税服务、行政管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事基层税务机关税收征收管理、纳税服务、行政管理等工作",
    "department": "国家税务总局辽宁省税务局",
    "workLocation": "辽宁省抚顺市新宾满族自治县",
    "recruitCount": 4,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "财政学类",
        "金融学类",
        "工商管理类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_647",
    "name": "从事税务相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务相关工作",
    "department": "国家税务总局吉林省税务局",
    "workLocation": "吉林省长春市朝阳区",
    "recruitCount": 3,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "财政学类",
        "财会审计类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_648",
    "name": "从事税务相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务相关工作",
    "department": "国家税务总局吉林省税务局",
    "workLocation": "吉林省长春市朝阳区",
    "recruitCount": 3,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学类",
        "马克思主义理论类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_649",
    "name": "从事税务相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务相关工作",
    "department": "国家税务总局吉林省税务局",
    "workLocation": "吉林省长春市朝阳区",
    "recruitCount": 3,
    "needAdjust": 10,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学类",
        "马克思主义理论类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_650",
    "name": "从事税务相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务相关工作",
    "department": "国家税务总局吉林省税务局",
    "workLocation": "吉林省长春市南关区",
    "recruitCount": 3,
    "needAdjust": 10,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "财政学类",
        "财会审计类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_651",
    "name": "从事税务相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务相关工作",
    "department": "国家税务总局吉林省税务局",
    "workLocation": "吉林省长春市南关区",
    "recruitCount": 3,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "财政学类",
        "财会审计类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_667",
    "name": "从事税务相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务相关工作",
    "department": "国家税务总局黑龙江省税务局",
    "workLocation": "黑龙江省哈尔滨市道里区",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_668",
    "name": "从事基层税务机关税收征收管理、纳税服务、行政管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事基层税务机关税收征收管理、纳税服务、行政管理等工作",
    "department": "国家税务总局黑龙江省税务局",
    "workLocation": "黑龙江省哈尔滨市宾县",
    "recruitCount": 2,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "财政学类",
        "财会审计类"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_669",
    "name": "从事基层税务机关税收征收管理、纳税服务、行政管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事基层税务机关税收征收管理、纳税服务、行政管理等工作",
    "department": "国家税务总局黑龙江省税务局",
    "workLocation": "黑龙江省哈尔滨市延寿县",
    "recruitCount": 2,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学类",
        "中国语言文学类",
        "经济学类",
        "财政学类",
        "金融学类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_670",
    "name": "从事基层税务机关税收征收管理、纳税服务、行政管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事基层税务机关税收征收管理、纳税服务、行政管理等工作",
    "department": "国家税务总局黑龙江省税务局",
    "workLocation": "黑龙江省齐齐哈尔市甘南县",
    "recruitCount": 3,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学类",
        "中国语言文学类",
        "经济学类",
        "财政学类",
        "金融学类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_671",
    "name": "从事基层税务机关税收征收管理、纳税服务、行政管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事基层税务机关税收征收管理、纳税服务、行政管理等工作",
    "department": "国家税务总局黑龙江省税务局",
    "workLocation": "黑龙江省佳木斯市桦南县",
    "recruitCount": 2,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学类",
        "中国语言文学类",
        "经济学类",
        "财政学类",
        "金融学类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_678",
    "name": "从事税收相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税收相关工作",
    "department": "国家税务总局上海市税务局",
    "workLocation": "上海市黄浦区",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "数学类",
        "统计学类",
        "电气类",
        "电子信息类",
        "自动化类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_679",
    "name": "从事税收相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税收相关工作",
    "department": "国家税务总局上海市税务局",
    "workLocation": "上海市黄浦区",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "数学类",
        "统计学类",
        "电气类",
        "电子信息类",
        "自动化类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_680",
    "name": "从事税务稽查工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务稽查工作",
    "department": "国家税务总局江苏省税务局",
    "workLocation": "江苏省南京市",
    "recruitCount": 4,
    "needAdjust": 10,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "财政学类",
        "财会审计类"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_681",
    "name": "从事税务稽查工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务稽查工作",
    "department": "国家税务总局江苏省税务局",
    "workLocation": "江苏省南京市",
    "recruitCount": 2,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "财政学类",
        "财会审计类"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_682",
    "name": "从事税务稽查工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务稽查工作",
    "department": "国家税务总局江苏省税务局",
    "workLocation": "江苏省南京市",
    "recruitCount": 4,
    "needAdjust": 10,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "财政学类",
        "财会审计类"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_683",
    "name": "从事税务稽查工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务稽查工作",
    "department": "国家税务总局江苏省税务局",
    "workLocation": "江苏省南京市",
    "recruitCount": 4,
    "needAdjust": 12,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "财政学类",
        "财会审计类"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_684",
    "name": "从事税务征收管理工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务征收管理工作",
    "department": "国家税务总局江苏省税务局",
    "workLocation": "江苏省宿迁市沭阳县",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "财政学类",
        "财会审计类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_685",
    "name": "从事税务相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务相关工作",
    "department": "国家税务总局浙江省税务局",
    "workLocation": "浙江省衢州市柯城区",
    "recruitCount": 2,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "财政学类",
        "财会审计类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_686",
    "name": "从事基层税务系统税收征管、纳税服务、行政管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事基层税务系统税收征管、纳税服务、行政管理等工作",
    "department": "国家税务总局宁波市税务局",
    "workLocation": "浙江省宁波市鄞州区",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "财政学类",
        "财会审计类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_687",
    "name": "主要从事税收征管、纳税服务和行政事务工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事税收征管、纳税服务和行政事务工作",
    "department": "国家税务总局安徽省税务局",
    "workLocation": "安徽省宣城市广德市",
    "recruitCount": 2,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "财政学类",
        "金融学类",
        "经济与贸易类",
        "社会保障类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_688",
    "name": "综合税费管理",
    "category": "国考",
    "subCategory": "其他",
    "description": "综合税费管理",
    "department": "国家税务总局河南省税务局",
    "workLocation": "河南省郑州市登封市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "财政学类",
        "财会审计类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_689",
    "name": "综合税费管理",
    "category": "国考",
    "subCategory": "其他",
    "description": "综合税费管理",
    "department": "国家税务总局河南省税务局",
    "workLocation": "河南省新乡市",
    "recruitCount": 2,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "财政学类",
        "财会审计类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_690",
    "name": "从事税务稽查及相关行政工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务稽查及相关行政工作",
    "department": "国家税务总局湖北省税务局",
    "workLocation": "湖北省武汉市江岸区",
    "recruitCount": 3,
    "needAdjust": 7,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "财政学类",
        "金融学类",
        "经济与贸易类",
        "财会审计类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_691",
    "name": "从事税务稽查及相关行政工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务稽查及相关行政工作",
    "department": "国家税务总局湖北省税务局",
    "workLocation": "湖北省武汉市江岸区",
    "recruitCount": 3,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "财政学类",
        "金融学类",
        "经济与贸易类",
        "财会审计类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_692",
    "name": "从事税务稽查及相关行政工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务稽查及相关行政工作",
    "department": "国家税务总局湖北省税务局",
    "workLocation": "湖北省武汉市洪山区",
    "recruitCount": 3,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "财政学类",
        "金融学类",
        "经济与贸易类",
        "财会审计类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_693",
    "name": "从事税务稽查及相关行政工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务稽查及相关行政工作",
    "department": "国家税务总局湖北省税务局",
    "workLocation": "湖北省武汉市蔡甸区",
    "recruitCount": 2,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "财政学类",
        "金融学类",
        "经济与贸易类",
        "财会审计类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_694",
    "name": "从事税费征收管理、纳税服务及相关行政工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税费征收管理、纳税服务及相关行政工作",
    "department": "国家税务总局湖北省税务局",
    "workLocation": "湖北省荆州市监利市",
    "recruitCount": 3,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "金融学类",
        "社会保障类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_697",
    "name": "从事税务稽查工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务稽查工作",
    "department": "国家税务总局湖南省税务局",
    "workLocation": "湖南省长沙市雨花区",
    "recruitCount": 2,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "财政学类",
        "财会审计类"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_698",
    "name": "从事税收风险管理及相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税收风险管理及相关工作",
    "department": "国家税务总局湖南省税务局",
    "workLocation": "湖南省长沙市雨花区",
    "recruitCount": 2,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "数学类",
        "统计学类",
        "计算机类"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_699",
    "name": "从事基层税务机关税费征管、纳税服务、行政管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事基层税务机关税费征管、纳税服务、行政管理等工作",
    "department": "国家税务总局湖南省税务局",
    "workLocation": "湖南省永州市道县",
    "recruitCount": 2,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "数学类",
        "统计学类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_700",
    "name": "负责税务稽查相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "负责税务稽查相关工作",
    "department": "国家税务总局广东省税务局",
    "workLocation": "广东省广州市",
    "recruitCount": 4,
    "needAdjust": 10,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "财政学类",
        "金融学类",
        "财会审计类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_701",
    "name": "负责税务稽查相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "负责税务稽查相关工作",
    "department": "国家税务总局广东省税务局",
    "workLocation": "广东省广州市",
    "recruitCount": 4,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "财政学类",
        "金融学类",
        "财会审计类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_702",
    "name": "负责税务稽查相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "负责税务稽查相关工作",
    "department": "国家税务总局广东省税务局",
    "workLocation": "广东省广州市",
    "recruitCount": 4,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "财政学类",
        "金融学类",
        "财会审计类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_703",
    "name": "负责税务稽查相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "负责税务稽查相关工作",
    "department": "国家税务总局广东省税务局",
    "workLocation": "广东省广州市",
    "recruitCount": 4,
    "needAdjust": 8,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "财政学类",
        "金融学类",
        "财会审计类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_704",
    "name": "从事税务相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务相关工作",
    "department": "国家税务总局海南省税务局",
    "workLocation": "海南省海口市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "数学类",
        "统计学类",
        "计算机类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_705",
    "name": "从事税务相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务相关工作",
    "department": "国家税务总局海南省税务局",
    "workLocation": "海南省海口市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "数学类",
        "统计学类",
        "计算机类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_706",
    "name": "从事税务稽查、社会保险费和有关非税收入检查工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务稽查、社会保险费和有关非税收入检查工作",
    "department": "国家税务总局海南省税务局",
    "workLocation": "海南省海口市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "财会审计类",
        "财政学类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_707",
    "name": "从事税务稽查、社会保险费和有关非税收入检查工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务稽查、社会保险费和有关非税收入检查工作",
    "department": "国家税务总局海南省税务局",
    "workLocation": "海南省海口市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "财会审计类",
        "财政学类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_708",
    "name": "从事税务稽查、社会保险费和有关非税收入检查工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务稽查、社会保险费和有关非税收入检查工作",
    "department": "国家税务总局海南省税务局",
    "workLocation": "海南省海口市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "财会审计类",
        "财政学类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_709",
    "name": "税费分析",
    "category": "国考",
    "subCategory": "其他",
    "description": "税费分析",
    "department": "国家税务总局云南省税务局",
    "workLocation": "云南省玉溪市元江哈尼族彝族傣族自治县",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "财政学类",
        "社会保障类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_710",
    "name": "从事税务相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务相关工作",
    "department": "国家税务总局西藏自治区税务局",
    "workLocation": "西藏自治区拉萨市城关区",
    "recruitCount": 2,
    "needAdjust": 10,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "财政学类",
        "金融学类",
        "经济与贸易类",
        "财会审计类",
        "社会保障类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_711",
    "name": "从事税务相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务相关工作",
    "department": "国家税务总局西藏自治区税务局",
    "workLocation": "西藏自治区拉萨市城关区",
    "recruitCount": 2,
    "needAdjust": 7,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "计算机类",
        "电子信息类",
        "自动化类",
        "数学类",
        "统计学类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_712",
    "name": "从事税务相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务相关工作",
    "department": "国家税务总局西藏自治区税务局",
    "workLocation": "西藏自治区拉萨市城关区",
    "recruitCount": 2,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "财政学类",
        "金融学类",
        "财会审计类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_713",
    "name": "从事税务相关工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务相关工作。",
    "department": "国家税务总局甘肃省税务局",
    "workLocation": "甘肃省天水市张家川回族自治县",
    "recruitCount": 2,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "财政学类",
        "金融学类",
        "经济与贸易类",
        "财会审计类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_714",
    "name": "从事税务相关工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事税务相关工作。",
    "department": "国家税务总局甘肃省税务局",
    "workLocation": "甘肃省武威市民勤县",
    "recruitCount": 2,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "财政学类",
        "金融学类",
        "经济与贸易类",
        "财会审计类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_715",
    "name": "从事基层税务机关税收、社会保险费和有关非税收入征收管理服务等",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事基层税务机关税收、社会保险费和有关非税收入征收管理服务等",
    "department": "国家税务总局新疆维吾尔自治区税务局",
    "workLocation": "新疆维吾尔自治区博尔塔拉蒙古自治州博乐市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "财政学类",
        "金融学类",
        "财会审计类",
        "社会保障类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_716",
    "name": "从事经营者集中反垄断审查等工作，从事经营者集中监督执行和违法实施经营者集中案件调查等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事经营者集中反垄断审查等工作，从事经营者集中监督执行和违法实施经营者集中案件调查等工作。",
    "department": "国家市场监督管理总局",
    "workLocation": "北京市海淀区",
    "recruitCount": 2,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "0202应用经济学",
        "030105民商法学",
        "030107经济法学"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_717",
    "name": "从事网络交易监管执法工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事网络交易监管执法工作。",
    "department": "国家市场监督管理总局",
    "workLocation": "北京市海淀区",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "0301法学(本科要求为030101K法学专业)"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_718",
    "name": "拟订餐饮食品安全监管制度措施，组织实施并指导开展餐饮食品安全监督检查工作，组织餐饮食品安全智慧监管工",
    "category": "国考",
    "subCategory": "其他",
    "description": "拟订餐饮食品安全监管制度措施，组织实施并指导开展餐饮食品安全监督检查工作，组织餐饮食品安全智慧监管工作。",
    "department": "国家市场监督管理总局",
    "workLocation": "北京市海淀区",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "(0775",
        "0812)计算机科学与技术",
        "(0779",
        "1004)公共卫生与预防医学"
      ],
      "education": "仅限硕士研究生",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_719",
    "name": "从事机关司局金融监管或综合类工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事机关司局金融监管或综合类工作",
    "department": "国家金融监督管理总局",
    "workLocation": "北京市西城区",
    "recruitCount": 10,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "最高学历专业为国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "仅限硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_720",
    "name": "从事机关司局金融监管或综合类工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事机关司局金融监管或综合类工作",
    "department": "国家金融监督管理总局",
    "workLocation": "北京市西城区",
    "recruitCount": 8,
    "needAdjust": 10,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "最高学历专业为国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "仅限硕士研究生",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_721",
    "name": "从事稽查总队稽查调查或综合类工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事稽查总队稽查调查或综合类工作",
    "department": "国家金融监督管理总局",
    "workLocation": "北京市西城区",
    "recruitCount": 12,
    "needAdjust": 18,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "最高学历专业为国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "仅限硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_722",
    "name": "从事机关司局金融监管或综合类工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事机关司局金融监管或综合类工作",
    "department": "国家金融监督管理总局",
    "workLocation": "北京市西城区",
    "recruitCount": 3,
    "needAdjust": 9,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "最高学历专业为保险",
        "精算相关专业"
      ],
      "education": "仅限硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_723",
    "name": "从事机关司局金融监管或综合类工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事机关司局金融监管或综合类工作",
    "department": "国家金融监督管理总局",
    "workLocation": "北京市西城区",
    "recruitCount": 5,
    "needAdjust": 10,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "最高学历专业为会计",
        "财务管理",
        "审计相关专业"
      ],
      "education": "仅限硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_726",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局北京监管局",
    "workLocation": "北京市",
    "recruitCount": 15,
    "needAdjust": 22,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济金融（学术型硕士仅限经济学门类下的专业报考",
        "专业型硕士仅限金融硕士",
        "保险硕士报考）。"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_727",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局北京监管局",
    "workLocation": "北京市",
    "recruitCount": 5,
    "needAdjust": 8,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "最高学历专业为国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_728",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局北京监管局",
    "workLocation": "北京市",
    "recruitCount": 5,
    "needAdjust": 16,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "研究生专业为投资学",
        "投资经济学或本科专业为投资学（020304）且研究生专业为经济金融类。"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_729",
    "name": "主要从事内部财会管理工作及相关监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事内部财会管理工作及相关监管工作。",
    "department": "国家金融监督管理总局北京监管局",
    "workLocation": "北京市",
    "recruitCount": 4,
    "needAdjust": 9,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学",
        "财务管理",
        "审计学（专业型硕士仅限会计硕士",
        "审计硕士报考）。"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_730",
    "name": "主要从事金融信息科技风险监管、电子设备软硬件管理及信息系统运行维护等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融信息科技风险监管、电子设备软硬件管理及信息系统运行维护等工作。",
    "department": "国家金融监督管理总局北京监管局",
    "workLocation": "北京市",
    "recruitCount": 6,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "计算机科学与技术",
        "计算机软件与理论",
        "计算机系统结构",
        "计算机应用技术",
        "人工智能"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_731",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局天津监管局",
    "workLocation": "天津市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "精算学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_732",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "department": "国家金融监督管理总局河北监管局",
    "workLocation": "河北省张家口市沽源县",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科或研究生专业为经济",
        "财政",
        "金融",
        "经济与贸易类（专业代码02开头）"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_733",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "department": "国家金融监督管理总局河北监管局",
    "workLocation": "河北省张家口市张北县",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科或研究生专业为经济",
        "财政",
        "金融",
        "经济与贸易类（专业代码02开头）"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_734",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "department": "国家金融监督管理总局河北监管局",
    "workLocation": "河北省张家口市尚义县",
    "recruitCount": 2,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科或研究生专业为经济",
        "财政",
        "金融",
        "经济与贸易类（专业代码02开头）"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_735",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "department": "国家金融监督管理总局河北监管局",
    "workLocation": "河北省张家口市赤城县",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科或研究生专业为经济",
        "财政",
        "金融",
        "经济与贸易类（专业代码02开头）"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_736",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "department": "国家金融监督管理总局河北监管局",
    "workLocation": "河北省张家口市涿鹿县",
    "recruitCount": 2,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科或研究生专业为经济",
        "财政",
        "金融",
        "经济与贸易类（专业代码02开头）"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_773",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管综合工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管综合工作。",
    "department": "国家金融监督管理总局山西监管局",
    "workLocation": "山西省太原市",
    "recruitCount": 2,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_774",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管综合工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管综合工作。",
    "department": "国家金融监督管理总局山西监管局",
    "workLocation": "山西省大同市天镇县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "0201经济学类",
        "0202财政学类",
        "0203金融学类",
        "0204经济与贸易类"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_775",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管综合工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管综合工作。",
    "department": "国家金融监督管理总局山西监管局",
    "workLocation": "山西省吕梁市交口县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "0201经济学类",
        "0202财政学类",
        "0203金融学类",
        "0204经济与贸易类"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_776",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管综合工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管综合工作。",
    "department": "国家金融监督管理总局山西监管局",
    "workLocation": "山西省吕梁市临县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "0201经济学类",
        "0202财政学类",
        "0203金融学类",
        "0204经济与贸易类"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_777",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管综合工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管综合工作。",
    "department": "国家金融监督管理总局山西监管局",
    "workLocation": "山西省吕梁市兴县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "0201经济学类",
        "0202财政学类",
        "0203金融学类",
        "0204经济与贸易类"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_790",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局内蒙古监管局",
    "workLocation": "内蒙古自治区呼和浩特市赛罕区",
    "recruitCount": 4,
    "needAdjust": 14,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_791",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局内蒙古监管局",
    "workLocation": "内蒙古自治区呼伦贝尔市根河市",
    "recruitCount": 2,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类(0201)",
        "金融学类(0203)"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_792",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局内蒙古监管局",
    "workLocation": "内蒙古自治区呼伦贝尔市莫力达瓦达斡尔族自治旗",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类(0201)",
        "金融学类(0203)"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_793",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局内蒙古监管局",
    "workLocation": "内蒙古自治区呼伦贝尔市莫力达瓦达斡尔族自治旗",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类(0201)",
        "金融学类(0203)"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_794",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局内蒙古监管局",
    "workLocation": "内蒙古自治区呼伦贝尔市新巴尔虎左旗",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类(0201)",
        "金融学类(0203)"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_849",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局辽宁监管局",
    "workLocation": "辽宁省沈阳市",
    "recruitCount": 8,
    "needAdjust": 16,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_850",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局辽宁监管局",
    "workLocation": "辽宁省鞍山市",
    "recruitCount": 3,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济金融类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_851",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局辽宁监管局",
    "workLocation": "辽宁省鞍山市海城市",
    "recruitCount": 2,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济金融类"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_852",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局辽宁监管局",
    "workLocation": "辽宁省鞍山市岫岩满族自治县",
    "recruitCount": 2,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济金融类"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_853",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局辽宁监管局",
    "workLocation": "辽宁省鞍山市岫岩满族自治县",
    "recruitCount": 2,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济金融类"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_870",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局吉林监管局",
    "workLocation": "吉林省长春市",
    "recruitCount": 4,
    "needAdjust": 10,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_871",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局吉林监管局",
    "workLocation": "吉林省延边朝鲜族自治州",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科或研究生专业为经济学门类（02）"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_872",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局吉林监管局",
    "workLocation": "吉林省吉林市磐石市",
    "recruitCount": 2,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科或研究生专业为经济学门类（02）"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_873",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局吉林监管局",
    "workLocation": "吉林省吉林市舒兰市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科或研究生专业为经济学门类（02）"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_874",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局吉林监管局",
    "workLocation": "吉林省延边朝鲜族自治州珲春市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科或研究生专业为经济学门类（02）"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_885",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局黑龙江监管局",
    "workLocation": "黑龙江省哈尔滨市",
    "recruitCount": 4,
    "needAdjust": 8,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_886",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局黑龙江监管局",
    "workLocation": "黑龙江省哈尔滨市",
    "recruitCount": 2,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "理论经济学（不含经济史",
        "经济思想史相关专业）",
        "应用经济学（不含国际贸易",
        "能源",
        "资源"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_887",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局黑龙江监管局",
    "workLocation": "黑龙江省大庆市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "金融学类（不含国际贸易",
        "能源",
        "资源",
        "环境"
      ],
      "education": "仅限本科",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_888",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局黑龙江监管局",
    "workLocation": "黑龙江省双鸭山市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "金融学类（不含国际贸易",
        "能源",
        "资源",
        "环境"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_889",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局黑龙江监管局",
    "workLocation": "黑龙江省哈尔滨市呼兰区",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "金融学类（不含国际贸易",
        "能源",
        "资源",
        "环境"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_915",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局江苏监管局",
    "workLocation": "江苏省徐州市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科生招收金融学",
        "金融工程",
        "保险学",
        "经济与金融",
        "研究生招收金融学（含保险学）"
      ],
      "education": "本科或硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_916",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局江苏监管局",
    "workLocation": "江苏省苏州市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科生招收经济学",
        "经济统计学",
        "数字经济",
        "金融学",
        "金融工程"
      ],
      "education": "本科或硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_917",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局江苏监管局",
    "workLocation": "江苏省南通市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科生招收：经济学类（0201）",
        "金融学类（0203）",
        "研究生招收：理论经济学（0201）",
        "应用经济学（0202）",
        "金融（0251）"
      ],
      "education": "本科或硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_918",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局江苏监管局",
    "workLocation": "江苏省扬州市高邮市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科：保险学",
        "研究生：保险"
      ],
      "education": "本科或硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_919",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局江苏监管局",
    "workLocation": "江苏省扬州市仪征市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科：经济学类",
        "财政学类",
        "金融学类",
        "研究生：经济学类"
      ],
      "education": "本科或硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_932",
    "name": "主要从事内部综合管理、文字材料撰写等工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事内部综合管理、文字材料撰写等工作。",
    "department": "国家金融监督管理总局浙江监管局",
    "workLocation": "浙江省杭州市淳安县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "金融学类"
      ],
      "education": "本科或硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_933",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局浙江监管局",
    "workLocation": "浙江省金华市永康市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "以本科专业报考：经济学",
        "以研究生专业报考：02经济学",
        "0714统计学（经济学学位）"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_934",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局浙江监管局",
    "workLocation": "浙江省衢州市龙游县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "以本科专业报考：经济学",
        "以研究生专业报考：02经济学"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_935",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局浙江监管局",
    "workLocation": "浙江省台州市温岭市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "以本科专业报考：经济学",
        "以研究生专业报考：02经济学"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_936",
    "name": "主要从事内部财会管理工作及相关监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事内部财会管理工作及相关监管工作。",
    "department": "国家金融监督管理总局浙江监管局",
    "workLocation": "浙江省杭州市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "1202工商管理学（财务管理",
        "会计学",
        "审计学）",
        "1253会计",
        "1257审计"
      ],
      "education": "仅限硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_937",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局安徽监管局",
    "workLocation": "安徽省蚌埠市固镇县",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "金融学类"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_938",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局安徽监管局",
    "workLocation": "安徽省滁州市天长市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "金融学类"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_939",
    "name": "主要从事内部财会管理工作及相关监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事内部财会管理工作及相关监管工作。",
    "department": "国家金融监督管理总局安徽监管局",
    "workLocation": "安徽省淮北市相山区",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "120203k会计学",
        "120204财务管理",
        "120207审计学"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_940",
    "name": "主要从事内部财会管理工作及相关监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事内部财会管理工作及相关监管工作。",
    "department": "国家金融监督管理总局安徽监管局",
    "workLocation": "安徽省马鞍山市和县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "120203K会计学",
        "120204财务管理",
        "120207审计学"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_941",
    "name": "主要从事内部财会管理工作及相关监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事内部财会管理工作及相关监管工作。",
    "department": "国家金融监督管理总局安徽监管局",
    "workLocation": "安徽省宣城市泾县",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "120203K会计学",
        "120204财务管理",
        "120207审计学"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_946",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局福建监管局",
    "workLocation": "福建省福州市",
    "recruitCount": 3,
    "needAdjust": 10,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "货币银行学",
        "金融工程",
        "金融数学",
        "金融科技"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_947",
    "name": "主要从事内部财会管理工作及相关监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事内部财会管理工作及相关监管工作。",
    "department": "国家金融监督管理总局福建监管局",
    "workLocation": "福建省宁德市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学",
        "财务管理"
      ],
      "education": "仅限本科",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_948",
    "name": "主要从事内部财会管理工作及相关监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事内部财会管理工作及相关监管工作。",
    "department": "国家金融监督管理总局福建监管局",
    "workLocation": "福建省宁德市霞浦县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学",
        "财务管理"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_949",
    "name": "主要从事内部财会管理工作及相关监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事内部财会管理工作及相关监管工作。",
    "department": "国家金融监督管理总局福建监管局",
    "workLocation": "福建省漳州市漳浦县",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学",
        "财务管理",
        "审计学"
      ],
      "education": "仅限本科",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_950",
    "name": "主要从事内部财会管理工作及相关监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事内部财会管理工作及相关监管工作。",
    "department": "国家金融监督管理总局福建监管局",
    "workLocation": "福建省三明市大田县",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科：120203K会计学",
        "120204财务管理",
        "120207审计学  研究生：1253会计",
        "1257审计"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_959",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "department": "国家金融监督管理总局江西监管局",
    "workLocation": "江西省南昌市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "保险",
        "精算等专业"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_960",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "department": "国家金融监督管理总局江西监管局",
    "workLocation": "江西省赣州市安远县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大学本科：0203金融学类",
        "研究生：金融",
        "保险等专业"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_961",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "department": "国家金融监督管理总局江西监管局",
    "workLocation": "江西省九江市修水县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大学本科：0203金融学类",
        "研究生：金融",
        "保险等专业"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_962",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "department": "国家金融监督管理总局江西监管局",
    "workLocation": "江西省九江市修水县",
    "recruitCount": 2,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大学本科：0203金融学类",
        "研究生：金融",
        "保险等专业"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_963",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "department": "国家金融监督管理总局江西监管局",
    "workLocation": "江西省九江市都昌县",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大学本科：0203金融学类",
        "研究生：金融",
        "保险等专业"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_983",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "department": "国家金融监督管理总局山东监管局",
    "workLocation": "山东省济南市",
    "recruitCount": 2,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "金融工程",
        "金融数学",
        "金融科技"
      ],
      "education": "仅限硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_984",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "department": "国家金融监督管理总局山东监管局",
    "workLocation": "山东省济南市",
    "recruitCount": 4,
    "needAdjust": 10,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "仅限硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_985",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "department": "国家金融监督管理总局山东监管局",
    "workLocation": "山东省烟台市蓬莱区",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "以本科专业报考：经济学类",
        "财政学类",
        "金融学类",
        "经济与贸易类",
        "统计学类。以研究生专业报考：理论经济学"
      ],
      "education": "本科或硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_986",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "department": "国家金融监督管理总局山东监管局",
    "workLocation": "山东省潍坊市临朐县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "以本科专业报考：经济学类",
        "财政学类",
        "金融学类",
        "经济与贸易类",
        "统计学类。以研究生专业报考：理论经济学"
      ],
      "education": "本科或硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_987",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "department": "国家金融监督管理总局山东监管局",
    "workLocation": "山东省威海市乳山市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "以本科专业报考：经济学类",
        "财政学类",
        "金融学类",
        "经济与贸易类",
        "统计学类。以研究生专业报考：理论经济学"
      ],
      "education": "本科或硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1020",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "department": "国家金融监督管理总局河南监管局",
    "workLocation": "河南省平顶山市鲁山县",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类（02）"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1021",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "department": "国家金融监督管理总局河南监管局",
    "workLocation": "河南省平顶山市鲁山县",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类（02）"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1022",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "department": "国家金融监督管理总局河南监管局",
    "workLocation": "河南省安阳市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类（02）"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1023",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "department": "国家金融监督管理总局河南监管局",
    "workLocation": "河南省安阳市林州市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类（02）"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1024",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "department": "国家金融监督管理总局河南监管局",
    "workLocation": "河南省南阳市社旗县",
    "recruitCount": 2,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类（02）"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1050",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局湖北监管局",
    "workLocation": "湖北省十堰市竹山县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类（专业代码0201）",
        "金融学类（专业代码0203）"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1051",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局湖北监管局",
    "workLocation": "湖北省十堰市房县",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类（专业代码0201）",
        "金融学类（专业代码0203）"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1052",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局湖北监管局",
    "workLocation": "湖北省荆州市松滋市",
    "recruitCount": 2,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类（专业代码0201）",
        "金融学类（专业代码0203）"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1053",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局湖北监管局",
    "workLocation": "湖北省荆州市松滋市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类（专业代码0201）",
        "金融学类（专业代码0203）"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1054",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局湖北监管局",
    "workLocation": "湖北省荆州市公安县",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类（专业代码0201）",
        "金融学类（专业代码0203）"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1066",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局湖南监管局",
    "workLocation": "湖南省益阳市赫山区",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "02经济学类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1067",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局湖南监管局",
    "workLocation": "湖南省张家界市永定区",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "02经济学类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1068",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局湖南监管局",
    "workLocation": "湖南省岳阳市华容县",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "02经济学类"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1069",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局湖南监管局",
    "workLocation": "湖南省衡阳市衡东县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "02经济学类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1070",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局湖南监管局",
    "workLocation": "湖南省永州市祁阳市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "02经济学类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1075",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局广东监管局",
    "workLocation": "广东省汕头市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "020301K金融学",
        "020302金融工程",
        "020307T经济与金融",
        "020310T金融科技"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1076",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局广东监管局",
    "workLocation": "广东省河源市连平县",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "0201经济学类",
        "0203金融学类",
        "0204经济与贸易类"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1077",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局广东监管局",
    "workLocation": "广东省惠州市惠东县",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大学本科：0201经济学类",
        "0203金融学类",
        "研究生：0201理论经济学",
        "0202应用经济学",
        "0251金融"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1078",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局广东监管局",
    "workLocation": "广东省江门市台山市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "020301K金融学",
        "020302金融工程",
        "020303保险学",
        "020304投资学"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1079",
    "name": "主要从事内部财会管理工作及相关监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事内部财会管理工作及相关监管工作。",
    "department": "国家金融监督管理总局广东监管局",
    "workLocation": "广东省汕头市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "120203K会计学",
        "120204财务管理",
        "120207审计学"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1087",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局广西监管局",
    "workLocation": "广西壮族自治区南宁市",
    "recruitCount": 6,
    "needAdjust": 16,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学门类（含金融学类）"
      ],
      "education": "仅限硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1088",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局广西监管局",
    "workLocation": "广西壮族自治区南宁市",
    "recruitCount": 2,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "金融工程"
      ],
      "education": "仅限硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1089",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局广西监管局",
    "workLocation": "广西壮族自治区百色市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "金融学类"
      ],
      "education": "本科或硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1090",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局广西监管局",
    "workLocation": "广西壮族自治区南宁市横州市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学门类（含金融学类）"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1091",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局广西监管局",
    "workLocation": "广西壮族自治区桂林市荔浦市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学门类（含金融学类）"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1118",
    "name": "主要从事金融监管法律法规事务工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融监管法律法规事务工作。",
    "department": "国家金融监督管理总局海南监管局",
    "workLocation": "海南省",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "研究生为法学类专业（一级学科代码为0301）或法律专业（代码为0351）",
        "且本科需为法学专业（仅限专业代码030101K）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1119",
    "name": "主要从事金融信息科技风险监管、电子设备软硬件管理及信息系统运行维护等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融信息科技风险监管、电子设备软硬件管理及信息系统运行维护等工作。",
    "department": "国家金融监督管理总局海南监管局",
    "workLocation": "海南省",
    "recruitCount": 2,
    "needAdjust": 7,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "计算机科学与技术类专业",
        "软件工程类专业"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1120",
    "name": "主要从事内部财会管理工作及相关监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事内部财会管理工作及相关监管工作。",
    "department": "国家金融监督管理总局重庆监管局",
    "workLocation": "重庆市黔江区",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大学本科：会计学",
        "财务管理",
        "审计学",
        "研究生：会计学",
        "会计"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1121",
    "name": "主要从事内部财会管理工作及相关监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事内部财会管理工作及相关监管工作。",
    "department": "国家金融监督管理总局重庆监管局",
    "workLocation": "重庆市江津区",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大学本科：会计学",
        "财务管理",
        "审计学",
        "研究生：会计学",
        "会计"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1122",
    "name": "主要从事内部财会管理工作及相关监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事内部财会管理工作及相关监管工作。",
    "department": "国家金融监督管理总局重庆监管局",
    "workLocation": "重庆市合川区",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大学本科：会计学",
        "财务管理",
        "审计学",
        "研究生：会计学",
        "会计"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1123",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局四川监管局",
    "workLocation": "四川省自贡市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类（研究生专业不含统计",
        "税务",
        "资产评估）"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1124",
    "name": "主要从事内部综合管理、文字材料撰写等工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事内部综合管理、文字材料撰写等工作。",
    "department": "国家金融监督管理总局四川监管局",
    "workLocation": "四川省",
    "recruitCount": 3,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类（02）",
        "法学类（0301）",
        "中国语言文学类（0501）",
        "公共管理类（1204）"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1125",
    "name": "主要从事内部综合管理、文字材料撰写等工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事内部综合管理、文字材料撰写等工作。",
    "department": "国家金融监督管理总局四川监管局",
    "workLocation": "四川省凉山彝族自治州昭觉县",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类（02）",
        "法学类（0301）",
        "中国语言文学类（0501）",
        "公共管理类（1204）"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1126",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局贵州监管局",
    "workLocation": "贵州省贵阳市",
    "recruitCount": 4,
    "needAdjust": 13,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1127",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局贵州监管局",
    "workLocation": "贵州省黔南布依族苗族自治州",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "财政学类",
        "金融学类",
        "经济与贸易类"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1128",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局贵州监管局",
    "workLocation": "贵州省黔东南苗族侗族自治州",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "财政学类",
        "金融学类",
        "经济与贸易类"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1129",
    "name": "主要从事内部财会管理工作及相关监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事内部财会管理工作及相关监管工作。",
    "department": "国家金融监督管理总局贵州监管局",
    "workLocation": "贵州省贵阳市",
    "recruitCount": 2,
    "needAdjust": 7,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计",
        "会计学",
        "财务管理",
        "审计",
        "审计学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1130",
    "name": "主要从事内部财会管理工作及相关监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事内部财会管理工作及相关监管工作。",
    "department": "国家金融监督管理总局贵州监管局",
    "workLocation": "贵州省黔南布依族苗族自治州",
    "recruitCount": 2,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学",
        "财务管理",
        "审计学"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1140",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "department": "国家金融监督管理总局云南监管局",
    "workLocation": "云南省迪庆藏族自治州",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "财政学类",
        "金融学类"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1141",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "department": "国家金融监督管理总局云南监管局",
    "workLocation": "云南省红河哈尼族彝族自治州红河县",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "财政学类",
        "金融学类"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1142",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作",
    "department": "国家金融监督管理总局云南监管局",
    "workLocation": "云南省普洱市孟连傣族拉祜族佤族自治县",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "财政学类",
        "金融学类"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1143",
    "name": "主要从事内部财会管理工作及相关监管工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事内部财会管理工作及相关监管工作",
    "department": "国家金融监督管理总局云南监管局",
    "workLocation": "云南省德宏傣族景颇族自治州",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学",
        "财务管理",
        "审计学"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1144",
    "name": "主要从事内部财会管理工作及相关监管工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事内部财会管理工作及相关监管工作",
    "department": "国家金融监督管理总局云南监管局",
    "workLocation": "云南省德宏傣族景颇族自治州",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学",
        "财务管理",
        "审计学"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1158",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管综合工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管综合工作。",
    "department": "国家金融监督管理总局西藏监管局",
    "workLocation": "西藏自治区拉萨市城关区",
    "recruitCount": 2,
    "needAdjust": 7,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "理论经济学",
        "应用经济学",
        "金融",
        "应用统计",
        "保险"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1159",
    "name": "主要从事内部综合管理、文字材料撰写等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事内部综合管理、文字材料撰写等工作。",
    "department": "国家金融监督管理总局西藏监管局",
    "workLocation": "西藏自治区拉萨市城关区",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "理论经济学",
        "应用经济学",
        "金融",
        "应用统计",
        "保险"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1160",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管综合工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管综合工作。",
    "department": "国家金融监督管理总局陕西监管局",
    "workLocation": "陕西省西安市",
    "recruitCount": 3,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "货币银行学",
        "计量经济学",
        "数量经济学",
        "金融工程"
      ],
      "education": "仅限硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1161",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管综合工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管综合工作。",
    "department": "国家金融监督管理总局陕西监管局",
    "workLocation": "陕西省安康市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "以本科专业报考：金融学类",
        "以研究生专业报考：金融",
        "保险"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1162",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管综合工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管综合工作。",
    "department": "国家金融监督管理总局陕西监管局",
    "workLocation": "陕西省宝鸡市岐山县",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "金融学类"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1163",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管综合工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管综合工作。",
    "department": "国家金融监督管理总局陕西监管局",
    "workLocation": "陕西省渭南市韩城市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "金融学类"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1164",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管综合工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管综合工作。",
    "department": "国家金融监督管理总局陕西监管局",
    "workLocation": "陕西省渭南市韩城市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "金融学类"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1176",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局甘肃监管局",
    "workLocation": "甘肃省兰州市",
    "recruitCount": 2,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "应用经济学类专业（含产业经济学",
        "区域经济学",
        "金融学等）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1177",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局甘肃监管局",
    "workLocation": "甘肃省兰州市",
    "recruitCount": 7,
    "needAdjust": 22,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1178",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局甘肃监管局",
    "workLocation": "甘肃省武威市",
    "recruitCount": 3,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类专业（专业代码前两位为02）"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1179",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局甘肃监管局",
    "workLocation": "甘肃省酒泉市敦煌市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类专业（专业代码前两位为02）"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1180",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局甘肃监管局",
    "workLocation": "甘肃省酒泉市肃北蒙古族自治县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类专业（专业代码前两位为02）"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1198",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局青海监管局",
    "workLocation": "青海省西宁市城东区",
    "recruitCount": 2,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1199",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局青海监管局",
    "workLocation": "青海省西宁市城东区",
    "recruitCount": 2,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科：经济学门类",
        "硕士研究生：经济学类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1200",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局青海监管局",
    "workLocation": "青海省海西蒙古族藏族自治州德令哈市",
    "recruitCount": 2,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科：经济学门类",
        "硕士研究生：经济学类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1201",
    "name": "主要从事内部财会管理工作及相关监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事内部财会管理工作及相关监管工作。",
    "department": "国家金融监督管理总局青海监管局",
    "workLocation": "青海省西宁市城东区",
    "recruitCount": 3,
    "needAdjust": 12,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科：会计学",
        "财务管理",
        "审计学",
        "内部审计",
        "硕士研究生：会计"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1202",
    "name": "主要从事内部财会管理工作及相关监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事内部财会管理工作及相关监管工作。",
    "department": "国家金融监督管理总局青海监管局",
    "workLocation": "青海省海西蒙古族藏族自治州德令哈市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科：会计学",
        "财务管理",
        "审计学",
        "内部审计",
        "硕士研究生：会计"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1208",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局宁夏监管局",
    "workLocation": "宁夏回族自治区银川市",
    "recruitCount": 3,
    "needAdjust": 7,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "02经济学门类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1209",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局宁夏监管局",
    "workLocation": "宁夏回族自治区固原市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "以本科专业报考：0201经济学类",
        "0203金融学类",
        "以研究生专业报考：02经济学门类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1210",
    "name": "主要从事内部财会管理工作及相关监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事内部财会管理工作及相关监管工作。",
    "department": "国家金融监督管理总局宁夏监管局",
    "workLocation": "宁夏回族自治区银川市",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学",
        "财务管理",
        "审计学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1211",
    "name": "主要从事内部财会管理工作及相关监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事内部财会管理工作及相关监管工作。",
    "department": "国家金融监督管理总局宁夏监管局",
    "workLocation": "宁夏回族自治区固原市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学",
        "财务管理",
        "审计学"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1212",
    "name": "主要从事金融监管法律法规事务工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融监管法律法规事务工作。",
    "department": "国家金融监督管理总局宁夏监管局",
    "workLocation": "宁夏回族自治区银川市",
    "recruitCount": 2,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "0301法学",
        "0351法律"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1215",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局新疆监管局",
    "workLocation": "新疆维吾尔自治区乌鲁木齐市",
    "recruitCount": 7,
    "needAdjust": 23,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1216",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局新疆监管局",
    "workLocation": "新疆维吾尔自治区乌鲁木齐市",
    "recruitCount": 5,
    "needAdjust": 18,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "金融学类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1217",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局新疆监管局",
    "workLocation": "新疆维吾尔自治区五家渠市",
    "recruitCount": 2,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "财政学类",
        "金融学类",
        "经济与贸易类"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1218",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局新疆监管局",
    "workLocation": "新疆维吾尔自治区伊犁哈萨克自治州奎屯市",
    "recruitCount": 2,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大学本科：经济学类",
        "财政学类",
        "金融学类",
        "经济与贸易类",
        "研究生：经济学类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1219",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局新疆监管局",
    "workLocation": "新疆维吾尔自治区塔城地区",
    "recruitCount": 10,
    "needAdjust": 20,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大学本科：经济学类",
        "财政学类",
        "金融学类",
        "经济与贸易类",
        "研究生：经济学类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1252",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管工作。",
    "department": "国家金融监督管理总局宁波监管局",
    "workLocation": "浙江省宁波市",
    "recruitCount": 7,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "货币银行学",
        "计量经济学"
      ],
      "education": "仅限硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1253",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管综合工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管综合工作。",
    "department": "国家金融监督管理总局厦门监管局",
    "workLocation": "福建省厦门市",
    "recruitCount": 2,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "金融工程",
        "金融数学",
        "数量经济学",
        "金融科技",
        "金融审计"
      ],
      "education": "本科或硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1254",
    "name": "主要从事金融非现场监管、现场检查及其他金融监管综合工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事金融非现场监管、现场检查及其他金融监管综合工作。",
    "department": "国家金融监督管理总局厦门监管局",
    "workLocation": "福建省厦门市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学",
        "法律"
      ],
      "education": "仅限硕士研究生",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1255",
    "name": "从事稽查执法相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事稽查执法相关工作",
    "department": "中国证券监督管理委员会",
    "workLocation": "北京市",
    "recruitCount": 2,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学",
        "审计学",
        "经济学",
        "金融学",
        "财务管理"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1256",
    "name": "从事稽查执法相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事稽查执法相关工作",
    "department": "中国证券监督管理委员会",
    "workLocation": "北京市",
    "recruitCount": 3,
    "needAdjust": 10,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1257",
    "name": "从事境内企业到境外发行股票、存托凭证、可转换债等证券或者将其证券在境外上市交易的备案和监督管理相关工",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事境内企业到境外发行股票、存托凭证、可转换债等证券或者将其证券在境外上市交易的备案和监督管理相关工作。",
    "department": "中国证券监督管理委员会",
    "workLocation": "北京市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1258",
    "name": "从事资本市场双向开放相关工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事资本市场双向开放相关工作。",
    "department": "中国证券监督管理委员会",
    "workLocation": "北京市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1259",
    "name": "从事境内企业到境外发行股票、存托凭证、可转换债等证券或者将其证券在境外上市交易的备案和监督管理相关工",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事境内企业到境外发行股票、存托凭证、可转换债等证券或者将其证券在境外上市交易的备案和监督管理相关工作。",
    "department": "中国证券监督管理委员会",
    "workLocation": "北京市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1260",
    "name": "主要从事辖区证券期货市场财金类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场财金类监管工作",
    "department": "中国证券监督管理委员会北京监管局",
    "workLocation": "北京市西城区",
    "recruitCount": 2,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "金融工程",
        "金融科技",
        "金融审计",
        "计算金融"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1261",
    "name": "主要从事辖区证券期货市场会计类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作",
    "department": "中国证券监督管理委员会北京监管局",
    "workLocation": "北京市西城区",
    "recruitCount": 2,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学类"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1262",
    "name": "主要从事辖区证券期货市场法律类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场法律类监管工作",
    "department": "中国证券监督管理委员会北京监管局",
    "workLocation": "北京市西城区",
    "recruitCount": 4,
    "needAdjust": 7,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1263",
    "name": "主要从事辖区证券期货市场法律类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场法律类监管工作",
    "department": "中国证券监督管理委员会天津监管局",
    "workLocation": "天津市",
    "recruitCount": 3,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学",
        "法律"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1264",
    "name": "主要从事辖区证券期货市场财金类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场财金类监管工作",
    "department": "中国证券监督管理委员会河北监管局",
    "workLocation": "河北省石家庄市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "金融工程",
        "投资学",
        "资产评估",
        "金融审计"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1265",
    "name": "主要从事辖区证券期货市场会计类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作",
    "department": "中国证券监督管理委员会河北监管局",
    "workLocation": "河北省石家庄市",
    "recruitCount": 2,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1266",
    "name": "主要从事辖区证券期货市场法律类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场法律类监管工作",
    "department": "中国证券监督管理委员会河北监管局",
    "workLocation": "河北省石家庄市",
    "recruitCount": 2,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学",
        "法律"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1267",
    "name": "主要从事辖区证券期货市场会计类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作",
    "department": "中国证券监督管理委员会山西监管局",
    "workLocation": "山西省太原市小店区",
    "recruitCount": 2,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学大类",
        "法学大类",
        "管理学大类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1268",
    "name": "主要从事辖区证券期货市场会计类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作",
    "department": "中国证券监督管理委员会山西监管局",
    "workLocation": "山西省太原市小店区",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计",
        "审计",
        "财务管理"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1269",
    "name": "主要从事辖区证券期货市场会计类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作",
    "department": "中国证券监督管理委员会内蒙古监管局",
    "workLocation": "内蒙古自治区呼和浩特市",
    "recruitCount": 3,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学（含会计硕士）",
        "审计学（含审计硕士）"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1270",
    "name": "主要从事辖区证券期货市场法律类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场法律类监管工作",
    "department": "中国证券监督管理委员会内蒙古监管局",
    "workLocation": "内蒙古自治区呼和浩特市",
    "recruitCount": 2,
    "needAdjust": 7,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学",
        "法律"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1271",
    "name": "主要从事辖区证券期货市场法律类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场法律类监管工作",
    "department": "中国证券监督管理委员会内蒙古监管局",
    "workLocation": "内蒙古自治区呼和浩特市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学",
        "法律"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1272",
    "name": "主要从事辖区证券期货市场计算机类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场计算机类监管工作",
    "department": "中国证券监督管理委员会内蒙古监管局",
    "workLocation": "内蒙古自治区呼和浩特市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "计算机类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1273",
    "name": "主要从事辖区证券期货市场会计类监管工作或内部综合管理工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作或内部综合管理工作",
    "department": "中国证券监督管理委员会辽宁监管局",
    "workLocation": "辽宁省沈阳市和平区",
    "recruitCount": 2,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计（学）",
        "审计（学）",
        "财务管理"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1274",
    "name": "主要从事辖区证券期货市场会计类监管工作或内部综合管理工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作或内部综合管理工作",
    "department": "中国证券监督管理委员会辽宁监管局",
    "workLocation": "辽宁省沈阳市和平区",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计（学）",
        "审计（学）",
        "财务管理"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1275",
    "name": "主要从事辖区证券期货市场法律类监管工作或内部综合管理工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场法律类监管工作或内部综合管理工作",
    "department": "中国证券监督管理委员会辽宁监管局",
    "workLocation": "辽宁省沈阳市和平区",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学",
        "法律"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1276",
    "name": "主要从事辖区证券期货市场计算机类监管工作或内部综合管理工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场计算机类监管工作或内部综合管理工作",
    "department": "中国证券监督管理委员会辽宁监管局",
    "workLocation": "辽宁省沈阳市和平区",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "计算机类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1277",
    "name": "主要从事辖区证券期货市场会计类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作",
    "department": "中国证券监督管理委员会吉林监管局",
    "workLocation": "吉林省长春市朝阳区",
    "recruitCount": 2,
    "needAdjust": 7,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学（含会计硕士）",
        "审计学（含审计硕士）",
        "财务管理"
      ],
      "education": "仅限硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1278",
    "name": "主要从事辖区证券期货市场法律类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场法律类监管工作",
    "department": "中国证券监督管理委员会吉林监管局",
    "workLocation": "吉林省长春市朝阳区",
    "recruitCount": 2,
    "needAdjust": 9,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学类",
        "法律类"
      ],
      "education": "仅限硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1279",
    "name": "主要从事辖区证券期货市场计算机类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场计算机类监管工作",
    "department": "中国证券监督管理委员会吉林监管局",
    "workLocation": "吉林省长春市朝阳区",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "计算机科学与技术",
        "软件工程",
        "网络工程",
        "网络空间安全"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1280",
    "name": "主要从事辖区证券期货市场会计类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作",
    "department": "中国证券监督管理委员会黑龙江监管局",
    "workLocation": "黑龙江省哈尔滨市",
    "recruitCount": 3,
    "needAdjust": 9,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学",
        "审计学"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1281",
    "name": "主要从事辖区证券期货市场法律类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场法律类监管工作",
    "department": "中国证券监督管理委员会黑龙江监管局",
    "workLocation": "黑龙江省哈尔滨市",
    "recruitCount": 2,
    "needAdjust": 8,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学类",
        "法律类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1282",
    "name": "主要从事辖区证券期货市场财金类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场财金类监管工作",
    "department": "中国证券监督管理委员会上海监管局",
    "workLocation": "上海市",
    "recruitCount": 5,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "计量经济学",
        "金融工程"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1283",
    "name": "主要从事辖区证券期货市场会计类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作",
    "department": "中国证券监督管理委员会上海监管局",
    "workLocation": "上海市",
    "recruitCount": 5,
    "needAdjust": 12,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学",
        "审计学",
        "财务管理"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1284",
    "name": "主要从事辖区证券期货市场会计类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作",
    "department": "中国证券监督管理委员会上海监管局",
    "workLocation": "上海市",
    "recruitCount": 5,
    "needAdjust": 20,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学",
        "审计学",
        "财务管理"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1285",
    "name": "主要从事辖区证券期货市场会计类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作",
    "department": "中国证券监督管理委员会上海监管局",
    "workLocation": "上海市",
    "recruitCount": 3,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学",
        "审计学",
        "财务管理"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1286",
    "name": "主要从事辖区证券期货市场法律类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场法律类监管工作",
    "department": "中国证券监督管理委员会上海监管局",
    "workLocation": "上海市",
    "recruitCount": 4,
    "needAdjust": 12,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "宪法学与行政法学",
        "刑法学",
        "诉讼法学",
        "国际法学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1289",
    "name": "主要从事辖区证券期货市场日常监管和综合管理工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场日常监管和综合管理工作",
    "department": "中国证券监督管理委员会江苏监管局",
    "workLocation": "江苏省南京市",
    "recruitCount": 3,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "计量经济学",
        "金融工程"
      ],
      "education": "仅限硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1290",
    "name": "主要从事辖区证券期货市场日常监管和综合管理工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场日常监管和综合管理工作",
    "department": "中国证券监督管理委员会江苏监管局",
    "workLocation": "江苏省南京市",
    "recruitCount": 4,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计",
        "审计",
        "财务管理",
        "资产评估"
      ],
      "education": "本科或硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1291",
    "name": "主要从事辖区证券期货市场日常监管和综合管理工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场日常监管和综合管理工作",
    "department": "中国证券监督管理委员会江苏监管局",
    "workLocation": "江苏省南京市",
    "recruitCount": 4,
    "needAdjust": 11,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "管理学类",
        "工学类",
        "理学类"
      ],
      "education": "本科或硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1292",
    "name": "主要从事辖区证券期货市场日常监管和综合管理工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场日常监管和综合管理工作",
    "department": "中国证券监督管理委员会江苏监管局",
    "workLocation": "江苏省南京市",
    "recruitCount": 4,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学",
        "法律（法学）"
      ],
      "education": "仅限硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1293",
    "name": "主要从事辖区证券期货市场会计类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作",
    "department": "中国证券监督管理委员会浙江监管局",
    "workLocation": "浙江省杭州市",
    "recruitCount": 5,
    "needAdjust": 11,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学",
        "审计学",
        "财务管理",
        "资产评估"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1294",
    "name": "主要从事辖区证券期货市场会计类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作",
    "department": "中国证券监督管理委员会浙江监管局",
    "workLocation": "浙江省杭州市",
    "recruitCount": 5,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学",
        "审计学",
        "财务管理"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1295",
    "name": "主要从事辖区证券期货市场会计类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作",
    "department": "中国证券监督管理委员会浙江监管局",
    "workLocation": "浙江省杭州市",
    "recruitCount": 5,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学",
        "审计学",
        "财务管理",
        "资产评估"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1296",
    "name": "主要从事辖区证券期货市场财金类监管工作或主要从事内部综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场财金类监管工作或主要从事内部综合管理等工作",
    "department": "中国证券监督管理委员会宁波监管局",
    "workLocation": "浙江省宁波市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "金融工程",
        "投资学",
        "资产评估",
        "金融科技"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1297",
    "name": "主要从事辖区证券期货市场会计类监管工作或主要从事内部综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作或主要从事内部综合管理等工作",
    "department": "中国证券监督管理委员会宁波监管局",
    "workLocation": "浙江省宁波市",
    "recruitCount": 4,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学",
        "审计学",
        "财务管理"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1298",
    "name": "主要从事辖区证券期货市场会计类监管工作或主要从事内部综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作或主要从事内部综合管理等工作",
    "department": "中国证券监督管理委员会宁波监管局",
    "workLocation": "浙江省宁波市",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学",
        "审计学",
        "财务管理"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1299",
    "name": "主要从事辖区证券期货市场会计类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作",
    "department": "中国证券监督管理委员会安徽监管局",
    "workLocation": "安徽省合肥市",
    "recruitCount": 4,
    "needAdjust": 9,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计",
        "审计或财务管理类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1300",
    "name": "主要从事辖区证券期货市场法律类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场法律类监管工作",
    "department": "中国证券监督管理委员会安徽监管局",
    "workLocation": "安徽省合肥市",
    "recruitCount": 3,
    "needAdjust": 12,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1301",
    "name": "主要从事辖区证券期货市场财金类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场财金类监管工作",
    "department": "中国证券监督管理委员会福建监管局",
    "workLocation": "福建省福州市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "金融学类",
        "经济学类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1302",
    "name": "主要从事辖区证券期货市场会计类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作",
    "department": "中国证券监督管理委员会福建监管局",
    "workLocation": "福建省福州市",
    "recruitCount": 2,
    "needAdjust": 9,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1303",
    "name": "主要从事辖区证券期货市场法律类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场法律类监管工作",
    "department": "中国证券监督管理委员会福建监管局",
    "workLocation": "福建省福州市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1304",
    "name": "主要从事辖区证券期货市场计算机类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场计算机类监管工作",
    "department": "中国证券监督管理委员会福建监管局",
    "workLocation": "福建省福州市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "计算机类",
        "电子信息类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1305",
    "name": "主要从事辖区证券期货市场会计类监管工作或主要从事内部综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作或主要从事内部综合管理等工作",
    "department": "中国证券监督管理委员会厦门监管局",
    "workLocation": "福建省厦门市",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学（含会计硕士）",
        "审计学（含审计硕士）",
        "财务管理（含财务学）"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1306",
    "name": "主要从事辖区证券期货市场会计类监管工作或主要从事内部综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作或主要从事内部综合管理等工作",
    "department": "中国证券监督管理委员会厦门监管局",
    "workLocation": "福建省厦门市",
    "recruitCount": 2,
    "needAdjust": 7,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学（含会计硕士）",
        "审计学（含审计硕士）",
        "财务管理（含财务学）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1307",
    "name": "主要从事辖区证券期货市场法律类监管工作或主要从事内部综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场法律类监管工作或主要从事内部综合管理等工作",
    "department": "中国证券监督管理委员会厦门监管局",
    "workLocation": "福建省厦门市",
    "recruitCount": 3,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1308",
    "name": "主要从事辖区证券期货市场财金类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场财金类监管工作",
    "department": "中国证券监督管理委员会江西监管局",
    "workLocation": "江西省南昌市",
    "recruitCount": 3,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "金融学类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1309",
    "name": "主要从事辖区证券期货市场会计类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作",
    "department": "中国证券监督管理委员会江西监管局",
    "workLocation": "江西省南昌市",
    "recruitCount": 3,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学",
        "审计学",
        "财务管理",
        "资产评估",
        "经济学类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1310",
    "name": "主要从事辖区证券期货市场法律类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场法律类监管工作",
    "department": "中国证券监督管理委员会江西监管局",
    "workLocation": "江西省南昌市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学",
        "法律"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1311",
    "name": "主要从事辖区证券期货市场计算机类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场计算机类监管工作",
    "department": "中国证券监督管理委员会江西监管局",
    "workLocation": "江西省南昌市",
    "recruitCount": 2,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "计算机类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1312",
    "name": "主要从事辖区证券期货市场会计类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作",
    "department": "中国证券监督管理委员会山东监管局",
    "workLocation": "山东省济南市",
    "recruitCount": 3,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学",
        "审计学",
        "财务管理",
        "资产评估或会计硕士",
        "审计硕士"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1313",
    "name": "主要从事辖区证券期货市场财金类监管工作或主要从事内部综合管理等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场财金类监管工作或主要从事内部综合管理等工作。",
    "department": "中国证券监督管理委员会青岛监管局",
    "workLocation": "山东省青岛市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "计量经济学",
        "金融工程"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1314",
    "name": "主要从事辖区证券期货市场会计类监管工作或主要从事内部综合管理等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作或主要从事内部综合管理等工作。",
    "department": "中国证券监督管理委员会青岛监管局",
    "workLocation": "山东省青岛市",
    "recruitCount": 2,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学",
        "审计学",
        "会计硕士",
        "审计硕士"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1315",
    "name": "主要从事辖区证券期货市场法律类监管工作或主要从事内部综合管理等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场法律类监管工作或主要从事内部综合管理等工作。",
    "department": "中国证券监督管理委员会青岛监管局",
    "workLocation": "山东省青岛市",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济法学",
        "民商法学",
        "行政法学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1316",
    "name": "主要从事辖区证券期货市场法律类监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场法律类监管工作。",
    "department": "中国证券监督管理委员会河南监管局",
    "workLocation": "河南省郑州市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1317",
    "name": "主要从事辖区证券期货市场会计类监管工作或内部综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作或内部综合管理等工作",
    "department": "中国证券监督管理委员会湖北监管局",
    "workLocation": "湖北省武汉市",
    "recruitCount": 4,
    "needAdjust": 14,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学或审计学或财务管理"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1318",
    "name": "主要从事辖区证券期货市场会计类监管工作或内部综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作或内部综合管理等工作",
    "department": "中国证券监督管理委员会湖北监管局",
    "workLocation": "湖北省武汉市",
    "recruitCount": 3,
    "needAdjust": 12,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学或审计学或财务管理"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1319",
    "name": "主要从事辖区证券期货市场法律类监管工作或内部综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场法律类监管工作或内部综合管理等工作",
    "department": "中国证券监督管理委员会湖北监管局",
    "workLocation": "湖北省武汉市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济法或民商法或行政法"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1320",
    "name": "主要从事辖区证券期货市场会计类监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作。",
    "department": "中国证券监督管理委员会湖南监管局",
    "workLocation": "湖南省长沙市",
    "recruitCount": 5,
    "needAdjust": 16,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学类"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1321",
    "name": "主要从事辖区证券期货市场会计类监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作。",
    "department": "中国证券监督管理委员会湖南监管局",
    "workLocation": "湖南省长沙市",
    "recruitCount": 5,
    "needAdjust": 11,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1322",
    "name": "主要从事辖区证券期货市场法律类监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场法律类监管工作。",
    "department": "中国证券监督管理委员会湖南监管局",
    "workLocation": "湖南省长沙市",
    "recruitCount": 5,
    "needAdjust": 7,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1323",
    "name": "主要从事辖区证券期货市场财金类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场财金类监管工作",
    "department": "中国证券监督管理委员会广东监管局",
    "workLocation": "广东省广州市天河区",
    "recruitCount": 2,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "计量经济学",
        "金融工程"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1324",
    "name": "主要从事辖区证券期货市场会计类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作",
    "department": "中国证券监督管理委员会广东监管局",
    "workLocation": "广东省广州市天河区",
    "recruitCount": 4,
    "needAdjust": 9,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计（或会计学）",
        "财务管理",
        "审计（或审计学）",
        "资产评估"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1325",
    "name": "主要从事辖区证券期货市场会计类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作",
    "department": "中国证券监督管理委员会广东监管局",
    "workLocation": "广东省广州市天河区",
    "recruitCount": 2,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计（或会计学）",
        "财务管理",
        "审计（或审计学）",
        "资产评估"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1326",
    "name": "主要从事辖区证券期货市场法律类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场法律类监管工作",
    "department": "中国证券监督管理委员会广东监管局",
    "workLocation": "广东省广州市天河区",
    "recruitCount": 2,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1327",
    "name": "主要从事辖区证券期货市场计算机类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场计算机类监管工作",
    "department": "中国证券监督管理委员会广东监管局",
    "workLocation": "广东省广州市天河区",
    "recruitCount": 1,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "计算机类",
        "信息与计算科学",
        "数据计算及应用"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1328",
    "name": "主要从事辖区证券期货市场会计类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作",
    "department": "中国证券监督管理委员会深圳监管局",
    "workLocation": "广东省深圳市",
    "recruitCount": 5,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学类（会计学",
        "审计学",
        "财务管理）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1329",
    "name": "主要从事辖区证券期货市场法律类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场法律类监管工作",
    "department": "中国证券监督管理委员会深圳监管局",
    "workLocation": "广东省深圳市",
    "recruitCount": 5,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1330",
    "name": "主要从事机要档案等机关综合管理工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事机要档案等机关综合管理工作",
    "department": "中国证券监督管理委员会广西监管局",
    "workLocation": "广西壮族自治区南宁市青秀区",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "图书情报与档案管理类",
        "保密管理"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1331",
    "name": "主要从事辖区证券期货市场法律类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场法律类监管工作",
    "department": "中国证券监督管理委员会广西监管局",
    "workLocation": "广西壮族自治区南宁市青秀区",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学",
        "法律硕士"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1332",
    "name": "主要从事辖区证券期货市场会计类监管或主要从事内部综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管或主要从事内部综合管理等工作",
    "department": "中国证券监督管理委员会海南监管局",
    "workLocation": "海南省海口市",
    "recruitCount": 3,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计类",
        "审计类",
        "财务管理类",
        "经济学"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1333",
    "name": "主要从事辖区证券期货市场法律类监管工作或主要从事内部综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场法律类监管工作或主要从事内部综合管理等工作",
    "department": "中国证券监督管理委员会海南监管局",
    "workLocation": "海南省海口市",
    "recruitCount": 1,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学类",
        "法律"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1334",
    "name": "主要从事辖区证券期货市场会计类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作",
    "department": "中国证券监督管理委员会四川监管局",
    "workLocation": "四川省成都市",
    "recruitCount": 4,
    "needAdjust": 10,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学类（含会计硕士）",
        "审计学（含审计硕士）",
        "财务管理",
        "经济学类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1335",
    "name": "主要从事辖区证券期货市场会计类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作",
    "department": "中国证券监督管理委员会四川监管局",
    "workLocation": "四川省成都市",
    "recruitCount": 4,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学类（含会计硕士）",
        "审计学（含审计硕士）",
        "财务管理"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1336",
    "name": "主要从事辖区证券期货市场法律类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场法律类监管工作",
    "department": "中国证券监督管理委员会四川监管局",
    "workLocation": "四川省成都市",
    "recruitCount": 2,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学",
        "法律硕士"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1337",
    "name": "主要从事辖区证券期货市场计算机类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场计算机类监管工作",
    "department": "中国证券监督管理委员会重庆监管局",
    "workLocation": "重庆市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "计算机科学与技术",
        "软件工程",
        "网络空间安全"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1338",
    "name": "主要从事辖区证券期货市场财金类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场财金类监管工作",
    "department": "中国证券监督管理委员会贵州监管局",
    "workLocation": "贵州省贵阳市",
    "recruitCount": 2,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "金融工程",
        "投资学",
        "资产评估",
        "金融科技",
        "计算金融"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1339",
    "name": "主要从事辖区证券期货市场会计类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作",
    "department": "中国证券监督管理委员会贵州监管局",
    "workLocation": "贵州省贵阳市",
    "recruitCount": 1,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "审计（学）"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1340",
    "name": "主要从事辖区证券期货市场财金类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场财金类监管工作",
    "department": "中国证券监督管理委员会云南监管局",
    "workLocation": "云南省昆明市",
    "recruitCount": 2,
    "needAdjust": 8,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "金融工程",
        "资产评估",
        "金融审计",
        "金融科技"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1341",
    "name": "主要从事辖区证券期货市场财金类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场财金类监管工作",
    "department": "中国证券监督管理委员会西藏监管局",
    "workLocation": "西藏自治区拉萨市",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济学类",
        "金融学类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1342",
    "name": "主要从事辖区证券期货市场会计类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作",
    "department": "中国证券监督管理委员会西藏监管局",
    "workLocation": "西藏自治区拉萨市",
    "recruitCount": 2,
    "needAdjust": 8,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学",
        "财务管理",
        "审计学",
        "经济学类",
        "金融学类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1343",
    "name": "主要从事辖区证券期货市场法律类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场法律类监管工作",
    "department": "中国证券监督管理委员会西藏监管局",
    "workLocation": "西藏自治区拉萨市",
    "recruitCount": 2,
    "needAdjust": 9,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学",
        "经济学类",
        "金融学类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1344",
    "name": "主要从事辖区证券期货市场法律类监管等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场法律类监管等工作",
    "department": "中国证券监督管理委员会陕西监管局",
    "workLocation": "陕西省西安市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "经济法学",
        "民商法学",
        "宪法学与行政法学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1345",
    "name": "主要从事辖区证券期货市场财金类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场财金类监管工作",
    "department": "中国证券监督管理委员会甘肃监管局",
    "workLocation": "甘肃省兰州市",
    "recruitCount": 2,
    "needAdjust": 8,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国际金融",
        "世界经济",
        "西方经济学",
        "计量经济学",
        "金融工程"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1346",
    "name": "主要从事辖区证券期货市场会计类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作",
    "department": "中国证券监督管理委员会甘肃监管局",
    "workLocation": "甘肃省兰州市",
    "recruitCount": 2,
    "needAdjust": 9,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学（含会计硕士）",
        "审计学（含审计硕士）",
        "财务管理"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1347",
    "name": "主要从事辖区证券期货市场法律类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场法律类监管工作",
    "department": "中国证券监督管理委员会甘肃监管局",
    "workLocation": "甘肃省兰州市",
    "recruitCount": 2,
    "needAdjust": 10,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "宪法学与行政法学",
        "民商法学",
        "诉讼法学",
        "经济法学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1348",
    "name": "主要从事辖区证券期货市场会计类监管工作或主要从事内部综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作或主要从事内部综合管理等工作",
    "department": "中国证券监督管理委员会宁夏监管局",
    "workLocation": "宁夏回族自治区银川市",
    "recruitCount": 3,
    "needAdjust": 10,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1349",
    "name": "主要从事辖区证券期货市场会计类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作",
    "department": "中国证券监督管理委员会青海监管局",
    "workLocation": "青海省西宁市",
    "recruitCount": 2,
    "needAdjust": 10,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学",
        "审计学"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1350",
    "name": "主要从事辖区证券期货市场法律类监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场法律类监管工作",
    "department": "中国证券监督管理委员会青海监管局",
    "workLocation": "青海省西宁市",
    "recruitCount": 2,
    "needAdjust": 9,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学",
        "法律（专硕）"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1351",
    "name": "主要从事机要档案等机关综合管理工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事机要档案等机关综合管理工作",
    "department": "中国证券监督管理委员会青海监管局",
    "workLocation": "青海省西宁市",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "国家安全学",
        "信息安全",
        "网络空间安全",
        "档案学等"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1352",
    "name": "主要从事机要档案等机关综合管理工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事机要档案等机关综合管理工作",
    "department": "中国证券监督管理委员会新疆监管局",
    "workLocation": "新疆维吾尔自治区乌鲁木齐市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "图书情报与档案管理类"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1353",
    "name": "主要从事辖区证券期货市场会计类监管工作或主要从事内部综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场会计类监管工作或主要从事内部综合管理等工作",
    "department": "中国证券监督管理委员会新疆监管局",
    "workLocation": "新疆维吾尔自治区乌鲁木齐市",
    "recruitCount": 4,
    "needAdjust": 18,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学类（含审计学）"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1354",
    "name": "主要从事辖区证券期货市场法律类监管工作或主要从事内部综合管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事辖区证券期货市场法律类监管工作或主要从事内部综合管理等工作",
    "department": "中国证券监督管理委员会新疆监管局",
    "workLocation": "新疆维吾尔自治区乌鲁木齐市",
    "recruitCount": 5,
    "needAdjust": 23,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1355",
    "name": "主要从事证券期货市场稽查执法工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事证券期货市场稽查执法工作",
    "department": "中国证券监督管理委员会上海证券监管专员办事处",
    "workLocation": "上海市",
    "recruitCount": 2,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学类"
      ],
      "education": "本科或硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1356",
    "name": "主要从事证券期货市场稽查执法工作，能适应出差办案",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事证券期货市场稽查执法工作，能适应出差办案",
    "department": "中国证券监督管理委员会深圳证券监管专员办事处",
    "workLocation": "广东省深圳市",
    "recruitCount": 2,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学类",
        "法律硕士"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1357",
    "name": "从事统计调查、数据处理、统计分析研究等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事统计调查、数据处理、统计分析研究等工作。",
    "department": "国家统计局北京调查总队",
    "workLocation": "北京市通州区",
    "recruitCount": 3,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "统计学类（不含生物卫生统计学",
        "流行病与卫生统计学）",
        "数学类（不含数学教育",
        "数学教育学",
        "蒙古语信息处理工程"
      ],
      "education": "仅限硕士研究生",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1358",
    "name": "从事一线入户调查、数据处理、统计分析、统计研究等工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事一线入户调查、数据处理、统计分析、统计研究等工作。",
    "department": "国家统计局天津调查总队",
    "workLocation": "天津市宝坻区",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "统计学类"
      ],
      "education": "仅限本科",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1359",
    "name": "从事统计调查工作中遥感测量、数据处理和数据分析等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事统计调查工作中遥感测量、数据处理和数据分析等工作",
    "department": "国家统计局河北调查总队",
    "workLocation": "河北省石家庄市新华区",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "地理学（不含自然地理学",
        "人文地理学）",
        "遥感科学与技术"
      ],
      "education": "仅限硕士研究生",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1360",
    "name": "从事统计调查信息化建设、应用、维护等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事统计调查信息化建设、应用、维护等工作",
    "department": "国家统计局河北调查总队",
    "workLocation": "河北省石家庄市新华区",
    "recruitCount": 1,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "计算机科学与技术",
        "软件工程",
        "网络空间安全"
      ],
      "education": "仅限硕士研究生",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1361",
    "name": "从事财务管理、会计、审计等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事财务管理、会计、审计等工作",
    "department": "国家统计局河北调查总队",
    "workLocation": "河北省石家庄市新华区",
    "recruitCount": 1,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计"
      ],
      "education": "仅限硕士研究生",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1362",
    "name": "从事数据处理、统计分析、统计研究等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事数据处理、统计分析、统计研究等工作",
    "department": "国家统计局河北调查总队",
    "workLocation": "河北省石家庄市新华区",
    "recruitCount": 1,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电子信息（人工智能",
        "大数据技术与工程）"
      ],
      "education": "仅限硕士研究生",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1363",
    "name": "从事一线入户调查、数据处理、统计分析、统计研究、公文处理等工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事一线入户调查、数据处理、统计分析、统计研究、公文处理等工作",
    "department": "国家统计局河北调查总队",
    "workLocation": "河北省张家口市沽源县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "计算机科学与技术",
        "软件工程",
        "网络工程",
        "统计学类（统计学",
        "应用统计学）"
      ],
      "education": "仅限本科",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1365",
    "name": "统计资料搜集整理分析",
    "category": "国考",
    "subCategory": "市地级",
    "description": "统计资料搜集整理分析",
    "department": "国家统计局山西调查总队",
    "workLocation": "山西省临汾市洪洞县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "统计学类"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1366",
    "name": "统计资料搜集整理分析",
    "category": "国考",
    "subCategory": "市地级",
    "description": "统计资料搜集整理分析",
    "department": "国家统计局山西调查总队",
    "workLocation": "山西省忻州市宁武县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "统计学类"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1367",
    "name": "从事一线入户调查、数据处理、统计分析、统计研究等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事一线入户调查、数据处理、统计分析、统计研究等工作。",
    "department": "国家统计局黑龙江调查总队",
    "workLocation": "黑龙江省哈尔滨市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学类（不含法学理论",
        "法律史",
        "刑法学",
        "诉讼法学",
        "环境与资源保护法学"
      ],
      "education": "仅限硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1368",
    "name": "从事一线入户调查、数据处理、统计分析、统计研究等工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事一线入户调查、数据处理、统计分析、统计研究等工作。",
    "department": "国家统计局黑龙江调查总队",
    "workLocation": "黑龙江省双鸭山市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "统计学类",
        "数学类",
        "计算机类"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1369",
    "name": "从事统计调查、数据处理、统计分析研究等相关工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事统计调查、数据处理、统计分析研究等相关工作。",
    "department": "国家统计局江苏调查总队",
    "workLocation": "江苏省南京市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "1404遥感科学与技术类"
      ],
      "education": "仅限硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1370",
    "name": "从事统计调查、数据处理、统计分析研究等工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事统计调查、数据处理、统计分析研究等工作",
    "department": "国家统计局浙江调查总队",
    "workLocation": "浙江省湖州市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "统计学类0712"
      ],
      "education": "仅限本科",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1371",
    "name": "从事统计调查、数据处理、统计分析研究等工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事统计调查、数据处理、统计分析研究等工作",
    "department": "国家统计局安徽调查总队",
    "workLocation": "安徽省滁州市全椒县",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "统计学类",
        "应用统计学",
        "经济统计学",
        "数据科学与大数据技术"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1372",
    "name": "从事一线入户调查、数据处理、统计分析、统计研究等工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事一线入户调查、数据处理、统计分析、统计研究等工作。",
    "department": "国家统计局湖北调查总队",
    "workLocation": "湖北省宜昌市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "0712统计学类（不含数据科学",
        "生物统计学专业）"
      ],
      "education": "仅限本科",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1373",
    "name": "从事一线入户调查、数据处理、统计分析、统计研究等工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事一线入户调查、数据处理、统计分析、统计研究等工作。",
    "department": "国家统计局湖北调查总队",
    "workLocation": "湖北省荆州市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "0712统计学类（不含数据科学",
        "生物统计学专业）"
      ],
      "education": "仅限本科",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1374",
    "name": "从事一线入户调查、数据处理、统计分析、统计研究等工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事一线入户调查、数据处理、统计分析、统计研究等工作。",
    "department": "国家统计局湖南调查总队",
    "workLocation": "湖南省益阳市资阳区",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "0201经济学类",
        "0712统计学类"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1375",
    "name": "从事一线入户调查、数据处理、统计分析、统计研究等工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事一线入户调查、数据处理、统计分析、统计研究等工作。",
    "department": "国家统计局湖南调查总队",
    "workLocation": "湖南省郴州市桂阳县",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "0201经济学类",
        "0712统计学类"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1376",
    "name": "从事一线入户调查、数据处理、统计分析、统计研究等工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事一线入户调查、数据处理、统计分析、统计研究等工作",
    "department": "国家统计局重庆调查总队",
    "workLocation": "重庆市涪陵区",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "农业经济管理类1203",
        "统计学类0712（不含生物统计学）"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1377",
    "name": "从事一线入户调查、数据处理、统计分析、统计研究等工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事一线入户调查、数据处理、统计分析、统计研究等工作",
    "department": "国家统计局重庆调查总队",
    "workLocation": "重庆市涪陵区",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "农业经济管理类1203",
        "统计学类0712（不含生物统计学）"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1378",
    "name": "从事统计调查、数据处理、统计分析研究等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事统计调查、数据处理、统计分析研究等工作",
    "department": "国家统计局云南调查总队",
    "workLocation": "云南省昆明市盘龙区",
    "recruitCount": 1,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "遥感科学与技术专业"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1379",
    "name": "从事一线入户调查、数据处理、统计分析研究等工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事一线入户调查、数据处理、统计分析研究等工作",
    "department": "国家统计局云南调查总队",
    "workLocation": "云南省西双版纳傣族自治州勐腊县",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "不限"
      ],
      "education": "仅限本科",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1380",
    "name": "从事一线入户调查、数据处理、统计分析、统计研究等工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事一线入户调查、数据处理、统计分析、统计研究等工作。",
    "department": "国家统计局陕西调查总队",
    "workLocation": "陕西省铜川市宜君县",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "统计学类（特设专业除外）",
        "数学类（特设专业除外）"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1381",
    "name": "从事一线入户调查、数据处理、统计分析、统计研究等工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事一线入户调查、数据处理、统计分析、统计研究等工作。",
    "department": "国家统计局陕西调查总队",
    "workLocation": "陕西省榆林市清涧县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "统计学类（特设专业除外）",
        "数学类（特设专业除外）"
      ],
      "education": "仅限本科",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1382",
    "name": "从事统计调查、数据处理、统计分析、统计研究等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事统计调查、数据处理、统计分析、统计研究等工作。",
    "department": "国家统计局新疆调查总队",
    "workLocation": "新疆维吾尔自治区乌鲁木齐市天山区",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "统计学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1383",
    "name": "从事统计调查、数据处理、统计分析、统计研究等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事统计调查、数据处理、统计分析、统计研究等工作。",
    "department": "国家统计局新疆调查总队",
    "workLocation": "新疆维吾尔自治区乌鲁木齐市天山区",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "统计学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1384",
    "name": "从事统计调查、数据处理、统计分析、统计研究等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事统计调查、数据处理、统计分析、统计研究等工作。",
    "department": "国家统计局新疆调查总队",
    "workLocation": "新疆维吾尔自治区乌鲁木齐市天山区",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "数学",
        "计算机科学与技术"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1385",
    "name": "从事统计调查、数据处理、统计分析、统计研究等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事统计调查、数据处理、统计分析、统计研究等工作。",
    "department": "国家统计局新疆调查总队",
    "workLocation": "新疆维吾尔自治区乌鲁木齐市天山区",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "数学",
        "计算机科学与技术"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1386",
    "name": "从事宏观经济、财政税收和货币金融领域政策研究工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事宏观经济、财政税收和货币金融领域政策研究工作",
    "department": "国务院发展研究中心",
    "workLocation": "北京市东城区",
    "recruitCount": 2,
    "needAdjust": 7,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "博士专业为西方经济学（宏观经济学方向）（020104）",
        "国民经济学（020201）",
        "财政学（020203）",
        "金融学（020204）",
        "计量经济学（020209）"
      ],
      "education": "仅限博士研究生",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1387",
    "name": "负责组织地面、农业、海洋、大气成分、观象台等地面观测系统顶层设计、站网布局、装备研发、业务运行、数据",
    "category": "国考",
    "subCategory": "其他",
    "description": "负责组织地面、农业、海洋、大气成分、观象台等地面观测系统顶层设计、站网布局、装备研发、业务运行、数据质控、标准规范和管理制度建设等工作",
    "department": "中国气象局",
    "workLocation": "北京市海淀区",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大气物理学",
        "应用气象学",
        "气候系统与气候变化",
        "大气遥感与大气探测",
        "空间天气学"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1388",
    "name": "天气预报预警、流域气象预报、环境气象预报等工作的组织、管理和协调",
    "category": "国考",
    "subCategory": "其他",
    "description": "天气预报预警、流域气象预报、环境气象预报等工作的组织、管理和协调",
    "department": "中国气象局",
    "workLocation": "北京市海淀区",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大气科学",
        "气象学",
        "云与降水物理学",
        "地球流体力学（大气科学）",
        "水文气象学"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1389",
    "name": "气候监测预测业务的组织、管理以及综合协调工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "气候监测预测业务的组织、管理以及综合协调工作",
    "department": "中国气象局",
    "workLocation": "北京市海淀区",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大气科学",
        "气象学",
        "地球流体力学（大气科学）",
        "气候系统与气候变化",
        "气候系统科学"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1390",
    "name": "主要从事文秘工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事文秘工作",
    "department": "河北省气象局",
    "workLocation": "河北省石家庄市裕华区",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1391",
    "name": "主要从事人事人才管理工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事人事人才管理工作",
    "department": "河北省气象局",
    "workLocation": "河北省石家庄市裕华区",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1392",
    "name": "主要从事气象防灾减灾等工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事气象防灾减灾等工作",
    "department": "河北省气象局",
    "workLocation": "河北省承德市平泉市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1393",
    "name": "主要从事气象防灾减灾等工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事气象防灾减灾等工作",
    "department": "河北省气象局",
    "workLocation": "河北省承德市隆化县",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1394",
    "name": "主要从事气象防灾减灾等工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事气象防灾减灾等工作",
    "department": "河北省气象局",
    "workLocation": "河北省张家口市尚义县",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1403",
    "name": "主要从事综合气象业务管理工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事综合气象业务管理工作。",
    "department": "山西省气象局",
    "workLocation": "山西省临汾市翼城县",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1404",
    "name": "从事气象业务管理",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事气象业务管理",
    "department": "内蒙古自治区气象局",
    "workLocation": "内蒙古自治区赤峰市林西县",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1405",
    "name": "从事气象业务管理",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事气象业务管理",
    "department": "内蒙古自治区气象局",
    "workLocation": "内蒙古自治区赤峰市巴林右旗",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1406",
    "name": "从事气象业务管理",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事气象业务管理",
    "department": "内蒙古自治区气象局",
    "workLocation": "内蒙古自治区乌兰察布市卓资县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1407",
    "name": "从事气象业务管理",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事气象业务管理",
    "department": "内蒙古自治区气象局",
    "workLocation": "内蒙古自治区乌兰察布市四子王旗",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1408",
    "name": "从事气象业务管理",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事气象业务管理",
    "department": "内蒙古自治区气象局",
    "workLocation": "内蒙古自治区锡林郭勒盟东乌珠穆沁旗",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1411",
    "name": "主要从事气象业务管理相关工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事气象业务管理相关工作。",
    "department": "辽宁省气象局",
    "workLocation": "辽宁省沈阳市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1412",
    "name": "主要从事气象业务管理相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事气象业务管理相关工作",
    "department": "辽宁省气象局",
    "workLocation": "辽宁省沈阳市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1413",
    "name": "主要从事气象业务管理相关工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事气象业务管理相关工作",
    "department": "辽宁省气象局",
    "workLocation": "辽宁省朝阳市建平县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1414",
    "name": "负责综合协调、外事管理和国际合作相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "负责综合协调、外事管理和国际合作相关工作",
    "department": "上海市气象局",
    "workLocation": "上海市徐汇区",
    "recruitCount": 1,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象学"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1415",
    "name": "从事气象业务管理等工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事气象业务管理等工作。",
    "department": "江苏省气象局",
    "workLocation": "江苏省南通市海门区",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大气科学",
        "气象学",
        "应用气象学",
        "大气物理学与大气环境",
        "气候学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1416",
    "name": "综合气象观测、装备保障等业务管理",
    "category": "国考",
    "subCategory": "其他",
    "description": "综合气象观测、装备保障等业务管理",
    "department": "安徽省气象局",
    "workLocation": "安徽省合肥市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象学",
        "大气科学",
        "大气遥感与大气探测"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1417",
    "name": "从事综合管理和气象业务等相关工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事综合管理和气象业务等相关工作",
    "department": "山东省气象局",
    "workLocation": "山东省烟台市莱州市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象学",
        "大气科学",
        "应用气象学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1418",
    "name": "从事综合管理和气象业务等相关工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事综合管理和气象业务等相关工作",
    "department": "山东省气象局",
    "workLocation": "山东省烟台市莱阳市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象学",
        "大气科学",
        "应用气象学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1419",
    "name": "从事综合管理和气象业务等相关工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事综合管理和气象业务等相关工作",
    "department": "山东省气象局",
    "workLocation": "山东省济宁市曲阜市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大气科学",
        "气象学",
        "大气遥感与大气探测",
        "气象灾害监测与预警",
        "气象探测技术"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1420",
    "name": "从事综合管理和气象业务等相关工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事综合管理和气象业务等相关工作",
    "department": "山东省气象局",
    "workLocation": "山东省泰安市宁阳县",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1421",
    "name": "主要从事气象防灾减灾、综合行政管理等工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事气象防灾减灾、综合行政管理等工作",
    "department": "湖北省气象局",
    "workLocation": "湖北省黄冈市黄梅县",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类",
        "气象相关类和信息技术类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1422",
    "name": "主要从事气象防灾减灾、综合行政管理等工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事气象防灾减灾、综合行政管理等工作",
    "department": "湖北省气象局",
    "workLocation": "湖北省十堰市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1423",
    "name": "主要从事气象业务管理、气象防灾减灾管理、气象服务和气象装备保障等工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事气象业务管理、气象防灾减灾管理、气象服务和气象装备保障等工作。",
    "department": "广西壮族自治区气象局",
    "workLocation": "广西壮族自治区河池市罗城仫佬族自治县",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1424",
    "name": "主要从事气象业务管理、气象防灾减灾管理、气象服务和气象装备保障等工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事气象业务管理、气象防灾减灾管理、气象服务和气象装备保障等工作。",
    "department": "广西壮族自治区气象局",
    "workLocation": "广西壮族自治区河池市东兰县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1425",
    "name": "从事办公室综合协调管理、综合文稿撰写、文秘、宣传等工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事办公室综合协调管理、综合文稿撰写、文秘、宣传等工作",
    "department": "重庆市气象局",
    "workLocation": "重庆市奉节县",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1426",
    "name": "负责气象科技业务管理相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "负责气象科技业务管理相关工作",
    "department": "重庆市气象局",
    "workLocation": "重庆市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1427",
    "name": "主要从事纪检、巡察、审计等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事纪检、巡察、审计等工作",
    "department": "重庆市气象局",
    "workLocation": "重庆市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类",
        "纪检监察学专业",
        "审计学专业",
        "会计学专业"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1428",
    "name": "主要从事文稿起草、会议组织、综合管理等工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事文稿起草、会议组织、综合管理等工作",
    "department": "重庆市气象局",
    "workLocation": "重庆市云阳县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1429",
    "name": "公文处理，会议组织安排及纪要整理，电子政务，气象宣传，档案管理，目标管理等工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "公文处理，会议组织安排及纪要整理，电子政务，气象宣传，档案管理，目标管理等工作",
    "department": "重庆市气象局",
    "workLocation": "重庆市巫溪县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1430",
    "name": "负责综合气象观测、气象预警预报、公共气象服务和综合气象保障管理工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "负责综合气象观测、气象预警预报、公共气象服务和综合气象保障管理工作。",
    "department": "贵州省气象局",
    "workLocation": "贵州省毕节市金沙县",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "计算机类",
        "电子信息类",
        "气象类。"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1431",
    "name": "负责干部、人才、劳资等相关工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "负责干部、人才、劳资等相关工作。",
    "department": "贵州省气象局",
    "workLocation": "贵州省铜仁市碧江区",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1432",
    "name": "负责综合气象观测、气象预警预报、公共气象服务和综合气象保障管理工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "负责综合气象观测、气象预警预报、公共气象服务和综合气象保障管理工作。",
    "department": "贵州省气象局",
    "workLocation": "贵州省黔西南布依族苗族自治州兴仁市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1433",
    "name": "主要从事气象业务综合管理等工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事气象业务综合管理等工作。",
    "department": "云南省气象局",
    "workLocation": "云南省文山壮族苗族自治州",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1434",
    "name": "党建综合管理",
    "category": "国考",
    "subCategory": "其他",
    "description": "党建综合管理",
    "department": "西藏自治区气象局",
    "workLocation": "西藏自治区拉萨市城关区",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学专业",
        "马克思主义理论专业",
        "中共党史党建学",
        "公共管理学专业",
        "行政管理"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1435",
    "name": "气象业务管理",
    "category": "国考",
    "subCategory": "其他",
    "description": "气象业务管理",
    "department": "西藏自治区气象局",
    "workLocation": "西藏自治区拉萨市城关区",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大气科学专业",
        "气象学",
        "气候系统与气候变化",
        "气候变化风险管理",
        "气候与大气环境"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1436",
    "name": "气象业务管理",
    "category": "国考",
    "subCategory": "市地级",
    "description": "气象业务管理",
    "department": "西藏自治区气象局",
    "workLocation": "西藏自治区阿里地区改则县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1437",
    "name": "负责气象业务管理、应急管理",
    "category": "国考",
    "subCategory": "市地级",
    "description": "负责气象业务管理、应急管理",
    "department": "陕西省气象局",
    "workLocation": "陕西省榆林市吴堡县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类",
        "电子信息类",
        "地理科学类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1438",
    "name": "负责气象业务管理、应急管理",
    "category": "国考",
    "subCategory": "市地级",
    "description": "负责气象业务管理、应急管理",
    "department": "陕西省气象局",
    "workLocation": "陕西省延安市延川县",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类",
        "电子信息类",
        "地理科学类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1439",
    "name": "负责气象业务管理、应急管理",
    "category": "国考",
    "subCategory": "市地级",
    "description": "负责气象业务管理、应急管理",
    "department": "陕西省气象局",
    "workLocation": "陕西省安康市镇坪县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类",
        "电子信息类",
        "地理科学类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1440",
    "name": "负责气象业务管理、应急管理",
    "category": "国考",
    "subCategory": "市地级",
    "description": "负责气象业务管理、应急管理",
    "department": "陕西省气象局",
    "workLocation": "陕西省铜川市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大气科学",
        "气象学",
        "大气物理学与大气环境",
        "应用气象学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1441",
    "name": "负责气象业务管理、应急管理",
    "category": "国考",
    "subCategory": "市地级",
    "description": "负责气象业务管理、应急管理",
    "department": "陕西省气象局",
    "workLocation": "陕西省渭南市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大气科学",
        "气象学",
        "大气物理学与大气环境",
        "应用气象学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1451",
    "name": "负责县级气象综合业务管理工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "负责县级气象综合业务管理工作",
    "department": "甘肃省气象局",
    "workLocation": "甘肃省甘南藏族自治州卓尼县",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类",
        "地理科学类",
        "电子信息类",
        "计算机类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1452",
    "name": "负责县级气象综合业务管理工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "负责县级气象综合业务管理工作",
    "department": "甘肃省气象局",
    "workLocation": "甘肃省临夏回族自治州永靖县",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大气科学",
        "应用气象学",
        "气象学",
        "大气物理学",
        "气候学"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1453",
    "name": "主要从事综合气象业务的管理工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "主要从事综合气象业务的管理工作。",
    "department": "青海省气象局",
    "workLocation": "青海省果洛藏族自治州玛沁县",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1454",
    "name": "从事部门预决算、财务管理、项目经费管理及相关财务工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事部门预决算、财务管理、项目经费管理及相关财务工作。",
    "department": "新疆维吾尔自治区气象局",
    "workLocation": "新疆维吾尔自治区乌鲁木齐市天山区",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "会计学",
        "财务管理",
        "审计学",
        "会计",
        "审计专业"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1455",
    "name": "从事人事管理工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事人事管理工作。",
    "department": "新疆维吾尔自治区气象局",
    "workLocation": "新疆维吾尔自治区乌鲁木齐市天山区",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类",
        "计算机科学与技术",
        "软件工程",
        "网络工程",
        "计算机技术"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1456",
    "name": "从事防灾减灾、气象服务、综合管理工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事防灾减灾、气象服务、综合管理工作。",
    "department": "新疆维吾尔自治区气象局",
    "workLocation": "新疆维吾尔自治区塔城地区乌苏市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1457",
    "name": "从事防灾减灾、气象服务、综合管理工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事防灾减灾、气象服务、综合管理工作。",
    "department": "新疆维吾尔自治区气象局",
    "workLocation": "新疆维吾尔自治区博尔塔拉蒙古自治州阿拉山口市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1458",
    "name": "从事防灾减灾、气象服务、综合管理工作。",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事防灾减灾、气象服务、综合管理工作。",
    "department": "新疆维吾尔自治区气象局",
    "workLocation": "新疆维吾尔自治区昌吉回族自治州吉木萨尔县",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "气象类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1465",
    "name": "从事辖区内粮食监管相关业务的财务检查，机关财务管理，所属事业单位财务监督、检查、审计等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事辖区内粮食监管相关业务的财务检查，机关财务管理，所属事业单位财务监督、检查、审计等工作。",
    "department": "国家粮食和物资储备局河北局",
    "workLocation": "河北省石家庄市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "研究生：会计学（120201）",
        "会计（1253）",
        "审计（1257）"
      ],
      "education": "仅限硕士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1466",
    "name": "从事辖区内中央储备物资监督管理，按照要求，组织实施所属单位战略储备物资的收储、动用、轮换和日常管理等",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事辖区内中央储备物资监督管理，按照要求，组织实施所属单位战略储备物资的收储、动用、轮换和日常管理等工作。",
    "department": "国家粮食和物资储备局河南局",
    "workLocation": "河南省郑州市金水区",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电气工程（0808",
        "085801）",
        "电子科学与技术（0774",
        "0809）",
        "信息与通信工程（0810）"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1467",
    "name": "负责本单位和所属单位党的建设、精神文明建设和群团组织等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "负责本单位和所属单位党的建设、精神文明建设和群团组织等工作。",
    "department": "国家粮食和物资储备局青海局",
    "workLocation": "青海省西宁市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科：中国语言文学类（0501）",
        "马克思主义理论类（0305）",
        "法学类（0301）",
        "研究生：中国语言文学（0501）",
        "政治学（0302）"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1468",
    "name": "从事核电建设与运营管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事核电建设与运营管理等工作",
    "department": "国家能源局",
    "workLocation": "北京市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "核工程与核技术相关专业"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1469",
    "name": "从事供电服务、电力安全监管和电力业务许可管理等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事供电服务、电力安全监管和电力业务许可管理等工作",
    "department": "国家能源局西北监管局",
    "workLocation": "宁夏回族自治区银川市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "能源动力",
        "电气",
        "公共管理",
        "法学等相关专业"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1470",
    "name": "从事能源监管等相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事能源监管等相关工作",
    "department": "国家能源局华中监管局",
    "workLocation": "江西省南昌市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电力等相关专业"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1471",
    "name": "从事能源监管等相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事能源监管等相关工作",
    "department": "国家能源局华中监管局",
    "workLocation": "西藏自治区拉萨市",
    "recruitCount": 1,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电力等相关专业"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1472",
    "name": "从事电力市场监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事电力市场监管工作",
    "department": "国家能源局山东监管办公室",
    "workLocation": "山东省济南市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电气工程或电力系统及其自动化"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1473",
    "name": "从事电力安全监管相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事电力安全监管相关工作",
    "department": "国家能源局甘肃监管办公室",
    "workLocation": "甘肃省兰州市",
    "recruitCount": 1,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电气工程及其自动化及相关专业"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1474",
    "name": "从事电力市场建设与监管等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事电力市场建设与监管等工作",
    "department": "国家能源局福建监管办公室",
    "workLocation": "福建省福州市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电气工程及其自动化",
        "能源与动力工程",
        "核工程与核技术",
        "技术经济及管理等专业"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1475",
    "name": "从事能源监管资质管理相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事能源监管资质管理相关工作",
    "department": "国家能源局河南监管办公室",
    "workLocation": "河南省郑州市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电气",
        "能源动力等相关专业"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1476",
    "name": "从事机关综合性管理、电力市场管理等相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事机关综合性管理、电力市场管理等相关工作",
    "department": "国家能源局湖南监管办公室",
    "workLocation": "湖南省长沙市雨花区",
    "recruitCount": 2,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电气工程相关专业"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1477",
    "name": "从事能源监管相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事能源监管相关工作",
    "department": "国家能源局四川监管办公室",
    "workLocation": "四川省成都市武侯区",
    "recruitCount": 2,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电气工程",
        "水力水电工程",
        "能源动力等相关专业"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1478",
    "name": "从事能源监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事能源监管工作",
    "department": "国家能源局云南监管办公室",
    "workLocation": "云南省昆明市",
    "recruitCount": 2,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电气工程",
        "电力系统及其自动化",
        "电气工程及其自动化",
        "水利水电工程",
        "能源与动力工程"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1479",
    "name": "从事电力安全监管工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事电力安全监管工作",
    "department": "国家能源局贵州监管办公室",
    "workLocation": "贵州省贵阳市",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电气工程"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1480",
    "name": "承担核领域政策研究、项目管理、重大事项组织协调等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "承担核领域政策研究、项目管理、重大事项组织协调等工作。",
    "department": "国家国防科技工业局",
    "workLocation": "北京市海淀区",
    "recruitCount": 2,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "核相关理工类专业"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1481",
    "name": "承担商业航天领域政策研究、项目管理、重大事项组织协调、安全监管等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "承担商业航天领域政策研究、项目管理、重大事项组织协调、安全监管等工作。",
    "department": "国家国防科技工业局",
    "workLocation": "北京市海淀区",
    "recruitCount": 2,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "航天相关理工类专业",
        "安全科学与工程",
        "管理科学与工程等相关专业"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1482",
    "name": "承担西南地区有关核安全监督、政策研究等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "承担西南地区有关核安全监督、政策研究等工作。",
    "department": "国家国防科技工业局",
    "workLocation": "四川省成都市",
    "recruitCount": 3,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "核相关理工类专业"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1483",
    "name": "承担西南地区有关核安全监督、政策研究、事件调查等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "承担西南地区有关核安全监督、政策研究、事件调查等工作。",
    "department": "国家国防科技工业局",
    "workLocation": "四川省成都市",
    "recruitCount": 2,
    "needAdjust": 8,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "核相关理工类专业"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1484",
    "name": "属公安机关人民警察，承担全机构预算、财务工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "属公安机关人民警察，承担全机构预算、财务工作。",
    "department": "国家移民管理局",
    "workLocation": "北京市",
    "recruitCount": 1,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "管理学1201",
        "工商管理学1202（会计学",
        "审计学",
        "财务管理方向）",
        "应用经济学0202（财政学"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1485",
    "name": "属于公安机关人民警察，从事出入境边防检查和应急处突、大型安保、侦查办案和技术保障、信息化建设等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，从事出入境边防检查和应急处突、大型安保、侦查办案和技术保障、信息化建设等工作。实行轮流倒班工作制，夜间执勤较多，法定休息日及节假日不能保证",
    "department": "北京出入境边防检查总站",
    "workLocation": "北京市",
    "recruitCount": 5,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "计算机科学与技术（0812）",
        "软件工程（0835）",
        "智能科学与技术（1405）"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1486",
    "name": "属于公安机关人民警察，从事出入境边防检查和应急处突、大型安保、侦查办案和国际合作交流等工作。实行轮流",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，从事出入境边防检查和应急处突、大型安保、侦查办案和国际合作交流等工作。实行轮流倒班工作制，夜间执勤较多，法定休息日及节假日不能保证正常休息",
    "department": "北京出入境边防检查总站",
    "workLocation": "北京市",
    "recruitCount": 2,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "英语"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1487",
    "name": "属于公安机关人民警察，从事出入境边防检查和应急处突、大型安保、侦查办案和国际合作交流等工作。实行轮流",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，从事出入境边防检查和应急处突、大型安保、侦查办案和国际合作交流等工作。实行轮流倒班工作制，夜间执勤较多，法定休息日及节假日不能保证正常休息",
    "department": "北京出入境边防检查总站",
    "workLocation": "北京市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "越南语（050223）"
      ],
      "education": "本科及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1488",
    "name": "属于公安机关人民警察，从事出入境边防检查和应急处突、大型安保、侦查办案和国际合作交流等工作。实行轮流",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，从事出入境边防检查和应急处突、大型安保、侦查办案和国际合作交流等工作。实行轮流倒班工作制，夜间执勤较多，法定休息日及节假日不能保证正常休息",
    "department": "北京出入境边防检查总站",
    "workLocation": "北京市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "蒙古语（050218）"
      ],
      "education": "本科及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1489",
    "name": "属于公安机关人民警察，从事出入境边防检查和应急处突、大型安保、侦查办案和国际合作交流等工作。实行轮流",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，从事出入境边防检查和应急处突、大型安保、侦查办案和国际合作交流等工作。实行轮流倒班工作制，夜间执勤较多，法定休息日及节假日不能保证正常休息",
    "department": "北京出入境边防检查总站",
    "workLocation": "北京市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "土耳其语（050235）"
      ],
      "education": "本科及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1492",
    "name": "属于公安机关人民警察，从事出入境边防检查、监护、巡查和应急处突、大型安保、侦查办案等实战工作。24小",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，从事出入境边防检查、监护、巡查和应急处突、大型安保、侦查办案等实战工作。24小时倒班，夜间户外执勤较多。今后视工作需要调整至机关事务处理、",
    "department": "广州出入境边防检查总站",
    "workLocation": "广东省广州市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "思想政治教育",
        "马克思主义理论",
        "马克思主义哲学",
        "马克思主义基本原理",
        "马克思主义发展史"
      ],
      "education": "仅限硕士研究生",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1493",
    "name": "属于公安机关人民警察，从事出入境边防检查、监护、巡查和应急处突、大型安保、侦查办案等实战工作。24小",
    "category": "国考",
    "subCategory": "市地级",
    "description": "属于公安机关人民警察，从事出入境边防检查、监护、巡查和应急处突、大型安保、侦查办案等实战工作。24小时倒班，夜间户外执勤较多。今后视工作需要调整至出入境相关系统",
    "department": "广州出入境边防检查总站",
    "workLocation": "广东省广州市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "计算机科学与技术",
        "软件工程",
        "大数据科学与技术",
        "大数据技术与工程",
        "大数据科学与应用"
      ],
      "education": "仅限硕士研究生",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1494",
    "name": "属于公安机关人民警察，从事出入境边防检查、监护、巡查和应急处突、大型安保、侦查办案等实战工作。24小",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，从事出入境边防检查、监护、巡查和应急处突、大型安保、侦查办案等实战工作。24小时倒班，夜间户外执勤较多。今后视工作需要调整至法制等岗位。",
    "department": "广州出入境边防检查总站",
    "workLocation": "广东省广州市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学",
        "法学理论",
        "宪法学与行政法学",
        "刑法学",
        "诉讼法学"
      ],
      "education": "仅限硕士研究生",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1495",
    "name": "属于公安机关人民警察，从事出入境边防检查、监护巡查、公文起草与撰写、政策理论研究、财务管理、技术保障",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，从事出入境边防检查、监护巡查、公文起草与撰写、政策理论研究、财务管理、技术保障等工作。",
    "department": "珠海出入境边防检查总站",
    "workLocation": "广东省珠海市",
    "recruitCount": 6,
    "needAdjust": 16,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "哲学",
        "经济学",
        "政治学",
        "马克思主义理论",
        "历史学"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1496",
    "name": "属公安机关人民警察，从事出入境边防检查、监护、巡查和应急处突、大型安保、侦查办案、财务审计等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "属公安机关人民警察，从事出入境边防检查、监护、巡查和应急处突、大型安保、侦查办案、财务审计等工作。",
    "department": "厦门出入境边防检查总站",
    "workLocation": "福建省泉州市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "审计",
        "法学0301",
        "法律（法学）035102"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1497",
    "name": "属于公安机关人民警察，从事出入境边防检查和出入境有关系统开发运维、通信网络保障等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，从事出入境边防检查和出入境有关系统开发运维、通信网络保障等工作。",
    "department": "山西出入境边防检查总站",
    "workLocation": "山西省运城市",
    "recruitCount": 2,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大数据技术与工程(085411)",
        "网络与信息安全(085412)",
        "人工智能(085410)",
        "软件工程(085405)"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1498",
    "name": "属于公安机关人民警察，承担着维护国家主权、边境安全和社会秩序的重要职责，负责实施出入国（边）境人员、",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，承担着维护国家主权、边境安全和社会秩序的重要职责，负责实施出入国（边）境人员、交通运输工具边防检查，口岸限定区域管理，审核签发外国人临时入",
    "department": "内蒙古出入境边防检查总站",
    "workLocation": "内蒙古自治区呼伦贝尔市满洲里市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "030109TK国际法",
        "030111TK国家安全学",
        "030112TK海外利益安全",
        "030202国际政治",
        "030203外交学"
      ],
      "education": "仅限本科",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1499",
    "name": "属于公安机关人民警察，承担着维护国家主权、边境安全和社会秩序的重要职责，负责实施出入国（边）境人员、",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，承担着维护国家主权、边境安全和社会秩序的重要职责，负责实施出入国（边）境人员、交通运输工具边防检查，口岸限定区域管理，审核签发外国人临时入",
    "department": "内蒙古出入境边防检查总站",
    "workLocation": "内蒙古自治区阿拉善盟额济纳旗",
    "recruitCount": 3,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "以下专业均为蒙古语",
        "朝鲜语方向。研究生：050107中国少数民族语言文学",
        "0502外国语言文学",
        "0551翻译。本科：050104中国少数民族语言文学",
        "050106T应用语言学"
      ],
      "education": "本科及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1500",
    "name": "属于公安机关人民警察，承担着维护国家主权、边境安全和社会秩序的重要职责，负责实施出入国（边）境人员、",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，承担着维护国家主权、边境安全和社会秩序的重要职责，负责实施出入国（边）境人员、交通运输工具边防检查，口岸限定区域管理，审核签发外国人临时入",
    "department": "内蒙古出入境边防检查总站",
    "workLocation": "内蒙古自治区阿拉善盟额济纳旗",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科：040206T运动康复",
        "0711心理学类",
        "082903T职业卫生工程",
        "1004公共卫生与预防医学类",
        "1009法医学类。专科：520416中医康复技术"
      ],
      "education": "大专或本科",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1501",
    "name": "属于公安机关人民警察，承担着维护国家主权、边境安全和社会秩序的重要职责，负责实施进出边境管理区人员、",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，承担着维护国家主权、边境安全和社会秩序的重要职责，负责实施进出边境管理区人员、交通运输工具检查管理，边境地区治安、户籍、通行证等签发管理，",
    "department": "内蒙古出入境边防检查总站",
    "workLocation": "内蒙古自治区阿拉善盟额济纳旗",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "研究生：0813/0851建筑学",
        "130501设计学",
        "0814/085213/085901土木工程。本科：0810土木类",
        "081802交通工程",
        "082801建筑学"
      ],
      "education": "本科及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1502",
    "name": "属于公安机关人民警察，承担着维护国家主权、边境安全和社会秩序的重要职责，负责实施出入国（边）境人员、",
    "category": "国考",
    "subCategory": "市地级",
    "description": "属于公安机关人民警察，承担着维护国家主权、边境安全和社会秩序的重要职责，负责实施出入国（边）境人员、交通运输工具边防检查，口岸限定区域管理，审核签发外国人临时入",
    "department": "内蒙古出入境边防检查总站",
    "workLocation": "内蒙古自治区阿拉善盟额济纳旗",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "研究生：0812/085211计算机科学与技术",
        "0835/085212软件工程",
        "0810/0852/085402信息与通信工程。本科：0807电子信息类",
        "080901计算机科学与技术",
        "080902软件工程"
      ],
      "education": "本科及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1513",
    "name": "属于公安机关人民警察，从事出入境边防检查、监护、巡查、大型安保、翻译等工作；实行轮流倒班工作制度，夜",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，从事出入境边防检查、监护、巡查、大型安保、翻译等工作；实行轮流倒班工作制度，夜间执勤较多，法定休息及节假日不能保证。",
    "department": "辽宁出入境边防检查总站",
    "workLocation": "辽宁省大连市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "朝鲜语笔译（055111）",
        "朝鲜语口译（055112）"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1514",
    "name": "属于公安机关人民警察，从事出入境边防检查、监护、巡查、大型安保、实战教学、比武训练等工作；实行轮流倒",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，从事出入境边防检查、监护、巡查、大型安保、实战教学、比武训练等工作；实行轮流倒班工作制度，夜间执勤较多，法定休息及节假日不能保证。",
    "department": "辽宁出入境边防检查总站",
    "workLocation": "辽宁省丹东市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "体育学类"
      ],
      "education": "本科及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1515",
    "name": "属于公安机关人民警察，从事出入境边防检查、监护、巡查、大型安保、财务、税务等工作；实行轮流倒班工作制",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，从事出入境边防检查、监护、巡查、大型安保、财务、税务等工作；实行轮流倒班工作制度，夜间执勤较多，法定休息及节假日不能保证。",
    "department": "辽宁出入境边防检查总站",
    "workLocation": "辽宁省营口市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科：财政学（020201K)",
        "税收学（020202） 研究生：财政学（020203）",
        "税务（025300）"
      ],
      "education": "本科及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1516",
    "name": "属于公安机关人民警察，主要负责执法执勤和数据分析、软件研发等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，主要负责执法执勤和数据分析、软件研发等工作。",
    "department": "吉林出入境边防检查总站",
    "workLocation": "吉林省长春市",
    "recruitCount": 2,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "大数据技术与工程（085411）",
        "计算机科学与技术（081200",
        "077500）",
        "软件工程（083500",
        "085405）"
      ],
      "education": "仅限硕士研究生",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1517",
    "name": "属于公安机关人民警察，主要负责执法执勤和网络系统运维、应急保障等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，主要负责执法执勤和网络系统运维、应急保障等工作。",
    "department": "吉林出入境边防检查总站",
    "workLocation": "吉林省长春市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "网络空间安全（083900）",
        "网络与信息安全（085412）"
      ],
      "education": "仅限硕士研究生",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1518",
    "name": "属于公安机关人民警察，主要负责执法执勤和翻译等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，主要负责执法执勤和翻译等工作。",
    "department": "吉林出入境边防检查总站",
    "workLocation": "吉林省延边朝鲜族自治州",
    "recruitCount": 5,
    "needAdjust": 15,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "朝鲜语口译（055112）",
        "朝鲜语笔译（055111）",
        "中国少数民族语言文学（朝鲜语方向）（050107）",
        "外国语言文学（朝鲜语方向）（050200）"
      ],
      "education": "仅限硕士研究生",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1519",
    "name": "属于公安机关人民警察，主要负责执法执勤和翻译等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，主要负责执法执勤和翻译等工作。",
    "department": "吉林出入境边防检查总站",
    "workLocation": "吉林省延边朝鲜族自治州",
    "recruitCount": 3,
    "needAdjust": 9,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "俄语语言文学（050202）",
        "俄语笔译（055103）",
        "俄语口译（055104）"
      ],
      "education": "仅限硕士研究生",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1520",
    "name": "属于公安机关人民警察，主要负责执法执勤和翻译等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，主要负责执法执勤和翻译等工作。",
    "department": "吉林出入境边防检查总站",
    "workLocation": "吉林省长春市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "俄语语言文学（050202）",
        "俄语笔译（055103）",
        "俄语口译（055104）"
      ],
      "education": "仅限硕士研究生",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1565",
    "name": "属于公安机关人民警察，主要从事边境管理、治安管理、户籍管理、安保维稳、执法执勤及文字综合、新闻宣传、",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，主要从事边境管理、治安管理、户籍管理、安保维稳、执法执勤及文字综合、新闻宣传、信息化建设等工作。",
    "department": "黑龙江出入境边防检查总站",
    "workLocation": "黑龙江省佳木斯市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科：法学类",
        "政治学类",
        "马克思主义理论类",
        "中国语言文学类",
        "新闻传播学类"
      ],
      "education": "本科及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1566",
    "name": "属于公安机关人民警察，从事出入境边防检查和应急处突、大型安保、侦查办案、外事等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，从事出入境边防检查和应急处突、大型安保、侦查办案、外事等工作。",
    "department": "湖北出入境边防检查总站",
    "workLocation": "湖北省",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "亚非语言文学（越南语方向）",
        "越南语笔译",
        "越南语口译"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1567",
    "name": "属于公安机关人民警察，主要从事智慧口岸建设、数据分析研判、网络信息安全防护和各类系统、设备运维等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，主要从事智慧口岸建设、数据分析研判、网络信息安全防护和各类系统、设备运维等工作。能承受高强度、高压力工作，适应经常性加班，法定休息日及节假",
    "department": "广西出入境边防检查总站",
    "workLocation": "广西壮族自治区南宁市",
    "recruitCount": 2,
    "needAdjust": 8,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "0701数学",
        "0775计算机科学与技术",
        "0810信息与通信工程",
        "0811控制科学与工程",
        "0812计算机科学与技术"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1568",
    "name": "属于公安机关人民警察，主要从事法制建设和出入境边防检查等工作。实行轮流倒班工作制度，法定休息日及节假",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，主要从事法制建设和出入境边防检查等工作。实行轮流倒班工作制度，法定休息日及节假日不能保证正常休息休假。",
    "department": "广西出入境边防检查总站",
    "workLocation": "广西壮族自治区南宁市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "0301法学（行政法",
        "刑法",
        "国际法方向）",
        "035102法律（法学）"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1569",
    "name": "属于公安机关人民警察，主要从事综合文字、新闻宣传和出入境边防检查等工作。实行轮流倒班工作制度，法定休",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，主要从事综合文字、新闻宣传和出入境边防检查等工作。实行轮流倒班工作制度，法定休息日及节假日不能保证正常休息休假。",
    "department": "广西出入境边防检查总站",
    "workLocation": "广西壮族自治区南宁市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "0501中国语言文学",
        "0503新闻传播"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1570",
    "name": "属于公安机关人民警察，主要从事印度尼西亚语/马来语翻译、对外合作交流和出入境边防检查等工作。实行轮流",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，主要从事印度尼西亚语/马来语翻译、对外合作交流和出入境边防检查等工作。实行轮流倒班工作制度，法定休息日及节假日不能保证正常休息休假。",
    "department": "广西出入境边防检查总站",
    "workLocation": "广西壮族自治区南宁市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "050212印度尼西亚语",
        "050217马来语"
      ],
      "education": "本科及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1571",
    "name": "属于公安机关人民警察，主要从事法制建设和出入境边防检查等工作。实行轮流倒班工作制度，法定休息日及节假",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，主要从事法制建设和出入境边防检查等工作。实行轮流倒班工作制度，法定休息日及节假日不能保证正常休息休假。",
    "department": "广西出入境边防检查总站",
    "workLocation": "广西壮族自治区桂林市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "0301法学（行政法",
        "刑法",
        "国际法方向）",
        "035102法律（法学）"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1579",
    "name": "属于公安机关人民警察，长期驻守边境口岸，主要从事出入境边防检查、口岸限定区域管理，以及开展东南亚区域",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，长期驻守边境口岸，主要从事出入境边防检查、口岸限定区域管理，以及开展东南亚区域国别研究等工作。",
    "department": "云南出入境边防检查总站",
    "workLocation": "云南省德宏傣族景颇族自治州",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "区域国别法学",
        "区域国别研究",
        "国别和区域研究",
        "区域国别学"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1580",
    "name": "属于公安机关人民警察，长期驻守边境口岸，主要从事出入境边防检查、口岸限定区域管理等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，长期驻守边境口岸，主要从事出入境边防检查、口岸限定区域管理等工作。",
    "department": "云南出入境边防检查总站",
    "workLocation": "云南省西双版纳傣族自治州",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "计算机科学与技术（0812",
        "0775）",
        "软件工程（0835）",
        "网络空间安全（0839）",
        "大数据科学与技术（0701J2）"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1581",
    "name": "属于公安机关人民警察，主要从事出入境边防检查、口岸限定区域管理等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，主要从事出入境边防检查、口岸限定区域管理等工作。",
    "department": "云南出入境边防检查总站",
    "workLocation": "云南省西双版纳傣族自治州",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "中国语言文学（0501）",
        "新闻传播学（0503）",
        "新闻与传播（0552）"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1582",
    "name": "属于公安机关人民警察，长期驻守怒江傈僳族自治州边境口岸，主要从事出入境边防检查、口岸限定区域管理等工",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，长期驻守怒江傈僳族自治州边境口岸，主要从事出入境边防检查、口岸限定区域管理等工作。",
    "department": "云南出入境边防检查总站",
    "workLocation": "云南省怒江傈僳族自治州",
    "recruitCount": 3,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学类（0301）",
        "民族学类",
        "体育学类",
        "电子信息类",
        "轻工类（限包装工程"
      ],
      "education": "本科及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1583",
    "name": "属于公安机关人民警察，主要从事出入境边防检查、口岸限定区域管理等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，主要从事出入境边防检查、口岸限定区域管理等工作。",
    "department": "云南出入境边防检查总站",
    "workLocation": "云南省丽江市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "计算机科学与技术（0812",
        "0775）",
        "软件工程（0835）",
        "网络空间安全（0839）",
        "大数据科学与技术（0701J2）"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1584",
    "name": "属于公安机关人民警察，主要从事出入境边防检查、监护、巡查和应急处突、大型安保以及翻译、网络系统、信息",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，主要从事出入境边防检查、监护、巡查和应急处突、大型安保以及翻译、网络系统、信息安全、数据分析等工作，长期驻守口岸。",
    "department": "新疆出入境边防检查总站",
    "workLocation": "新疆维吾尔自治区乌鲁木齐市",
    "recruitCount": 4,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "050217马来语",
        "050220泰语",
        "050232葡萄牙语",
        "030110TK司法鉴定学",
        "030619TK移民管理"
      ],
      "education": "仅限本科",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1585",
    "name": "属于公安机关人民警察，主要从事出入境边防检查、监护、巡查和应急处突、大型安保以及新闻宣传、融媒体运营",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，主要从事出入境边防检查、监护、巡查和应急处突、大型安保以及新闻宣传、融媒体运营与管理等工作，长期驻守口岸。",
    "department": "新疆出入境边防检查总站",
    "workLocation": "新疆维吾尔自治区阿勒泰地区吉木乃县",
    "recruitCount": 3,
    "needAdjust": 6,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "080912T新媒体技术",
        "130311T影视摄影与制作"
      ],
      "education": "仅限本科",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1586",
    "name": "属于公安机关人民警察，从事国别研究，涉外培训翻译和教学等工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，从事国别研究，涉外培训翻译和教学等工作。",
    "department": "国家移民管理局常备力量第二总队",
    "workLocation": "云南省昆明市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "阿拉伯语"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1587",
    "name": "属于公安机关人民警察，从事心理测评、心理咨询等工作，实行轮流值班制",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，从事心理测评、心理咨询等工作，实行轮流值班制",
    "department": "国家移民管理局常备力量第二总队",
    "workLocation": "云南省昆明市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "040200心理学（心理测量方向）"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1588",
    "name": "属于公安机关人民警察，主要从事法制建设和外国人管理等工作，存在夜间执勤和轮流倒班等工作安排。",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，主要从事法制建设和外国人管理等工作，存在夜间执勤和轮流倒班等工作安排。",
    "department": "国家移民管理局东兴遣返中心",
    "workLocation": "广西壮族自治区防城港市东兴市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学类（0301）"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1589",
    "name": "属于公安机关人民警察，主要从事政治工作和外国人管理等工作，存在夜间执勤和轮流倒班等工作安排。",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，主要从事政治工作和外国人管理等工作，存在夜间执勤和轮流倒班等工作安排。",
    "department": "国家移民管理局东兴遣返中心",
    "workLocation": "广西壮族自治区防城港市东兴市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "政治学类（0302）"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1590",
    "name": "属于公安机关人民警察，主要从事计算机系统运维、数据核查和外国人管理等工作，存在夜间执勤和轮流倒班等工",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，主要从事计算机系统运维、数据核查和外国人管理等工作，存在夜间执勤和轮流倒班等工作安排。",
    "department": "国家移民管理局东兴遣返中心",
    "workLocation": "广西壮族自治区防城港市东兴市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "计算机类（0809）"
      ],
      "education": "仅限本科",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1591",
    "name": "属于公安机关人民警察，主要从事非法移民羁押监管、国籍身份核查、实施遣返及周边区域研究工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "属于公安机关人民警察，主要从事非法移民羁押监管、国籍身份核查、实施遣返及周边区域研究工作。",
    "department": "国家移民管理局瑞丽遣返中心",
    "workLocation": "云南省德宏傣族景颇族自治州瑞丽市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "政治学 （0302区域国别研究） 区域国别学（1407）"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1592",
    "name": "从事森林资源保护管理监督工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事森林资源保护管理监督工作",
    "department": "国家林业和草原局驻大兴安岭专员办",
    "workLocation": "黑龙江省大兴安岭地区",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科：林学（090501）",
        "森林保护（090503） 研究生：林学类（0907）",
        "林业类（0954）"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1593",
    "name": "从事国家公园等各类自然保护地、湿地保护、林草有害生物防治、陆生野生动植物保护管理监督工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事国家公园等各类自然保护地、湿地保护、林草有害生物防治、陆生野生动植物保护管理监督工作",
    "department": "国家林业和草原局驻大兴安岭专员办",
    "workLocation": "黑龙江省大兴安岭地区",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科：林学（090501）",
        "野生动物与自然保护区管理（090202）",
        "研究生：林学类（0907）",
        "林业类（0954）"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1594",
    "name": "从事濒危物种进出口管理及履约执法、野生动植物保护监管、林草资源监督等工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事濒危物种进出口管理及履约执法、野生动植物保护监管、林草资源监督等工作",
    "department": "国家林业和草原局驻成都专员办",
    "workLocation": "四川省成都市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科：野生动物与自然保护区管理（090202）",
        "林学（090501）",
        "森林保护（090503） 研究生：森林保护学（090703）",
        "森林培育（090702）",
        "野生动植物保护与利用（090705）"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1595",
    "name": "从事林草资源监督和案件督查督办工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事林草资源监督和案件督查督办工作",
    "department": "国家林业和草原局驻广州专员办",
    "workLocation": "广东省广州市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "森林经理学（090704）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1596",
    "name": "拟定园区内科普宣教、新闻传播工作规划和计划，协调地方政府履行园区内经济社会发展综合协调、对外合作交流",
    "category": "国考",
    "subCategory": "其他",
    "description": "拟定园区内科普宣教、新闻传播工作规划和计划，协调地方政府履行园区内经济社会发展综合协调、对外合作交流等工作",
    "department": "东北虎豹国家公园管理局",
    "workLocation": "吉林省长春市",
    "recruitCount": 1,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "野生动植物保护与利用（090705）",
        "自然保护区学（0907Z1）",
        "国家公园学（0713J1）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1597",
    "name": "主要从事铁路综合安全监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事铁路综合安全监管工作。",
    "department": "上海铁路监督管理局",
    "workLocation": "上海市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "机械类",
        "电气工程及其自动化专业",
        "自动化专业"
      ],
      "education": "本科及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1598",
    "name": "主要从事铁路工程监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事铁路工程监管工作。",
    "department": "上海铁路监督管理局",
    "workLocation": "上海市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "工学学科门类"
      ],
      "education": "本科及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1599",
    "name": "主要从事铁路设备安全监管工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事铁路设备安全监管工作。",
    "department": "上海铁路监督管理局",
    "workLocation": "上海市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "工学学科门类"
      ],
      "education": "本科及以上",
      "politics": "中共党员或共青团员"
    }
  },
  {
    "id": "tiaoji_1600",
    "name": "主要从事铁路安全监管、事故调查工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事铁路安全监管、事故调查工作。",
    "department": "武汉铁路监督管理局",
    "workLocation": "湖北省武汉市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电气类"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1601",
    "name": "负责民用机场新建、改扩建、迁建等项目的前期审查，民用机场使用政府性基金补贴项目的审核或审批及监督工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "负责民用机场新建、改扩建、迁建等项目的前期审查，民用机场使用政府性基金补贴项目的审核或审批及监督工作。",
    "department": "中国民用航空局华北地区管理局",
    "workLocation": "北京市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "工程管理相关专业"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1602",
    "name": "民用机场总体规划、许可证管理，监督检查民用机场安全运行、净空管理、应急救援工作，负责对民用机场专业工",
    "category": "国考",
    "subCategory": "其他",
    "description": "民用机场总体规划、许可证管理，监督检查民用机场安全运行、净空管理、应急救援工作，负责对民用机场专业工程建设项目的设计审查、行业验收，民航招投标管理等。",
    "department": "中国民用航空局华北地区管理局",
    "workLocation": "北京市",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "土木工程"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1603",
    "name": "从事辖区内航务管理工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事辖区内航务管理工作",
    "department": "中国民用航空局华东地区管理局",
    "workLocation": "上海市",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "0823交通运输工程",
        "0861交通运输"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1604",
    "name": "从事辖区内民航运行监管、行政执法等工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事辖区内民航运行监管、行政执法等工作",
    "department": "中国民用航空局华东地区管理局",
    "workLocation": "上海市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "0301法学"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1605",
    "name": "从事辖区内民用航空器适航维修安全监管等工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事辖区内民用航空器适航维修安全监管等工作",
    "department": "中国民用航空局华东地区管理局",
    "workLocation": "山东省济南市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "08工学"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1606",
    "name": "从事辖区内机场安全和建设管理等工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事辖区内机场安全和建设管理等工作",
    "department": "中国民用航空局华东地区管理局",
    "workLocation": "山东省济南市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "080800电气工程",
        "085801电气工程"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1607",
    "name": "从事辖区内空管运行监察等工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事辖区内空管运行监察等工作",
    "department": "中国民用航空局华东地区管理局",
    "workLocation": "山东省济南市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "08工学"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1608",
    "name": "运输管理事务",
    "category": "国考",
    "subCategory": "其他",
    "description": "运输管理事务",
    "department": "中国民用航空局中南地区管理局",
    "workLocation": "广东省广州市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学（0301）",
        "数学（0701）",
        "统计学（0714）",
        "交通运输工程（0823）",
        "材料科学与工程（0805）"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1609",
    "name": "航空卫生监察",
    "category": "国考",
    "subCategory": "其他",
    "description": "航空卫生监察",
    "department": "中国民用航空局中南地区管理局",
    "workLocation": "广东省广州市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "临床医学（1002）"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1610",
    "name": "空中交通管理监察",
    "category": "国考",
    "subCategory": "其他",
    "description": "空中交通管理监察",
    "department": "中国民用航空局中南地区管理局",
    "workLocation": "广东省广州市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "交通运输（081801）（空中交通管制",
        "含管制+1）"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1611",
    "name": "从事航空安全管理相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事航空安全管理相关工作",
    "department": "中国民用航空局西北地区管理局",
    "workLocation": "陕西省西安市",
    "recruitCount": 1,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "交通运输（空中交通管制方向）专业"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1612",
    "name": "从事航空器机载系统、设备及零部件、软件等专业适航审定工作，设计制造单位和航空器适航审定工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事航空器机载系统、设备及零部件、软件等专业适航审定工作，设计制造单位和航空器适航审定工作",
    "department": "中国民用航空局西北地区管理局",
    "workLocation": "陕西省西安市",
    "recruitCount": 1,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电子信息",
        "信息与通讯工程",
        "控制科学与工程",
        "电气工程及其自动化",
        "计算机科学与技术专业"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1613",
    "name": "从事民航飞行运行监管相关工作",
    "category": "国考",
    "subCategory": "市地级",
    "description": "从事民航飞行运行监管相关工作",
    "department": "中国民用航空局西北地区管理局",
    "workLocation": "青海省西宁市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "飞行技术专业"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1614",
    "name": "适航审定管理",
    "category": "国考",
    "subCategory": "其他",
    "description": "适航审定管理",
    "department": "中国民用航空局东北地区管理局",
    "workLocation": "辽宁省沈阳市",
    "recruitCount": 1,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电子科学与技术",
        "电子信息科学与技术"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1615",
    "name": "机场运行监管",
    "category": "国考",
    "subCategory": "其他",
    "description": "机场运行监管",
    "department": "中国民用航空局东北地区管理局",
    "workLocation": "辽宁省沈阳市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "土木工程",
        "桥梁与隧道工程",
        "交通运输工程",
        "道路与铁道工程"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1616",
    "name": "通信导航管理",
    "category": "国考",
    "subCategory": "其他",
    "description": "通信导航管理",
    "department": "中国民用航空局东北地区管理局",
    "workLocation": "辽宁省沈阳市",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "通信工程",
        "电子信息工程",
        "电子科学与技术",
        "电磁场与无线技术",
        "电波传播与天线"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1617",
    "name": "飞行标准监管",
    "category": "国考",
    "subCategory": "其他",
    "description": "飞行标准监管",
    "department": "中国民用航空局东北地区管理局",
    "workLocation": "辽宁省沈阳市",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "飞行技术"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1618",
    "name": "空管监察",
    "category": "国考",
    "subCategory": "市地级",
    "description": "空管监察",
    "department": "中国民用航空局新疆管理局",
    "workLocation": "新疆维吾尔自治区喀什地区喀什市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "交通运输（空中交通管制方向）"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1619",
    "name": "办公室综合管理、文字工作、财务、统计",
    "category": "国考",
    "subCategory": "市地级",
    "description": "办公室综合管理、文字工作、财务、统计",
    "department": "黑龙江省邮政管理局",
    "workLocation": "黑龙江省大兴安岭地区",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "财务管理",
        "会计学",
        "会计",
        "审计学",
        "统计学"
      ],
      "education": "本科及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1620",
    "name": "从事矿山安全监察执法工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事矿山安全监察执法工作。",
    "department": "国家矿山安全监察局河北局",
    "workLocation": "河北省",
    "recruitCount": 2,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "安全工程"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1621",
    "name": "从事矿山安全监察执法工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事矿山安全监察执法工作。",
    "department": "国家矿山安全监察局辽宁局",
    "workLocation": "辽宁省",
    "recruitCount": 4,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "安全工程"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1622",
    "name": "从事矿山安全监察执法工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事矿山安全监察执法工作。",
    "department": "国家矿山安全监察局辽宁局",
    "workLocation": "辽宁省",
    "recruitCount": 1,
    "needAdjust": 3,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "水利水电工程"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1623",
    "name": "主要为矿山安全监察执法提供法律支撑",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要为矿山安全监察执法提供法律支撑",
    "department": "国家矿山安全监察局吉林局",
    "workLocation": "吉林省",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "法学"
      ],
      "education": "硕士研究生及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1624",
    "name": "从事矿山安全监察执法工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事矿山安全监察执法工作。",
    "department": "国家矿山安全监察局黑龙江局",
    "workLocation": "黑龙江省",
    "recruitCount": 1,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "矿山主体专业（地质）"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1625",
    "name": "从事矿山安全监察执法工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事矿山安全监察执法工作。",
    "department": "国家矿山安全监察局安徽局",
    "workLocation": "安徽省",
    "recruitCount": 3,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "安全工程"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1626",
    "name": "从事矿山安全监察执法工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事矿山安全监察执法工作。",
    "department": "国家矿山安全监察局湖南局",
    "workLocation": "湖南省",
    "recruitCount": 2,
    "needAdjust": 2,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "地质工程",
        "地下水科学与工程",
        "资源勘查工程",
        "勘查技术与工程",
        "煤及煤层气工程"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1627",
    "name": "从事矿山安全监察执法工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事矿山安全监察执法工作。",
    "department": "国家矿山安全监察局四川局",
    "workLocation": "四川省",
    "recruitCount": 4,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "安全工程"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1628",
    "name": "从事矿山安全监察执法工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事矿山安全监察执法工作。",
    "department": "国家矿山安全监察局四川局",
    "workLocation": "四川省",
    "recruitCount": 3,
    "needAdjust": 4,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "地质工程"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1629",
    "name": "从事矿山安全监察执法工作。",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事矿山安全监察执法工作。",
    "department": "国家矿山安全监察局贵州局",
    "workLocation": "贵州省",
    "recruitCount": 3,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "电气工程及其自动化",
        "电气工程"
      ],
      "education": "本科及以上",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1630",
    "name": "主要从事地质调查项目预概算标准研究、绩效评价研究、定额标准研究",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事地质调查项目预概算标准研究、绩效评价研究、定额标准研究",
    "department": "中国地质调查局",
    "workLocation": "北京市西城区",
    "recruitCount": 1,
    "needAdjust": 5,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "本科：会计学（120203K）",
        "研究生：会计学（1202）",
        "会计（1253）"
      ],
      "education": "仅限博士研究生",
      "politics": "不限"
    }
  },
  {
    "id": "tiaoji_1631",
    "name": "主要从事地震部门公务员综合管理相关工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "主要从事地震部门公务员综合管理相关工作",
    "department": "海南省地震局",
    "workLocation": "海南省海口市",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "固体地球物理学（070801）",
        "地质工程（081803）",
        "地球探测与信息技术（081802）",
        "海洋地球物理学"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  },
  {
    "id": "tiaoji_1632",
    "name": "从事机要密码通信、政务文稿撰写及保障工作",
    "category": "国考",
    "subCategory": "其他",
    "description": "从事机要密码通信、政务文稿撰写及保障工作",
    "department": "甘肃省地震局",
    "workLocation": "甘肃省兰州市城关区",
    "recruitCount": 1,
    "needAdjust": 1,
    "isThreeFree": false,
    "isAdjust": true,
    "requirements": {
      "majors": [
        "固体地球物理学",
        "空间物理学",
        "矿物学",
        "岩石学",
        "矿床学"
      ],
      "education": "硕士研究生及以上",
      "politics": "中共党员"
    }
  }
];