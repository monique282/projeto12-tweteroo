import express from "express";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;
// cerve pra deixar a aplicação ligada na porta escolhida
app.listen(port, () => console.log(`servidor esta rodando na porta ${port}`));

// aqui esta todos os objetos que eu quero que esteja no sevidor
let tweets = [{
    username1: "bobesponja",
    avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
    tweet: "Eu amo hambúrguer de siri!"
},
{
    username2: "bobesponja",
    avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
    tweet: "Eu amo hambúrguer de siri!"
}, {
    username3: "bobesponja",
    avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
    tweet: "Eu amo hambúrguer de siri!"
}, {
    username4: "bobesponja",
    avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
    tweet: "Eu amo hambúrguer de siri!"
}, {
    username5: "bobesponja",
    avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
    tweet: "Eu amo hambúrguer de siri!"
}, {
    username6: "bobesponja",
    avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
    tweet: "Eu amo hambúrguer de siri!"
}, {
    id: 7,
    username7: "bobesponja",
    avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
    tweet: "Eu amo hambúrguer de siri!"
}
];
// array aonde irei colocar os usuarios
let usuario = [];

app.get('/tweets', (req, res) => {

    // Verifica se existe algum tweets cadastrado
    if (tweets.length === 0) {
        // se por acaso nao existir retorna um array vazio
        return res.send([]);
    }

    // Aqui ele pega somente os 10 primerios cadastrados
    const lastTenTweets = tweets.slice(0, 10); // Obtém apenas os 10 primeiros tweets da lista

    // Responde com os tweets mais recentes
    res.send(lastTenTweets);
});

// aqui vai ser pra pegar um abjeto especifico usando o id
app.get('/tweets/:id', (req, res) => {
    const { id } = req.params;

    const publi = tweets.find((pu) => pu.id === Number(id));
    res.send(publi)
});

//é aqui aonde euvou enviar novas receitas para o meu servidor
app.post("/tweets", (req, res) => {

    const novo = {
        username: req.body.username,
        avatar: req.body.avatar,
        tweet: req.body.tweet
    };

    tweets.push(novo);
    res.send("Adicionado com sucesso!");
});

// aqui serve pra enviar os dados do usuario
app.post("/sign-up", (req, res) => {

    const novoUsuario = {
        username: req.body.username,
        avatar: req.body.avatar
    };

    // Adiciona o novo usuário ao array
    usuario.push(novoUsuario);

    res.send("OK");
});

// vou testar pra ver se estou enviando corretamente os dados do usuario
app.get("/sign-up", (req, res) => {

    const novoUsuario = {
        username: req.body.username,
        avatar: req.body.avatar
    };

    const lastTenTweets = usuario.slice(0, 10);

    usuario.push(lastTenTweets);
    res.send(lastTenTweets);
});





