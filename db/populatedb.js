require("dotenv").config();

const { Client } = require("pg");

const connectionString = process.argv[2] || process.env.DATABASE_URL;

if (!connectionString) {
  console.error("Please provide a database URL as an argument or set DATABASE_URL.");
  process.exit(1);
}

async function main() {
  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();

    await client.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        text TEXT NOT NULL,
        username VARCHAR(255) NOT NULL,
        added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await client.query(`
      INSERT INTO messages (text, username)
      VALUES
        ('Hi there!', 'Amando'),
        ('Hello World!', 'Charles'),
        ('PostgreSQL is now powering this board.', 'System')
    `);

    console.log("Database populated successfully.");
  } catch (error) {
    console.error("Error populating database:", error);
    process.exitCode = 1;
  } finally {
    await client.end();
  }
}
