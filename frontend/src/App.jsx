import { useSelector } from 'react-redux'
import AllRoutes from './Components/AllRoutes.jsx'
 

function App() {
  const user = useSelector(state => state.user)
  return (
    <>
      <AllRoutes/>
    </>
  )
}

export default App
