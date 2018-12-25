import * as Koa from "koa";

import * as hook from 'css-modules-require-hook';

import * as morgan from 'koa-morgan';

import * as path from 'path';

import * as bodyparser from 'koa-bodyparser';

hook({
    extensions: ['.css', '.less', '.scss'],
    generateScopedName: '[name]__[local]',
    // processorOpts: {parser: lessParser.parse},
})


const app = new Koa()

app.use(morgan('dev'))

app.use(bodyparser())

app.use(require('./router').default.routes());

app.use(require('koa-static')(path.join(__dirname, '../build'),{
    maxage: 365 * 60 * 60 * 24,
}));

app.listen(3333)

console.log(33)