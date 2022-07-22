const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class FillableLinkResponse{

	fillableFormUrl;
	keyModified = new Map();
	/**
	 * The method to get the fillableFormUrl
	 * @returns {String} A String representing the fillableFormUrl
	 */
	getFillableFormUrl()	{
		return this.fillableFormUrl;

	}

	/**
	 * The method to set the value to fillableFormUrl
	 * @param {String} fillableFormUrl A String representing the fillableFormUrl
	 */
	setFillableFormUrl(fillableFormUrl)	{
		if((fillableFormUrl != null) && (!(Object.prototype.toString.call(fillableFormUrl) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fillableFormUrl EXPECTED TYPE: String", null, null);
		}
		this.fillableFormUrl = fillableFormUrl;
		this.keyModified.set("fillable_form_url", 1);

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
	MasterModel : FillableLinkResponse,
	FillableLinkResponse : FillableLinkResponse
}
