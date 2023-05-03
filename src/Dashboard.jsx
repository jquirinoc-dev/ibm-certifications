import React, { useEffect } from 'react'

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
    <div style={{ color: 'white', padding: 20 }}>Dashboard</div>
  )
}
