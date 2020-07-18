import React from 'react';
import './style.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Reset = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div className="auth">
            <div className="flex-center flex-column">
                <div className="card shadow border-0">
                    <div className="card-header text-center bg-white">
                        <h4 className="mb-0">Reset Password</h4>
                    </div>
                    <div className="card-body">
                        <p className="text-center">Just enter e-mail, we will send a new password in your e-mail.</p>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group mb-4">
                                {errors.email && errors.email.message ? (
                                    <small className="text-danger">{errors.email && errors.email.message}</small>
                                ) : <small>E-mail</small>
                                }
                                <input
                                    type="text"
                                    name="email"
                                    className="form-control rounded-0 shadow-none"
                                    ref={register({
                                        required: "E-mail is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                />
                            </div>

                            <div className="text-right">
                                <Link to="/">Go to login</Link>
                            </div>

                            <button type="submit"
                                className="btn btn-primary float-right shadow-none text-white px-4 mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reset;