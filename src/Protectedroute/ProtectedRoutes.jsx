import { useContext } from "react"
import { AppContext } from "../../Context"
import { Navigate } from "react-router-dom"

const ProtectedRoutes = ({children}) => {
   const {isAuthentication} = useContext(AppContext)
   if(!isAuthentication){
    return <Navigate to={'/signin'} />
   }
   
   console.log(isAuthentication)
  return (
    <div>
    {children}
    </div>
  )
}

export default ProtectedRoutes
