import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import ProductCard from "../../components/Cards/user/ProductCard";
import MainHeader from "../../components/header/MainHeader";
import Footer from "../../sections/user/Footer";
import TitleCard from "../../components/Cards/user/TitleCard";
import { Fragment } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/20/solid";
import { useNavigate } from 'react-router-dom';

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "All New Arrivals" },
      { value: "tees", label: "Tees" },
      { value: "crewnecks", label: "Crewnecks" },
      { value: "sweatshirts", label: "Sweatshirts" },
      { value: "pants-shorts", label: "Pants & Shorts" },
    ],
  },
  {
    id: "sizes",
    name: "Sizes",
    options: [
      { value: "xs", label: "XS" },
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
      { value: "xl", label: "XL" },
      { value: "2xl", label: "2XL" },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const userProducts = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

const UserProduct = () => {
   

  const navigate = useNavigate();
  console.log('here')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const location = useLocation();
  const { id } = useParams();
  console.log("🚀  ~ file: products.jsx:12 ~ UserProduct ~ params:", id);

  const [products, setProducts] = useState([]);
  let url = `http://localhost:2000/api/product/getUserProducts/${id}`;
  console.log("URL", id);

  useEffect(() => {
    console.log("URL", url);
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data.data);
        console.log("DATA", products);
      })
      .catch((err) => console.log("Err", err));
  }, []);


  const addCart = (obj) =>{
    let token = localStorage.getItem('token')
    let uid = localStorage.getItem('uid')
    console.log(token === undefined)
   if(uid === undefined){
      navigate('/login')
   }else{
    const formData = new FormData();
    formData.append('pictures', obj['images'][0]);
    formData.append('title', obj['title'])
    formData.append('Price', obj['Price'])
    formData.append('sizes', obj['sizes'][0])
    formData.append('status', obj['status'])
    formData.append('category', obj['category'])
    formData.append('brandName', obj['brandName'])
    formData.append('deliveryTime', obj['deliveryTime'])
    formData.append('description', obj['description'])
    formData.append('pid', obj['pid'])
    formData.append('uid',uid)

    axios.post(`http://localhost:2000/api/cart/addTemp`,formData)
    .then(r=>{
      console.log('r',r.data)
    }).catch(er=>console.log('er',er))

   }
  }
  return (
    <>
      <MainHeader />
      <TitleCard name={"Products"} />

      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4">
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.name}
                        className="border-t border-gray-200 pt-4 pb-4"
                      >
                        {({ open }) => (
                          <fieldset>
                            <legend className="w-full px-2">
                              <Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                                <span className="text-sm font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex h-7 items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? "-rotate-180" : "rotate-0",
                                      "h-5 w-5 transform"
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </legend>
                            <Disclosure.Panel className="px-4 pt-4 pb-2">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`${section.id}-${optionIdx}-mobile`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`${section.id}-${optionIdx}-mobile`}
                                      className="ml-3 text-sm text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </fieldset>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="border-b border-gray-200 pb-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              New Arrivals
            </h1>
            <p className="mt-4 text-base text-gray-500">
              Checkout out the latest release of Basic Tees, new and improved
              with four openings!
            </p>
          </div>

          <div className="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <aside>
              <h2 className="sr-only">Filters</h2>

              <button
                type="button"
                className="inline-flex items-center lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="text-sm font-medium text-gray-700">
                  Filters
                </span>
                <PlusIcon
                  className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
              </button>

              <div className="hidden lg:block">
                <form className="space-y-10 divide-y divide-gray-200">
                  {filters.map((section, sectionIdx) => (
                    <div
                      key={section.name}
                      className={sectionIdx === 0 ? null : "pt-10"}
                    >
                      <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">
                          {section.name}
                        </legend>
                        <div className="space-y-3 pt-6">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                id={`${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`${section.id}-${optionIdx}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  ))}
                </form>
              </div>
            </aside>

            {/* Product grid */}
            <div className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
              <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                  <div class="flex flex-wrap -m-4">

                    {
                      products.map((i) => (
                        <div 
                       
                        class="lg:w-1/4 md:w-1/2 p-4 w-full">
                          <a class="block relative h-48 rounded overflow-hidden">
                            <img
                             onClick={()=>{
                              localStorage.setItem('p_id',i['_id'])
                              navigate('/productDetail')
                           }}
                              alt="ecommerce"
                              class="object-cover object-center w-full h-full block"
                              src={`http://localhost:2000/uploads/${i['images'][0]}`}
                            />
                          </a>
                          <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                              {i['brandName']}
                            </h3>
                            <h1 class="text-gray-900 title-font text-lg font-medium">
                              {i['title']}
                            </h1>
                            <h2 class="text-gray-900 title-font text-md font-medium">
                              Status: {i['status']}
                            </h2>
                            <p class="mt-1">Price:${i['Price']}</p>
                            <button 
                            onClick={()=>addCart(i)}
                             className="bg-blue-600 hover:bg-blue-900 text-white px-2 py-1 rounded-sm float-right">
                              add to cart
                            </button>
                          </div>
                        </div>
                      ))
                    }


                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>

      {/* <section class="text-gray-400 body-font">
        <div class="container px-5 py-24 mx-auto ">
          <div class="flex flex-wrap -m-4 justify-around">
            {products.map((product) => (
              <ProductCard
                id={product["_id"]}
                brandName={product["brandName"]}
                image={`http://localhost:2000/uploads/${product["images"][0]}`}
                title={product["title"]}
                price={product["Price"]}
              />
            ))}
          </div>
        </div>
      </section> */}
      <Footer />
    </>
  );
};

export default UserProduct;
