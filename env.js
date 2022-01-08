module.exports = {
  production: {
    certUrl: __dirname + '/ssl/production/',
    keyUrl: __dirname + '/ssl/production/',
    dbUrl: '',
    portHTTP: 80,
    portHTTPS: 443,
  },
  development: {
    certUrl: __dirname + '/ssl/development/localhost.crt',
    keyUrl: __dirname + '/ssl/development/localhost.key',
    dbUrl:
      'mongodb://localhost:27017/asemes_student?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false',
    portHTTP: 3000,
    portHTTPS: 3001,
  },
};
