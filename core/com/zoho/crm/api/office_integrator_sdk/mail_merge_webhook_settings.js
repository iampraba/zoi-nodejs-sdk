const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class MailMergeWebhookSettings{

	invokeUrl;
	invokePeriod;
	keyModified = new Map();
	/**
	 * The method to get the invokeUrl
	 * @returns {String} A String representing the invokeUrl
	 */
	getInvokeUrl()	{
		return this.invokeUrl;

	}

	/**
	 * The method to set the value to invokeUrl
	 * @param {String} invokeUrl A String representing the invokeUrl
	 */
	setInvokeUrl(invokeUrl)	{
		if((invokeUrl != null) && (!(Object.prototype.toString.call(invokeUrl) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: invokeUrl EXPECTED TYPE: String", null, null);
		}
		this.invokeUrl = invokeUrl;
		this.keyModified.set("invoke_url", 1);

	}

	/**
	 * The method to get the invokePeriod
	 * @returns {String} A String representing the invokePeriod
	 */
	getInvokePeriod()	{
		return this.invokePeriod;

	}

	/**
	 * The method to set the value to invokePeriod
	 * @param {String} invokePeriod A String representing the invokePeriod
	 */
	setInvokePeriod(invokePeriod)	{
		if((invokePeriod != null) && (!(Object.prototype.toString.call(invokePeriod) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: invokePeriod EXPECTED TYPE: String", null, null);
		}
		this.invokePeriod = invokePeriod;
		this.keyModified.set("invoke_period", 1);

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
	MasterModel : MailMergeWebhookSettings,
	MailMergeWebhookSettings : MailMergeWebhookSettings
}
