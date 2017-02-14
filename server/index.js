var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.get('/api/students', function(req, res) {
  var name = req.param(this.props.name);
  var school = req.param(this.props.school);
  var phone = req.param(this.props.phone);
  var email = req.param(this.props.email);

  res.send(['name:'+ name, 'school:'+ school, 'phone:' + phone, 'email:' + email ]);
});


app.post('/api/students', function(req, res) {
  var name = req.body.name;
  var school = req.body.school;
  var phone = req.body.phone;
  var email = req.body.email;
  res.send(['name:'+ name, 'school:'+ school, 'phone:' + phone, 'email:' + email ]);
  });

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
