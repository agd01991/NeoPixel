import React from 'react';

const Postiteam = (props) => {
    console.log(props);
    return (
        <div className="post">
        <div className="post__content">
          <h4>{props.post.date}</h4>
          <strong>{props.post.id}. {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <div className="post__btn">
          <button>delite</button>
        </div>
      </div>
    );
};

export default Postiteam;