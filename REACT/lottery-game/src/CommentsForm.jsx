import { useState } from "react"
import { Formik, useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'username Required';
    } 
    if(!values.remark) {
        errors.remark = 'remark could not be empty';
    }
    if(!values.rating) {
        errors.rating = 'rating could not be empty';
    }
    return errors;
}

export default function CommentsForm({ addComment }) {
    // let [formData, setFormData] = useState({
    //     username : "",
    //     remark : "",
    //     rating : 0,
    // })

    const formik = useFormik({
        initialValues: {
            username: '',
            remark: '',
            rating: '',
        },
        validate,
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            addComment(values);
        },
    });

    // let handleForm = (event) => {
    //     setFormData((form) => {
    //         if (event.target.name === "rating") {
    //             return ({ ...form, [event.target.name]: parseInt(event.target.value) })
    //         }
    //         return ({ ...form, [event.target.name]: event.target.value })
    //     })
    // }

    // let handleSubmit = (event) => {
    //     event.preventDefault();
    //     addComment(formData);
    //     setFormData({
    //         username: "",
    //         remark: "",
    //         rating: 0
    //     })
    // }

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="username" name="username" value={formik.values.username} id="username" onChange={formik.handleChange} /><br /><br />
            <label htmlFor="remark">Remark</label>
            <textarea type="text" placeholder="remark" name="remark" value={formik.values.remark} id="remark" onChange={formik.handleChange} /><br /><br />
            <div className="rating">
                <h4>Rating</h4>
                <input type="radio" id="1" name="rating" value={1} onChange={formik.handleChange} />
                <label htmlFor="1">1</label> &nbsp;&nbsp;&nbsp;
                <input type="radio" id="2" name="rating" value={2} onChange={formik.handleChange} />
                <label htmlFor="2">2</label> &nbsp;&nbsp;&nbsp;
                <input type="radio" id="3" name="rating" value={3} onChange={formik.handleChange} />
                <label htmlFor="3">3</label> &nbsp;&nbsp;&nbsp;
                <input type="radio" id="4" name="rating" value={4} onChange={formik.handleChange} />
                <label htmlFor="4">4</label> &nbsp;&nbsp;&nbsp;
                <input type="radio" id="5" name="rating" value={5} onChange={formik.handleChange} />
                <label htmlFor="5">5</label> &nbsp;&nbsp;&nbsp;
            </div>
            {formik.errors.username ? <div style={{color : "red"}}>{formik.errors.username}</div> : null}
            {formik.errors.remark ? <div style={{color : "red"}}>{formik.errors.remark}</div> : null}
            {formik.errors.rating ? <div style={{color : "red"}}>{formik.errors.rating}</div> : null}
            <button type="submit">Submit</button>
        </form>
    )
}