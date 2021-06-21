const contentfulExport = require('contentful-import')
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var app = express();


const options = {
  contentFile: 'contentful-export-pmoql4aw53io-master-2021-06-10T10-51-18.json',
  spaceId: 'pmoql4aw53io',
  managementToken: 'CFPAT-SMllVdD60zaVu-DgcuUKylc1ZBJrJIg8gAz0-0Y4lvo',
  environmentId: 'dev',
}

contentfulImport(options)
  .then((result) => {
    console.log('Your space data:', result)
  })
  .catch((err) => {
    console.log('Oh no! Some errors occurred!', err)
  });


