import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../../assets/imgs/food 1.jpg'
import img2 from '../../assets/imgs/food 2.jpg'
import img3 from '../../assets/imgs/food 4.jpg'
import img4 from '../../assets/imgs/food 5.jpg'
import img5 from '../../assets/imgs/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese.jpg'

const CheckFood = () => {
    return (
        <>
       
            <h1 className='text-2xl md:text-5xl font-serif text-center mt-8 md:mt-16'>Check Our Best <span className='text-orange-500 underline'>Recipe</span></h1>
            {/* 1 */}
            <Marquee speed={30}>
            <div className='grid grid:cols-1 mx-2 md:grid-cols-5 gap-4 md:mx-12 my-12 '>
            <div className="card  bg-base-100 shadow-xl image-full">
            
            <figure className='h-60 w-96'><img src={img1} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Chicken Grill</h2>
                </div>
                   
            </div>
            {/* 2 */}
            <div className="card  bg-base-100 shadow-xl image-full">
                <figure className='h-60 w-96'><img src={img2} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Chicken Skewers</h2>
                </div>
            </div>
            {/* 3 */}
            <div className="card  bg-base-100 shadow-xl image-full">
                <figure className='h-60 w-96'><img src={img3} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title ">Beef Meat </h2>
                </div>
            </div>
            {/* 4 */}
            <div className="card  bg-base-100 shadow-xl image-full">
                <figure className='h-60 w-96'><img src={img4} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Chicken Wings</h2>
                </div>
            </div>
            {/* 5 */}
            <div className="card  bg-base-100 shadow-xl image-full">
                <figure className='h-60 w-96'><img src={img5} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Double Hamburger</h2>
                </div>
            </div>

        </div>
        </Marquee>
        
        </>
    );
};

export default CheckFood;