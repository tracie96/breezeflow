import React from "react";
import CodeSnippet from "./CodeSnippet";

const AgentEmbed: React.FC = () => {
  const codeSnippet = `<script type="text/javascript">

"id": 2,
"email": "janet.weaver@reqres.in",
"first_name": "Janet",
"last_name": "Weaver",
"avatar": "https://reqres.in/img/faces/2-image.jpg"
},
"support": {
"url": "https://reqres.in/#support-heading",
"text": "To keep ReqRes free, contributions towards server costs are appreciated!"
}
}`;

  return (
    <section className="px-4 md:px-6 pt-4 md:pt-6 pb-6 md:pb-10 mt-6 md:mt-10 w-full md:max-w-[674px] bg-gray-900 rounded-3xl border border-solid border-[color:var(--Grey-900,#1D2939)]">
      <div className="flex gap-4 md:gap-8 items-start w-full text-xl md:text-2xl font-medium text-white">
        <h2 className="w-full">
          Add Voice Agent to Website
        </h2>
      </div>
      <div className="mt-4 md:mt-8 w-full">
        <p className="text-sm text-gray-400">
          To embed your agent on your website,{" "}
          <span className="font-semibold text-[rgba(53,176,255,1)]">
            check out our tutorials
          </span>{" "}
          or{" "}
          <span className="font-semibold text-[rgba(53,176,255,1)]">
            book a meeting with us
          </span>
          .
        </p>
        <CodeSnippet code={codeSnippet} />
      </div>
    </section>
  );
};

export default AgentEmbed;
