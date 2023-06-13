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
            axios.get('http://137.184.85.31:8000/app/certificaciones', axiosConfig).then((res) => {
                
                var arrCertifications = [];
                var certificationsCountPairs = [];
                var sortCertifications = [];
                var topCertifications = [];

                for (let i = 0; i < res.data.results.length; i++) {
                    var certification = res.data.results[i].certifications;
                    arrCertifications[certification] = arrCertifications[certification] ? arrCertifications[certification] + 1 : 1
                }

                for (certification in arrCertifications) {
                    certificationsCountPairs.push({certification : certification,  count : arrCertifications[certification]});
                }

                sortCertifications = certificationsCountPairs.sort(function(a, b) {
                    return b.count - a.count;
                })

                topCertifications = sortCertifications.slice(0, 5);

                var labelsCertifications = topCertifications.map(function(item) {
                    return item.certification;
                });
                
                var counts = topCertifications.map(function(item) {
                    return item.count;
                });

                setChartData({
                    labels: labelsCertifications,
                    datasets:[{
                        data: counts,
                        backgroundColor: ['#3290ED'],
                        barPercentage: 0.5,
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
