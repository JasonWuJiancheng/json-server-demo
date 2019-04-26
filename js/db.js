var Mock = require('mockjs');

module.exports = () => {
  // 使用 Mock
  var data = Mock.mock({
    "fruits|5": [
        {
          "id|+1": 1,
          "name": '@name',
          "price|1-20.0-2": 1
        }
    ]
  });
  // 返回的data会作为json-server的数据
  return data;
};