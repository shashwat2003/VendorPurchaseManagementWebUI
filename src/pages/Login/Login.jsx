import React, { useState } from 'react';
import loginBg from '../../assets/login_bg.svg';
import logo from '../../assets/logo.png';
import { postRequest } from '../../network/requests';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const handleInput = (e) => {
    e.target.classList.remove('border-pink-500', 'text-pink-600');
  };
  const login = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = new FormData(e.target);
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.get('username'))) {
      form.append('email', form.get('username'));
      form.delete('username');
    }
    let valid = true;
    form.forEach((value, key) => {
      if (value == '') {
        valid = false;
        document
          .getElementById(key)
          .classList.add('border-pink-500', 'text-pink-600');
      }
    });
    valid ? postRequest('/user/', form, setLoading) : setLoading(false);
  };
  return (
    <div
      className="h-full flex justify-center items-center bg-gray-100"
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute top-0 left-0 w-full p-2 flex items-center text-gray-700 font-semibold text-2xl bg-gray-500/10 rounded-b-3xl">
        <img src={logo} alt="LOGO" className="h-12 mr-2" />/ Vendor Purchase
        Management
      </div>

      <form
        className=" p-10 bg-white shadow-2xl rounded-3xl w-1/4 h-3/4 flex items-center justify-center flex-col overflow-scroll"
        onSubmit={login}
      >
        <h1 className="font-medium text-3xl p-1 text-center">Login</h1>
        <input
          type="text"
          name="username"
          disabled={loading}
          id="username"
          placeholder="Enter Username / Email"
          onInput={handleInput}
          className="border rounded-md text-sm outline-none p-3  w-full mt-4 mb-2 text-gray-700 font-medium disabled:bg-gray-200 "
        />
        <input
          type="password"
          name="password"
          id="password"
          disabled={loading}
          placeholder="Enter Password"
          onInput={handleInput}
          className="border rounded-md text-sm outline-none p-3 w-full mb-2 text-gray-700 font-medium disabled:bg-gray-200"
        />
        <div className="w-full flex items-center justify-end">
          <input
            type="checkbox"
            name="remember"
            value="true"
            disabled={loading}
            className="m-1 accent-blue-600"
          />
          <p className="text-sm ml-0.2 font-semibold text-gray-600">
            Save Account
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 p-3 rounded-md text-white font-semibold text-sm mt-4 disabled:bg-slate-500"
        >
          Sign in
        </button>
        <p className="text-sm text-gray-600 mt-10">-Or Use Saved Account(s)-</p>
      </form>
    </div>
  );
};

export default Login;
