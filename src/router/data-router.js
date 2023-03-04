import Admin from "../pages/Admin";
import { Home } from "../pages/Home";


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
    }
]