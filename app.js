const express = require('express');
const app = express();
const tasks = require('./routes/task')

const port = 3000
//Middleware
app.use(express.json())

//Routes
app.get('/',(req,res)=>{
    res.send('Task Manager App')
})

app.use('/api/v1/tasks',tasks)

app.listen(port,console.log(`Server is listening on port ${port}...`))