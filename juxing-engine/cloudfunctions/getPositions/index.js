// cloudfunctions/getPositions/index.js
// 获取岗位数据云函数

const cloud = require('wx-server-sdk');
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

const db = cloud.database();

exports.main = async (event, context) => {
  const { category, isThreeFree, keyword, page = 1, pageSize = 100 } = event;
  
  try {
    // 构建查询条件
    let where = {};
    
    // 按类别筛选
    if (category && category !== '全部') {
      where.category = category;
    }
    
    // 三不限筛选
    if (isThreeFree) {
      where.isThreeFree = true;
    }
    
    // 关键词搜索
    if (keyword) {
      where.name = db.RegExp({
        regexp: keyword,
        options: 'i'
      });
    }
    
    // 从云数据库查询
    const countResult = await db.collection('positions').where(where).count();
    const total = countResult.total;
    
    const listResult = await db.collection('positions')
      .where(where)
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .get();
    
    return {
      success: true,
      data: listResult.data,
      total: total,
      page: page,
      pageSize: pageSize
    };
    
  } catch (err) {
    console.error('获取岗位数据失败:', err);
    return {
      success: false,
      error: err.message || '获取数据失败'
    };
  }
};
