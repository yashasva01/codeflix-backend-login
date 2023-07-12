const express = require('express')
const dotenv = require('dotenv')
const loginRouter = require('./src/routes/loginRoutes')
const errorHandler = require('./src/middleware/error')
const cors = require('cors')

dotenv.config({})

const app = express();

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
    res.send("Welcome to login service of codeflix")
});

app.use('/api',loginRouter);
app.use(errorHandler);


const PORT = process.env.PORT;

app.listen(PORT, () => 
{
    console.log(`Login Service listening to ${PORT}`)
}
)