import React from "react";
import AdminHeader from "../../components/header/AdminHeader";
import TitleCard from "../../components/Cards/TitleCard";

import FloorCard from "../../components/Cards/FloorCard";

export default function Shops() {

  return (
    <>
      <AdminHeader />
      <TitleCard name={"Floors"} />
      <section class="text-gray-600 body-font my-10">
        <div class="container px-5 mx-auto">
          <div class="flex flex-wrap -m-4 ">
            <FloorCard />
          </div>
        </div>
      </section>
    </>
  );
}
