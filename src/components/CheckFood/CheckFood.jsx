import React from 'react';
import img1 from '../../assets/imgs/food 1.jpg'
import img2 from '../../assets/imgs/food 2.jpg'
import img3 from '../../assets/imgs/food 4.jpg'
import img4 from '../../assets/imgs/food 5.jpg'
const CheckFood = () => {
    return (
        <>
            <h1 className='text-2xl md:text-5xl font-serif text-center mt-8 md:mt-16'>Check Our Best <span className='text-orange-500 underline'>Recipe</span></h1>
            {/* 1 */}
            <div className='grid grid:cols-2 md:grid-cols-4 gap-4 md:mx-12 my-12 '>
            <div className="card  bg-base-100 shadow-xl image-full">
                <figure><img src={img1} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Chicken Grill</h2>
                   
                </div>
            </div>
            {/* 2 */}
            <div className="card  bg-base-100 shadow-xl image-full">
                <figure><img src={img2} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Chicken Skewers</h2>
                    
                </div>
            </div>
            {/* 3 */}
            <div className="card  bg-base-100 shadow-xl image-full">
                <figure><img src={img3} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title ">Beef Meat </h2>
                    
                </div>
            </div>
            {/* 4 */}
            <div className="card  bg-base-100 shadow-xl image-full">
                <figure><img src={img4} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Chicken Wings</h2>
                  
                </div>
            </div>
        </div>
        </>
    );
};

export default CheckFood;