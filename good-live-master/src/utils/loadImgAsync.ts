export function loadImageAsync(url) {
  return new Promise(function (resolve, reject) {
    // 创建一个image对象
    const image = new Image()
    // 将url赋值给src
    image.src = url
    // console.log(url, 'url')
    // 监听onload 事件
    image.onload = function () {
      // console.log(url, 'urlresolve')

      // 成功了 触发resolve
      resolve(url)
    }
    // 监听onerror 失败了触发reject
    image.onerror = function () {
      reject(new Error('Could not load image at ' + url))
    }
  })
}
