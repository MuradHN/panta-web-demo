'use client'

import { useState } from "react";
import Image from "next/image";

import BANNER_DROP_1 from "@/app/assets/banners/nft-drops-banner.svg";
import IMG7 from "@/app/assets/images/img7-img.svg";
import IMG8 from "@/app/assets/images/img8-img.svg";
import LEFT_ICON from "@/app/assets/icons/left-icon.svg";
import RIGHT_ICON from "@/app/assets/icons/right-icon.svg";

const dropsCalendar = [BANNER_DROP_1, BANNER_DROP_1];
const others = [
  { title: "Hot NFT", img: IMG7 },
  { title: "Promotion", img: IMG8 },
];

export function NftDrops() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (dir: "left" | "right") => {
    setCurrentIndex((prev) => {
      if (dir === "left") return prev === 0 ? dropsCalendar.length - 1 : prev - 1;
      return prev === dropsCalendar.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <section className="flex justify-between items-end gap-8 max-lg:items-start max-lg:px-5 max-lg:flex-col max-xs:items-start max-xs:px-5 max-xs:flex-col">
      <div className="flex flex-col items-center max-lg:w-full max-xs:w-full">
        <div className="flex justify-between items-center w-full mb-3">
          <div className="text-primary text-[32px] max-xs:text-[18px] font-black uppercase">
            NFT Drops Calendar
          </div>
          <div className="flex gap-2">
            <button onClick={() => handleScroll("left")}>
              <Image src={LEFT_ICON} alt="left" className="cursor-pointer hover:opacity-80 transition-opacity" />
            </button>
            <button onClick={() => handleScroll("right")}>
              <Image src={RIGHT_ICON} alt="right" className="cursor-pointer hover:opacity-80 transition-opacity" />
            </button>
          </div>
        </div>
        <div className="relative w-[600px] max-lg:w-full max-xs:w-full h-60 max-xs:h-[171px] rounded-lg overflow-hidden">
          {dropsCalendar.map((_, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={BANNER_DROP_1}
                alt={`drop-banner-${index}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between max-lg:justify-start max-xs:justify-between gap-8 max-lg:gap-4 max-lg:w-full max-xs:gap-4 max-xs:w-full">
        {others.map((other) => (
          <div key={other.title} className="flex flex-col gap-3 max-xs:w-full">
            <h2 className="text-primary text-[32px] font-black uppercase max-xs:text-[18px]">
              {other.title}
            </h2>
            <Image
              src={other.img}
              alt={other.title}
              className="rounded-xl w-60 h-60 object-cover max-xs:w-full max-xs:h-[167px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
