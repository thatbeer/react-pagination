import { useState,useEffect } from "react";
import Posts from "./posts";
import PostPagination from "./postpagination";
import axios from "axios";

const PostPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [currentPage , setCurrentPage] = useState(1);
    const [postsPerPage] =useState(posts.length*0.1);
    
    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
                setPosts(response.data);
                setLoading(false)
            } catch (error) {
                console.log('error');
                alert(error);
                setLoading(false)
            };

            fetchPost();
        }
    },[])
    // get current post of each page (a list of post in each page [1-10?])
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div>
            <PostPage posts={currentPosts}/>
            <PostPagination 
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                currentPage={currentPage}
                paginate={paginate}
            />
        </div>
    )
};

export default PostPage;