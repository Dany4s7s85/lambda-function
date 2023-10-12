const express = require('express')
const app = express()

const port = process.env.PORT || 5000

app.get('/test', (req, res)=>{
    res.send("Hi dear this message from AWS lembda function response")
})

app.get('/', (req, res)=>{
    res.send("hi dear you are on home page")
})

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})