import React, { useEffect, useState } from "react";
import FloorCard from "../../components/Cards/FloorCard";
//import AddCard from '../../components/Cards/AddCard';
import axios from 'axios';
import AdminHeader from "../../components/header/AdminHeader";
import TitleCard from "../../components/Cards/TitleCard";

//import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [show, setShow] = useState(null);
  //let navigate = useNavigate();
  const [usersDict, setUsersDict] = useState({});
  const [ttlShops, setTtlShop] = useState();
  const [ttlFloors, setTtlFloors] = useState();
  const [tmp,setTmp] = useState([]);

  useEffect(() => {
    getLenths()
  }, [ttlFloors, ttlFloors])


  const getLenths = async () => {
    await axios.get(`http://localhost:2000/api/shop/getShops`)
      .then(res => {
        setTmp(res.data.data)
        const dict = res.data.data.reduce((acc, data) => {
          if (!acc[data['floorNumber']]) {
            acc[data['floorNumber']] = [data];
          } else {
            acc[data['floorNumber']].push(data);
          }
          return acc;
        }, {});

        setUsersDict(dict);

        let len = Object.keys(usersDict).length
        setTtlFloors(len)
        Object.keys(usersDict).map((k, index) => {
          setTtlShop(usersDict[k].length * len)


        }).catch(err => {
          console.log('Error:', err);
        })


      })
  }


  return (
    <>
      <AdminHeader />
      <TitleCard name={"Floors"} />
      <>
        <div className="flex items-center w-full justify-center px-16 py-8">
          <div className="w-full rounded shadow bg-white dark:bg-gray-800 py-6 pl-6 pr-12">
            <div className="flex items-center">
              <p className="text-lg md:pr-96 font-semibold leading-4 text-gray-800 dark:text-gray-100">
                Statistics
              </p>
              {/* <p className="text-xs leading-3 pl-6 text-right text-gray-500 dark:text-gray-400">
                Updated 1 month ago
              </p> */}
            </div>
            <div className="md:flex items-center justify-between pt-8">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={24}
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M24.9436 6V12C24.9436 12.6 24.5443 13 23.9452 13C23.3461 13 22.9468 12.6 22.9468 12V8.4L15.159 16.2C14.7596 16.6 14.1605 16.6 13.7612 16.2L9.46789 11.9L2.67854 18.7C2.47885 18.9 2.27917 19 1.97964 19C1.68011 19 1.48042 18.9 1.28073 18.7C0.881358 18.3 0.881358 17.7 1.28073 17.3L8.76899 9.8C9.16836 9.4 9.76742 9.4 10.1668 9.8L14.4601 14.1L21.549 7H17.9546C17.3555 7 16.9562 6.6 16.9562 6C16.9562 5.4 17.3555 5 17.9546 5H23.9452C24.045 5 24.2447 5 24.3446 5.1C24.5443 5.2 24.7439 5.4 24.8438 5.6C24.9436 5.7 24.9436 5.9 24.9436 6Z"
                      fill="#6D28D9"
                    />
                  </svg>
                </div>
                <div className="pl-4">
                  <p className="w-11 text-lg font-semibold leading-none text-gray-800 dark:text-gray-100">
                    {ttlFloors}
                  </p>
                  <p className="w-8 text-xs leading-3 text-gray-500 pt-2 dark:text-gray-400">
                    Floors
                  </p>
                </div>
              </div>
              <div className="flex items-center md:pt-0 pt-4 md:pl-10">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={24}
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.71688 7C7.71688 4.2 9.91344 2 12.7091 2C15.5047 2 17.7012 4.2 17.7012 7C17.7012 9.8 15.5047 12 12.7091 12C9.91344 12 7.71688 9.8 7.71688 7ZM21.695 19V21C21.695 21.6 21.2956 22 20.6965 22C20.0975 22 19.6981 21.6 19.6981 21V19C19.6981 17.3 18.4001 16 16.7028 16H8.71532C7.01798 16 5.72001 17.3 5.72001 19V21C5.72001 21.6 5.32064 22 4.72158 22C4.12252 22 3.72314 21.6 3.72314 21V19C3.72314 16.2 5.9197 14 8.71532 14H16.7028C19.4984 14 21.695 16.2 21.695 19ZM12.7091 10C11.0117 10 9.71375 8.7 9.71375 7C9.71375 5.3 11.0117 4 12.7091 4C14.4064 4 15.7044 5.3 15.7044 7C15.7044 8.7 14.4064 10 12.7091 10Z"
                      fill="#1D4ED8"
                    />
                  </svg>
                </div>
                <div className="pl-4">
                  <p className="w-11 text-lg font-semibold leading-none text-gray-800 dark:text-gray-100">
                    {ttlShops}
                  </p>
                  <p className="w-8 text-xs leading-3 text-gray-500 pt-2 dark:text-gray-400">
                    Shops
                  </p>
                </div>
              </div>
              <div className="flex items-center md:pt-0 pt-4 md:pl-10">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={24}
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.7297 0.599805L21.7172 4.5998C22.8155 5.0998 23.4145 6.0998 23.4145 7.1998V16.6998C23.4145 17.8998 22.7156 18.8998 21.7172 19.3998L13.7297 23.3998C13.3303 23.5998 12.931 23.6998 12.4318 23.6998C12.0324 23.6998 11.5332 23.5998 11.1338 23.3998L3.14631 19.3998C2.04804 18.8998 1.44897 17.7998 1.44897 16.6998V7.1998C1.44897 6.0998 2.04804 5.0998 3.04647 4.5998L11.0339 0.599805C11.9325 0.199805 12.931 0.199805 13.7297 0.599805ZM12.4302 2.1998C12.3303 2.1998 12.1307 2.1998 12.0308 2.2998L4.6424 5.9998L12.4302 9.89981L20.218 5.9998L12.8296 2.2998C12.7297 2.1998 12.6299 2.1998 12.4302 2.1998ZM3.9435 17.6998C3.64397 17.4998 3.44428 17.0998 3.44428 16.7998V7.5998L11.4318 11.5998V21.3998L3.9435 17.6998ZM13.4286 21.3998L20.817 17.6998C21.2164 17.4998 21.4161 17.1998 21.4161 16.7998V7.5998L13.4286 11.5998V21.3998Z"
                      fill="#DC2626"
                    />
                  </svg>
                </div>
                <div className="pl-4">
                  <p className="w-11 text-lg font-semibold leading-none text-gray-800 dark:text-gray-100">
                    1.423k
                  </p>
                  <p className="w-8 text-xs leading-3 text-gray-500 pt-2 dark:text-gray-400">
                    Products
                  </p>
                </div>
              </div>
              <div className="flex items-center md:pt-0 pt-4 md:pl-10">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={24}
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.6529 11H13.1552V6H17.1489C17.748 6 18.1474 5.6 18.1474 5C18.1474 4.4 17.748 4 17.1489 4H13.1552V1C13.1552 0.4 12.7558 0 12.1568 0C11.5577 0 11.1583 0.4 11.1583 1V4H9.66068C7.16459 4 5.16772 6 5.16772 8.5C5.16772 11 7.16459 13 9.66068 13H11.1583V18H6.16616C5.5671 18 5.16772 18.4 5.16772 19C5.16772 19.6 5.5671 20 6.16616 20H11.1583V23C11.1583 23.6 11.5577 24 12.1568 24C12.7558 24 13.1552 23.6 13.1552 23V20H14.6529C17.1489 20 19.1458 18 19.1458 15.5C19.1458 13 17.1489 11 14.6529 11ZM9.66068 11C8.26287 11 7.16459 9.9 7.16459 8.5C7.16459 7.1 8.26287 6 9.66068 6H11.1583V11H9.66068ZM13.1552 18H14.6529C16.0507 18 17.1489 16.9 17.1489 15.5C17.1489 14.1 16.0507 13 14.6529 13H13.1552V18Z"
                      fill="#047857"
                    />
                  </svg>
                </div>
                <div className="pl-4">
                  <p className="w-11 text-lg font-semibold leading-none text-gray-800 dark:text-gray-100">
                    $9745
                  </p>
                  <p className="w-8 text-xs leading-3 text-gray-500 pt-2 dark:text-gray-400">
                    Revenue
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:px-6 w-full">
          <div className="px-4 md:px-10 py-4 md:py-7">
            <div className="lg:flex items-center justify-between">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                Users
              </p>
              <div className="md:flex items-center mt-6 lg:mt-0">
                <div className="flex items-center">
                  <button className="px-2.5 py-2.5 mr-3 bg-indigo-700 hover:bg-indigo-600 rounded focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M15 3.3335H4.99998C4.07951 3.3335 3.33331 4.07969 3.33331 5.00016V6.66683C3.33331 7.5873 4.07951 8.3335 4.99998 8.3335H15C15.9205 8.3335 16.6666 7.5873 16.6666 6.66683V5.00016C16.6666 4.07969 15.9205 3.3335 15 3.3335Z"
                        stroke="#FAFAFA"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 11.6665H4.99998C4.07951 11.6665 3.33331 12.4127 3.33331 13.3332V14.9998C3.33331 15.9203 4.07951 16.6665 4.99998 16.6665H15C15.9205 16.6665 16.6666 15.9203 16.6666 14.9998V13.3332C16.6666 12.4127 15.9205 11.6665 15 11.6665Z"
                        stroke="#FAFAFA"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button className="px-2.5 py-2.5 mr-4 bg-white border hover:bg-gray-100 rounded border-gray-200 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M7.49998 3.3335H4.16665C3.70641 3.3335 3.33331 3.70659 3.33331 4.16683V7.50016C3.33331 7.9604 3.70641 8.3335 4.16665 8.3335H7.49998C7.96022 8.3335 8.33331 7.9604 8.33331 7.50016V4.16683C8.33331 3.70659 7.96022 3.3335 7.49998 3.3335Z"
                        stroke="#6B7280"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.8334 3.3335H12.5C12.0398 3.3335 11.6667 3.70659 11.6667 4.16683V7.50016C11.6667 7.9604 12.0398 8.3335 12.5 8.3335H15.8334C16.2936 8.3335 16.6667 7.9604 16.6667 7.50016V4.16683C16.6667 3.70659 16.2936 3.3335 15.8334 3.3335Z"
                        stroke="#6B7280"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.49998 11.6665H4.16665C3.70641 11.6665 3.33331 12.0396 3.33331 12.4998V15.8332C3.33331 16.2934 3.70641 16.6665 4.16665 16.6665H7.49998C7.96022 16.6665 8.33331 16.2934 8.33331 15.8332V12.4998C8.33331 12.0396 7.96022 11.6665 7.49998 11.6665Z"
                        stroke="#6B7280"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.8334 11.6665H12.5C12.0398 11.6665 11.6667 12.0396 11.6667 12.4998V15.8332C11.6667 16.2934 12.0398 16.6665 12.5 16.6665H15.8334C16.2936 16.6665 16.6667 16.2934 16.6667 15.8332V12.4998C16.6667 12.0396 16.2936 11.6665 15.8334 11.6665Z"
                        stroke="#6B7280"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div className="flex items-center pl-3 bg-white border w-64 rounded border-gray-200">
                    <svg
                      className="text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M8.33333 13.1667C11.555 13.1667 14.1667 10.555 14.1667 7.33333C14.1667 4.11167 11.555 1.5 8.33333 1.5C5.11167 1.5 2.5 4.11167 2.5 7.33333C2.5 10.555 5.11167 13.1667 8.33333 13.1667Z"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.5 17.5L12.5 12.5"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      type="text"
                      className="py-2.5 pl-1 w-full focus:outline-none text-sm rounded text-gray-600 placeholder-gray-500"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="flex items-center mt-4 md:mt-0 md:ml-3 lg:ml-0">
                  <div className="w-40 py-2 px-3 bg-white lg:ml-3 border rounded border-gray-200">
                    <select className="w-full text-sm leading-3 text-gray-500 focus:outline-none">
                      <option>Employees</option>
                      <option>Clients</option>
                      <option>Employees</option>
                    </select>
                  </div>
                  <button
                    onclick="popuphandler(true)"
                    className="inline-flex ml-1.5 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
                  >
                    <p className="text-sm font-medium leading-none text-white">
                      Add User
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white md:px-8 xl:px-5 overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="h-20 w-full text-sm leading-none text-gray-600">
                <th className="font-normal text-left pl-11">#</th>
                  <th className="font-normal text-left pl-11">Shop No</th>
                  <th className="font-normal text-left pl-10">Shop Name</th>
                  <th className="font-normal text-left">Shop Type</th>

                  <th className="font-normal text-left">Floor No</th>
                </tr>
              </thead>


              <tbody className="w-full">
                {/* {
                  Object.keys(usersDict).map((k) => (
                    <>
                      <tr

                        className="h-20 text-sm leading-none text-gray-700 border-b border-t border-gray-200 bg-white "
                      >
                        <td className="pl-11" >
                          <div className="flex items-center">

                            {k}
                          </div>
                        </td>

                        {
                          usersDict[k].map((i) => (
                            <>

                              <tr>
                                <td>
                                  <p className="mr-16 pl-10">{i['shopNumber']}</p>
                                </td>

                                <td>
                                  <p className="mr-16">x</p>
                                </td>

                                <td>
                                  <div className="w-20 h-6 flex items-center mr-16 justify-center bg-blue-50 rounded-full">
                                    <p className="text-xs leading-3 text-blue-500">
                                      Approved
                                    </p>
                                  </div>
                                </td>
                              </tr>

                            </>
                          ))
                        }
                      </tr>
                    </>
                  ))
                } */}

                {
                  tmp.map((i,index)=>(
                    <>
                    <tr  className="h-20 text-sm leading-none text-gray-700 border-b border-t border-gray-200 bg-white ">
                    <td><p className="mr-16 pl-10">{index+1}</p></td>
                      <td><p className="mr-16 pl-10">{i['shopNumber']}</p></td>
                      <td><p className="mr-16 pl-10">{i['shopName']}</p></td>
                      <td><p className="mr-16 pl-10">{i['shopType']}</p></td>
                      <td><p className="mr-16 pl-10">{i['floorNumber']}</p></td>
                    </tr>
                    </>
                  ))
                }




              </tbody>
            </table>
          </div>
        </div>
      </>
      {/* <section class="text-gray-600 body-font my-10">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap -m-4 ">
                        <FloorCard />

                    </div>
                </div>
            </section> */}
      {/* <section class="text-gray-600 body-font my-10">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <AddCard />
                    </div>
                </div>
            </section> */}
    </>
  );
}
