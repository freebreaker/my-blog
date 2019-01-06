import * as React from 'react';
import * as router from 'react-router-dom'
import Allpages from './components/Allpages';
import Editor from './components/Editor/Editor';
import Article from './components/Article/Article';
import DraftList from './components/Draft/DraftList';
import DraftEditor from './components/Draft/DraftEditor';

const {BrowserRouter,Switch,Route} = router

class RouterContainer extends React.Component{
    public render(){
        return (
            <BrowserRouter basename="/">
                <Switch>
                    <Route path='/' exact={true} component={Allpages}/>
                    <Route path='/editor/new' component={Editor}/>
                    <Route path='/editor/:id' component={DraftEditor}/>
                    <Route path='/p/:id' component={Article}/>
                    <Route path='/draft' component={DraftList}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default RouterContainer