import { Sequelize } from "sequelize";
import { createUserModal } from "../modal/userSchema.js";

const sequelize = new Sequelize("postgres", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
});
let UserModal = null;
const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    UserModal = await createUserModal(sequelize)
    await sequelize.sync();
    console.log("database Synced")
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};


export {connection,UserModal}