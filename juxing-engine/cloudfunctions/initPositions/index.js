// cloudfunctions/initPositions/index.js
// 初始化岗位数据到云数据库

const cloud = require('wx-server-sdk');
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

const db = cloud.database();

exports.main = async (event, context) => {
  try {
    // 获取现有数据
    const countResult = await db.collection('positions').count();
    console.log('当前数据量:', countResult.total);
    
    // 如果已有数据，先清空
    if (countResult.total > 0) {
      // 分批删除
      const batchCount = Math.ceil(countResult.total / 100);
      for (let i = 0; i < batchCount; i++) {
        const result = await db.collection('positions').skip(i * 100).limit(100).get();
        const ids = result.data.map(item => item._id);
        for (const id of ids) {
          await db.collection('positions').doc(id).remove();
        }
      }
      console.log('已清空旧数据');
    }
    
    // 从静态文件读取数据
    const positionsData = require('./positions-data.js');
    const allPositions = positionsData.getAllPositions();
    
    console.log('准备导入数据量:', allPositions.length);
    
    // 分批导入，每批100条
    const batchSize = 100;
    let imported = 0;
    
    for (let i = 0; i < allPositions.length; i += batchSize) {
      const batch = allPositions.slice(i, i + batchSize);
      const tasks = batch.map(item => {
        return db.collection('positions').add({ data: item });
      });
      await Promise.all(tasks);
      imported += batch.length;
      console.log(`已导入 ${imported}/${allPositions.length}`);
    }
    
    return {
      success: true,
      message: `成功导入 ${imported} 条岗位数据`,
      total: allPositions.length
    };
    
  } catch (err) {
    console.error('初始化岗位数据失败:', err);
    return {
      success: false,
      error: err.message || '初始化失败'
    };
  }
};
