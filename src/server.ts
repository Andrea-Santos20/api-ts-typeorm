import app from './index'


const PORT = process.env.PORT || 3333



app.listen(process.env.PORT, () =>
console.log(`Servidor rodando na porta localhost: ${process.env.PORT}`)
);

