// // write a function  is create a users 
// import { Client } from 'pg'
 
// const client = new Client({
//   port: 5432,
//   database: 'postgres',
//   user: 'postgres',
//   password: 'root',
// })

// // client.connect()

// async function createUsersTable(){
//     await client.connect()
//     const result = await client.query(`
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `)
//     console.log(result)
// }

// createUsersTable();

const { Client } = require( 'pg');

// Async function to insert data into a table
async function insertData(username: string, email: string, password: string) {
  const client = new Client({
    
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'root',
  });

  try {
    await client.connect(); // Ensure client connection is established
    // Use parameterized query to prevent SQL injection
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
insertData('username5', 'user5@example.com', 'user_password').catch(console.error);

// (using joins)
// SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
// FROM users u
// JOIN addresses a ON u.id = a.user_id
// WHERE u.id = YOUR_USER_ID;


// import { Client } from 'pg';

// // Async function to fetch user details and address separately
// async function getUserDetailsAndAddressSeparately(userId: string) {
//     const client = new Client({
//         host: 'localhost',
//         port: 5432,
//         database: 'postgres',
//         user: 'postgres',
//         password: 'mysecretpassword',
//     });

//     try {
//         await client.connect();

//         // Fetch user details
//         const userDetailsQuery = 'SELECT id, username, email FROM users WHERE id = $1';
//         const userDetails = await client.query(userDetailsQuery, [userId]);

//         // Fetch user address
//         const userAddressQuery = 'SELECT city, country, street, pincode FROM addresses WHERE user_id = $1';
//         const userAddress = await client.query(userAddressQuery, [userId]);

//         if (userDetails.rows.length > 0) {
//             console.log('User found:', userDetails.rows[0]);
//             console.log('Address:', userAddress.rows.length > 0 ? userAddress.rows[0] : 'No address found');
//             return { user: userDetails.rows[0], address: userAddress.rows.length > 0 ? userAddress.rows[0] : null };
//         } else {
//             console.log('No user found with the given ID.');
//             return null;
//         }
//     } catch (err) {
//         console.error('Error during fetching user and address:', err);
//         throw err;
//     } finally {
//         await client.end();
//     }
// }
// getUserDetailsAndAddressSeparately("1");