import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const PrivateRoute = ({ children: any }) => {
  const { user } = useSelector((state) => state.auth)

  if (user) return children

  return <Navigate to='/login' />
}

export default PrivateRoute
