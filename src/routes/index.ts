import express from 'express';
import cors from 'cors';
import grupo from './grupo';
import produto from './produto';
import prodprep from './prodprep';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/getGrupo', grupo);
app.use('/getProduto', produto);
app.use('/getProdPrep', prodprep);

export default app;