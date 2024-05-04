"use client";
import Image from "next/image";
import React, { useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import Link from "next/link";

const photos = [
  "/path/to/photo1.jpg",
  "/path/to/photo2.jpg",
  "/path/to/photo3.jpg",
];

interface PhotoCollectionProps {
  profileUrl: string;
  imageUrl: string;
  imageBgColor: string;
  name?: string;
  imagePosition: "left" | "right";
}

const PhotoCollection: React.FC<PhotoCollectionProps> = ({
  profileUrl,
  imageUrl,
  imageBgColor,
  name,
  imagePosition,
}) => {
  const [index, setIndex] = useState(0);
  const [{ x }, api] = useSpring(() => ({ x: 0 }));

  const bind = useDrag(
    ({ down, movement: [mx], direction: [xDir], distance, cancel }) => {
      if (
        down &&
        typeof distance === "number" &&
        distance > window.innerWidth / 2
      ) {
        cancel();
        setIndex(
          (prev) => (prev + (xDir > 0 ? -1 : 1) + photos.length) % photos.length
        );
      }
      api.start({ x: down ? mx : 0 });
    }
  );

  return (
    <div
      className={`flex items-end gap-2 ${imagePosition === "right" ? "flex-row-reverse" : ""
        }`}
    >
      {/* Profile Image */}
      <div
        className={`relative h-8 w-8 min-w-[32px] ${imageBgColor} overflow-hidden rounded-full shadow-md`}
      >
        <Image
          src={profileUrl}
          alt={`Portrait of ${name || "User"}`}
          layout="fill"
          objectFit="cover"
          priority
          className={imagePosition === "right" ? "" : "scale-x-[-1]"}
        />
      </div>
      {/* Photo Collection */}
      <Link href={"/"} className="w-56 relative overflow-hidden h-72 rounded-2xl bg-zinc-200 ">
        <Image
          src={imageUrl}
          alt={`Portrait of ${name || "User"}`}
          layout="fill"
          objectFit="cover"
          priority
        />
      </Link>
    </div>
  );
};

export default PhotoCollection;
