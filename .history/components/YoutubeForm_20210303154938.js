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

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1">
                </div>
                
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1">
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}