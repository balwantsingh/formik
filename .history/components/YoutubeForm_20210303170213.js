import { useFormik } from 'formik'

export default function YoutubeForm() {
    const formik = useFormik({
        initialValues: {
            name: 'sdfdsfsdf',
            email: '',
            channel: ''
        },
        onSubmit: values => {
            console.log('Form data', values) 
        },
        validate: values => {
            let errors = {}

            if(!values.name) {
                errors.name = 'Required'
            }

            if(!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email format'
            }

            if(!values.channel) {
                errors.channel = 'Required'
            }
        }
    })

    //console.log('Form values', formik.values)

    return (
        <>
            <h1>Youtube Form</h1>
            <form onSubmit={formik.handleSubmit} className="mx-auto max-w-6xl p-20">
                <div className="mb-5">
                    <label htmlFor='name' className="font-bold mb-1 text-gray-700 block">Name</label>
                    <input onChange={formik.handleChange} value={formik.values.name} type='text' id='name' name='name' className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium border" />
                </div>

                <div className="mb-5">
                    <label htmlFor='email' className="font-bold mb-1 text-gray-700 block">Email</label>
                    <input onChange={formik.handleChange} value={formik.values.email} type='email' id='email' name='email' className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium border" />
                </div>

                <div className="mb-3">
                    <label htmlFor='channel' className="font-bold mb-1 text-gray-700 block">Channel</label>
                    <input onChange={formik.handleChange} value={formik.values.channel} type='text' id='channel' name='channel' className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium border" />
                </div>

                <button type='submit' className="w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-blue-500 hover:bg-blue-600 font-medium">Submit</button>
            </form>
        </>
    )
}