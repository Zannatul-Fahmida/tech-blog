import { Button, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const BlogDetails = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  console.log(blogs);
  return (
    <Container>
      {blogs.map((blog) => (
        <div>
        <Typography variant="h4" gutterBottom>
          {blog.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
        {blog.description}
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        Published on {blog.date}
      </Typography>
      <Link to="/" style={{textDecoration: 'none'}}>
      <Button variant="contained" color="warning">Back to home</Button>
      </Link>
      </div>
      ))}
    </Container>
  );
};

export default BlogDetails;
