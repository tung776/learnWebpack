switch(process.env.APP_ENV){
    case 'production':
    module.exports = require('./webpack/webpack.production');
    break;
    default:
    module.exports = require('./webpack/webpack.development');
    break;
}