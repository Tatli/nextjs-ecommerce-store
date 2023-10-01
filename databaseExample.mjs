import { readFileSync } from 'node:fs';
import dotenv from 'dotenv';
import postgres from 'postgres';

// tag template function
// when we say sql and we do `` which is a tag template. Inside the backtick we can write the query, another function, other code.

// First, call in all .env variables
// Loads .env file contents into process.env by default
// dotenv.config();

export function setEnvironmentVariables() {
  // Replacement for unmaintained dotenv-safe package
  // https://github.com/rolodato/dotenv-safe/issues/128#issuecomment-1383176751
  //
  // FIXME: Remove this and switch to dotenv/safe if this proposal gets implemented:
  // https://github.com/motdotla/dotenv/issues/709

  dotenv.config();

  const unconfiguredEnvVars = Object.keys(
    dotenv.parse(readFileSync('./.env.example')),
  ).filter((exampleKey) => !process.env[exampleKey]);

  if (unconfiguredEnvVars.length > 0) {
    throw new Error(
      `.env.example environment ${
        unconfiguredEnvVars.length > 1 ? 'variables' : 'variable'
      } ${unconfiguredEnvVars.join(', ')} not configured in .env file`,
    );
  }
  // End replacement for dotenv-safe
}

// Also call it big brain
setEnvironmentVariables();

// Postgres MAGICALLY knows it needs this variable to run, so it will just take it and use it to login
const sql = postgres();

console.log(
  // sql is a promise and has to be AWAITED
  await sql`
  SELECT * FROM products;
  `,
);

// In our case we don't want to end it unless you are testing something because it would end the database session and quit the application
await sql.end();
