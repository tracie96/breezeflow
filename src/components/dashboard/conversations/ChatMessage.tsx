import React from "react";

interface ChatMessageProps {
  isUser: boolean;
  message: string;
  timestamp: string;
  avatar?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  isUser,
  message,
  timestamp,
  avatar,
}) => {
  if (isUser) {
    return (
      <div className="flex gap-[17px] text-base text-white">
        <div className="self-stretch bg-[rgba(53,26,117,1)] min-w-60 gap-2 overflow-hidden p-4 rounded-2xl">
          {message}
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full gap-[17px] flex-wrap">
      <img
        src={avatar || "https://cdn.builder.io/api/v1/image/assets/6ab570d2ba5f4a1e8f0614bf834ae119/334aee67b3dbf8a341562a9d6545bbdd7230c2e9?placeholderIfAbsent=true"}
        className="aspect-[1] object-contain w-[55px] shrink-0 rounded-[1385px]"
        alt="AI Avatar"
      />
      <div className="justify-center items-stretch bg-[#1D2939] flex min-w-60 flex-col overflow-hidden w-[601px] p-4 rounded-[16.551px_16.551px_16.551px_0px] max-md:max-w-full">
        <div className="text-white text-base max-md:max-w-full">{message}</div>
        <div className="text-[#98A2B3] text-right text-xs mt-3 max-md:max-w-full">
          {timestamp}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage; 