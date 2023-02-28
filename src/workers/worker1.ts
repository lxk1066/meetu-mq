// worker1.ts

import { Worker } from "bullmq";
import { connection } from "../redis.js";
import { classify } from "./classify.js";
import { jobFailedFn } from "../utils/jobFailedFn.js";
import type { Job } from "bullmq";

const oneWorker = new Worker(
  "myQueue",
  classify,
  { connection }
)
// 作业完成时触发
oneWorker.on("completed", (job: Job) => {
  console.log("Worker1 completed", job.returnvalue);
});

// 作业失败时触发
oneWorker.on("failed", jobFailedFn);