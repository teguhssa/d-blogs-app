import { useParams } from "react-router-dom";
import useFetch from "./usefetch";
import { useState } from "react";

const EditBlog = () => {

    const { id } = useParams()
    const { data:blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    
    
    

    return ( 
        <div className="edit">
            <h2>Edit Blog</h2>
            { isPending && <div>Loading...</div>}
            { error && <div> { error } </div>}
            { blog && (
                <form>
                <label>Blog Title : </label>
                <input
                type="text"
                value={ title }
                onChange = {(e) => setTitle(e.target.value)}
                />
                <label>Blog Body : </label>
                <textarea
                // value = { blog.body }
                // onChange = {(e) => setBody(e.target.value)}
                />
                <label>Blog Author : </label>
                <select
                // onChange = {(e) => setAuthor(e.target.value)}
                >
                    <option value= "Teguh">Teguh</option>
                    <option value = "Satria">Satria</option>
                </select>
                <button>Save</button>
            </form>
            )}
        </div>
     );
}
 
export default EditBlog;