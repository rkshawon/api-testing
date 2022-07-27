const axios = require('axios')

const apiCall = async ()=>{
    const info = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(info.data);
    return info.data
}

module.exports = apiCall