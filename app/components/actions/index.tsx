'use client';

import Image from 'next/image';
import EARN_ICON from '@/app/assets/icons/earn-icon.svg';
import RANK_ICON from '@/app/assets/icons/rank-icon.svg';
import VIDEO_ICON from '@/app/assets/icons/video-icon.svg';
import HORSE_ICON from '@/app/assets/icons/horse-icon.svg';
import CASINO_ICON from '@/app/assets/icons/casino-icon.svg';
import FLY_ICON from '@/app/assets/icons/fly-icon.svg';

const actions = [
  { id: 1, title: 'Free to earn', icon: EARN_ICON },
  { id: 2, title: 'Ranking', icon: RANK_ICON },
  { id: 3, title: 'Video NFT', icon: VIDEO_ICON },
  { id: 4, title: 'How to buy', icon: HORSE_ICON },
  { id: 5, title: 'New NFTs', icon: CASINO_ICON },
  { id: 6, title: 'Roadmaps', icon: FLY_ICON },
];

export function Actions() {
  return (
    <div className="max-w-[1128px] h-[121px] mx-auto py-6 flex justify-between items-start max-xs:h-auto max-xs:py-4 max-xs:px-2">
      {actions.map((act) => (
        <div
          key={act.id}
          className="flex flex-col items-center justify-start text-center w-[120px] max-xs:w-12"
        >
          <div className="flex justify-center">
            <Image
              src={act.icon}
              alt={`icon-act-${act.id}`}
              className="transition-transform max-xs:scale-75"
            />
          </div>
          <div className="uppercase text-text text-[14px] mt-3 max-xs:mt-1 leading-tight max-xs:text-[10px] max-xs:leading-[1.1] whitespace-normal wrap-break-word">
            {act.title}
          </div>
        </div>
      ))}
    </div>
  );
}
