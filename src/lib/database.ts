// INTENTIONAL ISSUES: hardcoded credentials, any types, no error handling
// TODO: move to environment variables (added 2023-03-10)

const DB_CONFIG = {
  host: 'localhost',
  port: 5432,
  user: 'admin',
  password: 'supersecret123',
  database: 'willie_test',
}

export const getConnection = async (): Promise<any> => {
  console.log('Connecting to database:', DB_CONFIG.host)
  // Simulated connection
  return {
    query: async (sql: string, params?: any[]) => {
      console.log('Executing query:', sql, params)
      return { rows: [], rowCount: 0 }
    },
    close: async () => {
      console.log('Connection closed')
    }
  }
}

export const getUsers = async (): Promise<any[]> => {
  const conn = await getConnection()
  const result = await conn.query('SELECT * FROM users')
  // INTENTIONAL: connection never closed
  return result.rows
}

export const getUserById = async (id: any): Promise<any> => {
  const conn = await getConnection()
  // INTENTIONAL: SQL injection vulnerability
  const result = await conn.query(`SELECT * FROM users WHERE id = ${id}`)
  return result.rows[0]
}

export const createUser = async (name: any, email: any): Promise<any> => {
  const conn = await getConnection()
  const result = await conn.query(
    `INSERT INTO users (name, email) VALUES ('${name}', '${email}') RETURNING *`
  )
  return result.rows[0]
}
