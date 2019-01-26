// import {RouterContext} from 'koa-router';
// import * as ReactDOMServer from 'react-dom/server';
import * as fs from 'fs';
// import { StaticRouter } from "react-router";
// import ssr from './ssr'


const renderFullPage=(ctx:any,newState:object)=>{

    // const context= {}

    const html = fs.readFileSync('../build/index.html','utf-8');

    // const ReactDOMServerHtml = ReactDOMServer.renderToString(ssr(ctx.req.url,context,newState));

    ctx.type = 'html'

    ctx.body = html;

}

export default renderFullPage;