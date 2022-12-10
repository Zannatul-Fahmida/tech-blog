import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { singleBlog } from "../redux/actions/blogActions";

const BlogCard = ({ blog }) => {
  const dispatch = useDispatch();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {blog.title}
        </Typography>
        <Typography variant="body2">
          {`${blog.description}`.slice(0, 150)}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          to={`/blogDetails/${blog._id}`}
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            color="warning"
            onClick={() => dispatch(singleBlog(blog._id))}
          >
            See More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
