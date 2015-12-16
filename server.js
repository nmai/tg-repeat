/** 
 * Nick Mai ~ Dec. 2015
 * 
 * Demo server for testing the tg-repeat angular module
 */
 
'use strict'

let express = require('express')
let app = express()

app.use(express.static('./node_modules/angular'))
app.use(express.static('./lib'))
app.use(express.static('./'))

var server = app.listen(process.env.PORT || 8080, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log('Demo server listening at http://%s:%s', host, port);
})
