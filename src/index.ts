// index.ts

import { Queue } from "bullmq";
import { connection } from "./redis.js";
import { MQDefaultJobOptions } from "./project.config.js";

// 创建队列实例
export const myQueue = new Queue("myQueue", {
  connection,
  defaultJobOptions: MQDefaultJobOptions // 默认工作选项
});

// 导入工人
import "./workers/worker1.js";
import "./workers/worker2.js";
