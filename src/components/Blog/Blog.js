import React from "react";
import OurBlog from "./OurBlog/OurBlog";
import OurBlogCards from "./OurBlogCards/OurBlogCards";

const Blog = () => {
  document.title = "Blog";
  return (
    <div>
      <OurBlog />
      <OurBlogCards />
    </div>
  );
};

export default Blog;
