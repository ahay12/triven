import Copyright from "../components/Copyright";
import Image from "next/image";
import Header from "../components/Header";

export default function Chart() {
  return (
    <div>
      <Header />
      <div className="grid w-full h-screen bg-primary place-content-center">
        <div className="grid grid-rows-4 gap-4 text-white justify-items-center place-content-center pt-24">
          <div className="mt-32 -ml-[900px]">
            <h1 className="text-2xl">Keranjang Anda</h1>
          </div>
          <div className="w-[1206px] h-[181px] bg-secondary">
            <div className="grid grid-cols-5">
              <div className="grid place-content-center -mt-20">
                <Image src={"/con.png"} width={200} height={200} />
              </div>
              <div className="grid gird-cols-2 mt-10 border-r-4">
                <div>
                  <h1 className="font-bold text-xl">Converse Chuck</h1>
                </div>
                <div>
                  <p>Size : 38</p>
                </div>
              </div>
              <div>cols</div>
              <div>cols</div>
              <div>cols</div>
            </div>
          </div>
          <div className="w-[1206px] h-[181px] bg-secondary"></div>
          <div className="grid justify-items-stretch">
            <div className="justify-self-start">
              <p>Back</p>
            </div>
            <div>Total</div>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
}
