const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA.json');

const app = express();
const PORT = 8000;

/// MiddleWare

app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/users', (req, res) => {
  const HTML = `
      <ul>
      ${users.map((user) => `<li> ${user.first_name}  ${user.last_name} </li>`)}
  
       </ul>`;
  res.send(HTML);
});

// REST API

// GET All Users
app.get('/api/users', (req, res) => {
  return res.json(users);
});

// GET User with ID
app.get('/api/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

// Create New user
app.post('/api/users', (req, res) => {
  const body = req.body;
  users.push({ id: users.length + 1, ...body });
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
    return res.json({ status: 'success', id: users.length });
  });
  console.log('Body', body);
});

// Edit User with ID
app.patch('/api/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const body = req.body;
  const user = users.find((user) => user.id === id);
  const updatedUser = { ...user, ...body };
  updatedUser.id = id;
  users[id - 1] = updatedUser;

  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
    return res.json({
      status: 'pending',
      message: 'User Updated successfully',
      updatedUser: id,
    });
  });
});

// Delete User with ID
app.delete('/api/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    users.splice(index, 1);
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
      if (err) {
        return res.status(500).json({ error: 'Error deleting user from file' });
      }
      return res.json({
        status: 'success',
        message: 'User deleted successfully',
      });
    });
  } else {
    return res.json({
      status: 'user not found',
      id,
    });
  }
});

app.listen(PORT, () => console.log(`Server started at ${PORT} `));
