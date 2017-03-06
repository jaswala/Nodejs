var configValues = require('./config');

module.exports = {

    getDbConnectionString: function(){
    
        return 'mongodb://test:test@ds025583.mlab.com:25583/nodetodosample-aj';
    }
}