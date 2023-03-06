import { Routes , Route } from "react-router-dom"
import {DataRouter} from './data-router'
import { Suspense } from "react";
import Loading from "../components/Loading/Loading";
function RoutesComponent() {
    return(
        <>
        
            <Routes>
                {DataRouter.map(elem => 
                    <Route key={elem.id} 
                    path={elem.path}
                    element={<Suspense fallback={<Loading />}>{elem.Element}</Suspense>}/>
                )}
            </Routes>
        </>
    )
}

export default RoutesComponent