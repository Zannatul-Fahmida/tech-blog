import { addBlog } from "../../actions/blogActions";

const addBlogData = (blog) => {
  return async (dispatch, getState) => {
    const res = await fetch("https://tech-blog-server.vercel.app/blog", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(
        addBlog({
          _id: data.insertedId,
          ...blog,
        })
      );
    }
  };
};
export default addBlogData;