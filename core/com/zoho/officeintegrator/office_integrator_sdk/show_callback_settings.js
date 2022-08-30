const Constants = require("../../../../../utils/util/constants").MasterModel;
const SDKException = require("../../../../../routes/exception/sdk_exception").MasterModel;

class ShowCallbackSettings{

	saveFormat;
	saveUrl;
	contextInfo;
	keyModified = new Map();
	/**
	 * The method to get the saveFormat
	 * @returns {String} A String representing the saveFormat
	 */
	getSaveFormat()	{
		return this.saveFormat;

	}

	/**
	 * The method to set the value to saveFormat
	 * @param {String} saveFormat A String representing the saveFormat
	 */
	setSaveFormat(saveFormat)	{
		if((saveFormat != null) && (!(Object.prototype.toString.call(saveFormat) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: saveFormat EXPECTED TYPE: String", null, null);
		}
		this.saveFormat = saveFormat;
		this.keyModified.set("save_format", 1);

	}

	/**
	 * The method to get the saveUrl
	 * @returns {String} A String representing the saveUrl
	 */
	getSaveUrl()	{
		return this.saveUrl;

	}

	/**
	 * The method to set the value to saveUrl
	 * @param {String} saveUrl A String representing the saveUrl
	 */
	setSaveUrl(saveUrl)	{
		if((saveUrl != null) && (!(Object.prototype.toString.call(saveUrl) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: saveUrl EXPECTED TYPE: String", null, null);
		}
		this.saveUrl = saveUrl;
		this.keyModified.set("save_url", 1);

	}

	/**
	 * The method to get the contextInfo
	 * @returns {String} A String representing the contextInfo
	 */
	getContextInfo()	{
		return this.contextInfo;

	}

	/**
	 * The method to set the value to contextInfo
	 * @param {String} contextInfo A String representing the contextInfo
	 */
	setContextInfo(contextInfo)	{
		if((contextInfo != null) && (!(Object.prototype.toString.call(contextInfo) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contextInfo EXPECTED TYPE: String", null, null);
		}
		this.contextInfo = contextInfo;
		this.keyModified.set("context_info", 1);

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
	MasterModel : ShowCallbackSettings,
	ShowCallbackSettings : ShowCallbackSettings
}
