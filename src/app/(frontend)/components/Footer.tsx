import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <Image src="images/logo_white.svg" width={250} height={150} alt="Roby Art Logo" />
            <p className="mt-2 text-sm font-semibold">Unikatne slike i keramika</p>
            <p className="mt-1 text-sm">Roby Art</p>
            <p className="mt-1 text-sm">Creska 12, Rijeka 51000, HRVATSKA</p>
            <p className="mt-1 text-sm">robyart@vip.hr</p>
            <p className="mt-1 text-sm">+385(0)91 516 8526</p>
            <p className="mt-1 text-sm">+385(0)92 194 8389</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Poveznice</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Početna
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  O nama
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Naši proizvodi
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Zaprati nas</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100067784677564"
                className="text-gray-400 hover:text-white"
                target="_blank"
              >
                <i className="fab fa-facebook text-2xl">
                  <FaFacebook />
                </i>
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram text-2xl"></i>
              </a> */}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Roby Art - Sva prava pridržana.
        </div>
      </div>
    </footer>
  );
}
