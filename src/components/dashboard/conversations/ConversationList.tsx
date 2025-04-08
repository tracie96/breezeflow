import React, { useState } from "react";
import ConversationItem from "./ConversationItem";
import { CalendarIcon, ArrowDownIcon, RefreshIcon } from "../../ui/icons";

interface Conversation {
  id: string;
  name: string;
  duration: string;
  date: string;
  preview: string;
}

const ConversationList: React.FC = () => {
  const [activeConversation, setActiveConversation] = useState("1");

  const conversations: Conversation[] = [
    {
      id: "1",
      name: "Visitor 1",
      duration: "01:45secs",
      date: "19 Mar 02:36pm",
      preview:
        "I've encountered a problem with my recent bill. There's a charge for a user license that I never ordered or authorized. The invoice",
    },
    {
      id: "2",
      name: "Visitor 2",
      duration: "00:30secs",
      date: "19 Mar 02:36pm",
      preview:
        "I've encountered a problem with my recent bill. There's a charge for a user license that I never ordered or authorized. The invoice",
    },
    {
      id: "3",
      name: "Visitor 3",
      duration: "04:52secs",
      date: "19 Mar 02:36pm",
      preview:
        "I've encountered a problem with my recent bill. There's a charge for a user license that I never ordered or authorized. The invoice",
    },
  ];

  return (
    <div className="border-r border-[#1D2939] min-h-[936px] w-full px-4">
      <div className=" pt-6">
       
        <div className="flex items-center gap-2 mb-4">
          <button className="flex items-center gap-2 bg-[#1D2939] text-white px-4 py-2 rounded-lg border border-[#344054]">
            <CalendarIcon />
            <span className="text-sm">Timeframe</span>
            <ArrowDownIcon />
          </button>
          <button className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-[#1D2939]">
            <RefreshIcon />
          </button>
        </div>
      </div>
      <div className="w-full">
        {conversations.map((conversation) => (
          <ConversationItem
            key={conversation.id}
            name={conversation.name}
            duration={conversation.duration}
            date={conversation.date}
            preview={conversation.preview}
            isActive={conversation.id === activeConversation}
            onClick={() => setActiveConversation(conversation.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ConversationList; 