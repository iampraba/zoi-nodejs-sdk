const Constants = require("../../../../../utils/util/constants").MasterModel;
const SDKException = require("../../../../../routes/exception/sdk_exception").MasterModel;

class MergeAndDeliverViaWebhookSuccessResponse{

	mergeReportDataUrl;
	records;
	keyModified = new Map();
	/**
	 * The method to get the mergeReportDataUrl
	 * @returns {String} A String representing the mergeReportDataUrl
	 */
	getMergeReportDataUrl()	{
		return this.mergeReportDataUrl;

	}

	/**
	 * The method to set the value to mergeReportDataUrl
	 * @param {String} mergeReportDataUrl A String representing the mergeReportDataUrl
	 */
	setMergeReportDataUrl(mergeReportDataUrl)	{
		if((mergeReportDataUrl != null) && (!(Object.prototype.toString.call(mergeReportDataUrl) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mergeReportDataUrl EXPECTED TYPE: String", null, null);
		}
		this.mergeReportDataUrl = mergeReportDataUrl;
		this.keyModified.set("merge_report_data_url", 1);

	}

	/**
	 * The method to get the records
	 * @returns {Array} An Array representing the records
	 */
	getRecords()	{
		return this.records;

	}

	/**
	 * The method to set the value to records
	 * @param {Array} records An Array representing the records
	 */
	setRecords(records)	{
		if((records != null) && (!(Object.prototype.toString.call(records) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: records EXPECTED TYPE: Array", null, null);
		}
		this.records = records;
		this.keyModified.set("records", 1);

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
	MasterModel : MergeAndDeliverViaWebhookSuccessResponse,
	MergeAndDeliverViaWebhookSuccessResponse : MergeAndDeliverViaWebhookSuccessResponse
}
