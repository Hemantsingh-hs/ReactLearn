import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createRoutesFromChildren, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import User from './components/User/User.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Layout from './Layout.jsx'
// import Github  from './components/Github/Github.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/Contact/ContactUs.jsx'
import Github,{ githubInfoLoader } from './components/Github/Github.jsx'
// const  router=createBrowserRouter([
//   {
//   path:'/',
//   element:<Layout/>,
//   children:[{path:"",element:<Home/>},{path:"about",element:<About/>},{path:"contact",element:<ContactUs/>}]

//   }
  
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="user/:id" element={<User />} />
      {/* <Route path="github" element={<Github />} /> */}

      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>)
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
