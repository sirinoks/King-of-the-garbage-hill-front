"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import path from 'path'
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const applicationId = process.env.APPLICATION_ID;
const clientSecret = process.env.CLIENT_SECRET;
const publicKey = process.env.PUBLIC_KEY;
const identifyURL = process.env.IDENTIFY_URL;
const port = '53134';
const server = (0, express_1.default)();
server.get('/', (request, response) => {
    return response.sendFile('index.html', { root: '.' });
});
//secure http header
server.use(helmet_1.default.contentSecurityPolicy({
    directives: Object.assign({}, helmet_1.default.contentSecurityPolicy.getDefaultDirectives()),
}));
//end secure http header
// app.use('', express.static(path.join(__dirname, 'public')))
// app.get('/', (request, response)=>{
//     return response.sendFile('index.html', {root: '.'})
// })
// app.get('/auth/discord', (request, response)=>{
//     return response.sendFile('dashboard.html', {root: '.'})
// })
server.listen(port, () => console.log(`App listening at http://localhost:${port}`));
