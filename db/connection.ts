
import { Sequelize } from "sequelize";

const db = new Sequelize('cur-node', 'root', '', {
   host: 'localhost', 
   dialect: 'mysql',
   // logging: false
})

export default db;