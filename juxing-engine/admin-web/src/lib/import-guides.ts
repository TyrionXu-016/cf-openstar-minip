/**
 * 岗位 / 题库两个下载按钮指向同一说明文件；仓库内为短路径，下载文件名与桌面 md 一致。
 */
export const UNIFIED_IMPORT_GUIDE_FILE = {
  href: "/import-guides/unified-import-guide.md",
  downloadFileName:
    "岗位列表Excel与题目列表Word转CSV说明（注将此文件和需要转换的文档发给ai按提示完成转换）.md",
} as const;

/** 岗位 / 题库下载按钮统一文案 */
export const IMPORT_GUIDE_BUTTON_LABEL = "转csv文件说明";

export const IMPORT_GUIDES = {
  positionListTable: {
    ...UNIFIED_IMPORT_GUIDE_FILE,
    buttonLabel: IMPORT_GUIDE_BUTTON_LABEL,
  },
  questionWordToCsv: {
    ...UNIFIED_IMPORT_GUIDE_FILE,
    buttonLabel: IMPORT_GUIDE_BUTTON_LABEL,
  },
} as const;
