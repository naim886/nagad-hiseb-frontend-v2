"use client"
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import { FaBriefcase, FaEnvelope, FaFingerprint, FaGlobeAfrica, FaPhoneVolume, FaUsers } from 'react-icons/fa';
import { useForm } from "react-hook-form";

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="auth-wrapper">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="auth-card">
                            <div className='auth-card-header'>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-lg-6">
                                        <Image src="/assets/nagad-hishab-logo.png" alt="Nagad Hiseb" width={300} height={80} priority />
                                    </div>
                                    <div className="col-lg-6 text-center text-lg-end">
                                        <h4 className="auth-card-title">Create an account</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="auth-card-body mt-4">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="custom-input">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="text"
                                                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                                        id="name"
                                                        placeholder="Md. Naimul Hasan"
                                                        {...register("name", { required: "Name is required" })}
                                                    />
                                                    <label htmlFor="name">Full Name<sup>*</sup></label>
                                                </div>
                                                <FaUsers className="custom-input-icon" />
                                                {errors.name && <p className='error-message'>{errors.name.message}</p>}
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="custom-input">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="text"
                                                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                                        id="phone"
                                                        placeholder="01719123886"
                                                        {...register("phone", { required: "Phone is required" })}
                                                    />
                                                    <label htmlFor="phone">Phone Number<sup>*</sup></label>
                                                </div>
                                                <FaPhoneVolume className="custom-input-icon" />
                                                {errors.phone && <p className='error-message'>{errors.phone.message}</p>}
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="custom-input">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="email"
                                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                        id="email"
                                                        placeholder="naim886@gmail.com"
                                                        {...register("email", { required: "Email is required" })}
                                                    />
                                                    <label htmlFor="email">Valid Email Address<sup>*</sup></label>
                                                </div>
                                                <FaEnvelope className="custom-input-icon" />
                                                {errors.email && <p className='error-message'>{errors.email.message}</p>}
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="custom-input">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="text"
                                                        className={`form-control ${errors.company_name ? 'is-invalid' : ''}`}
                                                        id="company_name"
                                                        placeholder="Nagad Hishab"
                                                        {...register("company_name", { required: "Company name is required" })}
                                                    />
                                                    <label htmlFor="company_name">Company/Business Name<sup>*</sup></label>
                                                </div>
                                                <FaBriefcase className="custom-input-icon" />
                                                {errors.company_name && <p className='error-message'>{errors.company_name.message}</p>}
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="custom-input">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="text"
                                                        className={`form-control ${errors.company_slug ? 'is-invalid' : ''}`}
                                                        id="company_slug"
                                                        placeholder="nagad-hishab"
                                                        {...register("company_slug", { required: "Company slug is required" })}
                                                    />
                                                    <label htmlFor="company_name">Company Unique Name<sup>*</sup></label>
                                                </div>
                                                <FaGlobeAfrica className="custom-input-icon" />
                                                {errors.company_slug && <p className='error-message'>{errors.company_slug.message}</p>}
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="custom-input">
                                                <div className="form-floating mb-3 position-relative">
                                                    <input
                                                        type={showPassword ? 'text' : 'password'}
                                                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                                        id="password"
                                                        placeholder="Password"
                                                        {...register("password", { required: "Password is required" })}
                                                    />
                                                    <label htmlFor="company_name">Password<sup>*</sup></label>
                                                    <button className="theme-button password-eye-button" type="button" onClick={togglePasswordVisibility}>
                                                        <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                                                    </button>
                                                </div>
                                                <FaFingerprint className="custom-input-icon" />
                                                {errors.password && <p className='error-message'>{errors.password.message}</p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <button type="submit" className="theme-button theme-button-lg w-100">Register</button>
                                    </div>
                                </form>
                                <div className="text-center">
                                    <a href="/login">Already have an account? Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;