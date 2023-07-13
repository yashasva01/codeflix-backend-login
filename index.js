const express = require('express')
const dotenv = require('dotenv')
const mongoose = require("mongoose");
const loginRouter = require('./src/routes/loginRoutes')
const authRuter = require('./src/routes/authenticationRoutes')
const errorHandler = require('./src/middleware/error')
const cors = require('cors')

dotenv.config({})

const app = express();

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
    res.send("Welcome to login service of codeflix")
});

mongoose.connect(
    process.env.DATABASE_URL, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
).then(() => console.log('Connected Successfully'))

.catch((err) => { console.error(err); });

  
app.use('/api',loginRouter)
app.use('/api', authRuter)
app.use(errorHandler);


const PORT = process.env.PORT;

app.listen(PORT, () => 
{
    console.log(`Login Service listening to ${PORT}`)
}
)