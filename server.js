const {MongoClient} = require ('mongodb');
var express = require('express')
const bodyParser = require('body-parser');
var app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', './views')

const uri = "mongodb+srv://HenriqueDC:HenriqueDC@cluster0.jd6clep.mongodb.net/?retryWrites=true&w=majority";
let client = new MongoClient(uri);
var db;

app.get("/", async (req, res) => {

    const ret = await db.collection('cliente').find().toArray();
    res.render('index', { clientes: ret })
})

const start = async () => {

    await client.connect();
    db = client.db("test");
    app.listen(8000, () => {
        console.log('Servidor iniciado porta 8000')
    });
}

start();