import * as React from 'react';
import * as router from 'react-router-dom'
import Allpages from './components/Allpages';
import Editor from './components/Editor/Editor';

const {BrowserRouter,Switch,Route} = router

class RouterContainer extends React.Component{
    public render(){
        return (
            <BrowserRouter basename="/">
                <Switch>
                    <Route path='/' exact={true} component={Allpages}/>
                    <Route path='/editor' component={Editor}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default RouterContainer