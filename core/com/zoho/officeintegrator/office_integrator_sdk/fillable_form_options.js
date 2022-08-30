const Constants = require("../../../../../utils/util/constants").MasterModel;
const SDKException = require("../../../../../routes/exception/sdk_exception").MasterModel;

class FillableFormOptions{

	download;
	print;
	submit;
	keyModified = new Map();
	/**
	 * The method to get the download
	 * @returns {Boolean} A Boolean representing the download
	 */
	getDownload()	{
		return this.download;

	}

	/**
	 * The method to set the value to download
	 * @param {Boolean} download A Boolean representing the download
	 */
	setDownload(download)	{
		if((download != null) && (!(Object.prototype.toString.call(download) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: download EXPECTED TYPE: Boolean", null, null);
		}
		this.download = download;
		this.keyModified.set("download", 1);

	}

	/**
	 * The method to get the print
	 * @returns {Boolean} A Boolean representing the print
	 */
	getPrint()	{
		return this.print;

	}

	/**
	 * The method to set the value to print
	 * @param {Boolean} print A Boolean representing the print
	 */
	setPrint(print)	{
		if((print != null) && (!(Object.prototype.toString.call(print) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: print EXPECTED TYPE: Boolean", null, null);
		}
		this.print = print;
		this.keyModified.set("print", 1);

	}

	/**
	 * The method to get the submit
	 * @returns {Boolean} A Boolean representing the submit
	 */
	getSubmit()	{
		return this.submit;

	}

	/**
	 * The method to set the value to submit
	 * @param {Boolean} submit A Boolean representing the submit
	 */
	setSubmit(submit)	{
		if((submit != null) && (!(Object.prototype.toString.call(submit) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: submit EXPECTED TYPE: Boolean", null, null);
		}
		this.submit = submit;
		this.keyModified.set("submit", 1);

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
	MasterModel : FillableFormOptions,
	FillableFormOptions : FillableFormOptions
}
