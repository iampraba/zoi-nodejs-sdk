const Constants = require("../../../../../utils/util/constants").MasterModel;
const SDKException = require("../../../../../routes/exception/sdk_exception").MasterModel;

class SheetConversionOutputOptions{

	format;
	documentName;
	keyModified = new Map();
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
	 * The method to get the documentName
	 * @returns {String} A String representing the documentName
	 */
	getDocumentName()	{
		return this.documentName;

	}

	/**
	 * The method to set the value to documentName
	 * @param {String} documentName A String representing the documentName
	 */
	setDocumentName(documentName)	{
		if((documentName != null) && (!(Object.prototype.toString.call(documentName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: documentName EXPECTED TYPE: String", null, null);
		}
		this.documentName = documentName;
		this.keyModified.set("document_name", 1);

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
	MasterModel : SheetConversionOutputOptions,
	SheetConversionOutputOptions : SheetConversionOutputOptions
}
