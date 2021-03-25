// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/formsData.db3',
      // user:     'username',
      // password: 'password'
    },
    migrations: {
      directory: './data/migrations' 
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    },
    useNullAsDefault:true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'postgres://putbscmtbqlsxg:9a0370c3206dc193ca28dea86d0ed837cddba667435e83fafa995b566d6e5f28@ec2-23-21-229-200.compute-1.amazonaws.com:5432/d70vnfvun121o5',
      // user:     'username',
      // password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
