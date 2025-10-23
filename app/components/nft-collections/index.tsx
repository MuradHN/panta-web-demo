'use client'
import { useRef } from 'react'
import IMG1 from '@/app/assets/images/img1-img.svg'
import IMG2 from '@/app/assets/images/img2-img.svg'
import IMG3 from '@/app/assets/images/img3-img.svg'
import IMG4 from '@/app/assets/images/img4-img.svg'
import IMG5 from '@/app/assets/images/img5-img.svg'
import IMG6 from '@/app/assets/images/img6-img.svg'
import LEFT_ICON from '@/app/assets/icons/left-icon.svg'
import RIGHT_ICON from '@/app/assets/icons/right-icon.svg'
import Image from 'next/image'

const collections = [
  IMG1,
  IMG2,
  IMG3,
  IMG4,
  IMG5,
  IMG6,
  IMG1,
  IMG2,
  IMG3,
  IMG4,
  IMG5,
  IMG6,
];

const NftCollections = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const ref = scrollRef.current;
    if (!ref) return;

    const scrollAmount = dir === "left" ? -300 : 300;
    const start = ref.scrollLeft;
    const end = start + scrollAmount;
    const duration = 500;
    const startTime = performance.now();

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      ref.scrollLeft = start + (end - start) * easeOutCubic(progress);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  return <section className='max-lg:px-5 max-xs:px-5'>
    <div className="flex justify-between items-center mb-4 max-lg:mb-2 max-xs:mb-2">
      <h2 className="text-primary text-[32px] max-xs:text-[18px] font-black uppercase">
        New NFT Collections
      </h2>
      <div className="flex gap-2">
         <div className="flex gap-2">
          <button onClick={() => scroll("left")}>
            <Image
              src={LEFT_ICON}
              alt="left"
              className="cursor-pointer hover:opacity-80 transition-opacity"
            />
          </button>
          <button onClick={() => scroll("right")}>
            <Image
              src={RIGHT_ICON}
              alt="right"
              className="cursor-pointer hover:opacity-80 transition-opacity"
            />
          </button>
        </div>
      </div>
    </div>

    <div
      ref={scrollRef}
      className="flex gap-4 max-xs:gap-2 overflow-x-auto scrollbar-hide"
    >
      {collections.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`NFT ${i}`}
          className="w-[180px] h-[245px] max-xs:w-[102px] max-xs:h-[140px] object-cover rounded-xl shrink-0"
        />
      ))}
    </div>
  </section>;
};

export { NftCollections };