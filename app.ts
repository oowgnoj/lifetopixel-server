// ENV

import "reflect-metadata";
import { createConnection } from "typeorm";
import User from "./src/entity/User";

createConnection({
  type: "mysql",
  host: "database-1.cih6sdb1qpsb.ap-northeast-2.rds.amazonaws.com",
  port: 3306,
  username: "root",
  password: "qkrwhddn423",
  database: "test",
  entities: [User],
  synchronize: true,
  logging: false,
})
  .then((connection) => {
    // here you can start to work with your entities
  })
  .catch((error) => console.log(error));
