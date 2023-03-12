const express = require('express')
const router = express.Router()
const Mock = require('mockjs')
const { Random } = require('mockjs')

const homehot = require('./data/home/homehot')
const url = require('url')
const searchData = require('./data/search')
const detailsData = require('./data/details')
const commentData = require('./data/comment')

/**
 * 首页热门数据
 */
router.get('/home/hot1', (req, res) => {
  const cityName = url.parse(req.url, true).query.cityName

  res.send({
    status: 200,
    result: homehot.hot1,
    city: cityName,
  })
})

router.get('/home/hot2', (req, res) => {
  const cityName = url.parse(req.url, true).query.cityName

  res.send({
    status: 200,
    result: homehot.hot2,
    city: cityName,
  })
})

/**
 * 搜索页面
 */
router.get('/search', (req, res) => {
  // const search = url.parse(req.url, true).query.search
  let data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'data|5': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        // 'id|+1': 1,
        id: Random.integer(),
        title: Random.csentence(5, 8),
        houseType: '17/19层| 4室1厅 - 273.97 ㎡',
        price: `<h3>${Random.integer(10000, 20000)}</h3>`,
        'rentType|+1': ['整租', '合租'],
        img: Random.image('800x600', Random.color(), '#FFF', 'png', Random.cword(5)),
      },
    ],
    hasMore: Random.boolean(),
  })
  // console.log(search, 'search')
  res.send({
    status: 200,
    // result: searchData,
    result: data,
  })
})

/**
 * Mock测试
 */
router.get('/mock', (req, res) => {
  let data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'data|5': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        // 'id|+1': 1,
        id: Random.integer(1),
        title: Random.csentence(5, 8),
        houseType: '17/19层| 4室1厅 - 273.97 ㎡',
        price: `<h3>${Random.integer(10000, 20000)}</h3>`,
        'rentType|+1': ['整租', '合租'],
        img: Random.image('800x600', '#CCC', '#FFF', 'png', '宜居·品质享受'),
      },
    ],
  })
  res.send(data)
})
/**
 * 详情页
 */
router.get('/details', (req, res) => {
  const id = url.parse(req.url, true).query.id
  res.send(detailsData)
})
router.post('/login', (req, res) => {
  const { username, password } = req.body
  if (username && password) {
    res.send({
      status: 200,
      token: 'enjy23rsdfe3fsveq.23r23sfdvfv.asdfqf4ag34ghdfjtkjhq',
      nick: username,
    })
  } else {
    res.send({
      status: 400,
      msg: '用户名密码错误',
    })
  }
})
router.get('/comment', (req, res) => {
  let data = Mock.mock({
    'data|5': [
      {
        username: `${Random.integer(100, 200)}****${Random.integer(1000, 9999)}`,
        comment: Random.csentence(5, 8),
        star: Random.integer(1, 9),
      },
    ],
    hasMore: Random.boolean(),
  })
  const id = url.parse(req.url).query.id
  res.send({
    status: 200,
    result: data,
  })
})
/**
 * lbs服务
 */
// 城市信息
router.get('/lbs/location', function (req, res, next) {
  let lat = req.query.latitude
  let lng = req.query.longitude

  request.get(
    {
      uri: 'https://apis.map.qq.com/ws/geocoder/v1/',
      json: true,
      qs: {
        location: `${lat},${lng}`,
        key: '24EBZ-QOT3V-RN3P2-ULHSA-D6KIH-FEFB4',
      },
    },
    (err, response, data) => {
      if (response.statusCode === 200) {
        res.send(data)
      } else {
        res.send({
          msg: '获取失败',
        })
      }
    },
  )
})

/**
 * 订单评价
 */
router.get('/order/comment', (req, res) => {
  const username = url.parse(req.url, true).query.username
  console.log(username)
  let data = Mock.mock({
    'data|3': [
      {
        id: Random.integer(1),
        title: Random.csentence(5, 8),
        houseType: '17/19层| 4室1厅 - 273.97 ㎡',
        price: Random.integer(1000, 2000),
        'rentType|+1': ['整租', '合租'],
        'commentState|1': [0, 1, 2],
        img: Random.image('120x90', '#CCC', '#FFF', 'png', '宜居·品质享受'),
      },
    ],
  })
  res.send({
    status: 200,
    // result:orderCommentData
    result: data.data,
  })
})

/**
 * 评价
 */
router.post('/order/submit/comment', (req, res) => {
  const { username, id, content } = req.body
  console.log(username, id, content)
  res.send({
    msg: '评价成功',
    status: 200,
  })
})

module.exports = router
