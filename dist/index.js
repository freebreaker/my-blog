"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const hook = require("css-modules-require-hook");
const morgan = require("koa-morgan");
const path = require("path");
const bodyparser = require("koa-bodyparser");
console.log(2);
hook({
    extensions: ['.css', '.less', '.scss'],
    generateScopedName: '[name]__[local]',
});
const app = new Koa();
app.use(morgan('dev'));
app.use(bodyparser());
app.use(require('./router').default.routes());
app.use(require('koa-static')(path.join(__dirname, '../build'), {
    maxage: 365 * 60 * 60 * 24,
}));
app.listen(8080);
console.log(8080);
//# sourceMappingURL=index.js.map