
// let apidata;
// fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=09b27d00219e4d6892661979236d68e2")

//     .then(response => response.json())
//     .then(json => json)
//     console.log(json)
// let data = JSON.stringify(apidata);
// let json = data;
// console.log(json.articles)


// let apidata;
// fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=09b27d00219e4d6892661979236d68e2")
//     .then(response => response.json())
//     .then(json => {
//         apidata = json;
//         // console.log(apidata.articles);
//         // You can perform further operations with the articles here
//         // for (i in apidata) {
//             // console.log(i)
//             let data = JSON.stringify(apidata.articles[1].title)
//             help.innerHTML = data;
//         // }
//     });


const express = require('express')
const path = require('path')
const axios = require('axios')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname) } )
})

app.get('/api', async(req, res) => {
  console.log(req._parsedUrl.query)
  let url = "https://newsapi.org/v2/everything?"+req._parsedUrl.query
  let r = await axios(url)
  let a = r.data 
  res.json(a)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


