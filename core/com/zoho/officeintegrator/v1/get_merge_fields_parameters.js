const StreamWrapper = require("../../../../../utils/util/stream_wrapper").MasterModel;
const Constants = require("../../../../../utils/util/constants").MasterModel;
const SDKException = require("../../../../../routes/exception/sdk_exception").MasterModel;

class GetMergeFieldsParameters{

	fileContent;
	fileUrl;
	keyModified = new Map();
	/**
	 * The method to get the fileContent
	 * @returns {StreamWrapper} An instance of StreamWrapper
	 */
	getFileContent()	{
		return this.fileContent;

	}

	/**
	 * The method to set the value to fileContent
	 * @param {StreamWrapper} fileContent An instance of StreamWrapper
	 */
	setFileContent(fileContent)	{
		if((fileContent != null) && (!(fileContent instanceof StreamWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileContent EXPECTED TYPE: StreamWrapper", null, null);
		}
		this.fileContent = fileContent;
		this.keyModified.set("file_content", 1);

	}

	/**
	 * The method to get the fileUrl
	 * @returns {String} A String representing the fileUrl
	 */
	getFileUrl()	{
		return this.fileUrl;

	}

	/**
	 * The method to set the value to fileUrl
	 * @param {String} fileUrl A String representing the fileUrl
	 */
	setFileUrl(fileUrl)	{
		if((fileUrl != null) && (!(Object.prototype.toString.call(fileUrl) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileUrl EXPECTED TYPE: String", null, null);
		}
		this.fileUrl = fileUrl;
		this.keyModified.set("file_url", 1);

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
	MasterModel : GetMergeFieldsParameters,
	GetMergeFieldsParameters : GetMergeFieldsParameters
}
