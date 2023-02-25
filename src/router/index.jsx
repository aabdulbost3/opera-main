import { Routes , Route } from "react-router-dom"
import {DataRouter} from './data-router'

function RoutesComponent() {
    return(
        <>
            <Routes>
                {DataRouter.map(elem => 
                    <Route key={elem.id} path={elem.path}  element={elem.Element}/>
                )}
            </Routes>
        </>
    )
}

export default RoutesComponent