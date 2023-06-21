import Image from "next/image";

export default function Catalog() {
  const imgCatalog = [
    {
      src: "/con.png",
      height: 200,
      width: 200,
      alt: "img",
    },
    {
      src: "/con.png",
      height: 200,
      width: 200,
      alt: "img",
    },
  ];
  const deskCatalog = [
    {
      title: "Converse Chuck Taylor All Star",
      price: "Rp 1.000.000",
    },
    {
      title: "Converse Chuck Taylor All Star",
      price: "Rp 1.000.000",
    },
  ];
  return (
    <div className="grid grid-flow-row grid-cols-5 gap-4">
      <div className="grid grid-flow-cols place-content-center">
        {imgCatalog.map((imgCatalogs) => (
          <Image {...imgCatalogs} />
        ))}
        {deskCatalog.map((deskCatalogs) => (
          <div key={deskCatalogs.id} className="text-black">
            {deskCatalogs.title}
            <br />
            {deskCatalogs.price}
          </div>
        ))}
      </div>
    </div>
  );
}
