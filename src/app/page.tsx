import Image from "next/image";
import Link from "next/link";
import type { CategoryDoc } from "./products/page";

const CMS_URL = process.env.CMS_URL ?? "http://localhost:3000";

function resolveUrl(url?: string): string | undefined {
  if (!url) return undefined;
  if (url.startsWith("http")) return url;
  return `${CMS_URL}${url}`;
}

async function fetchCategories(): Promise<CategoryDoc[]> {
  try {
    const res = await fetch(`${CMS_URL}/api/categories?depth=1&limit=20&sort=order`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.docs ?? []).map((cat: CategoryDoc) => ({
      ...cat,
      image: cat.image ? { ...cat.image, url: resolveUrl(cat.image.url)! } : undefined,
    }));
  } catch {
    return [];
  }
}

export default async function Home() {
  const categories = await fetchCategories();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="h-screen relative flex items-center justify-center">
        <Image
          src="/images/voce_i_povrce/voce_i_povrce_2.JPG"
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
          quality={75}
          sizes="100vw"
        />
        <div className="relative z-10 text-center text-gray-500 animate-fade-in">
          <Image
            src="/images/logo.svg"
            alt="Roby Art"
            width={800}
            height={800}
            className="animate-float"
            priority
          />
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
            <div className="flex space-x-8 items-center mb-8">
              <h2 className="text-4xl">Naši proizvodi</h2>
              <Link
                href="/products"
                className="px-6 py-3 text-gray-700 border border-amber-600 hover:bg-amber-600 hover:text-white transition-colors rounded-full"
              >
                Svi naši proizvodi
              </Link>
            </div>

            {/* Category circles — from CMS if available, fallback to local images */}
            <div className="grid grid-cols-1 gap-4 md:flex md:space-x-6 md:overflow-x-auto pb-4">
              {categories.length > 0
                ? categories.map((cat) => (
                    <Link key={cat.id} href={`/products?category=${cat.id}`}>
                      <div className="w-full md:w-64 flex-shrink-0 flex flex-col items-center">
                        <div className="relative w-64 h-64 rounded-full overflow-hidden">
                          {cat.image?.url && (
                            <Image
                              src={cat.image.url}
                              alt={cat.image.alt ?? cat.name}
                              fill
                              className="object-cover"
                              sizes="256px"
                            />
                          )}
                        </div>
                        <p className="text-center mt-2">{cat.name}</p>
                      </div>
                    </Link>
                  ))
                : /* fallback while CMS is empty */
                  null}
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
            priority
            sizes="(min-width: 768px) 33vw, 0px"
          />
        </div>
      </div>
    </div>
  );
}
