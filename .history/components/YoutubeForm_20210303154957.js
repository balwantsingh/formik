import { useFormik } from 'formik'

export default function YoutubeForm() {
    return (
        <>
            <h1>Youtube Form</h1>
            <form>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control">
                </div>



                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}