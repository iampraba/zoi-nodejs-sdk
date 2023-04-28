const Constants = require("../../../../../utils/util/constants").MasterModel;
const SDKException = require("../../../../../routes/exception/sdk_exception").MasterModel;

class FillableSubmissionSettings{

	callbackOptions;
	redirectUrl;
	onsubmitMessage;
	keyModified = new Map();
	/**
	 * The method to get the callbackOptions
	 * @returns {FillableCallbackSettings} An instance of FillableCallbackSettings
	 */
	getCallbackOptions()	{
		return this.callbackOptions;

	}

	/**
	 * The method to set the value to callbackOptions
	 * @param {FillableCallbackSettings} callbackOptions An instance of FillableCallbackSettings
	 */
	setCallbackOptions(callbackOptions)	{
		const FillableCallbackSettings = require("./fillable_callback_settings").MasterModel;
		if((callbackOptions != null) && (!(callbackOptions instanceof FillableCallbackSettings)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: callbackOptions EXPECTED TYPE: FillableCallbackSettings", null, null);
		}
		this.callbackOptions = callbackOptions;
		this.keyModified.set("callback_options", 1);

	}

	/**
	 * The method to get the redirectUrl
	 * @returns {String} A String representing the redirectUrl
	 */
	getRedirectUrl()	{
		return this.redirectUrl;

	}

	/**
	 * The method to set the value to redirectUrl
	 * @param {String} redirectUrl A String representing the redirectUrl
	 */
	setRedirectUrl(redirectUrl)	{
		if((redirectUrl != null) && (!(Object.prototype.toString.call(redirectUrl) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: redirectUrl EXPECTED TYPE: String", null, null);
		}
		this.redirectUrl = redirectUrl;
		this.keyModified.set("redirect_url", 1);

	}

	/**
	 * The method to get the onsubmitMessage
	 * @returns {String} A String representing the onsubmitMessage
	 */
	getOnsubmitMessage()	{
		return this.onsubmitMessage;

	}

	/**
	 * The method to set the value to onsubmitMessage
	 * @param {String} onsubmitMessage A String representing the onsubmitMessage
	 */
	setOnsubmitMessage(onsubmitMessage)	{
		if((onsubmitMessage != null) && (!(Object.prototype.toString.call(onsubmitMessage) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: onsubmitMessage EXPECTED TYPE: String", null, null);
		}
		this.onsubmitMessage = onsubmitMessage;
		this.keyModified.set("onsubmit_message", 1);

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
	MasterModel : FillableSubmissionSettings,
	FillableSubmissionSettings : FillableSubmissionSettings
}
