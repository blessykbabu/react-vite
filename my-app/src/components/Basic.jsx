// import React from "react"
// import {Formik} from "formik"
// import {object,string,number,email,password,} from yup
// const Basic = () =>(
//     <div>
//         <h1>Application</h1>
//         <Formik
//         initialValues={{email:"",password:""}}
//         validate={values=>{
//             const errors={};
//             if(!values.email){
//                 errors.email="Required"
//             }else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//             ){
//                 errors.email="Invalid email address";
//             }
//             return errors;
//         }}
//         onSubmit={(values,{setSubmitting})=>{
//             setTimeout(()=>{
//                 alert(JSON.stringify(values,null,2));
//                 setSubmitting(false)
//             },400 )
//         }}
//         >
//            {
//             ({
//                 values,
//                 errors,
//                 touched,
//                 handleChange,
//                 handleBlur,
//                 handleSubmit,
//                 isSubmitting,

//             })=>(
//               <form onSubmit={handleSubmit}>
//                 <input 
//                 type="email"
//                 name="email"
//                 onChange={handleChange} 
//                 onBlur={handleBlur}
//                 value={values.email} />
//               {errors.email && touched.email && errors.email}
//               <input 
//                 type="password"
//                 name="password"
//                 onChange={handleChange} 
//                 onBlur={handleBlur}
//                 value={values.passoword} />
//               {errors.password && touched.password && errors.password}
//               <button type="submit" disabled={isSubmitting}>Submit</button>
//               </form>  
//             )
//            }
//         </Formik>
//     </div>
// );
// export default Basic;

// *****************************validation using yup********************
import React from "react"
import {Formik} from "formik"
// import * as yup from 'yup';
import { object, string, number, date } from 'yup';

const Basic = () =>(


    
  <div>
    
        <h1>Application</h1>
        <Formik
        initialValues={{email:"",password:""}}
        validationSchema={object().shape({
          email: string().email().required("Email is required"),
          
            password: string()
              .required("Password is required")
              .min(6, "Password is too short - should be 6 chars minimum")
          })}
        
        onSubmit={(values,{setSubmitting})=>{
            setTimeout(()=>{
                alert(JSON.stringify(values,null,2));
                setSubmitting(false)
            },400 )
        }}
        >
           {
            ({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,

            })=>(
              <form onSubmit={handleSubmit}>
                <input 
                type="email"
                name="email"
                onChange={handleChange} 
                onBlur={handleBlur}
                value={values.email} />
               {errors.email && touched.email && errors.email}
              <input 
                type="password"
                name="password"
                onChange={handleChange} 
                onBlur={handleBlur}
                value={values.password} />
              {errors.password && touched.password && errors.password}
              <button type="submit" disabled={isSubmitting}>Submit</button>
              </form>  
            )
           }
        </Formik>
    </div>
);
export default Basic;


// validationSchema={signInSchema}