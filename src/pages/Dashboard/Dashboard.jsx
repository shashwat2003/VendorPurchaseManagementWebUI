import React, { useEffect } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Report from '../Reports';
import Vendors from '../Vendors';
import { HomeSimple, Reports, Shop } from 'iconoir-react';

const Home = () => {
  return <>Hi</>;
};

const Dashboard = () => {
  return (
    <div className="flex h-full bg-gray-100">
      <div className="w-1/5 h-full flex flex-col border-r-gray-500/20 border-r-2">
        <div className="h-1/4 flex flex-col justify-center items-center p-4 text-center bg-blue-500/10 border-b-gray-500/20 border-b-2">
          <img src={logo} alt="" className="w-20" />
          <p className="text-lg mt-2 font-semibold text-gray-700">
            Vendor Purchase Management
          </p>
        </div>
        <div className="flex flex-col justify-center my-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              (isActive ? 'text-blue-600 ' : 'text-gray-500 ') +
              'font-semibold text-sm py-2 flex items-center'
            }
          >
            <HomeSimple className="mx-3" height={18} />
            Home
          </NavLink>
          <NavLink
            to="reports"
            className={({ isActive }) =>
              (isActive ? 'text-blue-600 ' : 'text-gray-500 ') +
              'font-semibold text-sm py-2 flex items-center'
            }
          >
            <Reports className="mx-3" height={18} />
            Reports
          </NavLink>
          <NavLink
            to="vendors"
            className={({ isActive }) =>
              (isActive ? 'text-blue-600 ' : 'text-gray-500 ') +
              'font-semibold text-sm py-2 flex items-center'
            }
          >
            <Shop className="mx-3" height={18} />
            Vendors
          </NavLink>
        </div>
      </div>
      <div className="w-4/5 h-full flex flex-col">
        <Routes>
          <Route index element={<Home />} />
          <Route path="reports" element={<Report />} />
          <Route path="vendors" element={<Vendors />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
