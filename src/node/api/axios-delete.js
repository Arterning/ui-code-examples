const axios = require('axios')

axios({
    method: 'DELETE',
    url:'http://localhost:3000/girl/5',
}).then(res => {
    console.log(res);
})