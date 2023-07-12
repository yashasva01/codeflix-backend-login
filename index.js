import express from 'express'

const app = express();

app.get('/', () => {
    res.send("Welcome to login service of codeflix")
});

app.listen(PORT, () => 
{
    console.log(`Login Service listening to ${PORT}`)
}
)