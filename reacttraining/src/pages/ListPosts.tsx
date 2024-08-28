/** @format */

import React, { useState } from 'react';
import Post from '../components/Post';

const post1 = {
  userId: 1,
  id: 1,
  title:
    'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
};

const post2 = {
  userId: 1,
  id: 2,
  title: 'qui est esse',
  body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
};

const post3 = {
  userId: 4,
  id: 37,
  title: 'provident vel ut sit ratione est',
  body: 'debitis et eaque non officia sed nesciunt pariatur vel voluptatem iste vero et ea numquam aut expedita ipsum nulla involuptates omnis consequatur aut enim officiis in quam qui',
};

const posts = [post1, post2, post3];

function ListPosts() {
  const [postsData, setPostsData] = useState(posts);
  const [count, setCount] = useState(postsData.length);
  const addPost = () => {
    setPostsData((prevPosts) => [...prevPosts, post1]);
  };

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={addPost}>Add post</button>
      {postsData.map((post) => (
        <Post
          key={post.id} // 1, 2, 3 1,
          title={post.title}
          body={post.body}
          count={postsData.length}
        />
      ))}
    </>
  );
}

export default ListPosts;

// Challenge: 9
/**
 * const posts = [post1, post2, post3];
 * when clicking at a post in the list -> this post should be moved to the top of the list
 * todo:
 * 1. js function handles changing index of post
 * 2. render UI list post + click event
 */
