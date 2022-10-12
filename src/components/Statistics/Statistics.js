import React from 'react';
import './Statistics.css';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip} from 'recharts';


const Statistics = () => {
    const datas = useLoaderData();
    return (
        <div className='chart-container'>
            <div className='line-chart'>
            <h2>Quiz Analytics</h2>
            <hr />
            <LineChart width={700} height={450} data={datas.data}>
                <Line type="monotone" dataKey='total'stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
        </div>
        </div>
    );
};

export default Statistics;