import { lazy } from 'react'
const  Home  = lazy(() => import ('../pages/Home/index'))
const SignPage = lazy(() => import ('../pages/Sign/index'))
const Admin = lazy(() => import ('../pages/Admin/index'))

export const DataRouter = [
    {
        id : 1,
        path : '/',
        Element : <Home/>
    },
    {
        id : 2,
        path : '/admin',
        Element : <Admin/>
    },
    {
        id : 3,
        path : '/sign',
        Element : <SignPage/>
    }
]