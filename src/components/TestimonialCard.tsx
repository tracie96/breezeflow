import React from "react";

const TestimonialCard: React.FC = () => {
  return (
    <blockquote className="flex flex-col p-6 mt-72 w-full rounded-3xl bg-slate-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <p className="text-base font-light leading-6 text-gray-50 max-md:max-w-full">
        Switching to Breezeflow was one of the best decisions we've made. Our
        customers now receive instant responses, and we've seen a significant
        boost in satisfaction and engagement. The setup was straightforward, and
        the AI handles inquiries efficiently, freeing up our team to focus on
        more complex issues.
      </p>
      <footer className="flex gap-3 items-center self-start mt-4 leading-none">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b44c6fbd9c2ba577635f245ca122bd7aa5691f24?placeholderIfAbsent=true&apiKey=6ab570d2ba5f4a1e8f0614bf834ae119"
          alt="Lena Müller profile"
          className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
        />
        <div className="self-stretch my-auto">
          <cite className="text-sm text-white not-italic">Lena Müller</cite>
          <p className="mt-1.5 text-xs font-light text-gray-400">
            Marketing Manager, Access Bank
          </p>
        </div>
      </footer>
    </blockquote>
  );
};

export default TestimonialCard;
