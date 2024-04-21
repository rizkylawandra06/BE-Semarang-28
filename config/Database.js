import { Sequelize } from "sequelize";

const db = new Sequelize(
  "railway", 
  "root",
  "OnMRfRCwcPcpgoOQWjWjbCwPVKTvvBPu",
      {
    host : "monorail.proxy.rlwy.net",
    port:"16599",
    dialect: "mysql",
});

db.authenticate()
  .then(() => console.log("Database connected"))
  .catch((error) => {
    console.log(`Unable to connect to database: ${error}`);
  });

export default db;
