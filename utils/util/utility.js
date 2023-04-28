const SDKException = require("../../routes/exception/sdk_exception").SDKException;

/**
 * This class handles module field details.
 */
class Utility {
    static apiTypeVsDataType = new Map();

    static apiTypeVsStructureName = new Map();

    static newFile = false;

    static getModifiedModules = false;

    static forceRefresh = false;

    static moduleAPIName;

    static apiSupportedModule = {};

    static async assertNotNull(value, errorCode, errorMessage) {
        if (value == null) {
            throw new SDKException(errorCode, errorMessage);
        }
    }

    static async getJSONObject(json, key) {
        let keyArray = Array.from(Object.keys(json));

        for (let keyInJSON of keyArray) {
            if (key.toLowerCase() == keyInJSON.toLowerCase()) {
                return json[keyInJSON];
            }
        }

        return null;
    }

    static checkInteger(value) {
        return (parseInt(value) === value) ? true : false;
    }
}

module.exports = {
    MasterModel: Utility,
    Utility: Utility
};