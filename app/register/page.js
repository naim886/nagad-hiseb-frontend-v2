"use client"
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="auth-wrapper">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="auth-card">
                            <div className='auth-card-header'>
                                <div className="d-flex align-items-center justify-content-center">
                                    <Image src="/assets/nagad-hishab-logo.png" alt="Nagad Hiseb" width={300} height={80} priority/>
                                    <h4 className="auth-card-title">Create an account</h4>
                                </div>
                            </div>
                            <div className="auth-card-body mt-4">
                                <form>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="name" placeholder="Md. Naimul Hasan" />
                                                <label htmlFor="name">Full Name</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="phone" placeholder="01719123886" />
                                                <label htmlFor="phone">Phone Number</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-floating mb-3">
                                                <input type="email" className="form-control" id="email" placeholder="naim886@gmail.com" />
                                                <label htmlFor="email">Valid Email Address</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="company_name" placeholder="Nagad Hishab" />
                                                <label htmlFor="company_name">Company/Business Name</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="company_slug" placeholder="nagad-hishab" />
                                                <label htmlFor="company_name">Company Unique Name</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-floating mb-3 position-relative">
                                                <input type={showPassword ? 'text' : 'password'} className="form-control" id="password" placeholder="Password" />
                                                <label htmlFor="company_name">Password</label>
                                                <button className="theme-button password-eye-button" type="button" onClick={togglePasswordVisibility}>
                                                    <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                                                </button>
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