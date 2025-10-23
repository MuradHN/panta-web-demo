'use client';

import Image from 'next/image';
import { useState } from 'react';
import BANNER from '@/app/assets/banners/nft-banner.svg';
import BANNER_MOBILE from '@/app/assets/banners/nft-banner-mobile.svg';

const slides = [BANNER, BANNER, BANNER];

export function Banner() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((src, i) => (
          <div key={i} className="relative w-full h-[450px] max-lg:h-80 max-xs:h-[180px] shrink-0">
            <picture>
              <source
                srcSet={BANNER_MOBILE.src}
                media="(max-width: 767px)"
              />
              <source
                srcSet={BANNER_MOBILE.src}
                media="(min-width: 768px)"
              />
              <Image
                src={BANNER}
                alt="banner"
                fill
                className="object-cover"
                priority
              />
            </picture>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`h-1 w-8 max-xs:w-6 rounded-sm transition-all cursor-pointer ${
              i === current ? 'bg-yellow-400' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
