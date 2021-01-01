import axios from "axios";

export function request(config,success,failure){
  // //1.创建axios的实例
  // const instance = axios.create({
  //   baseURL: "http://123.207.32.32:8000",
  //   timeout: 5000
  // })
  //
  // instance(config)
  //   .then(res => {
  //     console.log(res);
  //     success(res)
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     failure(err)
  //   })

  //1.创建axios的实例
  // return new Promise((resolve,reject) => {
    const instance = axios.create({
      baseURL: "http://123.207.32.32:8000",
      timeout: 5000
    })

    instance.interceptors.request.use(config => {
      console.log(config);
      return config
    },err => {
      console.log(err);
    })


    instance.interceptors.response.use(res => {
      console.log(res);
      return res.data
    }, error => {
      console.log(error);
    })

    return instance(config)

  // })
}
