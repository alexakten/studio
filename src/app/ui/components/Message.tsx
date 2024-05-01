import Image from "next/image";
import React from "react";

interface MessageProps {
  imageUrl: string;
  imageBgColor: string;
  name: string;
  date: string;
  message: string[];
  imagePosition: "left" | "right";
  messageBgColor?: string; // New prop for background color of message wrapper
}

const Message: React.FC<MessageProps> = ({
  imageUrl,
  imageBgColor = "bg-zinc-200",
  name,
  date,
  message,
  imagePosition,
  messageBgColor = "bg-zinc-200", // Default background color
}) => {
  return (
    <div
      className={`flex items-end gap-2 ${imagePosition === "right" ? "flex-row-reverse" : ""}`}
    >
      {/* Profile Image */}
      <div className={`relative h-8 w-8 min-w-[32px] ${imageBgColor} overflow-hidden rounded-full`}>
        {/* <Image
          src={imageUrl}
          alt={`Portrait of ${name}`}
          layout="fill"
          objectFit="cover"
          priority
          className={imagePosition === "right" ? "" : "scale-x-[-1]"}
        /> */}
      </div>
      {/* Message Wrapper */}
      <div className={`flex max-w-xs flex-col rounded-xl ${imagePosition === 'right' ? 'rounded-br-none' : 'rounded-bl-none'} ${messageBgColor} px-4 py-3`}>

        {/* Name and Status Wrapper */}
        <div className="flex gap-2">
          <p className="text-sm font-medium">{name}</p>
          <div className="flex items-center gap-1">
            <div className="bg-green-400 h-1 w-1 rounded-full"></div>
            <p className="text-[8px] opacity-70">{date}</p>
          </div>
        </div>
        {/* Message Content */}
        <div className="mt-1 text-sm font-normal opacity-95">
          {message.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < message.length - 1 && line !== "" && <br />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Message;
