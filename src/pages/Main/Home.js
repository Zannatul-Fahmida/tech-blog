import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard";
import fetchBlogsData from "../../redux/thunk/blogs/fetchBlogsData";

const Home = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogsData());
  }, [dispatch]);

  let content;

  if (blogs.length) {
    content = blogs.map((blog) => (
      <Grid item xs={2} sm={4} md={4} key={blog._id}>
        <BlogCard key={blog._id} blog={blog} />
      </Grid>
    ));
  }
  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {content}
      </Grid>
    </Container>
  );
};

export default Home;
