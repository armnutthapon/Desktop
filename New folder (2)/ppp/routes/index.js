const express = require('express');
const app = express();
const customers = [
    { cid: 1, name: 'Marry', email: 'marry@gmail.com' },
    { cid: 2, name: 'Kate', email: 'kate@gmail.com' },
    { cid: 3, name: 'Kent', email: 'kent@gmail.com' },
];

app.get('/api/customers', (req, res) => {
    res.send(customers);
});

app.get('/api/customers/:cid', (req, res) => {
    const id = req.params.cid;

    if (id == 1) {
        res.send(customers[0]);
    } else if (id == 2) {
        res.send(customers[1]);
    } else if (id == 3) {
        res.send(customers[2]);
    } else {
        res.send('Error 404 Not found');
    }
});

app.getMaxListeners(3000, () => {
    console.log("Running");
});