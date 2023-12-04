const express = require('express');
const multer = require('multer');
const app = express();
const PORT = 80;

app.use(express.static('static'));
app.use(express.urlencoded({ extended: true }));

const upload = multer({ dest: __dirname + '/uploads/' });

// Define a list of banned users
const bannedUsers = ['Stuart Dent', 'Stu Dent'];

// Load your HTML views
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/templates/form.html');
});

app.post('/send', upload.single('image'), (req, res) => {
  const {
    firstName,
    lastName,
    recipientFirstName,
    recipientLastName,
    message,
    email,
    phone,
    cardNumber,
    cardExpiration,
    ccv,
    amount,
    termsAndConditions,
  } = req.body;

    if (
    !firstName ||
    !lastName ||
    !recipientFirstName ||
    !recipientLastName ||
    message.length < 10 ||
    (!email && !phone) ||
    !cardNumber.match(/^\d{4}-\d{4}-\d{4}-\d{4}$/) ||
    !cardExpiration ||
    !ccv.match(/^\d{3,4}$/) ||
    isNaN(parseFloat(amount)) ||
    !termsAndConditions
  ) {
    return res.sendFile(__dirname + '/templates/error.html');
  }

  
  if (bannedUsers.includes(recipientFirstName + " " + recipientLastName) || bannedUsers.includes(firstName + " " + lastName)) {
    return res.sendFile(__dirname + '/templates/fraud.html');
  }
  res.sendFile(__dirname + '/templates/success.html');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));