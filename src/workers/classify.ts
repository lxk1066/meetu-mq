import { sendEmail } from "../jobs/sendEmail.js";
import type { Job } from "bullmq";

// 如果想要让BullMQ将失败作业添加到失败作业集，应当始终使用`new Error()`抛出异常。
// 使用switch case分支将任务分类
export const classify = async (job: Job) => {
  let result;
  switch (job.name) {
    case "send-email": {
      result = await sendEmail(job.data);
      break;
    }
    default: {
      throw new Error('invalid job name');
    }
  }
  return { id: job.id, type: job.name, result };
};