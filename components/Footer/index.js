import Copyright from "../Copyright";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white">
      <div className="grid grid-cols-4 pb-8">
        <div className="container grid justify-center border-r-2">
          <h1 className="text-2xl font-bold">Tentang</h1>
          <ul>
            <li>Tentang Kami</li>
            <li>Syarat dan Ketentuan</li>
            <li>Kebijakan Privasi</li>
          </ul>
        </div>
        <div className="container grid justify-center border-r-2">
          <h1 className="text-2xl font-bold">Layanan Pelanggan</h1>
          <ul>
            <li>FAQs</li>
            <li>Pengembalian</li>
            <li>Kontak Kami</li>
            <li>Peta Situs</li>
          </ul>
        </div>
        <div className="container grid justify-center border-r-2">
          <h1 className="text-2xl font-bold">Link Populer</h1>
          <ul>
            <li>Sepatu Pria</li>
            <li>Sepatu Wanita</li>
            <li>Casual</li>
            <li>Olahraga</li>
            <li>Sepatu Anak</li>
          </ul>
        </div>
        <div className="container grid justify-center border-r-2">
          <h1 className="text-2xl font-bold">Sosial Media Kami</h1>
          <ul>
            <li className="flex items-center gap-2">
              <Image src={"/facebook.svg"} width={32} height={32} />
              Facebook
            </li>
            <li className="flex items-center gap-2">
              <Image src={"/tiktok.svg"} width={32} height={32} />
              Tiktok
            </li>
            <li className="flex items-center gap-2">
              <Image src={"/instagram.svg"} width={32} height={32} />
              Instagram
            </li>
            <li className="flex items-center gap-2">
              <Image src={"/youtube.svg"} width={32} height={32} />
              Youtube
            </li>
          </ul>
        </div>
      </div>
      <Copyright />
    </footer>
  );
}
