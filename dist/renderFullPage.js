"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {RouterContext} from 'koa-router';
// import * as ReactDOMServer from 'react-dom/server';
const fs = require("fs");
// import { StaticRouter } from "react-router";
// import ssr from './ssr'
const renderFullPage = (ctx, newState) => {
    // const context= {}
    const html = fs.readFileSync('build/index.html', 'utf-8');
    // const ReactDOMServerHtml = ReactDOMServer.renderToString(ssr(ctx.req.url,context,newState));
    ctx.type = 'html';
    ctx.body = html;
};
exports.default = renderFullPage;
//# sourceMappingURL=renderFullPage.js.map