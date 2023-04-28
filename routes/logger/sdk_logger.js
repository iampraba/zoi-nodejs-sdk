/**
 * The class to initialize the SDK logger.
 */
class SDKLogger {

    constructor(loggerInstance) {
        var winston = require('winston');

        if(typeof variable === 'undefined' || loggerInstance === null || loggerInstance == null) {
            winston.configure({
                level: 'info', // No I18N
    
                format: winston.format.combine(
                    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // No I18N
                    winston.format.prettyPrint()
                ),
    
                transports: [
                    new winston.transports.Console()
                ]
            });
            return;
        }

        winston.configure({
            level: loggerInstance.level,

            format: winston.format.combine(
                winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                winston.format.prettyPrint()
            ),

            transports: [
                new winston.transports.File({
                    filename: loggerInstance.getFilePath()
                })
            ]
        });
    }
    /**
     * The method to initialize SDKLogger
     * @param {Logger} logInstance A Logger class instance
     */
    static initialize(loggerInstance) {
        return new SDKLogger(loggerInstance);
    }
}

module.exports = {
    MasterModel: SDKLogger,
    SDKLogger: SDKLogger
};