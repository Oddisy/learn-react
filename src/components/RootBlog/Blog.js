import React from "react"
import "./Blog.css"
import { useFormik } from "formik"

const initialValues = {
        name: "",
        email: "",
        password: ""
    }
      const onSubmit = values => {
            console.log('form value', values)
}
          const validate = values => {
    let errors = {};
    if  (!values.name) {
      errors.name = "Required"
            }
   
            if  (!values.email) {
      errors.email = "Required"
    }
    else if (!/^[A-Z0-9._%+_]+@[A-Z,0-9,-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "invalid email address"
    }
    if  (!values.password){
      errors.password = "Required"
    }
    return errors;
  }
           
const Blog = () => {
  const formik = useFormik({
    initialValues,
      onSubmit, 
  validate 

            
        })

    // console.log("from data", formik.values)
    return (
      <section >
           
        <form onSubmit={formik.handleSubmit}>
          <div className="form_control">
            <input
                    id="fullName"
                    type="text"
                    required="required"
                    placeholder="Full Name"
                    name="name"
                    onChange={formik.handleChange}
              value={formik.values.name}
              onBlur ={formik.handleBlur}
            />
          {formik.touched.name && formik.errors.name ?  <div className="error">{formik.errors.name}</div> : null }
          </div>
      <div className="form_control">
        <input
          id="email"
          type="email"
          required="required"
          placeholder="email"
        name="email"
         onChange={formik.handleChange}
              value={formik.values.email}
               onBlur ={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? <div className="error"> {formik.errors.email} </div>: null}
          </div>
          <div className="form_control">
        <input
           id="Password"
          type="password"
          required="required"
          placeholder="Password"
         name="password"
        onChange={formik.handleChange}
              value={formik.values.password}
               onBlur={formik.handleBlur}
              
            />
            {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div>: null}
            </div>
        <button type="submit" >Submit</button>
            </form>
             </section>
    )
};

export default Blog;






// import "./Blog.css"
// const Blog = ({  type, name, placeholder, required, id,  }) => {
//     return (
//         <section className="Section_Three">
//             <label htmlFor={id} className="Label"   >{name}</label>
//             <input name={name} className="TextInput"  type={type} placeholder={placeholder} required={required} id={id} />
            
//         </section>
//     )
// };

// export default  Blog;

     