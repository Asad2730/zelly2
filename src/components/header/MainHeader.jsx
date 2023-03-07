import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "#", path: "/" },
  // { name: 'About', href: '#', path: '' },
  { name: "Shops", href: "#", path: "" },
  // { name: 'Products', href: '#', path: '/userProducts' },
  { name: "Cart", href: "#", path: "/cart" },
  // { name: 'Privacy Policy', href: '#', path: '' },
];

export default function MainHeader() {
  return (
    <header className="bg-gray-900">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center">
            <a href=" ">
              <span className="sr-only">Your Company</span>
              <img
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=white"
                alt=""
              />
            </a>
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <Link to={link.path}>
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium text-white hover:text-indigo-300"
                  >
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>

          <div className="ml-10 space-x-4">
            <Link to="/login">
              <a
                href=" "
                className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
              >
                Sign in
              </a>
            </Link>
            <Link to="/signup">
              <a
                href=" "
                className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Sign up
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
