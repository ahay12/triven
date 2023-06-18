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
                src={"/hero.png"}
                alt="Hero"
                width={350}
                height={300}
                className="max-w-full mx-auto -rotate-45"
              />
            </div>
          </div>
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1
              className="block font-bold text-4xl mt-1 text-white
						lg:text-4xl "
            >
              Red Air Jordan 12
              <span className="block font-bold text-sm mt-1 text-white">
                Lorem ipsum Lorem ipsum Lorem ipsum
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
