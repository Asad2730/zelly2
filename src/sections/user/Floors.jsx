import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useEffect, useState } from "react";

import slide1 from "../../assets/images/slide-1.jpg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "pure-react-carousel/dist/react-carousel.es.css";

import ShopCard from "../../components/Cards/user/ShopCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

export default function Floors({ number, list, len }) {
  const navigate = useNavigate();

  // const [usersDict, setUsersDict] = useState({});
  // const [len, setLen] = useState(0);

  // useEffect(() => {

  //     axios.get(`http://localhost:2000/api/shop/getShops`)
  //         .then(res => {
  //             setLen(res.data.data.length)
  //             const dict = res.data.data.reduce((acc, data) => {
  //                 if (!acc[data['floorNumber']]) {
  //                     acc[data['floorNumber']] = [data];
  //                 } else {
  //                     acc[data['floorNumber']].push(data);
  //                 }
  //                 return acc;
  //             }, {});

  //             setUsersDict(dict);

  //         }).catch(err => {
  //             console.log('Error:', err);
  //         })

  // }, [])

  return (
    <>
      <div className=" mx-auto">
        <div className="flex flex-wrap justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
            />
          </svg>
          <b>
            <h1 className="text-2xl"> Floor {number}</h1>
          </b>
        </div>

        <div className=" flex items-center justify-center w-full h-full sm:py-8 px-4">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {list.map((i) => (
              <SwiperSlide>
                <Link
                  to={`userProducts/${i["_id"]}`}
                  id={i["_id"]}
                  className="max-w-xs"
                >
                  <div className="bg-gray-100 shadow rounded-tl rounded-tr">
                    <img
                      src="https://image.cnbcfm.com/api/v1/image/107036059-1648140541349-gettyimages-1239350024-PWeaver-Target-01.jpeg?v=1654544436&w=1920&h=1080"
                      alt="bg-img"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="bg-white shadow  px-5 rounded-b">
                    <p className="w-48 text-base font-semibold leading-5 pt-4 text-black">
                      {i["shopName"]}
                    </p>

                    <p className="py-2 text-xs leading-4 dark:text-gray-400 text-gray-500">
                      When I first got into the advertising business, I was
                      looking for the magical combination
                    </p>
                    <div className="flex cursor-pointer py-4">
                      <p className="text-xs leading-1 text-indigo-700 pr-1">
                        Read more
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mt-0.5 icon icon-tabler icon-tabler-arrow-narrow-right"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#4338CA"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1={5} y1={12} x2={19} y2={12} />
                        <line x1={15} y1={16} x2={19} y2={12} />
                        <line x1={15} y1={8} x2={19} y2={12} />
                      </svg>
                    </div>
                  </div>
                </Link>

                {/* <ShopCard
                    id={i["_id"]}
                    image={
                      "https://image.cnbcfm.com/api/v1/image/107036059-1648140541349-gettyimages-1239350024-PWeaver-Target-01.jpeg?v=1654544436&w=1920&h=1080"
                    }
                    name={i["shopName"]}
                  /> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>{" "}
    </>
  );
}
