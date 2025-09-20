module.exports = {
  database: {
    host: '172.191.207.94',
    user: 'userdb',
    password: 'admin@123456',
    database: 'db01',
    connectionLimit: 10
  },
  server: {
    port: process.env.PORT || 3000
  }
};
