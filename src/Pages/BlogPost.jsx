import React from 'react';
import { messageImage } from '../Images';

const BlogPost = ({ post }) => {

    return (
        <section>
            {/* Post Haeder */}
            <div className='global-spacer global-bg header-setting'>
                <div className='global-spacer blog-post-heading'>
                    {post.heading}
                </div>
            </div>

            <div className='global-container blog-post'>

                <h1 className='global-heading'>New Privacy Features: Silence Unknown Caller and Privacy Checkup</h1>
                <div className='center-flex'>
                    <div className='blog-img'>
                        <img src={messageImage} alt="blog-img" />
                    </div>
                </div>
                <p className='global-paragraph'>{post.paragraph + ' ' + post.detail}</p>
            </div>
        </section>
    );
};

export default BlogPost;
