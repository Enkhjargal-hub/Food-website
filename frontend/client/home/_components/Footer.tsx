import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-10">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-3 gap-8">
          {/* Logo Section */}
          <div>
            <div className="flex items-center gap-2">
              <svg
                width="46"
                height="38"
                viewBox="0 0 46 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.4661 0.596961C21.2291 0.833946 21.2203 0.885337 21.2426 1.92128C21.2552 2.51399 21.225 3.03945 21.1755 3.08878C21.1259 3.13812 20.6008 3.24912 20.0086 3.33526C17.4119 3.7133 15.2288 4.47496 12.9118 5.81142C11.2389 6.77639 10.332 7.45534 8.96201 8.7686C7.54568 10.1263 6.61075 11.3102 5.40645 13.2714C5.06061 13.8348 4.39556 15.153 4.39556 15.2755C4.39556 15.3006 4.28711 15.5584 4.15457 15.8482C3.40896 17.4783 2.74567 20.488 2.72169 22.3498C2.70515 23.6374 2.75654 23.5821 1.46795 23.6998C0.491915 23.7891 0.337253 23.8285 0.174956 24.0288C-0.0801388 24.3438 -0.0554713 24.687 0.243672 24.9862C0.494558 25.2371 0.506402 25.2387 1.58962 25.1752C2.19075 25.14 4.00401 25.0463 5.61916 24.967C7.2343 24.8877 9.32664 24.7791 10.2688 24.7257C12.9744 24.5724 13.6591 24.5371 15.0163 24.4814C16.351 24.4266 18.8048 24.2965 21.5258 24.1363C22.4142 24.084 23.7827 24.0181 24.567 23.9898C25.3513 23.9615 26.3424 23.9187 26.7695 23.8948C27.1966 23.8709 28.6031 23.8048 29.8952 23.7478C31.1873 23.6909 32.9493 23.6026 33.8107 23.5516C34.6721 23.5006 35.8835 23.4337 36.5026 23.4028C37.1217 23.3718 37.8926 23.3276 38.2156 23.3045C38.5387 23.2814 39.3536 23.2369 40.0266 23.2056C44.4149 23.0018 45.5977 22.9024 45.7989 22.7203C46.0619 22.4822 46.0683 21.8819 45.8102 21.6483C45.6521 21.5052 45.4529 21.4826 44.5388 21.5036C43.9425 21.5174 43.4225 21.4965 43.3831 21.4571C43.3438 21.4177 43.2376 20.8923 43.1471 20.2895C42.9636 19.0659 42.9276 18.8928 42.7262 18.2637C42.6486 18.0214 42.5337 17.625 42.471 17.3827C42.4082 17.1404 42.317 16.8657 42.2685 16.7723C42.2198 16.6788 42.1801 16.5524 42.1801 16.4916C42.1801 16.2622 41.2488 14.1867 40.7617 13.3304C40.1169 12.1971 39.5495 11.3245 39.2569 11.0166C39.1309 10.8838 38.9115 10.6211 38.7694 10.4327C38.1678 9.6347 36.9438 8.4117 35.9437 7.60912C35.1665 6.98538 33.0212 5.57287 32.3913 5.2702C29.6127 3.93502 27.0152 3.2502 24.2341 3.11981C23.3564 3.0786 22.9368 3.01977 22.8415 2.92453C22.7592 2.8423 22.7019 2.56655 22.6969 2.22992C22.6781 0.96257 22.6502 0.760824 22.4651 0.556337C22.2086 0.272953 21.7723 0.290671 21.4661 0.596961Z"
                  fill="#EF4444"
                />
              </svg>
              <h2 className="text-2xl font-bold">
                Nom<span className="text-red-500">Nom</span>
              </h2>
            </div>
            <p className="text-gray-400 mt-2">Swift delivery</p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-gray-500 uppercase mb-2">NOMNOM</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  <Link href="#">Contact us</Link>
                </li>
                <li>
                  <Link href="#">Delivery zone</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-500 uppercase mb-2">MENU</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="#">Appetizers</Link>
                </li>
                <li>
                  <Link href="#">Salads</Link>
                </li>
                <li>
                  <Link href="#">Pizzas</Link>
                </li>
                <li>
                  <Link href="#">Lunch favorites</Link>
                </li>
                <li>
                  <Link href="#">Main dishes</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-gray-500 uppercase mb-2">FOLLOW US</h3>
            <div className="flex gap-3 text-lg">
              <Link href="#" className="text-gray-400 hover:text-white">
                <FaFacebook />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-gray-500 text-sm text-center">
          <p>Copyright 2024 © Nomnom LLC</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link href="#">Privacy policy</Link>
            <Link href="#">Terms and conditions</Link>
            <Link href="#">Cookie policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
