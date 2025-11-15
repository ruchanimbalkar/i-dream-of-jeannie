import express from "express";
import pg from "pg";

//connecting to our PostgreSQL database , or db for short
const db = new pg.Pool({
  //new pg.Pool creates a connection to the database
  connectionString: process.env.DATABASE_URL, //this is the credentials to access the database. Keep private
  ssl: true, // use SSL encryption when connecting to the database to keep data safe in transit
});

//Decalre a variable named app and store an instance of express in app
const app = express();

//Listen on port #3000
const port = 3000;

//Send/Receive data in JSON format
app.use(express.json()); //To tell Express that our server will be receiving data in JSON format and sending data in JSON format

//Turn on Server
app.listen(port, () => {
  console.log(`Server is listening on port #${port}`); //Success message
});

app.get("/", (req, res) => {
  res.send("Success! Server is on!");
});

//Helper Functions

const getAllCharacters = async () => {
  //Read all animals data from NEON database
  //db.query() lets us query the SQL database
  //It takes in one parameter :  a SQL query!
  const data = await db.query("SELECT * FROM characters");
  console.log(data.rows);
  return data.rows;
};

//API Endpoints

//GET /get-all-characters
app.get("/get-all-characters", async (req, res) => {
  //Call the helper function
  let characters = await getAllCharacters();
  //Send characters in response JSON format
  res.json(characters);
});
