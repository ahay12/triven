import Header from "../components/Header";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="">
        <Header />
        <Hero />
        <div className="bg-primary grid grid-cols-3 gap-5 w-full py-10">
          <Card img={"/sepatu-pria.jpg"} desk={"Sepatu Pria"} />
          <Card img={"/sepatu-wanita.jpg"} desk={"Sepatu Wanita"} />
          <Card img={"/sepatu-anak.jpg"} desk={"Sepatu Anak"} />
          <Card img={"/sepatu-casual.jpg"} desk={"Casual"} />
          <Card img={"/sepatu-olahraga.jpg"} desk={"Olahraga"} />
          <Card img={"/sepatu-formal.jpg"} desk={"Formal"} />
        </div>
        <Footer />
      </div>
    </>
  );
}
