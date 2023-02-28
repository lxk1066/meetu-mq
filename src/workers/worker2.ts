// worker2.ts

import { Worker } from "bullmq";
import { connection } from "../redis.js";
import { classify } from "./classify.js";
import { jobFailedFn } from "../utils/jobFailedFn.js";
import type { Job } from "bullmq";

const twoWorker = new Worker(
  "myQueue",
  classify,
  { connection }
)
// 作业完成时触发
twoWorker.on("completed", (job: Job) => {
  console.log("Worker2 completed", job.id, job.returnvalue);
});

// 作业失败时触发
twoWorker.on("failed", jobFailedFn);