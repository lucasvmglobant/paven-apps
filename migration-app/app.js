const contentfulExport = require('contentful-export')
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var app = express();



const options = {
  spaceId: 'pmoql4aw53io',
  managementToken: 'CFPAT-SMllVdD60zaVu-DgcuUKylc1ZBJrJIg8gAz0-0Y4lvo',
}

function clickExport(res){
  res.send('ok');
}
router.get("/test1", function (req, res) {
  clickExport(res);
});

function clickExport() {
  contentfulExport(options)
  .then((result) => {
    console.log('Your space data:', result)
  })
  .catch((err) => {
    console.log('Oh no! Some errors occurred!', err)
  })
};


