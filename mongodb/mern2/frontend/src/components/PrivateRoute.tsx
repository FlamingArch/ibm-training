import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const PrivateRoute = ({ children }:{children:React.ReactNode}) => { //
const { user } = useSelector((state:any) => state.auth) //useSelector is for to fetch the state from slice

if (user) return (<> {children} </>)

return (<> <Navigate to='/login' /> </>)
}

export default PrivateRoute