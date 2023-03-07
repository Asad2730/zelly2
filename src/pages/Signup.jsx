import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Signup() {

    let navigate = useNavigate();

    const [fn, setFn] = useState('')
    const [ln, setLn] = useState('')
    const [em, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [type, setType] = useState('admin')
    const [dob, setDob] = useState('')
    const [add, setAdd] = useState('')
    const [zip, setZip] = useState('')
    const [cnic, setCnic] = useState('')

    const handleOptionChange = (event) => setType(event.target.value);


    const submit = () => {

        let jsn = {
            "email": em,
            "password": password,
            "userType": type,
            "personalInformation": {
                "firstName": fn,
                "lastName": ln,
                "dob": dob,
                "Address": add,
                "zipCode": zip,
                "cnic": cnic
            }
        }
        axios.post('http://localhost:2000/api/user/signUp', jsn)
            .then(r => {
                
                navigate('/login')
            })
            .catch(e => console.log(e))
    }

    return (
        <>
            <section class="h-screen">
                <div class="px-6 h-full text-gray-800">
                    <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                        <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                class="w-full"
                                alt="hhh"
                            />
                        </div>
                        <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <center><h1 className='text-xl my-4'>ZELLY</h1></center>
                            <form>
                                <div class="mb-2">
                                    <input
                                        type="text"
                                        class="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="First Name"
                                        value={fn}
                                        onChange={(e) => setFn(e.target.value)}
                                    />
                                </div>
                                <div class="mb-2">
                                    <input
                                        type="text"
                                        class="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Last Name"
                                        value={ln}
                                        onChange={(e) => setLn(e.target.value)}
                                    />
                                </div>
                                <div class="mb-2">
                                    <input
                                        type="email"
                                        class="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Email"
                                        value={em}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div class="mb-2">
                                    <input
                                        type="password"
                                        class="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div class="mb-2 flex-row flex justify-between form-control w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                    <section>
                                        <label className="text-gray-400 text-md leading-tight tracking-normal mb-2">
                                            User Type
                                        </label>
                                    </section>
                                    <section>
                                        <input type="radio" name="usertype" value="ADMIN"
                                            checked={type === 'ADMIN'}
                                            onChange={handleOptionChange}
                                        /> Admin
                                    </section>

                                    <section>
                                        <input type="radio" name="usertype" value="CUSTOMER"
                                            checked={type === 'CUSTOMER'}
                                            onChange={handleOptionChange} /> customer
                                    </section>
                                </div>
                                <div class="mb-2">
                                    <input
                                        type="date"
                                        class="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Date of Birth"
                                        value={dob}
                                        onChange={(e) => setDob(e.target.value)}
                                    />
                                </div>
                                <div class="mb-2">
                                    <input
                                        type="text"
                                        class="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Address"
                                        value={add}
                                        onChange={(e) => setAdd(e.target.value)}
                                    />
                                </div>
                                <div class="mb-2">
                                    <input
                                        type="text"
                                        class="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Zip Code"
                                        value={zip}
                                        onChange={(e) => setZip(e.target.value)}
                                    />
                                </div>
                                <div class="mb-2">
                                    <input
                                        type="text"
                                        class="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="CNIC"
                                        value={cnic}
                                        onChange={(e) => setCnic(e.target.value)}
                                    />
                                </div>


                                <div class="text-center lg:text-left">
                                    <button
                                        onClick={submit}
                                        type="button"
                                        class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-md leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Signup
                                    </button>
                                    {/* <p class="text-md font-semibold mt-2 pt-1 mb-0">
                                        Don't have an account?
                                        <a
                                            href="#!"
                                            class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                        >Register</a>
                                    </p> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

