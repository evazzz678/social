// import React from 'react'
// import "./PostHistory.css"
// import Feeds from './../feeds/Feeds'

// function PostHistory() {
//   return (
//     <div className='postHistory'>
//       <Feeds/>
      
//     </div>
//   )
// }

// export default PostHistory




import React from 'react';
import './PostHistory.css';

const posts = [
  { content: 'Had a great day!', date: '2024-08-30' },
  { content: 'Enjoying the beach.', date: '2024-08-29' },
];

function PostHistory() {
  return (
    <div className="post-history">
      <h2>Your Posts</h2>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div key={index} className="post-item">
            <p>{post.content}</p>
            <span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
          </div>
        ))
      ) : (
        <p>No posts yet.</p>
      )}
    </div>
  );
}

export default PostHistory;