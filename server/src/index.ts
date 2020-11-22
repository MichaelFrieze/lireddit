import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
// import { Post } from './entities/Post';
import mikroConfig from './mikro-orm.config';
import express from 'express';

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();

  const app = express();
  app.get('/', (_, res) => {
    // ignore a param by using an underscore | was supposed to be request
    res.send('hello');
  });
  app.listen(4000, () => {
    console.log('server started on localhost:4000');
  });
};

main().catch(err => {
  console.error(err);
});

/* 
https://youtu.be/I6ypD7qv3Z8?t=2439
40:49
*/
