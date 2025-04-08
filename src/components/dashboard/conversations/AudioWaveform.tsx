import React from "react";

interface AudioWaveformProps {
  className?: string;
}

const AudioWaveform: React.FC<AudioWaveformProps> = ({ className }) => {
  // Generate an array of 144 bars (12 groups of 12 bars)
  const bars = Array.from({ length: 144 }, (_, i) => {
    // Determine the height based on position
    let height = "h-2"; // Default small height

    // Every 12th bar is taller
    if (i % 12 === 0 || i % 12 === 4 || i % 12 === 8) {
      height = "h-[22px]";
    } else if (i % 12 === 1 || i % 12 === 2 || i % 12 === 3) {
      height = "h-4";
    } else if (i % 12 === 5 || i % 12 === 9 || i % 12 === 10 || i % 12 === 11) {
      height = "h-3.5";
    }

    return (
      <div
        key={i}
        className={`bg-[#35B0FF] self-stretch flex w-[3px] shrink-0 ${height} my-auto rounded-[5.517px]`}
      />
    );
  });

  return (
    <div
      className={`self-stretch flex min-w-60 items-center gap-px flex-wrap my-auto ${className}`}
    >
      {bars.map((bar, index) => (
        <React.Fragment key={index}>
          {index % 12 === 0 && index > 0 && (
            <div className="self-stretch flex items-center gap-px my-auto">
              {bars.slice(index, index + 12)}
            </div>
          )}
          {index < 12 && bar}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AudioWaveform; 