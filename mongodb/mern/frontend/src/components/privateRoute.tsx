import { Navigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


const PrivateRoute = ({ children }: { children: React.ReactElement }) => {
  const { user } = useSelector((state: any) => state.auth)
  const {} = useParams()

  if (user) return children

  return <Navigate to='/login' />
}

export default PrivateRoute
