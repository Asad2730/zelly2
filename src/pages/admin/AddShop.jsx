import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../../components/header/AdminHeader'
import TitleCard from '../../components/Cards/TitleCard';

export default function AddShop() {

    const id = localStorage.getItem('Id')
    console.log('ID',id)
    const title = id === 'id'?'AddShop':'Edit Info'

    const floor = localStorage.getItem('floorNo')
    let navigate = useNavigate();

    const token = localStorage.getItem('token')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [dob, setDob] = useState('')
    const [address, setAddress] = useState('')
    const [cinic, setCnic] = useState('')
    const [shopName, setShopName] = useState('')
    const [shopNo, setShopNo] = useState(0)
    const [floorNo, setFloorNo] = useState(floor)
    const [type, setType] = useState('Shirts')




    useEffect(()=>{
      
           if(title === 'Edit Info'){
            
            axios.get(`http://localhost:2000/api/shop/getShopByID/${id}`)
            .then(res=>{
                let data = res.data.data
                let {shopName,floorNumber,shopType,shopNumber} = data
                let{firstName,lastName,dob,Address,cnic} = data['ownerPersonalInformation']
                setFname(firstName)
                setLname(lastName)
                setDob(dob)
                setAddress(Address)
                setCnic(cnic)
                setShopName(shopName)
                setFloorNo(floorNumber)
                setShopNo(shopNumber)
                setType(shopType)

            }).catch(err=>console.log(err))
           }
    },[])

   
    const submit = () => {
      
        let jsn = {
            "shopName": shopName,
            "shopNumber": shopNo,
            "floorNumber": floorNo,
            "shopType": type,
            "ownerPersonalInformation": {
                "firstName": fname,
                "lastName": lname,
                "dob": dob,
                "Address": address,
                "cnic": cinic
            }
        }

        if(title ===  'Edit Info'){
             axios.put(`http://localhost:2000/api/shop/update/${id}`,jsn)
             .then(r=>{
                navigate('/dashboard')
             }).catch(er=>console.log('err',er))
        }else{
            axios.post(`http://localhost:2000/api/shop/create?token=${token}`, jsn)
            .then(res => {
                console.log('response', res.data)
                navigate('/dashboard')
            }).catch(err => console.log('error', err))
        }
      
    }

    return (
        <>
            <AdminHeader />
            <TitleCard name={title} />

            <div className='flex flex-wrap justify-center'>
                <div className='mx-10 bg-gray-300 p-6 rounded-xl  mt-5 md:mt-0'>
                    <h1 className='text-xl mb-4'>Owner Details</h1>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            First Name
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input
                            value={fname}
                            onChange={(v) => setFname(v.target.value)}
                            className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Last Number
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input
                            value={lname}
                            onChange={(v) => setLname(v.target.value)}
                            className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Date of Birth
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input
                            value={dob}
                            onChange={(v) => setDob(v.target.value)}
                            type="date" className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Address
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input
                            value={address}
                            onChange={(v) => setAddress(v.target.value)}
                            className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            CNIC
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input
                            value={cinic}
                            onChange={(v) => setCnic(v.target.value)}
                            className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                </div>
                <div class="lg:block absolute left-1/6 top-64 -ml-0.5 w-[1px] h-96 bg-gray-600 hidden"></div>
                <div className='mx-10 bg-gray-300 p-6 rounded-xl mt-5 mb-32 md:mb-0 md:mt-0'>
                    <h1 className='text-xl  mb-4'>Shop Details</h1>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Shop Name
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input
                            value={shopName}
                            onChange={(v) => setShopName(v.target.value)}
                            className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Shop Number
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input
                            value={shopNo}
                            onChange={(v) => setShopNo(v.target.value)}
                            className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Floor Number
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input
                            value={floorNo}
                            onChange={(v) => setFloorNo(v.target.value)}
                            className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Shop Type
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <select
                            value={type}
                            onChange={(v) => setType(v.target.value)}
                            className='text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow'>
                            <option value='Shirts' className='bg=gray-800'>Shirts</option>
                            <option value='pants' className='bg=gray-800'>Pants</option>
                            <option value='Coat' className='bg=gray-800'>Coat</option>
                        </select>
                    </div>
                    <div className="mt-8">
                        <input onClick={submit} type="submit" className="text-white bg-indigo-700 font-normal w-64 h-10  text-center text-sm border-gray-300 rounded border shadow" />
                    </div>

                </div>
            </div>

        </>
    );
}
