// src/server.ts

import express from 'express';
import jobRoutes from './routes/job.routes';

const app = express();

app.use(express.json());

// Definindo as rotas
app.use('/jobs', jobRoutes);

// Outras configurações e middlewares...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});