import React from 'react';
import ProductCard from './ProductCard';

const productsData = [

{
    key: "01",
    img: "/jacket-1.jpg",
    title: "Jacket",
    desc: "Men's Yarn Fleece Full-Zip Jacket",
    rating: 4,
    price: "45.00"
},
{
    key: "02",
    img: "/shorts-1.jpg",
    title: "Shorts",
    desc: "Better Basic French Terry SweatShorts",
    rating: 3,
    price: "78.00",
},
{
    key: "03",
    img: "/party-wear-1.jpg",
    title: "Party Wear",
    desc: "Women's Party Wear Shoes",
    rating: 3,
    price: "25.00",

},

{
    key: "04",
    img: "/shirt-1.jpg",
    title: "Shirt",
    desc: "Pure Garments Dyed Cotton Shirt",
    rating: 4,
    price: "45.00",
},
{
    key: "05",
    img: "/sports-1.jpg",
    title: "Sports Shoes",
    desc: "Tracking & Running Shoes - Black",
    rating: 3,
    price: "58.00",
},
{
    key: "06",
    img: "/watch-1.jpg",
    title: "Watches",
    desc: "Smart Watches Vital Plus",
    rating: 4,
    price:"100.00",
},
{
    key: "07",
    img: "/watch-2.jpg",
    title: "Watches",
    desc: "Pocket Watch Leather Pouch",
    rating: 4,
    price: "120.00",
},
];

const NewProducts = () => {
  return (
    <div>
        <div className='container pt-16'>
        <h2 className='font-medium text-2xl pb-4'>New Products</h2>
        <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
                
                {productsData.map((item,) => (
                    <ProductCard 
                    key={item.key}
                    img={item.img}
                    title={item.title}
                    desc={item.desc}
                    rating={item.rating}
                    price={item.price}
                    />
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default NewProducts





