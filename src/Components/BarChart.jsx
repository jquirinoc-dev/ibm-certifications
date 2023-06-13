import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Bar } from "react-chartjs-2"
import { useState, useEffect } from "react"
import axios from 'axios';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);
    
const options = {
    plugins: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                barPercentage: 0.3
            }]
        }
    }
}

export const BarChart = () => {

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
                let locationCount = 0;

                for (let i = 0; i < responseData.length; i++) {
                    if (responseData[i].work_location === 'Guadalajara, JAL, Mexico') {
                        locationCount++;
                    }
                }

                setChartData({
                    labels: ['Guadalajara, Jal'],
                    datasets:[{
                        data: [locationCount],
                        backgroundColor: ['#3290ED'],
                        barPercentage: 0.2,
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
                <Bar
                data = {chartData}
                options = {options}
                />
            ):(
                <div style={{color:'white'}}>Loading...</div>
            )}
        </div>
    );
}

export default BarChart;