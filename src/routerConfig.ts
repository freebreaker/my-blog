import Allpages from './components/Allpages';
import Editor from './components/Editor/Editor';
import Article from './components/Article/Article';
import DraftList from './components/Draft/DraftList';
import DraftEditor from './components/Draft/DraftEditor';

interface RouterConfigModel {
    path:string,
    component?:any
    auth?:boolean
}

export const routerConfig:RouterConfigModel[] = [
    {
        path:'/',
        component:Allpages,       
    },    
    {
        path:'/editor/new',
        component:Editor,
        auth:true       
    },
    {
        path:'/editor/:id',
        component:DraftEditor,    
        auth:true   
    },
    {
        path:'/p/:id',
        component:Article,  
    },
    {
        path:'/draft',
        component:DraftList,  
    }
]