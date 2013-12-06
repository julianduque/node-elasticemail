var em = require('../');

var client = em.createClient({
  username: 'myusername',
  apiKey: 'myApiKey'
});

var msg = {
  from: 'my@email.com',
  from_name: 'My name',
  to: 'your@email.com',
  subject: 'Hello from Elasticemail',
  body_text: 'Yays!'
};

client.mailer.send(msg, function (err, result) {
  if (err) {
    return console.error(err);
  }

  console.log('Mail sent succesfully with id: ' + result);
});
