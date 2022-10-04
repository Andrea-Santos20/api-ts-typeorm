import app from './index'


const PORT = process.env.PORT || 3003



app.listen(process.env.PORT, () =>
console.log(`Servidor rodando na porta localhost: ${process.env.PORT}`)
);

