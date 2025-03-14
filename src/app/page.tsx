import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero3.jpg')" }}
      >
        <div className="text-center text-gray-500 animate-fade-in">
          <Image src="/images/logo.svg" alt="Roby Art" width={800} height={800} className="animate-float" />
          <p className="text-xl text-gray-700 animate-slide-up">
            unikatna i ručno izrađena ukrasna i uporabna keramika
          </p>
        </div>
      </div>

      {/* Container for About Us and Products Sections */}
      <div className="relative">
        {/* About Us Section */}
        <div id="aboutUs" className="py-16 px-4 bg-gray-100 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl mb-6">O nama</h2>
            <p className="text-lg text-gray-700">
              Mi smo Roby Art i bavimo se izradom ručno izrađene i oslikane uporabne i ukrasne keramike. Radi li se o
              tome da želite ukrasiti svoj dom, pokloniti nekome poseban poklon ili jednostavno uživati u nečemu
              lijepom, mi smo tu za vas. Naša keramika je izrađena s puno ljubavi i pažnje, a svaki komad je unikatan.
            </p>
          </div>
        </div>

        {/* Products Section */}
        <div id="products" className="bg-white py-16 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Title and Button Container */}
            <div className="flex space-x-8 items-center mb-8">
              <h2 className="text-4xl">Naši proizvodi</h2>
              <Link
                href="/products"
                className="px-6 py-3 text-gray-700 border border-amber-600 hover:bg-amber-600 hover:text-white transition-colors rounded-full"
              >
                Svi naši proizvodi
              </Link>
            </div>

            {/* Product Images */}
            <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
              {[7, 8, 9, 10, 11, 12].map((product) => (
                <div key={product} className="flex-shrink-0 w-64 h-64 rounded-xs relative">
                  <Image
                    src={`/images/image-${product}.jpg`}
                    alt={`Product ${product}`}
                    fill
                    className="object-cover rounded-xs"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Cup Image */}
        <div className="hidden md:block absolute top-0 right-0 h-full w-1/2 overflow-hidden z-10">
          <Image
            src="/images/cup.png"
            alt="Cup"
            width={800}
            height={800}
            className="animate-slide-in-from-right"
            style={{ width: "75%", height: "auto" }}
          />
        </div>
      </div>

      {/* Where to See Our Products in Person Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-8 text-center">Dođite do naše poslovnice</h2>
          <p className="text-md text-center">
            Radno vrijeme: <span className="font-semibold">Pon-Pet</span> 8:00 - 14:00 /{" "}
            <span className="font-semibold">Sub</span> 8:00 - 12:00 / <span className="font-semibold">Ned</span>{" "}
            Zatvoreno
          </p>
          <p className="text-md mb-8 text-center">Robna Kuća Korzo (prizemlje) - Adamićeva ul., 51000, Rijeka</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image on the Left */}
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/images/store.jpg" alt="Our Showroom" fill className="object-cover" />
            </div>

            {/* Map on the Right */}
            <div className="h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2841.529943397139!2d14.44183363766399!3d45.326670862280565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDE5JzM2LjAiTiAxNMKwMjYnMzAuNiJF!5e0!3m2!1sen!2sus!4v1699471234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
