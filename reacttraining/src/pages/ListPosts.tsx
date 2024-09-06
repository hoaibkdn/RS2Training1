/** @format */

import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
  useContext,
} from 'react';
import Post from '../components/Post';
import { fetchData } from '../utils/fetchData';
import { PostModel } from './../types/post';
import useApi from './../hooks/useApi';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { fetchListPosts } from './../store/reducers/postsReducer';
import { AppDispatch } from './../store';

const compute = () => {
  let i = 0;
  let total = 0;
  while (i < 1000000000) {
    total += i;
    i++;
  }
  return total;
};

function ListPosts() {
  // const [postsData, setPostsData] = useState<PostModel[]>(posts); //
  // const { data: postsData, setData: setPostsData } = useApi('/posts', []);
  const [count, setCount] = useState(0); // asynchronous  (batch update)
  const [time, setTime] = useState(0);
  const totalTitleLength = useRef<number>(0); // ref
  const dispatch = useDispatch<AppDispatch>();
  const { auth, posts } = useSelector((state: any) => state);
  const postsData = posts.list ?? [];
  console.log('auth ', auth);
  console.log('posts ', posts);

  useEffect(() => {
    dispatch(fetchListPosts());
  }, [dispatch]);

  const addPost = useCallback(() => {
    // setPostsData((prevPosts: any) => {
    //   if (prevPosts) {
    //     return [...prevPosts, post1];
    //   }
    //   return [post1];
    // });
    if (totalTitleLength.current != null) {
      // null, undefined
      // totalTitleLength.current += post1.title.length;
    }
  }, []);

  // Challenge 11.1:
  // fetch List post data
  // useEffect(() => {
  //   const fetchListPost = async () => {
  //     try {
  //       const listPost = await fetchData('/posts');
  //       setPostsData(listPost);
  //     } catch (error) {
  //       console.error('Error fetching posts:', error);
  //     }
  //   };
  //   fetchListPost();
  // }, []);

  // useEffect(() => {
  //   console.log('useEffect ');
  //   if (count > 3) {
  //     addPost();
  //   }
  //   return () => {
  //     console.log('will unmount ');
  //   };
  // }, [count, addPost]); // []: did mount
  // [dependency]: did update
  // will unmount

  // const total = useMemo(() => compute(), []);

  // [useState, useState, useRef, useCallback, useEffect, useMemo]
  //

  const handleIncrease = useCallback(() => {
    // re-render 1 time: batchupdate
    setCount(count + 1); // count 1: 2
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1); // count 3
    setTime(time + Date.now());
  }, [count, time, setCount, setTime]);

  console.log('re-render LIst post count ', count);

  if (!auth.isLoggedIn) {
    return <Navigate to='/login' replace={true} />;
  }

  if (posts.loading === 'loading') {
    return <p> loading ...</p>;
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      {/* <p style={{ color: 'green' }}>{total}</p> */}
      <button onClick={addPost}>Add post</button>
      {postsData.map((post: PostModel) =>
        post ? (
          <Post
            key={post.id} // 1, 2, 3 1,
            postDetail={{ post, count: postsData.length }}
            // title={post.title}
            // body={post.body}
            // id={post.id}
            // count={postsData.length}
          />
        ) : null
      )}
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

// Challenge 12:
/**
 * Configure store with redux/toolkit
 */
