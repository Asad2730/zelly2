import React from "react";

export default function TitleCard({ name }) {
  return (
    <>
      <div
        className="md:mb-5 bg-gray-800 text-white text-3xl h-44 items-center flex flex-row justify-around mt-16 md:mt-0"
        style={{
          backgroundImage:
            'url("https://static.vecteezy.com/system/resources/thumbnails/002/155/612/small/abstract-light-diagonal-stripes-background-with-gradations-of-bright-blue-and-pink-free-vector.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <b>
          <h2 className="">{name}</h2>
        </b>
      </div>
      <nav class="self-center w-full ">
        <div class="flex flex-col lg:flex-row justify-center items-center border-b-2">
          <ul class="text-center  hidden lg:flex items-center text-[18px] font-semibold ">
            <li class="w-32 hover:underline text-base  underline-offset-4 py-2 rounded-lg px-5">
              <a href="#">Men</a>
            </li>
            <li class="w-32 hover:underline text-base underline-offset-4 py-2 rounded-lg px-5">
              <a href="#">Women</a>
            </li>
            <li class="w-32 hover:underline text-base underline-offset-4 py-2 rounded-lg px-5">
              <a href="#">Kids</a>
            </li>
            <li class="w-32 hover:underline text-base underline-offset-4 py-2 rounded-lg px-5">
              <a href="#">Bags</a>
            </li>
            <li class="w-32 hover:underline text-base underline-offset-4 py-2 rounded-lg px-5">
              <a href="#">Accessories</a>
            </li>
            <li>
              {/* <input
                type="email"
                name="email"
                id="email"
                className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Search
                "
              /> */}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
