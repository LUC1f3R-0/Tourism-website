import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import React from 'react';

// Custom password validator
const passwordValidator = (value) => {
    const errors = [];

    if (!value || value.length < 8) {
        errors.push('Password must be at least 8 characters');
    }

    const upperCaseMatches = value ? value.match(/[A-Z]/g) : [];
    const lowerCaseMatches = value ? value.match(/[a-z]/g) : [];
    const numberMatches = value ? value.match(/[0-9]/g) : [];
    const symbolMatches = value ? value.match(/[^A-Za-z0-9]/g) : [];

    if (!upperCaseMatches || upperCaseMatches.length < 2) {
        errors.push('Include 2 uppercase letters');
    }
    if (!lowerCaseMatches || lowerCaseMatches.length < 2) {
        errors.push('Include 2 lowercase letters');
    }
    if (!numberMatches || numberMatches.length < 2) {
        errors.push('Include 2 numbers');
    }
    if (!symbolMatches || symbolMatches.length < 2) {
        errors.push('Include 2 symbols');
    }

    return errors.length > 0 ? errors.join(', ') : undefined;
};

const validationSchema = Yup.object({
    name: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .test('custom-password-validation', '', function (value) {
            const error = passwordValidator(value);
            return error ? this.createError({ message: error }) : true;
        }),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm your password'),
});

const Register = () => {
    const navigate = useNavigate();

    const handleSubmit = async (values, actions) => {
        try {
            console.log(values);
            actions.setSubmitting(false);
        } catch (error) {
            console.error(error);
            actions.setSubmitting(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-white p-10 rounded-2xl shadow-md w-full max-w-xl">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Register</h1>

                <Formik
                    initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block mb-1 text-sm font-medium text-[#000]">Full Name</label>
                            <Field
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-[#000]"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                            <Field
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-[#000]"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div>
                            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                            <Field
                                id="password"
                                name="password"
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-[#000]"
                            />
                            <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium text-gray-700">Confirm Password</label>
                            <Field
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-[#000]"
                            />
                            <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Register
                        </button>
                    </Form>
                </Formik>

                <p className="text-sm text-center mt-6 text-gray-600">
                    Already have an account?{' '}
                    <span
                        onClick={() => navigate('/login')}
                        className="text-blue-600 hover:underline cursor-pointer"
                    >
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
}
export default Register