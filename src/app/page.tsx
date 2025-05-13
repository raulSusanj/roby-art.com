import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/voce_i_povrce/voce_i_povrce_2.JPG')" }}
      >
        <div className="text-center text-gray-500 animate-fade-in">
          <Image src="/images/logo.svg" alt="Roby Art" width={800} height={800} className="animate-float" />
          <p className="text-xl text-white animate-slide-up">unikatna i ručno izrađena ukrasna i uporabna keramika</p>
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
            <div className="grid grid-cols-1 gap-4 md:flex md:space-x-6 md:overflow-x-auto pb-4">
              <Link href="/products?category=uporabna">
                <div className="w-full md:w-64 flex-shrink-0 flex flex-col items-center">
                  <div className="relative w-64 h-64 rounded-full overflow-hidden">
                    <Image
                      src={`/images/uporabna/uporabna_1.jpg`}
                      alt="Uporabna keramika"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-center mt-2">Uporabna keramika</p>
                </div>
              </Link>
              <Link href="/products?category=slike">
                <div className="w-full md:w-64 flex-shrink-0 flex flex-col items-center">
                  <div className="relative w-64 h-64 rounded-full overflow-hidden">
                    <Image src={`/images/slike/slike_1.JPG`} alt="Slike od keramike" fill className="object-cover" />
                  </div>
                  <p className="text-center mt-2">Slike od keramike</p>
                </div>
              </Link>
              <Link href="/products?category=voce">
                <div className="w-full md:w-64 flex-shrink-0 flex flex-col items-center">
                  <div className="relative w-64 h-64 rounded-full overflow-hidden">
                    <Image
                      src={`/images/voce_i_povrce/voce_i_povrce_1.JPG`}
                      alt="Voće i povrće od keramike"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-center mt-2">Voće i povrće od keramike</p>
                </div>
              </Link>
              <Link href="/products?category=ukrasna">
                <div className="w-full md:w-64 flex-shrink-0 flex flex-col items-center">
                  <div className="relative w-64 h-64 rounded-full overflow-hidden">
                    <Image src={`/images/ukrasna/ukrasna_1.JPG`} alt="Ukrasna keramika" fill className="object-cover" />
                  </div>
                  <p className="text-center mt-2">Ukrasna keramika</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Animated Plate Image */}
        <div className="hidden md:block absolute top-0 right-0 h-full w-1/3 overflow-hidden z-10">
          <Image
            src="/images/izolirani-brodic.png"
            alt="Cup"
            width={800}
            height={800}
            className="animate-slide-in-from-right"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
