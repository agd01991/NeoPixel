import React, { useState } from 'react'
import PostList from './PostList';

export default function Events() {
  const [posts, setPosts] = useState([
    {date : '22-22-22', id : 1, title: 'JavaScript', body: 'Opisanie'},
    {date : '22-22-22', id : 2, title: 'JavaScript 2', body: 'Opisanie'},
    {date : '22-22-22', id : 3, title: 'JavaScript 3', body: 'Opisanie'},
    {date : '22-22-22', id : 4, title: 'JavaScript 4', body: 'Opisanie'},
    
  ]);

  return (
    <div className='flex justify-between mx-auto bg-[#171616] py-[150px]'>
        <div className='text-center px-[230px]'>
            <div className="text-white">
                Мероприятия
            </div>
            <div className="text-white">
            <PostList posts={posts}/>


            </div>
        </div>
        <div className="px-[230px]">
            <img src={require('../assets/events/event1.jpg')} alt="" />
        </div>
    </div>
  )
}
