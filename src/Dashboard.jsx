import './styles/Dashboard.css'
import { useEffect } from 'react'
import { EmployeesList } from './Components/EmployeesList'

export const Dashboard = () => {

  return (
    <div className='dashboard-wrapper'>
      Dashboard
      <EmployeesList />
    </div>
  )
}
