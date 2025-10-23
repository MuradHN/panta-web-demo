import { Banner } from "./components/banner";
import { Actions } from "./components/actions";
import { NftCollections } from "./components/nft-collections";
import { NftDrops } from "./components/nft-drops";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="bg-banner">
        <Actions />
      </div>
      <div className="bg-secondary">
        <div className='max-w-[1128px] mx-auto py-20 max-lg:py-10 max-xs:py-10 flex flex-col gap-20 max-lg:gap-10 max-xs:gap-10'>
          <NftCollections />
          <NftDrops />
        </div>
      </div>
    </main>
  );
}
