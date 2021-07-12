// dependency imports
import { useState, useEffect } from "react";
import axios from "axios";

// style imports
import "./style.min.css";

// util component imports
import { Post1 } from "../utils/posts";
import { Route1 } from "../utils/routes";

const Blog = () => {
  const [state, setState] = useState({ posts: [] });

  const { posts } = state;

  const getPosts = async () => {
    const allPosts = await axios.get(`${process.env.REACT_APP_API_URL}/blog`);
    setState({ posts: [...allPosts.data] });
    console.log(posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const content = (
    <div className="route-content">
      <div className="blog-posts">
        {posts.map((post) => (
          <Post1
            key={post._id}
            imageDark={post.imageDark}
            title={post.title}
            date={post.date}
            text={post.text}
          />
        ))}
      </div>
    </div>
  );

  return <Route1 path="blog" content={content} />;
};

export default Blog;
