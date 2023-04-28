const Constants = require("../../../../../utils/util/constants").MasterModel;
const SDKException = require("../../../../../routes/exception/sdk_exception").MasterModel;

class DocumentSessionDeleteSuccessResponse{

	sessionDeleted;
	keyModified = new Map();
	/**
	 * The method to get the sessionDeleted
	 * @returns {Boolean} A Boolean representing the sessionDeleted
	 */
	getSessionDeleted()	{
		return this.sessionDeleted;

	}

	/**
	 * The method to set the value to sessionDeleted
	 * @param {Boolean} sessionDeleted A Boolean representing the sessionDeleted
	 */
	setSessionDeleted(sessionDeleted)	{
		if((sessionDeleted != null) && (!(Object.prototype.toString.call(sessionDeleted) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sessionDeleted EXPECTED TYPE: Boolean", null, null);
		}
		this.sessionDeleted = sessionDeleted;
		this.keyModified.set("session_deleted", 1);

	}

	/**
	 * The method to check if the user has modified the given key
	 * @param {String} key A String representing the key
	 * @returns {number} A number representing the modification
	 */
	isKeyModified(key)	{
		if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
		}
		if(this.keyModified.has(key))	{
			return this.keyModified.get(key);
		}
		return null;

	}

	/**
	 * The method to mark the given key as modified
	 * @param {String} key A String representing the key
	 * @param {number} modification A number representing the modification
	 */
	setKeyModified(key, modification)	{
		if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
		}
		if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: number", null, null);
		}
		this.keyModified.set(key, modification);

	}

}
module.exports = {
	MasterModel : DocumentSessionDeleteSuccessResponse,
	DocumentSessionDeleteSuccessResponse : DocumentSessionDeleteSuccessResponse
}
