const express = require('express')
const app = express();
const rootRouter = require('./routes/index')
const cors= require('cors')
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: 'https://paytm-b.vercel.app', // Vercel frontend URL
    optionsSuccessStatus: 200
  };
  
  app.use(cors(corsOptions));

app.use(express.json());


app.use('/api/v1', rootRouter)

app.get('/', (req, res)=>{
    res.status(200).json({
        msg:"Comming from backend"
    })
})

app.listen(port, (req, res)=>{
    console.log('port is running on port 300')
})