import React from 'react';

const Blog = () => {
    return (
        <div className='md:mx-12 mt-6'>
            <h1 className='text-2xl'>Differences between uncontrolled and controlled components?</h1>
            <p>
                controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
            </p>
            <br />
            <h1 className='text-2xl'>How to validate React props using PropTypes?</h1>
            <p>React provides a way to define the types and shapes of the props that a component expects to receive using a module called PropTypes. PropTypes allows you to specify the expected type and format of each prop, making it easier to catch potential errors and ensure that the component is used correctly.</p>
            <br />
            <h1 className='text-2xl'>Difference between nodejs and express js?</h1>
            <p>Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".</p>
            <br />
            <h1 className='text-2xl'>What is Custom Hook? why will you create a custom hook?</h1>
            <li>A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That's it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function</li>
            <li>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</li>
        </div>
    );
};

export default Blog;