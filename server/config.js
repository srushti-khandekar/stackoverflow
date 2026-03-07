// module.exports = {
//   port: process.env.PORT || 8080,
//   db: {
//     prod: process.env.DATABASE_URL || 'mongodb://15.207.141.133/stackoverflow-clone',
//     test: 'mongodb://localhost/stackoverflow-test',
//     options: {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//       useCreateIndex: true
//     }
//   },
//   jwt: {
//     secret: process.env.JWT_SECRET || 'development_secret',
//     expiry: '7d'
//   }
// };

module.exports = {
  port: process.env.PORT || 8080,
  db: {
    // CHANGE THIS LINE:
    prod: process.env.DATABASE_URL || 'mongodb://mongo:27017/stackoverflow-clone',
    
    test: 'mongodb://localhost/stackoverflow-test',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'development_secret',
    expiry: '7d'
  }
};
