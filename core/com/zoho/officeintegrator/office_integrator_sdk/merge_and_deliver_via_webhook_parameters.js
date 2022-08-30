const StreamWrapper = require("../../../../../utils/util/stream_wrapper").MasterModel;
const Constants = require("../../../../../utils/util/constants").MasterModel;
const SDKException = require("../../../../../routes/exception/sdk_exception").MasterModel;

class MergeAndDeliverViaWebhookParameters{

	fileContent;
	fileUrl;
	outputFormat;
	webhook;
	mergeTo;
	mergeData;
	mergeDataCsvContent;
	mergeDataJsonContent;
	mergeDataCsvUrl;
	mergeDataJsonUrl;
	password;
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
	 * The method to get the outputFormat
	 * @returns {String} A String representing the outputFormat
	 */
	getOutputFormat()	{
		return this.outputFormat;

	}

	/**
	 * The method to set the value to outputFormat
	 * @param {String} outputFormat A String representing the outputFormat
	 */
	setOutputFormat(outputFormat)	{
		if((outputFormat != null) && (!(Object.prototype.toString.call(outputFormat) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: outputFormat EXPECTED TYPE: String", null, null);
		}
		this.outputFormat = outputFormat;
		this.keyModified.set("output_format", 1);

	}

	/**
	 * The method to get the webhook
	 * @returns {MailMergeWebhookSettings} An instance of MailMergeWebhookSettings
	 */
	getWebhook()	{
		return this.webhook;

	}

	/**
	 * The method to set the value to webhook
	 * @param {MailMergeWebhookSettings} webhook An instance of MailMergeWebhookSettings
	 */
	setWebhook(webhook)	{
		const MailMergeWebhookSettings = require("./mail_merge_webhook_settings").MasterModel;
		if((webhook != null) && (!(webhook instanceof MailMergeWebhookSettings)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: webhook EXPECTED TYPE: MailMergeWebhookSettings", null, null);
		}
		this.webhook = webhook;
		this.keyModified.set("webhook", 1);

	}

	/**
	 * The method to get the mergeTo
	 * @returns {String} A String representing the mergeTo
	 */
	getMergeTo()	{
		return this.mergeTo;

	}

	/**
	 * The method to set the value to mergeTo
	 * @param {String} mergeTo A String representing the mergeTo
	 */
	setMergeTo(mergeTo)	{
		if((mergeTo != null) && (!(Object.prototype.toString.call(mergeTo) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mergeTo EXPECTED TYPE: String", null, null);
		}
		this.mergeTo = mergeTo;
		this.keyModified.set("merge_to", 1);

	}

	/**
	 * The method to get the mergeData
	 * @returns {Map} A Map representing the mergeData
	 */
	getMergeData()	{
		return this.mergeData;

	}

	/**
	 * The method to set the value to mergeData
	 * @param {Map} mergeData A Map representing the mergeData
	 */
	setMergeData(mergeData)	{
		if((mergeData != null) && (!(Object.prototype.toString.call(mergeData) == "[object Map]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mergeData EXPECTED TYPE: Map", null, null);
		}
		this.mergeData = mergeData;
		this.keyModified.set("merge_data", 1);

	}

	/**
	 * The method to get the mergeDataCsvContent
	 * @returns {StreamWrapper} An instance of StreamWrapper
	 */
	getMergeDataCsvContent()	{
		return this.mergeDataCsvContent;

	}

	/**
	 * The method to set the value to mergeDataCsvContent
	 * @param {StreamWrapper} mergeDataCsvContent An instance of StreamWrapper
	 */
	setMergeDataCsvContent(mergeDataCsvContent)	{
		if((mergeDataCsvContent != null) && (!(mergeDataCsvContent instanceof StreamWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mergeDataCsvContent EXPECTED TYPE: StreamWrapper", null, null);
		}
		this.mergeDataCsvContent = mergeDataCsvContent;
		this.keyModified.set("merge_data_csv_content", 1);

	}

	/**
	 * The method to get the mergeDataJsonContent
	 * @returns {StreamWrapper} An instance of StreamWrapper
	 */
	getMergeDataJsonContent()	{
		return this.mergeDataJsonContent;

	}

	/**
	 * The method to set the value to mergeDataJsonContent
	 * @param {StreamWrapper} mergeDataJsonContent An instance of StreamWrapper
	 */
	setMergeDataJsonContent(mergeDataJsonContent)	{
		if((mergeDataJsonContent != null) && (!(mergeDataJsonContent instanceof StreamWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mergeDataJsonContent EXPECTED TYPE: StreamWrapper", null, null);
		}
		this.mergeDataJsonContent = mergeDataJsonContent;
		this.keyModified.set("merge_data_json_content", 1);

	}

	/**
	 * The method to get the mergeDataCsvUrl
	 * @returns {String} A String representing the mergeDataCsvUrl
	 */
	getMergeDataCsvUrl()	{
		return this.mergeDataCsvUrl;

	}

	/**
	 * The method to set the value to mergeDataCsvUrl
	 * @param {String} mergeDataCsvUrl A String representing the mergeDataCsvUrl
	 */
	setMergeDataCsvUrl(mergeDataCsvUrl)	{
		if((mergeDataCsvUrl != null) && (!(Object.prototype.toString.call(mergeDataCsvUrl) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mergeDataCsvUrl EXPECTED TYPE: String", null, null);
		}
		this.mergeDataCsvUrl = mergeDataCsvUrl;
		this.keyModified.set("merge_data_csv_url", 1);

	}

	/**
	 * The method to get the mergeDataJsonUrl
	 * @returns {String} A String representing the mergeDataJsonUrl
	 */
	getMergeDataJsonUrl()	{
		return this.mergeDataJsonUrl;

	}

	/**
	 * The method to set the value to mergeDataJsonUrl
	 * @param {String} mergeDataJsonUrl A String representing the mergeDataJsonUrl
	 */
	setMergeDataJsonUrl(mergeDataJsonUrl)	{
		if((mergeDataJsonUrl != null) && (!(Object.prototype.toString.call(mergeDataJsonUrl) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mergeDataJsonUrl EXPECTED TYPE: String", null, null);
		}
		this.mergeDataJsonUrl = mergeDataJsonUrl;
		this.keyModified.set("merge_data_json_url", 1);

	}

	/**
	 * The method to get the password
	 * @returns {String} A String representing the password
	 */
	getPassword()	{
		return this.password;

	}

	/**
	 * The method to set the value to password
	 * @param {String} password A String representing the password
	 */
	setPassword(password)	{
		if((password != null) && (!(Object.prototype.toString.call(password) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: password EXPECTED TYPE: String", null, null);
		}
		this.password = password;
		this.keyModified.set("password", 1);

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
	MasterModel : MergeAndDeliverViaWebhookParameters,
	MergeAndDeliverViaWebhookParameters : MergeAndDeliverViaWebhookParameters
}
