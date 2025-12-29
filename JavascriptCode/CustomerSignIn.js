import pkg from "pg";

const {Client} = pkg;

const con = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"Aditya23@",
    Database: "CustomerDB"
})

con.connect().then(()=>console.log("Connected"))