import { MikroORM } from "@mikro-orm/core";

const main = async () => {
  const orm = await MikroORM.init({
    dbName: "lireddit",
    type: "postgresql",
    debug: process.env.NODE_ENV !== "production",
  });
};

/* 
setup postgress just by installing postgres app on macOS
follow instructions

then, in the CLI:
createdb lireddit

*/
