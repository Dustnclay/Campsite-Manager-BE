// Update with your config settings.

module.exports = {

  development: {

    //   client: 'mysql',
    //     connection: {
    //       host: 'campmandb.c6qcyiyvcjtb.us-west-2.rds.amazonaws.com',
    //       user: 'admin',
    //       password: 'bigassword',
    //       database: 'campmandb',
    //       charset: 'utf8'
    //   },
    //       migrations: {
    //   directory: './data/migrations' 
    // },
    // seeds: {
    //   directory: './data/seeds'
    // },
    //   debug: true,
    //   pool: {
    //     min: 2,
    //     max: 20
    //   },
    //   acquireConnectionTimeout: 10000
    client: 'sqlite3',
    connection: {
      filename: './data/forms_data.db3',
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
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations' 
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  production: {
    client: 'pg',
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
