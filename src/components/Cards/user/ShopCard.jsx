import { Slide } from "pure-react-carousel";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SliderCard({ id, image, name }) {
  const navigate = useNavigate();

  return (
    <>
      <Slide index={id}>
        <div
          onClick={() => {
            navigate("/userProducts", { state: { id: id } });
          }}
        >
          {/* <Link to={{
                    pathname: '/userProducts',
                    state: { id: id }
                }}> */}
          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
            <img
              src={image}
              alt="black chair and white table"
              className=" object-cover object-center w-full md:h-80 h-36"
            />
            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6 ">
              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                {name}
              </h2>
            </div>
          </div>
          {/* </Link> */}
        </div>
      </Slide>
    </>
  );
}
