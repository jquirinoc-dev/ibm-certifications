import '../styles/Dashboard.css'
import DataTable from "react-data-table-component"
import { createTheme } from 'react-data-table-component';
import { useState, useEffect } from "react"
import axios from 'axios';

createTheme('dark', {
  action: {
    button: 'rgba(0,0,0,.54)',
  },
}, 'dark');

const customStyles = {
  table: {
		style: {
      color:'#FFFFFF',
			backgroundColor: '#262626'
		},
	},
  header: {
		style: {
			fontSize: '19px',
			color: '#FFFFFF',
			backgroundColor: '#262626',
			minHeight: '56px',
			paddingLeft: '16px',
			paddingRight: '8px'
		},
	},
  headRow: {
    style: {
      color:'#FFFFFF',
      backgroundColor: '#393939'
    },
  },
  rows: {
    style: {
      color: "STRIPEDCOLOR",
      backgroundColor: "STRIPEDCOLOR",
      '&:not(:last-of-type)': {
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
        borderBottomColor: '#393939'
      },
    },
    stripedStyle: {
      color: "NORMALCOLOR",
      backgroundColor: "NORMALCOLOR"
    }
  },
  pagination: {
    style: {
      color: '#FFFFFF',
      fontSize: '13px',
      minHeight: '56px',
      backgroundColor: '#262626',
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
      borderTopColor: '#393939'
    },
  }
}

export const EmployeesList = () => {

  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(false)

  const columns = [
    {
    name: "UID",
    selector: (row) => row.uid,
    },
    {
    name: "Department",
    selector: (row) => row.org,
    },
    {
    name: "Location",
    selector: (row) => row.work_location,
    },
    {
    name: "Certification",
    selector: (row) => row.certifications,
    },
    {
    name: "Date",
    selector: (row) => row.issue_date,
    },
    {
    name: "Type",
    selector: (row) => row.type,
    },
  ]

  useEffect(() => {
    setLoading(true)
    const token = localStorage.getItem("token");
    if (token) {
      const axiosConfig = {
        headers:{
          Authorization: `Bearer ${token}`
        }
      };
      axios.get('http://137.184.85.31:8000/app/certificaciones', axiosConfig).then((res) => {
        
        const responseData = res.data.results;
        setListData(responseData)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err.message);
      })
    }
  },[])
  
  return (
    <div className='table-style'>
      <DataTable
        title="Certifications"
        columns={columns}
        data={listData}
        theme='dark'
        customStyles={customStyles}
        progressPending={loading}
        pagination
        paginationRowsPerPageOptions={[10, 25, 50, 100]}
        highlightOnHover
      />
    </div>
  )
}