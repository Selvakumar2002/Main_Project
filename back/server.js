const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/cartDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});
const AdminRouter = require('../back/routes/admin');
const cartItemsRouter = require('../back/routes/cartitems');
const usersRouter = require('../back/routes/user');

app.use('/', AdminRouter);
app.use('/', cartItemsRouter);
app.use('/', usersRouter);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
