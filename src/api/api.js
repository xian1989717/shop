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
  //商品分类
  getCommClassify(id) {
    return service.get('/commCategory/getByPid/' + id);
  }
}