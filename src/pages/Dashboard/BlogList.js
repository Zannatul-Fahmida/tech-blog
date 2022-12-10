import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import deleteBlogData from "../../redux/thunk/blogs/deleteBlogData";
import fetchBlogsData from "../../redux/thunk/blogs/fetchBlogsData";

const BlogList = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogsData());
  }, [dispatch]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{ minWidth: 170 }}>Id</TableCell>
              <TableCell style={{ minWidth: 170 }}>Title</TableCell>
              <TableCell style={{ minWidth: 170 }}>Date</TableCell>
              <TableCell style={{ minWidth: 170 }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogs
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((blog) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={blog.code}>
                    <TableCell>{blog._id}</TableCell>
                    <TableCell>{blog.title}</TableCell>
                    <TableCell>{blog.date}</TableCell>
                    <TableCell>
                      <Link to={`editBlog/${blog._id}`} style={{textDecoration: 'none'}}>
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          style={{ marginRight: "10px" }}
                        >
                          Edit
                        </Button>
                      </Link>
                      <Button variant="contained" color="error" size="small" onClick={() => dispatch(deleteBlogData(blog._id))}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default BlogList;
