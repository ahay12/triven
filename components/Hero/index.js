import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-[#FF626D] to-[#FCAD72] w-full"
    >
      <div className="container pt-40 pb-40">
        <div className="flex flex-wrap">
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-9 lg:right-0">
              <Image
                src={"/BULET-ITEM.svg"}
                alt="Hero"
                width={250}
                height={300}
                className="relative max-w-full mx-auto"
              />
              <Image
                src={"/hero.png"}
                alt="Hero"
                width={350}
                height={300}
                className="relative z-10 -mt-60 max-w-full mx-auto -rotate-45 transition ease-in-out hover:animate-bounce"
              />
              <Image
                src={"/BULET-diskon.svg"}
                width={100}
                height={100}
                className="relative z-0 ml-36 -mt-20"
              />
            </div>
          </div>
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1
              className="block font-bold text-4 mt-1 text-white
						lg:text-4xl"
            >
              Red Air Jordan 12
              <span className="block font-normal text-base mt-1 text-white">
                Dapatkan segera Red Air Jordan 12 <br></br> dengan potongan
                harga 40%
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
