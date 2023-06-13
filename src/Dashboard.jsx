import './styles/Dashboard.css'
import { useEffect } from 'react'
import { EmployeesList } from './Components/EmployeesList'
import BarChart from "./Components/BarChart";
import DoughnutChart from "./Components/DoughnutChart";


export const Dashboard = () => {

  return (
    <div className='dashboard-wrapper'>
      <div className='chart-wrapper'>
        <div className='chart-title'>Top Certifications</div>
        <div className='chart-title'>Type of Certifications</div>
        <BarChart/>
        <DoughnutChart/>
      </div>
      <div className='table-style'>
        <EmployeesList/>
      </div>
    </div>
  )
}