import express from 'express';

const app = express();

app.get('/users', (request, response) => {

  const users = [
    { name: 'Filipe', age: 19},
    { name: 'Diego', age: 25}
  ];

  return response.json(users);
});

app.listen(3333);
