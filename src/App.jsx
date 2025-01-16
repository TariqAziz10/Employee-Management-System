import React, { useContext, useState, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'


const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(() => {
    
      const loggedInUser = localStorage.getItem('loggedInUser')
      
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
        //console.log(userData);
      }
      
  }, [])

  const handleLogin = (email, password) => {
    if(email == 'admin@me.com' && password == '123') {
      setUser({role: 'admin'})
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
    }
    else if(userData) {
      const employee = userData.find((e) => email == e.email && password == e.password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'employees', data:employee}))
      } 
 
    } else {
      alert("Invalid Credentials")
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null )}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
      
    </>
  )
}

export default App
