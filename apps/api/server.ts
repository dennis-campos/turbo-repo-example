import express from 'express';

const app = express();
const port = 3002;

app.get('/', (_req, res) => {
    const data = [
        {
            id: 1,
            name: 'John Doe'
        },
        {
            id: 2,
            name: 'Jane Doe'
        },
        {
            id: 3,
            name: 'John Smith'
        },
        {
            id: 4,
            name: 'Jane Smith'
        }
    ]
    res.json(data)
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})