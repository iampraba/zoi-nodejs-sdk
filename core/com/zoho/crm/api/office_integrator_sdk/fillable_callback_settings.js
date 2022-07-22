const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class FillableCallbackSettings{

	output;
	url;
	httpMethodType;
	retries;
	timeout;
	keyModified = new Map();
	/**
	 * The method to get the output
	 * @returns {FillableLinkOutputSettings} An instance of FillableLinkOutputSettings
	 */
	getOutput()	{
		return this.output;

	}

	/**
	 * The method to set the value to output
	 * @param {FillableLinkOutputSettings} output An instance of FillableLinkOutputSettings
	 */
	setOutput(output)	{
		const FillableLinkOutputSettings = require("./fillable_link_output_settings").MasterModel;
		if((output != null) && (!(output instanceof FillableLinkOutputSettings)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: output EXPECTED TYPE: FillableLinkOutputSettings", null, null);
		}
		this.output = output;
		this.keyModified.set("output", 1);

	}

	/**
	 * The method to get the url
	 * @returns {String} A String representing the url
	 */
	getUrl()	{
		return this.url;

	}

	/**
	 * The method to set the value to url
	 * @param {String} url A String representing the url
	 */
	setUrl(url)	{
		if((url != null) && (!(Object.prototype.toString.call(url) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: url EXPECTED TYPE: String", null, null);
		}
		this.url = url;
		this.keyModified.set("url", 1);

	}

	/**
	 * The method to get the httpMethodType
	 * @returns {String} A String representing the httpMethodType
	 */
	getHttpMethodType()	{
		return this.httpMethodType;

	}

	/**
	 * The method to set the value to httpMethodType
	 * @param {String} httpMethodType A String representing the httpMethodType
	 */
	setHttpMethodType(httpMethodType)	{
		if((httpMethodType != null) && (!(Object.prototype.toString.call(httpMethodType) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: httpMethodType EXPECTED TYPE: String", null, null);
		}
		this.httpMethodType = httpMethodType;
		this.keyModified.set("http_method_type", 1);

	}

	/**
	 * The method to get the retries
	 * @returns {BigInt} A BigInt representing the retries
	 */
	getRetries()	{
		return this.retries;

	}

	/**
	 * The method to set the value to retries
	 * @param {BigInt} retries A BigInt representing the retries
	 */
	setRetries(retries)	{
		if((retries != null) && (!(Object.prototype.toString.call(retries) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: retries EXPECTED TYPE: BigInt", null, null);
		}
		this.retries = retries;
		this.keyModified.set("retries", 1);

	}

	/**
	 * The method to get the timeout
	 * @returns {BigInt} A BigInt representing the timeout
	 */
	getTimeout()	{
		return this.timeout;

	}

	/**
	 * The method to set the value to timeout
	 * @param {BigInt} timeout A BigInt representing the timeout
	 */
	setTimeout(timeout)	{
		if((timeout != null) && (!(Object.prototype.toString.call(timeout) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: timeout EXPECTED TYPE: BigInt", null, null);
		}
		this.timeout = timeout;
		this.keyModified.set("timeout", 1);

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
	MasterModel : FillableCallbackSettings,
	FillableCallbackSettings : FillableCallbackSettings
}
