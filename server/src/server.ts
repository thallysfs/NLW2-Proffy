import express from 'express';
import cors from 'cors';
import routes from './routes';

//tudo vai partir dessa variável
const app = express();

app.use(cors());
//aqui o express vai entender json
app.use(express.json());
app.use(routes);


//faz a nossa aplicação ouvir endereços http, o parâmetro é a porta que utilizaremos
//localhost:3333
app.listen(3333);

