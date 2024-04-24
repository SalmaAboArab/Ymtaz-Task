import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import './App.css'
import MasterLayout from './SharedModule/Components/MasterLayout/MasterLayout'
import Categories from './Categories/Categories'
import Lawyers from './Lawyers/Lawyers'
import NotFound from './SharedModule/Components/NotFound/NotFound'
import LawyerDetails from './LawyerDetails/LawyerDetails'


function App() {
  const routers = createHashRouter([
    {
      path:"/",element:
      <MasterLayout/>,
      errorElement:<NotFound/>,
      children:
      [
        {index:true,element:<Categories/>},
        {path:"lawyers/:id",element:<Lawyers/>},       
        {path:"lawyer-details/:index/:id",element:<LawyerDetails/>},       
      ]
    }
  ])

  return (
    <>
    <RouterProvider router={routers} />
    </>
  )
}

export default App
