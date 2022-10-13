import React from 'react';
import Postiteam from './Postiteam';

const PostList = ({posts}) => {
    return (
        <div>
            <h1>
                Events
            </h1>
   
        {posts.map(post => 
          <Postiteam post={post} key={post.id}/>
          )}




        </div>
    );
};

export default PostList;