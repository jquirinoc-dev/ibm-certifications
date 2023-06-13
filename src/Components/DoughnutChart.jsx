import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useState, useEffect } from "react"
import axios from 'axios';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const options = {
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                usePointStyle: true,
                pointStyle: 'circle'
            }
        }
    }
}

export const DoughnutChart = () => {

    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const axiosConfig = {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            };
            axios.get('http://206.81.29.146:8000/app/certificaciones', axiosConfig).then((res) => {
                const responseData = res.data.results;
                let badgeCount = 0;
                let externalCount = 0;

                for (let i = 0; i < responseData.length; i++) {
                    if (responseData[i].type === 'badge') {
                        badgeCount++;
                    }
                }
                
                for (let i = 0; i < responseData.length; i++) {
                    if (responseData[i].type === 'external certification') {
                        externalCount++;
                    }
                }

                setChartData({
                    labels: ['Badge', 'External Certification'],
                    datasets:[{
                        label: 'Amount',
                        data: [badgeCount, externalCount],
                        backgroundColor: ['#9D53F2', '#3290ED'],
                    }]
                })
            })
            .catch((err) => {
                console.log(err.message);
            })
        }
    },[])

    return(
        <div className='chart-style'>
            {chartData!==null?(
                <Doughnut
                data = {chartData}
                options = {options}
                />
            ):(
                <div style={{color:'white'}}>Loading...</div>
            )}
        </div>
    );
}

export default DoughnutChart;