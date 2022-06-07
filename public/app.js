const express= require('express');
const app=express();
const items= require('./routes/items')

app.use(express.json())
app.use('/api/v1/items',items)

app.listen(port,console.log('Listining on port 3000'))