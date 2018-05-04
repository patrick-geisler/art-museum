const express = require('express')
const app = express()
const fetch = require('node-fetch')
const imgUrl = []
const imgTitle = []

app.get('/images', function (req, res) {
  res.json(imgUrl)
})

fetch('https://www.rijksmuseum.nl/api/en/collection?key=maeAVeUh&format=json')
  .then(res => res.json())
  .then(json => {
    json.artObjects.map(obj => {
      imgUrl.push(obj.webImage.url)
      // imgTitle.push(obj.longTitle)
    })
  })
  // .then(json => console.log(arr))
  .catch(error => console.log(error))

app.listen(3000, function () {
  console.log('App running on 3000')
})
