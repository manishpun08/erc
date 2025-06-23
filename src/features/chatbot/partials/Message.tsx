import { Loader2 } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { IChatMessage } from "../interfaces/dto/message.type";

type MessageProps = {
  message: IChatMessage;
};

const Message: React.FC<MessageProps> = ({ message }) => {
  // console.log(message, "chatAnsdafasdfdasfwerData");

  const isSending = message.status === "sending";

  const questionHTML = message.question;
  const answerHTML = message.answers?.[0]?.answer;

  return (
    <div className="flex flex-col gap-2 mb-3">
      {/* User Question */}
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, bounce: 0.1 }}
        className={`w-full flex justify-end gap-[0.88rem] items-end ${
          isSending ? "animate-pulse opacity-50" : ""
        }`}
      >
        <div className="max-w-[70%] p-2.5 rounded-3xl bg-blue-50 text-text-500 rounded-br-xs text-sm leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: questionHTML || "" }} />
        </div>
        <div className="flex justify-center items-center bg-blue-400 rounded-full size-[1.75rem] font-semibold text-white text-sm">
          U
        </div>
      </motion.div>

      {/* Bot Answer */}
      {answerHTML && (
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, bounce: 0.1 }}
          className="w-full flex justify-start gap-[0.88rem] items-end"
        >
          <div className="relative">
            <Image
              src="/svg/bot-image.svg"
              width={50}
              height={50}
              alt="Bot"
              className="rounded-full size-[1.75rem]"
            />
            {isSending && (
              <div className="absolute inset-0 flex justify-center items-center bg-secondary-500/20 rounded-full">
                <Loader2 className="text-secondary-500 animate-spin" />
              </div>
            )}
          </div>
          <div className="max-w-[70%] p-2.5 rounded-3xl bg-blue-100 text-blue-800 rounded-bl-xs text-sm leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: answerHTML }} />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Message;
