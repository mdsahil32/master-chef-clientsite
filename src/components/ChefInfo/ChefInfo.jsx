import React from 'react';
import chefImg from '../../assets/imgs/confident-young-male-cook-chef-uniform-standing-pointing-white-wall-isolated-orange-wall-with-copy-space.jpg'

const ChefInfo = () => {
    return (
        <div>
            <h1 className='text-4xl font-serif my-6 md:pt-6 text-center'>Chef information <span className='text-orange-500'>must be Check</span> !</h1>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <p className='px-12'>
                    1. A chef is a professional cook who has undergone formal training in culinary arts and has acquired the skills and knowledge necessary to prepare and cook a wide range of dishes.
                    <br />
                    2. Chefs work in a variety of settings, including restaurants, hotels, catering companies, and private households.
                    <br />
                    3. There are different types of chefs, including executive chefs, sous chefs, pastry chefs, and line chefs, each with their own specific roles and responsibilities.
                    <br />
                    4. Chefs must have a thorough understanding of food safety and sanitation, as well as the ability to manage a kitchen staff, create menus, order supplies, and oversee the preparation and presentation of dishes.
                    <br />
                    5. Many successful chefs have achieved celebrity status, appearing on television shows, publishing cookbooks, and operating their own restaurants.
                    <br />
                    6. Chefs can specialize in different cuisines, such as French, Italian, or Asian, and may also have expertise in certain cooking techniques, such as baking, grilling, or sautéing.
                    <br />
                    7. Becoming a chef usually involves completing culinary school or an apprenticeship program, as well as gaining experience in the industry through internships or entry-level positions.
                    <br />
                    8. Chefs must have a passion for food and a willingness to continuously learn and evolve in their craft.
                </p>
                <img className='w-50 h-full md:pe-12' src={chefImg} alt="" />
            </div>
        </div>
    );
};

export default ChefInfo;