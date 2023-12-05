import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Hero from './components/herosection/Hero.jsx'
// import Services from './components/services/Services.jsx'
// import Portfolio from './components/portfolio/Portfolio.jsx'
// import Contact from './components/contact/Contact.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '/homepage',
//         element: <Hero />
//       },
//       {
//         path: '/services',
//         element: <Services />
//       },
//       {
//         path: "/portfolio",
//         element: <Portfolio />
//       },
//       {
//         path: "/contact",
//         element: <Contact />
//       },
//       {
//         path:"/about",
//         element:<Contact/>
//       }

//     ]
//   }


// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
)
