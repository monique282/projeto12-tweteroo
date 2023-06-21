import express from "express";
import cors from "cors";


const app = express();
app.use(cors());
const port = 5000;
// cerve pra deixar a aplicação ligada na porta 4000
app.listen(port , ()=> console.log(`servidor esta rodando na porta ${port}`));


app.get("/Mundo", (req, res) => {
    const usuario = [
        {
            username: 'bobesponja', 
            avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png" 
        },
        {
            username: "bobesponja",
          tweet: "Eu amo hambúrguer de siri!"
        }
    ]
    res.send(usuario)
});


