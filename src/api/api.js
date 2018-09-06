import axios from "axios";
let service = axios.create({
  baseURL: 'http://154.8.158.55:8001',
});
export default {
  //商品首页
  appIndex() {
    return service.get("/comm/appIndex")
  },
  //商品详情
  getComDetails(id) {
    return service.get("/comm/get/" + id);
  },
  //首页商品搜索
  fluzzySearch(param) {
    return service({
      method: 'post',
      url: '/comm/fluzzySearch',
      data: param + ""
    })
  },
  //商品分类一级和二级
  getCommClassify(id) {
    return service.get('/commCategory/getByPid/' + id);
  },
  //商品分类三级（商品列表）
  getCommClassifyThree(id) {
    return service.get('/comm/appSearch?categoryTwoid=' + id)
  },
  //购物车商品新增
  addCartItem(params) {
    return service.post('/cart/cartitem/save', {
      "commodityId": params.commodityId,
      "userId": params.userId ? params.userId : "322",
      "count": params.count
    })
  },
  //购物车查询接口
  selectCart(id) {
    return service.get('/cart/cartitem/select?userId=' + id);
  },
  //购物车删除单个接口
  deleteCart(id, userId) {
    return service({
      method: 'post',
      url: '/cart/cartitem/deleteBatch?cartitemId=' + id + ',&userId=' + userId,
    })
  },
  //购物车删除多个接口
  deleteCarts(ids) {
    return service({
      method: 'post',
      url: '/cart/cartitem/deleteBatch?cartitemId=' + ids + ',&userId=322'
    });
  },
  //购物车批量更新
  payment(params) {
    return service({
      method: 'post',
      url: '/cart/cartitem/updateBatch',
      data: params
    });
  },
  //查询所有订单
  getAllOrderList(params) {
    return service.get('/orderInfo/buyer/list?orderStatus=' + params.state + '&pageNum=' + params.pageNum + '&pageSize=' + params.pageSize);
  },

}