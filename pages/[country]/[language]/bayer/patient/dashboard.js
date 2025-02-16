import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Sidebar from '../../../../../components/common/sidebar'

const data = [
  { time: "10:00", bpm: 72 },
  { time: "10:10", bpm: 75 },
  { time: "10:20", bpm: 78 },
  { time: "10:30", bpm: 80 },
  { time: "10:40", bpm: 76 },
];

const Dashboard = () => {
  return (
    <>
    <div className="flex">
        <Sidebar />
        <div className="right-container">
        <h1>Welcome, User</h1>
        <h2>Health Metrics</h2>
        <div className="chartContainer">
            <h3>Heart Rate</h3>
            <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="bpm" stroke="#ff7300" strokeWidth={2} />
            </LineChart>
            </ResponsiveContainer>
            
        </div>
        <div className="chartContainer">
            <h4>Health Tip of the Day</h4>
            <p>Stay hydrated! Aim to drink</p>
        </div>

        </div>
    </div>
    </>
  );
};

export default Dashboard;
