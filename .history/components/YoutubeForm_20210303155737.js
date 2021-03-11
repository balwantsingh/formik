import { useFormik } from 'formik'

export default function YoutubeForm() {
    return (
        <>
            <h1>Youtube Form</h1>
            <form>
                <div className="mb-5">
                    <label htmlFor='name' className="font-bold mb-1 text-gray-700 block">Email address</label>
                    <input type='text' id='name' name='name' className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium border" />
                </div>

                <div className="mb-5">
                    <label htmlFor='email' className="font-bold mb-1 text-gray-700 block">Email</label>
                    <input type='email' id='email' name='email' className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium" />
                </div>
                
                <div className="mb-3">
                    <label htmlFor='channel' className="font-bold mb-1 text-gray-700 block">Channel</label>
                    <input type='text' id='channel' name='channel' className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium" />
                </div>
                
                <button type="submit" className="w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-blue-500 hover:bg-blue-600 font-medium">Submit</button>
            </form>
        </>
    )
}