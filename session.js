const session = require('express-session')
// const  MongoStore = require('connect-mongo')(session)
// const mongoose = require('mongoose')

// const store = new MongoStore({
   // mongoUrl: 'mongodb://localhost/myapp',
//   mongooseConnection: mongoose.connection
// })

module.exports = session({
    secret:'&ésecretàç',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 3600000 // 1h validity
    },
  });