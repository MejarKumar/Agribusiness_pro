import React from 'react';
import { CustomButton } from '../../NavbarComponents/CustomButton';
import './BlogSection.css';
import Cards from './Cards';

export default function BlogSection() {
    return (
        <>

            <div className='blog_section'>


                <h2 className='heading' style={{ "textAlign": "center", "padding": "3rem" }}>Some Glimpse of Blogs </h2>
                <div className="wrapper">
                    <Cards
                        img="https://plus.unsplash.com/premium_photo-1661773298506-573947f1a842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80\"
                        title="Modern Agriculture"
                        description="Inspire the next generation of farmers with a capstone experience like no other."
                    />

                    <Cards
                        img="https://images.unsplash.com/photo-1535379453347-1ffd615e2e08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                        title="Technology Improvement"
                        description="Technology has led to tractors and other vehicles that allow fewer farmers to handle much larger fields."
                    />

                    <Cards
                        img="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        title="Agriculture Technology"
                        description="Modern farms and agricultural operations work far differently than those a few decades ago."
                    />
                </div>
                <div className='more_blog_button'>
                    <CustomButton
                        content="More Blogs"
                    />
                </div>

            </div>
        </>
    )
}