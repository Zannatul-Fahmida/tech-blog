import { singleBlog } from '../../actions/blogActions';

const getSingleData = (id) => {
    return async (dispatch, getState) =>{
        const res = await fetch(`https://tech-blog-server.vercel.app/blog/${id}`);
        const data = await res.json();

        if(data.data.length){
            dispatch(singleBlog(data.data));
        }
    }
};

export default getSingleData;