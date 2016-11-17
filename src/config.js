var config = {
  production: {
    host: 'localhost',
    port: '80'
  },
  development: {
    host: process.env.IP,
    port: process.env.PORT
  }
};

module.exports = config;