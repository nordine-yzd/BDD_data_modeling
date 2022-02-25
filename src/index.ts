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
  db.collection("directors")
    .insertMany(directors)
    .then(() => client.close());

  // .then(() => client.close());
});

//
const directors = [
  { firstName: "Tim", lastName: "Burton" },
  { firstName: "Francis Ford", lastName: "Coppola" },
  { firstName: "Frank", lastName: "Darabont" },
  { firstName: "Peter", lastName: "Faiman" },
  { firstName: "Bryan", lastName: "Singer" },
  { firstName: "Brad", lastName: "Bird" },
  { firstName: "Fernando", lastName: "Meirelles" },
  { firstName: "Christopher", lastName: "Nolan" },
  { firstName: "Olivier", lastName: "Nakache" },
];
