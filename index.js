import express from 'express';
import roomRouter from './Router/roomRouter.js';

const app = express();
const port = 3000;
app.use(express.json())

app.use('/api',roomRouter);

app.get('/',(req,res)=>{
    res.send('hello world')
})


app.listen(port,()=>{
    console.log(`The App running on port ${port}`);
})