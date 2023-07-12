/** Connect MS SQL Server using sequelize */
var sequelize = new Sequelize({
  dialect: 'mssql',
  dialectModulePath: 'sequelize-msnodesqlv8',
  dialectOptions: {
    instanceName: 'MSSQLSERVER01',
    trustedConnection: true
  },
  host: 'localhost',
  database: 'master'
});

var sequelize = new Sequelize({
  dialect: 'mssql',
  dialectModulePath: 'sequelize-msnodesqlv8',
  dialectOptions: {
    connectionString: 'Server=localhost\MSSQLSERVER01;Database=master; Trusted_Connection=yes;'
  },
});