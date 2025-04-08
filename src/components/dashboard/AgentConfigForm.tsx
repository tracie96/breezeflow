import React, { useState } from "react";
import TabMenu from "./TabMenu";
import VoiceSelectionButton from "./VoiceSelectionButton";

const tabs = [
  { id: "general", label: "General" },
  { id: "appearance", label: "Appearance" },
  { id: "callGoal", label: "Call Goal" },
];

const voices = [
  { id: "kelly", name: "Kelly" },
  { id: "nik", name: "Nik" },
  { id: "michael", name: "Michael" },
  { id: "becca", name: "Becca" },
  { id: "felicia", name: "Felicia" },
  { id: "oliver", name: "Oliver" },
];

const AgentConfigForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [selectedVoice, setSelectedVoice] = useState("kelly");
  const [agentName, setAgentName] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Our Suggestion: Hi, my name is <<Agent Name>> and I'm <<Company Name>>'s website agent. May I ask - what brings you to our website today?",
  );

  const handleSaveChanges = () => {
    console.log({
      agentName,
      selectedVoice,
      welcomeMessage,
    });
  };

  return (
    <div className="flex w-full flex-col items-center mt-10 max-md:max-w-full">
      <TabMenu tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="w-[520px] max-w-full mt-8">
        <div className="w-full max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <div className="w-full max-md:max-w-full">
              <div className="text-white text-sm font-medium leading-none">
                Agent Name
              </div>
              <div className="justify-center items-stretch border-[color:var(--Grey-50,#FCFCFD)] flex min-h-[60px] w-full flex-col text-base text-[#475467] font-light mt-1.5 px-5 py-[18px] rounded-[14px] border-[1.5px] border-solid max-md:max-w-full">
                <div className="flex w-full items-center justify-between max-md:max-w-full">
                  <input
                    type="text"
                    className="self-stretch min-w-60 w-full gap-2 flex-1 shrink basis-[0%] my-auto max-md:max-w-full bg-transparent outline-none"
                    placeholder="Name your agent"
                    value={agentName}
                    onChange={(e) => setAgentName(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-6 max-md:max-w-full">
            <div className="w-full max-md:max-w-full">
              <div className="text-white text-sm font-medium leading-none">
                Tone
              </div>
              <div className="justify-center items-stretch border-[color:var(--Grey-50,#FCFCFD)] flex min-h-[60px] w-full flex-col text-base text-[#475467] font-light mt-1.5 px-5 py-[18px] rounded-[14px] border-[1.5px] border-solid max-md:max-w-full">
                <div className="flex w-full items-center justify-between max-md:max-w-full">
                  <select className="self-stretch min-w-60 gap-2 flex-1 shrink basis-[0%] my-auto max-md:max-w-full bg-transparent outline-none">
                    <option value="">Select a tone for your agent</option>
                    <option value="friendly">Friendly</option>
                    <option value="professional">Professional</option>
                    <option value="casual">Casual</option>
                    <option value="formal">Formal</option>
                  </select>
                  <div className="self-stretch flex w-6 shrink-0 h-6 my-auto" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-6 max-md:max-w-full">
            <div className="w-full max-md:max-w-full">
              <div className="text-white text-sm font-medium leading-none">
                Voice Selection
              </div>
              <div className="flex w-full gap-4 flex-wrap mt-1.5 max-md:max-w-full">
                {voices.map((voice) => (
                  <VoiceSelectionButton
                    key={voice.id}
                    name={voice.name}
                    isSelected={selectedVoice === voice.id}
                    onSelect={() => setSelectedVoice(voice.id)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="min-h-[156px] w-full mt-6 max-md:max-w-full">
            <div className="flex w-full flex-col items-stretch flex-1 max-md:max-w-full">
              <div className="flex items-center gap-2 text-sm text-white font-medium leading-none justify-center">
                <div className="self-stretch my-auto">Welcome Message</div>
                <div className="self-stretch flex w-[18px] shrink-0 h-[18px] my-auto" />
              </div>
              <div className="items-stretch border border-[color:var(--Grey-50,#FCFCFD)] flex w-full flex-col text-base text-[#FCFCFD] font-light leading-6 justify-center flex-1 mt-1.5 p-5 rounded-[14px] border-solid max-md:max-w-full">
                <div className="flex w-full items-center justify-between max-md:max-w-full">
                  <textarea
                    className="self-stretch flex-1 shrink basis-[0%] min-w-60 w-full gap-2 my-auto max-md:max-w-full bg-transparent outline-none resize-none"
                    value={welcomeMessage}
                    onChange={(e) => setWelcomeMessage(e.target.value)}
                    rows={3}
                  />
                </div>
              </div>
            </div>
            <div className="text-[#EAECF0] text-sm font-light leading-none tracking-[-0.28px] mt-1.5 max-md:max-w-full">
              Customize the greeting message the agent will use when engaging
              visitors.
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center border-t-[color:var(--Grey-900,#1D2939)] bg-[#0A0F19] self-stretch flex w-full flex-col text-lg text-white font-medium text-center tracking-[-0.2px] mt-[175px] px-10 py-6 border-t border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
        <button
          onClick={handleSaveChanges}
          className="self-stretch border bg-[#0048FF] min-h-[55px] w-[209px] max-w-full gap-2.5 px-6 py-4 rounded-2xl border-solid border-white max-md:px-5"
        >
          Save changes
        </button>
      </div>
    </div>
  );
};

export default AgentConfigForm; 