import pkg from "pg";
const {Client} = pkg;

const client = new Client(
{
  host: "localhost",
  user: "postgres",
  password: "tiger",
  database: "BsSignIn",
  port: 5432,
}
);

client.connect();

client.query(
  `CREATE TABLE BsProducts (
    productName VARCHAR(255) NOT NULL,
    productId SERIAL PRIMARY KEY,
    price NUMERIC(10,2) NOT NULL,
    description TEXT,
    deliveryTime VARCHAR(100),
    quantity INT NOT NULL,
    productIMG BYTEA
  )`,
  (err)=>{
    if (err) console.log(err)
    else console.log("BsProducts table created successfully");
    client.end();    
  }
);