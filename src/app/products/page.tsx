import Image from "next/image";

export default function Products() {
  // Example image data (replace with your actual image paths)
  const images = [
    { id: 1, src: "/images/image-1.jpg", alt: "Product 1" },
    { id: 2, src: "/images/image-2.jpg", alt: "Product 2" },
    { id: 3, src: "/images/image-3.jpg", alt: "Product 3" },
    { id: 4, src: "/images/image-4.jpg", alt: "Product 4" },
    { id: 5, src: "/images/image-5.jpg", alt: "Product 5" },
    { id: 6, src: "/images/image-6.jpg", alt: "Product 6" },
    { id: 7, src: "/images/image-7.jpg", alt: "Product 7" },
    { id: 8, src: "/images/image-8.jpg", alt: "Product 8" },
    { id: 9, src: "/images/image-9.jpg", alt: "Product 9" },
    { id: 9, src: "/images/image-10.jpg", alt: "Product 10" },
    { id: 9, src: "/images/image-11.jpg", alt: "Product 11" },
    { id: 9, src: "/images/image-12.jpg", alt: "Product 12" },
  ];

  return (
    <div className="min-h-screen py-12 mt-21 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl text-center mb-8">Naši proizvodi</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image) => (
          <div key={image.id} className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
            <Image src={image.src} alt={image.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
