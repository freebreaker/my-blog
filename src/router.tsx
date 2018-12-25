import * as React from 'react';
import * as router from 'react-router-dom'
import Allpages from './components/Allpages';

const {BrowserRouter,Switch,Route} = router

class RouterContainer extends React.Component{
    public render(){
        return (
            <BrowserRouter basename="/">
                <Switch>
                    <Route path='/' component={Allpages}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default RouterContainer