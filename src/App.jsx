import { TopNavBar } from './Components/TopNavBar'
import { EmployeesList } from './Components/EmployeesList'
import { Login } from './Login'
import { Signup } from './Signup'

function App() {

  return (
    <div className="App">
      {/* <Login /> */}
      <TopNavBar />
      <EmployeesList />
      {/* <Signup /> */}
    </div>
  )
}

export default App
