const express = require('express');

const App = express();

App.get('/', (req, res)=>{
    res.send('Hi everyone');
})
App.get('/api/main', (req, res)=>{
    res.send('hello!');
})


App.listen(9000,()=>{
    console.log('what is express!');
})