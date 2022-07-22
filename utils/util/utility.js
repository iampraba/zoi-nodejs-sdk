const path = require('path');
const Converter = require("./converter").Converter;
const Initializer = require("../../routes/initializer").Initializer;
const Constants = require("../util/constants").Constants;
const Logger = require("winston");
const fs = require('fs');
const SDKException = require('../../core/com/zoho/crm/api/exception/sdk_exception').SDKException;

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
    static async searchJSONDetails(key) {
        key = Constants.PACKAGE_NAMESPACE + "/record/" + key;

        var jsonDetails = Initializer.jsonDetails;

        for (let keyInJSON in jsonDetails) {

            if (keyInJSON.toLowerCase() == key.toLowerCase()) {
                let returnJSON = {};

                returnJSON[Constants.MODULEPACKAGENAME] = keyInJSON;

                returnJSON[Constants.MODULEDETAILS] = jsonDetails[keyInJSON];

                return returnJSON;
            }
        }

        return null;
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