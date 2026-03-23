// TODO: move to environment variables (added 2023-03-10)

const DB_CONFIG = {
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER || '',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'willie_test',
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
  const result = await conn.query('SELECT * FROM users WHERE id = $1', [id])
  return result.rows[0]
}

export const createUser = async (name: any, email: any): Promise<any> => {
  const conn = await getConnection()
  const result = await conn.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    [name, email]
  )
  return result.rows[0]
}
