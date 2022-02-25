import "dotenv/config";
import { MongoClient } from "mongodb";

const databaseURL = `${process.env.MONGODB_DATABASE_URL}/cinema` || "";
console.log(databaseURL);

const client = new MongoClient(databaseURL);
// console.log(client);

// const frida = {
//   firstName: "Frida",
//   lastName: "Ewlines",
// };

client.connect().then((client) => {
  const db = client.db();
  //------------------- code here -------------------//
  db.collection("genres")
    .insertMany(genres)
    .then(() => client.close());

  // .then(() => client.close());
});

//
// eslint-disable-next-line no-sparse-arrays
const genres = [
  { type: "Comedy" },
  { type: "Fantasy" },
  { type: "Crime" },
  { type: "Drama" },
  { type: "Music" },
  { type: "Adventure" },
  { type: "history" },
  { type: "Thriller" },
  { type: "Animation" },
];
