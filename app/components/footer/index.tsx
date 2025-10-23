import Image from "next/image";
import INSTALL_APP from "@/app/assets/images/install-app-img.svg";

const footerSections = [
  {
    title: "ABOUT US",
    items: [
      "Careers",
      "Company Details",
      "Terms & Conditions",
      "Help Center",
      "Privacy Policy",
      "Affiliate",
    ],
  },
  {
    title: "PRODUCTS",
    items: [
      "NFT Marketplace",
      "Slingshot",
      "Swaps",
      "NFT Launchpad",
      "Runes Platform",
      "Creator Dashboard",
    ],
  },
  {
    title: "RESOURCES",
    items: ["Support", "API", "Feature Requests", "Trust & Safety", "Sitemap"],
  },
];

function Footer() {
  return (
    <footer className="max-lg:p-5 max-xs:p-5 py-10">
      <div
        className="
          max-w-7xl mx-auto flex flex-wrap justify-between gap-8
          max-xs:grid max-xs:grid-cols-2 max-xs:gap-x-8 max-xs:gap-y-10
          max-lg:grid max-lg:grid-cols-4 max-lg:gap-x-8 max-lg:gap-y-10
        "
      >
        {footerSections.map(({ title, items }) => (
          <div key={title} className="flex flex-col min-w-[150px]">
            <h3 className="font-black italic mb-3 text-[18px] text-text">{title}</h3>
            <ul className="space-y-2 text-[14px] text-footer">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col min-w-[150px]">
          <h3 className="font-black italic mb-3 text-[18px] text-text">CONTACT US</h3>
          <ul className="space-y-2 text-[14px] mb-4 text-footer">
            <li>support@tech.email</li>
            <li>affiliate@tech.com</li>
          </ul>
          <Image
            width={151}
            height={44}
            className="cursor-pointer"
            alt="install-logo"
            src={INSTALL_APP}
          />
        </div>
      </div>
    </footer>
  );
}

export { Footer };
