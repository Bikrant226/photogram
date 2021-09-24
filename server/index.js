const express=require('express');
const app=express();
const cors=require('cors');
require('./db/Connection');
app.use(cors());
app.use(express.json());
app.use(require('./routes/auth'));

app.listen(3001,()=>{
    console.log('Listening on port 3001');
})
