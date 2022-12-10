import { updateBlog } from "../../actions/blogActions";

const updateBlogData = (blog, id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://tech-blog-server.vercel.app/blog/${id}`, {
      method: "PUT",
      body: JSON.stringify(blog),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(
        updateBlog({
          ...blog,
        })
      );
    }
  };
};

export default updateBlogData;
