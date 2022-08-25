import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import UserLoginScreen from '../pages/user-login-screen'
import React, { ReactNode, useContext } from 'react'
import { AuthContext } from '../contexts/auth'
import Home from '../pages/Home'
import UserRegister from '../pages/user-register'
import EditUser from '../pages/EditUser'

// import NavBar from '../components/NavBar'

type AuthRouteProps = {
  children: ReactNode
}

export const SignRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={UserLoginScreen} />
        <Route
          path="/"
          element={
            <AuthRoutes>
              <Home />
            </AuthRoutes>
          }
        />
        <Route
          path="/user-register"
          element={
            <AuthRoutes>
              <UserRegister />
            </AuthRoutes>
          }
        />
        <Route
          path="/edit-user"
          element={
            <AuthRoutes>
              <EditUser />
            </AuthRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

function AuthRoutes({ children }: AuthRouteProps): any {
  const { isAuthenticated } = useContext(AuthContext)

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />
  }
  return children
}

// function AuthRoutes({ children }: AuthRouteProps): any {
//   const { isAuthenticated } = useContext(AuthContext)
//   if (!isAuthenticated) {
//     return <Navigate to="/login" state={{ from: location }} />
//   }
//   return <Navigate to="/" state={{ from: location }} />
// }
