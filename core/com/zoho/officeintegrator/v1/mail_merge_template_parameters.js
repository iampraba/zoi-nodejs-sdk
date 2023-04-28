const StreamWrapper = require("../../../../../utils/util/stream_wrapper").MasterModel;
const Constants = require("../../../../../utils/util/constants").MasterModel;
const SDKException = require("../../../../../routes/exception/sdk_exception").MasterModel;

class MailMergeTemplateParameters{

	url;
	document;
	mergeDataCsvContent;
	mergeDataJsonContent;
	mergeDataCsvUrl;
	mergeDataJsonUrl;
	callbackSettings;
	documentDefaults;
	editorSettings;
	permissions;
	documentInfo;
	userInfo;
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
	 * The method to get the callbackSettings
	 * @returns {CallbackSettings} An instance of CallbackSettings
	 */
	getCallbackSettings()	{
		return this.callbackSettings;

	}

	/**
	 * The method to set the value to callbackSettings
	 * @param {CallbackSettings} callbackSettings An instance of CallbackSettings
	 */
	setCallbackSettings(callbackSettings)	{
		const CallbackSettings = require("./callback_settings").MasterModel;
		if((callbackSettings != null) && (!(callbackSettings instanceof CallbackSettings)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: callbackSettings EXPECTED TYPE: CallbackSettings", null, null);
		}
		this.callbackSettings = callbackSettings;
		this.keyModified.set("callback_settings", 1);

	}

	/**
	 * The method to get the documentDefaults
	 * @returns {DocumentDefaults} An instance of DocumentDefaults
	 */
	getDocumentDefaults()	{
		return this.documentDefaults;

	}

	/**
	 * The method to set the value to documentDefaults
	 * @param {DocumentDefaults} documentDefaults An instance of DocumentDefaults
	 */
	setDocumentDefaults(documentDefaults)	{
		const DocumentDefaults = require("./document_defaults").MasterModel;
		if((documentDefaults != null) && (!(documentDefaults instanceof DocumentDefaults)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: documentDefaults EXPECTED TYPE: DocumentDefaults", null, null);
		}
		this.documentDefaults = documentDefaults;
		this.keyModified.set("document_defaults", 1);

	}

	/**
	 * The method to get the editorSettings
	 * @returns {EditorSettings} An instance of EditorSettings
	 */
	getEditorSettings()	{
		return this.editorSettings;

	}

	/**
	 * The method to set the value to editorSettings
	 * @param {EditorSettings} editorSettings An instance of EditorSettings
	 */
	setEditorSettings(editorSettings)	{
		const EditorSettings = require("./editor_settings").MasterModel;
		if((editorSettings != null) && (!(editorSettings instanceof EditorSettings)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: editorSettings EXPECTED TYPE: EditorSettings", null, null);
		}
		this.editorSettings = editorSettings;
		this.keyModified.set("editor_settings", 1);

	}

	/**
	 * The method to get the permissions
	 * @returns {Map} A Map representing the permissions
	 */
	getPermissions()	{
		return this.permissions;

	}

	/**
	 * The method to set the value to permissions
	 * @param {Map} permissions A Map representing the permissions
	 */
	setPermissions(permissions)	{
		if((permissions != null) && (!(Object.prototype.toString.call(permissions) == "[object Map]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: permissions EXPECTED TYPE: Map", null, null);
		}
		this.permissions = permissions;
		this.keyModified.set("permissions", 1);

	}

	/**
	 * The method to get the documentInfo
	 * @returns {DocumentInfo} An instance of DocumentInfo
	 */
	getDocumentInfo()	{
		return this.documentInfo;

	}

	/**
	 * The method to set the value to documentInfo
	 * @param {DocumentInfo} documentInfo An instance of DocumentInfo
	 */
	setDocumentInfo(documentInfo)	{
		const DocumentInfo = require("./document_info").MasterModel;
		if((documentInfo != null) && (!(documentInfo instanceof DocumentInfo)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: documentInfo EXPECTED TYPE: DocumentInfo", null, null);
		}
		this.documentInfo = documentInfo;
		this.keyModified.set("document_info", 1);

	}

	/**
	 * The method to get the userInfo
	 * @returns {UserInfo} An instance of UserInfo
	 */
	getUserInfo()	{
		return this.userInfo;

	}

	/**
	 * The method to set the value to userInfo
	 * @param {UserInfo} userInfo An instance of UserInfo
	 */
	setUserInfo(userInfo)	{
		const UserInfo = require("./user_info").MasterModel;
		if((userInfo != null) && (!(userInfo instanceof UserInfo)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: userInfo EXPECTED TYPE: UserInfo", null, null);
		}
		this.userInfo = userInfo;
		this.keyModified.set("user_info", 1);

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
	MasterModel : MailMergeTemplateParameters,
	MailMergeTemplateParameters : MailMergeTemplateParameters
}
