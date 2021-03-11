import { useFormik } from 'formik'

export default function YoutubeForm() {
    return (
        <>
            <h1>Youtube Form</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor='name' className="">Email address</label>
                    <input type='text' id='name' name='name' className="border" />
                </div>

                <div className="mb-3">
                    <label htmlFor='email' className="">Email</label>
                    <input type='email' id='email' name='email' className="border" />
                </div>
                
                <div className="mb-3 form-check">
                    <label htmlFor='channel' className="">Channel</label>
                    <input type='text' id='channel' name='channel' className="border" />
                </div>
                
                <button type="submit" className="">Submit</button>
            </form>
        </>
    )
}