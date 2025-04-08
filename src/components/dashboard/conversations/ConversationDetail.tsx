import React from "react";
import ChatMessage from "./ChatMessage";
import AudioWaveform from "./AudioWaveform";
import { ArchiveIcon, MenuIcon } from "../../ui/icons";

interface ConversationDetailProps {
  visitorName: string;
}

const ConversationDetail: React.FC<ConversationDetailProps> = ({
  visitorName,
}) => {
  return (
    <div className="pl-8 pr-10 pt-6 max-md:max-w-full max-md:px-5">
      <div className="w-full max-md:max-w-full">
        <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
          <div className="self-stretch gap-2 text-2xl text-white font-medium my-auto">
            {visitorName}
          </div>
          <div className="self-stretch flex items-center gap-4 my-auto">
            <div className="self-stretch flex w-6 shrink-0 h-6 my-auto" />
            <div className="rotate-[-3.141592653589793rad] self-stretch flex w-6 shrink-0 h-6 my-auto">
              <ArchiveIcon />
            </div>
            <div className="self-stretch flex w-6 shrink-0 h-6 my-auto">
              <MenuIcon />
            </div>
          </div>
        </div>
        <div className="justify-center items-stretch border-[color:var(--Grey-900,#1D2939)] bg-[#101828] flex w-full flex-col mt-8 px-4 py-3 rounded-[16.551px] border-[1.379px] border-solid max-md:max-w-full">
          <div className="flex w-full items-stretch gap-2 flex-wrap max-md:max-w-full">
            <div className="items-center border border-[color:var(--Grey-900,#1D2939)] bg-[#101828] flex gap-2.5 w-12 h-12 my-auto p-3 rounded-lg border-solid">
              <div className="self-stretch flex min-h-6 w-6 my-auto" />
            </div>
            <div className="flex min-w-60 items-center gap-[11px] h-full w-[461px] max-md:max-w-full">
              <AudioWaveform className="max-md:max-w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-stretch font-light mt-10 max-md:max-w-full">
        <ChatMessage
          isUser={false}
          message="Hi there 👋\nI'm Alice an AI assistant here to help you. How can I help you today?"
          timestamp="13:23"
          avatar="https://cdn.builder.io/api/v1/image/assets/6ab570d2ba5f4a1e8f0614bf834ae119/f7d02944ca7b308a434cc1e608d61c93564ad852?placeholderIfAbsent=true"
        />

        <div className="mt-6">
          <ChatMessage
            isUser={true}
            message="How do i get started on Breezeflow?"
            timestamp=""
          />
        </div>

        <div className="mt-6">
          <ChatMessage
            isUser={false}
            message="To get started with Breezeflow, you have to create an account with all necessary information or you can book a demo with a team member. Would you like me to set up a demo for you?"
            timestamp="13:23"
            avatar="https://cdn.builder.io/api/v1/image/assets/6ab570d2ba5f4a1e8f0614bf834ae119/334aee67b3dbf8a341562a9d6545bbdd7230c2e9?placeholderIfAbsent=true"
          />
        </div>

        <div className="mt-6">
          <ChatMessage
            isUser={true}
            message="Can you tell me more about Breezeflow's pricing and offering?"
            timestamp=""
          />
        </div>
      </div>
    </div>
  );
};

export default ConversationDetail; 