"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// import { StaticRouter } from 'react-router';
// import Routes from './routes';
// import { Provider } from 'react-redux';
// 创建新的 Redux store 实例
// 通过服务端注入的全局变量得到初始 state
const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
if (typeof window === 'undefined') {
    global.window = dom.window;
    global.document = dom.window.document;
    global.navigator = dom.window.navigator;
    global.localStorage = {};
    global.Element = dom.window.Element;
}
exports.default = (url, context, store) => {
    return React.createElement("div", null, "1");
};
//# sourceMappingURL=ssr.js.map