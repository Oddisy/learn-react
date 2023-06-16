import React from "react"
import "./Blog.css"
import Blog from "../components/RootBlog/Blog"
import {useFormik} from "formik"
const Blogs = () => {
    const formik = useFormik({
        initial: {
            name: "AYO",
            email: "",
            password: ""
        },
        onSubmit: values => {
            console.log('form data',  values)
        }

    })
    return (
        <section className="Blog_Section">
           
            <form onSubmit = {formik.handleSubmit}>
            <Blog
                    id="firstName"
                    type="text"
                    required="required"
                    placeholder="First Name"
                    name="firstname"
                    onChange={formik.handleChange}
                    // value={formik.values.name}
            />
            <Blog
               id="lastName"
          type="text"
          onChange=""
          required="required"
          placeholder="Last Name"
                    name="lastName"
                    //  value={formik.values.name} 
            />
        <Blog
          id="email"
          type="email"
          required="required"
          placeholder="email"
                    name="email"
                    // onChange={formik.handleChange}
                    // value={formik.values.email}
        />
        <Blog
           id="Password"
          type="password"
          required="required"
          placeholder="Password"
                    name="password"
                    // onChange={formik.handleChange}
                    // value={formik.values.password}
            />
        <button type="submit" >Submit</button>
        </form>
            </section>
    )
}
export default Blogs;