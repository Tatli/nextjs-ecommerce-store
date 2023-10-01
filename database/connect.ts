import { readFileSync } from 'node:fs';
import dotenv from 'dotenv';
import { headers } from 'next/headers';
import postgres from 'postgres';

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

// Also call it - big brain
setEnvironmentVariables();

// Instead of connecting to our database like this, we're going to make this connection with globalThis or smth
// const sql = postgres({
//   transform: {
//     // Transform values from "snake_case" to "camelCase"
//     ...postgres.camel,

//     // In postgres undefined value will lead to error when you send undefined data
//     undefined: null,
//   },
// });

// globalThis is an environment in our global ecosystem
// sets up a variable that is global
// it exists in the browser and in node js
// In node js: type node into console, then globalThis -> returns Object
// In browser: Console -> globalThis -> object
// ### postgreSqlClient will be globally available in our project
declare module globalThis {
  let postgresSqlClient: Sql;
}

// Connect only once to the database
// https://github.com/vercel/next.js/issues/7811#issuecomment-715259370
function connectOneTimeToDatabase() {
  // If there is no postgresSqlClient defined in globalThis
  // initiate it with a new postgres() instance
  if (!('postgresSqlClient' in globalThis)) {
    globalThis.postgresSqlClient = postgres({
      transform: {
        // Transform values from "snake_case" to "camelCase"
        ...postgres.camel,

        // In postgres undefined value will lead to error when you send undefined data
        undefined: null,
      },
    });
  }

  // Workaround to force Next.js Dynamic Rendering:
  //
  // Wrap sql`` tagged template function to call `headers()` from
  // next/headers before each database query. `headers()` is a
  // Next.js Dynamic Function, which causes the page to use
  // Dynamic Rendering.
  //
  // https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic-rendering
  //
  // Ideally there would something built into Next.js for this,
  // which has been requested here:
  //
  // https://github.com/vercel/next.js/discussions/50695
  return ((
    ...sqlParameters: Parameters<typeof globalThis.postgresSqlClient>
  ) => {
    headers();
    return globalThis.postgresSqlClient(...sqlParameters);
  }) as typeof globalThis.postgresSqlClient;
}

export const sql = connectOneTimeToDatabase();

export async function getAllProductsFromDatabase() {
  const products = await sql`
  SELECT * from products
  `;
  return products;
}

// Connection slots error everytime you refresh you  rerender so you get a new connection slot so we use
// Create function to call database only once
