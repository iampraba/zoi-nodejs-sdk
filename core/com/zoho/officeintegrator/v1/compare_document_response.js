const Constants = require("../../../../../utils/util/constants").MasterModel;
const SDKException = require("../../../../../routes/exception/sdk_exception").MasterModel;

class CompareDocumentResponse{

	compareUrl;
	sessionDeleteUrl;
	keyModified = new Map();
	/**
	 * The method to get the compareUrl
	 * @returns {String} A String representing the compareUrl
	 */
	getCompareUrl()	{
		return this.compareUrl;

	}

	/**
	 * The method to set the value to compareUrl
	 * @param {String} compareUrl A String representing the compareUrl
	 */
	setCompareUrl(compareUrl)	{
		if((compareUrl != null) && (!(Object.prototype.toString.call(compareUrl) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: compareUrl EXPECTED TYPE: String", null, null);
		}
		this.compareUrl = compareUrl;
		this.keyModified.set("compare_url", 1);

	}

	/**
	 * The method to get the sessionDeleteUrl
	 * @returns {String} A String representing the sessionDeleteUrl
	 */
	getSessionDeleteUrl()	{
		return this.sessionDeleteUrl;

	}

	/**
	 * The method to set the value to sessionDeleteUrl
	 * @param {String} sessionDeleteUrl A String representing the sessionDeleteUrl
	 */
	setSessionDeleteUrl(sessionDeleteUrl)	{
		if((sessionDeleteUrl != null) && (!(Object.prototype.toString.call(sessionDeleteUrl) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sessionDeleteUrl EXPECTED TYPE: String", null, null);
		}
		this.sessionDeleteUrl = sessionDeleteUrl;
		this.keyModified.set("session_delete_url", 1);

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
	MasterModel : CompareDocumentResponse,
	CompareDocumentResponse : CompareDocumentResponse
}
