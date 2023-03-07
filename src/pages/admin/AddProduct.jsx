import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../../components/header/AdminHeader'
import TitleCard from '../../components/Cards/TitleCard';

export default function AddProduct() {

    let id = localStorage.getItem('Id')

    console.log('ID', id)
    console.log(id === 'id')

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState(0);
    const [status, setStatus] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [time, setDeliver] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    let pid = localStorage.getItem('pid');
    let token = localStorage.getItem('token')

    console.log('pid', pid)

    let navigate = useNavigate();

    let Title = id === 'id' ? 'Add Product' : 'Update Product';
    let URL = id === 'id' ? `http://localhost:2000/api/product/createProduct?token=${token}` : `http://localhost:2000/api/shop/update/?id=${id}&token=${token}`;

    useEffect(() => {
        console.log('url', URL)
        if (id !== null && id !== 'id') {

            let url = `http://localhost:2000/api/product/getProductwithPk/${id}`;
            axios.get(url)
                .then(res => {
                  
                    setTitle(res.data.data['title'])
                    setPrice(res.data.data['Price'])
                    setSize(res.data.data['sizes'][0])
                    setStatus(res.data.data['status'])
                    setCategory(res.data.data['category'])
                    setBrand(res.data.data['brandName'])
                    setDeliver(res.data.data['deliveryTime'])
                    setDescription(res.data.data['description'])
                }).catch(err => console.log('err', err))
        }
    }, [id, token])

    const submit = () => {

        const formData = new FormData();
        formData.append('pictures', file);
        formData.append('title', title)
        formData.append('Price', price)
        formData.append('sizes', size)
        formData.append('status', status)
        formData.append('category', category)
        formData.append('brandName', brand)
        formData.append('deliveryTime', time)
        formData.append('description', description)
        formData.append('pid', pid)

        if (id === 'id') {
            axios.post(`${URL}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                    console.log(response.data);
                    navigate('/dashboard')
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            axios.put(`${URL}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                    console.log(response.data);
                    navigate('/floors')
                })
                .catch(error => {
                    console.error(error);
                });
        }

    }

    return (
        <>
            <AdminHeader />
            <TitleCard name={Title} />

            <div className='flex flex-wrap justify-center'>
                <div className='mx-10 bg-gray-300 p-6 rounded-xl  mt-5 md:mt-0'>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Title
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Price
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Sizes
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            type="text" className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Status
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Category
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                </div>
                <div class="lg:block absolute left-1/6 top-64 -ml-0.5 w-[1px] h-96 bg-gray-600 hidden"></div>
                <div className='mx-10 bg-gray-300 rounded-xl py-6 pl-4 mt-10 md:mt-0'>
                    <div className="flex flex-col mb-2 justify-center">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Brand Name
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                            className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Delivery Time
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input
                            value={time}
                            onChange={(e) => setDeliver(e.target.value)}
                            className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2">
                            Images
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <input type="file" className=""

                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="text-gray-800 text-sm  leading-tight tracking-normal mb-2 mt-2">
                            Description
                            <span className="text-xs text-gray-600  italic font-normal"></span>
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className='text-gray-600 py-2 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow'>

                        </textarea>
                    </div>
                    <div className="mt-8">
                        <input
                            onClick={submit}
                            type="submit" className="text-white bg-indigo-700 font-normal w-64 h-10  text-center text-sm border-gray-300 rounded border shadow" />
                    </div>

                </div>
            </div>

        </>
    );
}
