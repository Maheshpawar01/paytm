const express = require('express')
const app = express();
const rootRouter = require('./routes/index')
const cors= require('cors')

app.use(express.json());
app.use(cors());

app.use('/api/v1', rootRouter)

app.get('/', (req, res)=>{
    res.status(200).json({
        msg:"Comming from backend"
    })
})

app.listen(3000, (req, res)=>{
    console.log('port is running on port 300')
})