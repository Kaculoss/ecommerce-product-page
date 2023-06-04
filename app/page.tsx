import { AddToCart, ImagePreview } from "./components";

export default function Home() {
  return (
    <div className="w-full bg-white flex flex-1 justify-center items-center max-w-[1440px] h-full mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-center mb-12 lg:mb-0 gap-8 lg:gap-24">
        <ImagePreview />
        <div className="flex flex-col items-start justify-center gap-3 px-8 sm:px-0 lg:gap-6 w-full sm:max-w-md">
          <p className="uppercase tracking-wider font-bold text-base text-[#ff7d1a]">
            Sneaker company
          </p>
          <h1 className="font-bold text-4xl text-[#1c2026]">
            Fall Limited Edition Sneakers
          </h1>
          <p className="font-normal text-base text-[#b6bcc8]">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a double rubber outer sole, they&apos;ll withstand
            everything the weather can offer.
          </p>
          <div className="flex flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-center w-full gap-2">
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-bold text-2xl text-[#1c2026]">$125.00</h2>
              <div className="px-1.5 py-0.5 bg-[#ffede0] rounded">
                <p className="font-bold text-base text-[#ff7d1a]">50%</p>
              </div>
            </div>
            <p className="line-through font-bold text-base text-[#b6bcc8]">
              $250.00
            </p>
          </div>
          <AddToCart />
        </div>
      </div>
    </div>
  );
}
