import Image from "next/image";
import React from "react";

interface MessageProps {
  profileUrl?: string;
  imageBgColor: string;
  name?: string;
  message: string[];
  imagePosition: "left" | "right";
  messageBgColor?: string; // New prop for background color of message wrapper
}

const Message: React.FC<MessageProps> = ({
  profileUrl,
  imageBgColor = "bg-zinc-200",
  name,
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
        {profileUrl &&
          <Image
            src={profileUrl}
            alt={`Portrait of ${name}`}
            layout="fill"
            objectFit="cover"
            priority
          />
        }
      </div>
      {/* Message Wrapper */}
      <div className="">


        {name && (
          <p className="text-xs font-normal ml-3 mb-1 opacity-100">{name}</p>
        )}
        <div className={`flex max-w-xs flex-col rounded-xl ${imagePosition === 'right' ? 'rounded-br-none' : 'rounded-bl-none'} ${messageBgColor} px-3 py-3`}>

          {/* Name and Status Wrapper */}
          <div className="flex gap-2">

            <div className="flex items-center gap-1">
            </div>
          </div>
          {/* Message Content */}
          <div className="text-sm font-normal opacity-95">
            {message.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < message.length - 1 && line !== "" && <br />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
