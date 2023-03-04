import Admin from "../pages/Admin";
import { Home } from "../pages/Home";
import SignPage from "../pages/Sign";


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