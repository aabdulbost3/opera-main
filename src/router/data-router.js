import { lazy } from 'react'
const  Home  = lazy(() => import ('../pages/Home/index'))
const  NotFoundPage  = lazy(() => import ('../pages/NotFoundPage/NotFoundPage'))
const SignPage = lazy(() => import ('../pages/Sign/index'))
const MorePage = lazy(() => import ('../pages/More/index'))
const Admin = lazy(() => import ('../pages/Admin/index'))
const Portfolio = lazy(() => import ('../pages/Portfolio/Portfolio'))

export const DataRouter = [
    {
        id : 1,
        path : '/',
        Element : <Home/>
    },
    {
        id : 2,
        path : '/Portfolio',
        Element : <Portfolio/>
    },
    {
        id : 3,
        path : '/admin',
        Element : <Admin/>
    },
    {
        id : 4,
        path : '/sign',
        Element : <SignPage/>
    },
    {
        id : 5,
        path : '/more',
        Element : <MorePage/>
    },
    {
        id : 5,
        path : '/*',
        Element : <NotFoundPage/>
    }
]