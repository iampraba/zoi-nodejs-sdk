const StreamWrapper = require("../../../../../utils/util/stream_wrapper").MasterModel;
const Constants = require("../../../../../utils/util/constants").MasterModel;
const SDKException = require("../../../../../routes/exception/sdk_exception").MasterModel;

class ConvertPresentationParameters{

	url;
	document;
	format;
	keyModified = new Map();
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
	 * The method to get the document
	 * @returns {StreamWrapper} An instance of StreamWrapper
	 */
	getDocument()	{
		return this.document;

	}

	/**
	 * The method to set the value to document
	 * @param {StreamWrapper} document An instance of StreamWrapper
	 */
	setDocument(document)	{
		if((document != null) && (!(document instanceof StreamWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: document EXPECTED TYPE: StreamWrapper", null, null);
		}
		this.document = document;
		this.keyModified.set("document", 1);

	}

	/**
	 * The method to get the format
	 * @returns {String} A String representing the format
	 */
	getFormat()	{
		return this.format;

	}

	/**
	 * The method to set the value to format
	 * @param {String} format A String representing the format
	 */
	setFormat(format)	{
		if((format != null) && (!(Object.prototype.toString.call(format) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: format EXPECTED TYPE: String", null, null);
		}
		this.format = format;
		this.keyModified.set("format", 1);

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
	MasterModel : ConvertPresentationParameters,
	ConvertPresentationParameters : ConvertPresentationParameters
}
