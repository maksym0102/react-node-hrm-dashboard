module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: '',
  DB: 'db_thimble',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

// module.exports = {
//   HOST: 'db-mysql-sfo3-32971-do-user-11019065-0.b.db.ondigitalocean.com',
//   USER: 'doadmin',
//   PASSWORD: '9biiNR5rw1X9YNsu',
//   DB: 'defaultdb',
//   PORT: '25060',
//   dialect: 'mysql',
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };
