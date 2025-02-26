import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './Store/Store.js'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Home from './components/Pages/Home.jsx'
import AuthLayout from './components/AuthLayout.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/Signup.jsx'
import { Post, Signup } from './components/index.js'
import AllPosts from './components/Pages/AllPosts.jsx'
import EditPost from './components/Pages/EditPost.jsx'
import { RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:(
          <AuthLayout authentication={false}>
            <Login/>
          </AuthLayout>
        )
      },
      {
        path:'/signup',
        element:(
          <AuthLayout authentication={false}>
            <Signup/>
          </AuthLayout>
        )
      },
      {
        path:'/allposts',
        element:(
          <AuthLayout authentication>
            {""}
            <AllPosts/>
          </AuthLayout>
        )
      },
      {
        path:'/edit-post/:slug',
        element:(
          <AuthLayout authentication>
            {""}
            <EditPost/>
          </AuthLayout>
        )
      },
      {
        path:'/post/:slug',
        element:(
          <AuthLayout authentication>
            <Post/>
          </AuthLayout>
        )
      },
      ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
