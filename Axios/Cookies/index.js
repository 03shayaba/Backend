import express from 'express' ;

import cookieParser from 'cookie-parser';
import web from './routes/web.js'
const port = process.env.PORT || '3000'
const app = express() ;

app.use(cookieParser());
app.use('/' , web);
app.listen(port , ()=>{
    console.log(`server is running on the  port ${port}`)
})