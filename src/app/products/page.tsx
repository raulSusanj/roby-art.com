"use client";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories: {
    [key: string]: { id: number; src: string; alt: string }[];
  } = useMemo(() => {
    return {
      uporabna: [
        { id: 1, src: "/images/uporabna/uporabna_1.jpg", alt: "Uporabna keramika" },
        { id: 2, src: "/images/uporabna/uporabna_2.jpg", alt: "Uporabna keramika" },
        { id: 3, src: "/images/uporabna/uporabna_3.jpg", alt: "Uporabna keramika" },
        { id: 4, src: "/images/uporabna/uporabna_4.jpg", alt: "Uporabna keramika" },
        { id: 5, src: "/images/uporabna/uporabna_5.jpg", alt: "Uporabna keramika" },
        { id: 6, src: "/images/uporabna/uporabna_6.jpg", alt: "Uporabna keramika" },
        { id: 7, src: "/images/uporabna/uporabna_7.jpg", alt: "Uporabna keramika" },
        { id: 8, src: "/images/uporabna/uporabna_8.jpg", alt: "Uporabna keramika" },
        { id: 9, src: "/images/uporabna/uporabna_9.jpg", alt: "Uporabna keramika" },
        { id: 10, src: "/images/uporabna/uporabna_10.jpg", alt: "Uporabna keramika" },
        { id: 11, src: "/images/uporabna/uporabna_11.jpg", alt: "Uporabna keramika" },
        { id: 12, src: "/images/uporabna/uporabna_12.jpg", alt: "Uporabna keramika" },
        { id: 13, src: "/images/uporabna/uporabna_13.jpg", alt: "Uporabna keramika" },
        { id: 14, src: "/images/uporabna/uporabna_14.jpg", alt: "Uporabna keramika" },
        { id: 15, src: "/images/uporabna/uporabna_15.jpg", alt: "Uporabna keramika" },
        { id: 16, src: "/images/uporabna/uporabna_16.jpg", alt: "Uporabna keramika" },
        { id: 17, src: "/images/uporabna/uporabna_17.jpg", alt: "Uporabna keramika" },
        { id: 18, src: "/images/uporabna/uporabna_18.jpg", alt: "Uporabna keramika" },
      ],
      slike: [
        { id: 1, src: "/images/slike/slike_1.JPG", alt: "Slike od keramike" },
        { id: 2, src: "/images/slike/slike_2.JPG", alt: "Slike od keramike" },
        { id: 3, src: "/images/slike/slike_3.JPG", alt: "Slike od keramike" },
        { id: 4, src: "/images/slike/slike_4.JPG", alt: "Slike od keramike" },
        { id: 5, src: "/images/slike/slike_5.JPG", alt: "Slike od keramike" },
        { id: 6, src: "/images/slike/slike_6.JPG", alt: "Slike od keramike" },
        { id: 7, src: "/images/slike/slike_7.JPG", alt: "Slike od keramike" },
        { id: 8, src: "/images/slike/slike_8.JPG", alt: "Slike od keramike" },
        { id: 9, src: "/images/slike/slike_9.JPG", alt: "Slike od keramike" },
        { id: 10, src: "/images/slike/slike_10.JPG", alt: "Slike od keramike" },
      ],
      voce: [
        { id: 1, src: "/images/voce_i_povrce/voce_i_povrce_1.JPG", alt: "Voće i povrće" },
        { id: 2, src: "/images/voce_i_povrce/voce_i_povrce_2.JPG", alt: "Voće i povrće" },
        { id: 3, src: "/images/voce_i_povrce/voce_i_povrce_3.JPG", alt: "Voće i povrće" },
        { id: 4, src: "/images/voce_i_povrce/voce_i_povrce_4.JPG", alt: "Voće i povrće" },
        { id: 5, src: "/images/voce_i_povrce/voce_i_povrce_5.JPG", alt: "Voće i povrće" },
        { id: 6, src: "/images/voce_i_povrce/voce_i_povrce_6.JPG", alt: "Voće i povrće" },
        { id: 7, src: "/images/voce_i_povrce/voce_i_povrce_7.JPG", alt: "Voće i povrće" },
        { id: 8, src: "/images/voce_i_povrce/voce_i_povrce_8.JPG", alt: "Voće i povrće" },
        { id: 9, src: "/images/voce_i_povrce/voce_i_povrce_9.JPG", alt: "Voće i povrće" },
        { id: 10, src: "/images/voce_i_povrce/voce_i_povrce_10.JPG", alt: "Voće i povrće" },
        { id: 11, src: "/images/voce_i_povrce/voce_i_povrce_11.JPG", alt: "Voće i povrće" },
        { id: 12, src: "/images/voce_i_povrce/voce_i_povrce_12.JPG", alt: "Voće i povrće" },
      ],
      ukrasna: [
        { id: 1, src: "/images/ukrasna/ukrasna_1.JPG", alt: "Ukrasna keramika" },
        { id: 2, src: "/images/ukrasna/ukrasna_2.JPG", alt: "Ukrasna keramika" },
        { id: 3, src: "/images/ukrasna/ukrasna_3.JPG", alt: "Ukrasna keramika" },
        { id: 4, src: "/images/ukrasna/ukrasna_4.JPG", alt: "Ukrasna keramika" },
        { id: 5, src: "/images/ukrasna/ukrasna_5.JPG", alt: "Ukrasna keramika" },
        { id: 6, src: "/images/ukrasna/ukrasna_6.JPG", alt: "Ukrasna keramika" },
      ],
      all: [],
    };
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category");
    if (category && Object.keys(categories).includes(category)) {
      setActiveCategory(category);
    }
  }, [categories]);

  const all = [categories.slike, categories.uporabna, categories.voce, categories.ukrasna].flat();
  categories.all = all;
  return (
    <div className="min-h-screen py-25 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl text-center mb-8">Naši proizvodi</h1>

      {/* Category Tabs */}
      <div className="flex overflow-x-auto pb-2 mb-8 scrollbar-hide">
        <div className="flex space-x-2 mx-auto">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap capitalize ${
                activeCategory === category ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {category === "all"
                ? "Svi proizvodi"
                : category === "uporabna"
                ? "Uporabna keramika"
                : category === "slike"
                ? "Slike"
                : category === "voce"
                ? "Voće i povrće"
                : "Ukrasna keramika"}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories[activeCategory as keyof typeof categories].map((image, index) => (
          <div key={image.id} className="flex flex-col items-center">
            <div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              {/* Text label */}
              <div className="absolute bottom-0 left-0 p-2 text-white font-regular bg-gradient-to-t from-black/70 to-transparent w-full">
                {`Slika ${index + 1}` || image.alt}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
