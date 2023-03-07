import React from 'react'

export default function TitleCard({ name }) {
    return (
        <>
            <div className="md:mb-5 bg-gray-800 text-white text-3xl h-36 items-center flex flex-row justify-around mt-16 md:mt-0  " style={{
                backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/001/987/748/original/abstract-template-blue-geometric-diagonal-overlap-layer-on-dark-blue-background-free-vector.jpg")'
            }}>
                <h2>{name}</h2>
            </div>
        </>
    );
}
