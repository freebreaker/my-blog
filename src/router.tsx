import * as React from 'react';
import * as router from 'react-router-dom'
import RouterAuth from './RouterAuth';
import { routerConfig } from './routerConfig';

const {BrowserRouter,Switch} = router

class RouterContainer extends React.Component{
    public render(){
        return (
            <BrowserRouter basename="/">
                <Switch>
                    <RouterAuth config={routerConfig}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default RouterContainer