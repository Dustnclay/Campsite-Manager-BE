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
      database: 'my_db',
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
