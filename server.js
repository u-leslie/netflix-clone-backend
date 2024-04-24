const express= require('express')
const cors=require('cors')
const mongoose= require('mongoose')
const userRoutes = require('./Routes/UserRoutes')

const app = express();
app.use(cors());
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/netflix-clone",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("MongoDB connected successfully")
})
app.use('/api/user',userRoutes)

app.listen(5000,console.log('server started'))