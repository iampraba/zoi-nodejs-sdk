const Token = require("./token").Token;
const Constants = require("../../utils/util/constants").Constants;
/**
 * This class gets the apikey and add it to request made using this sdk.
 */
 class APIKey extends Token {

    _apikey;

    _authorize_type;

    constructor(apikey, authorize_type) {
        super();
        this._apikey = apikey;
        this._authorize_type = authorize_type;
    }

    /**
     * This is a setter method to set apikey.
     * @param {string} clientID - A String containing the apikey.
     */
    setApikey(apikey) {
        this._apikey = apikey;
        return this;
    }

    /**
     * This is a setter method to set authorize type.
     * @param {string} clientID - Constants.HEADERS | Constants.PARAMS.
     */
    setAuthorizeType(authorize_type) {
        if ( authorize_type === Constants.PARAMS || authorize_type === Constants.HEADERS ) {
            this._authorize_type = authorize_type;
        } else {
            throw new SDKException(Constants.TOKEN_ERROR, "Invalid authorise type used. Add either Constants.HEADERS | Constants.PARAMS", null, null);
        }
        return this;
    }

    async authenticate(urlConnection) {
        try {
            if ( this._authorize_type == Constants.PARAMS ) {
                urlConnection.addParam("apikey", this._apikey);
            } else if ( this._authorize_type == Constants.HEADERS ) {
                urlConnection.addHeader("X-API-Key", this._apikey);
            } else {
                throw new SDKException(Constants.TOKEN_ERROR, "Set authorise type to add apikey in parameter or header.", null, null);
            }
        }
        catch (err) {
            throw new SDKException(Constants.TOKEN_ERROR, Constants.GET_TOKEN_ERROR, null, err);
        }
    }
}

module.exports = {
    APIKey: APIKey
}