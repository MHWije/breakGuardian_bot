var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const axios = require('axios')

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
extended: true
}));

//This is the route the API will call
app.post('/service', function(req, res) {
const {message} = req.body

// '/help' command
if(message.text == "/help"){
	axios.post('https://api.telegram.org/bot168431148:AAEFYKEYmbwTgWnCOgrZJzmjtSuMfRRUbJE/sendMessage', {
	chat_id: message.chat.id,
	text: 'Hi, I am a creation of @mh369 \n /help - view help \n'
	})
	.then(response => {
	  console.log('Message posted');
	  res.end('ok');
	})
	.catch(err => {
	  console.log('Error :', err);
	  res.end('Error :' + err);
	})
}
else{
	return res.end();
}
});

// Finally, start our server
app.listen(3000, function() {
console.log('Telegram app listening on port 3000!');
});
