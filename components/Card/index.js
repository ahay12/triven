import Image from "next/image";
import Link from "next/link";

export default function Card({ img, link, desk }) {
  return (
    <>
      <div className="relative flex flex-wrap ml-3 w-[470px] h-[600px] bg-red-500">
        <Image src={img} fill />
        <div className="static flex justify-center items-center ml-[100px] mt-[430px] z-10">
          <button className="bg-primary w-[259px] h-[85px] text-2xl text-white">{desk}</button>
        </div>
      </div>
    </>
  );
}
