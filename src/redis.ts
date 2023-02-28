import { redis } from "./project.config.js";

/* 使用IORedis模块创建Redis连接 */
import IORedis from "ioredis";
export const connection = new IORedis(redis.port, redis.host, {
  db: redis.db,
  maxRetriesPerRequest: 0,
});

// export const connection = {
//   host: '127.0.0.1',
//   port: 6379,
//   db: 5
// }