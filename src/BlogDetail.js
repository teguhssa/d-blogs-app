import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./usefetch";
import { Link } from "react-router-dom";

const BlogDetail = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method : 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }

    return (
        <div className="blog-detail">
            { isPending && <div>Loading..</div> }
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p> Written By{ blog.author }</p>
                    <div> { blog.body} </div>
                    <button onClick={handleDelete}>Delete</button>
                    <Link to= {`/edit-blog/${blog.id}`} ><button>Edit</button></Link>
                </article>
            )}
        </div>  
     );
}
 
export default BlogDetail;