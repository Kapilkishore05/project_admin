import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { BsBellFill, BsCart3, BsFillArchiveFill, BsFillPeopleFill } from "react-icons/bs";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LineChart, Line } from 'recharts';
import './App.css';
import CustomerPage from "./Customer/CustomerPage";

function Home() {
    // State variable to hold the total number of customers
    const [totalCustomers, setTotalCustomers] = useState(0);

    const data = [
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
    ];

    return (
        <main className="main-container">
            <div className="main-title">
                <h3>Dashboard</h3>
            </div>
            <div className="main-cards">
                <div className="card">
                    <div className="cards-inner">
                        <h3>Products</h3>
                        <BsFillArchiveFill className="card_icon" />
                    </div>
                    <h1>3</h1>
                </div>
                <div className="card">
                    <div className="cards-inner">
                        <h3>Customers</h3>
                        <BsFillPeopleFill className="card_icon" />
                    </div>
                    <h1>{totalCustomers}</h1> {/* Display total customers here */}
                </div>
                <div className="card">
                    <div className="cards-inner">
                        <h3>Total sold</h3>
                        <BsCart3 className="card_icon" />
                    </div>
                    <h1>12</h1>
                </div>
                <div className="card">
                    <div className="cards-inner">
                        <h3>Reports</h3>
                        <BsBellFill className="card_icon" />
                    </div>
                    <h1>1</h1>
                </div>
            </div>
            <div className="charts">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                        <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                    </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            {/* Pass setTotalCustomers as a prop to CustomerPage */}
            <CustomerPage setTotalCustomers={setTotalCustomers} />
        </main>
    );
}

export default Home;
