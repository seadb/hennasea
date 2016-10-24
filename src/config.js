var config = {
  production: {
    host: 'localhost',
    port: '3000'
  },
  development: {
    host: process.env.IP,
    port: process.env.PORT
  }
};

module.exports = config;