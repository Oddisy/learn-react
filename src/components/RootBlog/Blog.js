import React from "react"
import "./Blog.css"
import { useFormik } from "formik"

const Blog = () => {
  const formik = useFormik({
          
      initialValues: {
        name: "",
        email: "",
        password: ""
    },
          onSubmit: values => {
            console.log('form value', values)
          }
           
  // validate: values => {
  //   let errors = {};
  //   if (!values.name) {
  //     errors.name = "Required"
  //   }
  //   if (!values.email) {
  //     errors.email = "Required"
  //   }
  //   else if (!/^[A-Z0-9._%+_]+@[A-Z,0-9,-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //     errors.email = "invalid email address"
  //   }
  //   if (!values.password) {
  //     errors.password = "Required"
  //   }
  //   return errors;
  // }

            
        })

    
    return (
      <section >
           
            <form onSubmit={formik.handleSubmit}>
            <input
                    id="fullName"
                    type="text"
                    required="required"
                    placeholder="Full Name"
                    name="fullName"
                    onChange={formik.handleChange}
                    value={formik.values.fullName}
            />
           
        <input
          id="email"
          type="email"
          required="required"
          placeholder="email"
        name="email"
         onChange={formik.handleChange}
        value={formik.values.email}
        />
        <input
           id="Password"
          type="password"
          required="required"
          placeholder="Password"
         name="password"
        onChange={formik.handleChange}
         value={formik.values.password}
            />
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

     