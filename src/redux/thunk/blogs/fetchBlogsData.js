import { loadBlog } from "../../actions/blogActions";

const fetchBlogsData = () =>{
    return async (dispatch, getState) =>{
        const res = await fetch("https://tech-blog-server.vercel.app/blogs");
        const data = await res.json();

        if(data.data.length){
            dispatch(loadBlog(data.data));
        }
    }
}

export default fetchBlogsData;