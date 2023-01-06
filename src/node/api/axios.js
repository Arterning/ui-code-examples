//import {axios} from 'axios'
const axios = require('axios')

axios({
    method: 'GET',
    url:'http://localhost:3000/girl'
}).then(res => {
    console.log(res.data);
})


axios({
    method: 'POST',
    url:'http://localhost:3000/girl',
    data: {
        "id": 4,
        "name": "大波妹 花花",
        "size": "E 罩杯",
        "age": 23,
        "height": "168cm"
      }
}).then(res => {
    console.log(res.data);
})