import React from 'react';
import loginBg from '../../assets/login_bg.svg';

const Login = () => {
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
      <form
        className=" p-10 bg-white shadow-xl rounded-3xl w-1/4 h-3/4 flex items-center justify-center flex-col overflow-scroll"
        onSubmit={(e) => {
          e.preventDefault();
          const form = new FormData(e.target);
          form.forEach((value, key) => {
            console.log(value, key);
          });
        }}
      >
        <h1 className="font-medium text-3xl p-1">Login</h1>
        <input
          type="text"
          name="username"
          placeholder="Enter Username / Email"
          className="border rounded-md text-sm outline-none p-3  w-full mt-4 mb-2 text-gray-700 font-medium"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="border rounded-md text-sm outline-none p-3 w-full mb-2 text-gray-700 font-medium"
        />
        <div className="w-full flex items-center justify-end">
          <input
            type="checkbox"
            name="remember"
            value="true"
            className="m-1 accent-blue-600"
          />
          <p className="text-sm ml-0.2 font-semibold text-gray-600">
            Save Account
          </p>
        </div>

        <button className="w-full bg-blue-600 p-3 rounded-md text-white font-semibold text-sm mt-4">
          Sign in
        </button>
        <p className="text-sm text-gray-600 mt-10">-Or Use Saved Account(s)-</p>
      </form>
    </div>
  );
};

export default Login;
