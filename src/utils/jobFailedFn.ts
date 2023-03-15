// 任务失败时调用该函数

import { myQueue } from "../index.js";
import { AdminMailbox } from "../project.config.js";
import type { Job } from "bullmq";

export const jobFailedFn = (job: Job | undefined, error: Error) => {
  if (job && job.attemptsMade >= 3) {
    console.log("job failed over 3 times");
    // 给管理员发送提示邮箱
    myQueue.add("send-email", {
      subject: "[Meetu服务告警]MQ队列任务失败", to: AdminMailbox[0], text: `
      后台BullMQ队列中, 有一个任务失败的次数已经达到3次, 请前往确认并处理! 错误信息如下: 
      任务ID: ${job.id}, 任务数据: ${JSON.stringify(job.data)}, 错误信息: ${error}.
    `.trim()
    });
  }
  console.log("job failed! jobId:", job?.id, "error:", error);
}