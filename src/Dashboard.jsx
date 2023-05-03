import './styles/Dashboard.css'
import { useEffect } from 'react'
import { EmployeesList } from './Components/EmployeesList'

export const Dashboard = () => {

    // Check for local storage token in render
    // If token is not present, redirect to login page
    // If token is present, render dashboard
    // If token is present, but expired, redirect to login page

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = '/login';
        }
    }, [])

  return (
    <div className='dashboard-wrapper'>
      Dashboard
      <EmployeesList />
    </div>
  )
}
