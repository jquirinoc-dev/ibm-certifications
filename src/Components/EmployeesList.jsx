import '../styles/Employees.css'
import DataTable from "react-data-table-component"
import { createTheme } from 'react-data-table-component';
import { Alignment } from 'react-data-table-component';
import { useState, useEffect } from "react"

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
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [perPage, setPerPage] = useState(10)

  const columns = [
      {
      name: "Header",
      selector: (row) => row.title,
      },
      {
      name: "Header",
      selector: (row) => row.content,
      },
      {
      name: "Header",
      selector: (row) => row.content,
      },
      {
      name: "Header",
      selector: (row) => row.content,
      },
      {
      name: "Header",
      selector: (row) => row.content,
      },
      {
      name: "Header",
      selector: (row) => row.content,
      },
      {
      name: "Header",
      selector: (row) => row.content,
      },
      {
      name: "Header",
      selector: (row) => row.content,
      },
  ]

  useEffect(() => {
    fetchTableData()
  }, [])

  async function fetchTableData() {
    setLoading(true)
    const URL = "https://jsonplaceholder.typicode.com/todos"
    const response = await fetch(URL)

    const users = await response.json()
    setData(users)
    setLoading(false)
  }

  return (
    <div class='table-style'>
      <DataTable
          title="Employees"
          columns={columns}
          data={data}
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