const StreamWrapper = require("../../../../../utils/util/stream_wrapper").MasterModel;
const Constants = require("../../../../../utils/util/constants").MasterModel;
const SDKException = require("../../../../../routes/exception/sdk_exception").MasterModel;

class CreatePresentationParameters{

	url;
	document;
	callbackSettings;
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
	 * The method to get the callbackSettings
	 * @returns {ShowCallbackSettings} An instance of ShowCallbackSettings
	 */
	getCallbackSettings()	{
		return this.callbackSettings;

	}

	/**
	 * The method to set the value to callbackSettings
	 * @param {ShowCallbackSettings} callbackSettings An instance of ShowCallbackSettings
	 */
	setCallbackSettings(callbackSettings)	{
		const ShowCallbackSettings = require("./show_callback_settings").MasterModel;
		if((callbackSettings != null) && (!(callbackSettings instanceof ShowCallbackSettings)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: callbackSettings EXPECTED TYPE: ShowCallbackSettings", null, null);
		}
		this.callbackSettings = callbackSettings;
		this.keyModified.set("callback_settings", 1);

	}

	/**
	 * The method to get the editorSettings
	 * @returns {ZohoShowEditorSettings} An instance of ZohoShowEditorSettings
	 */
	getEditorSettings()	{
		return this.editorSettings;

	}

	/**
	 * The method to set the value to editorSettings
	 * @param {ZohoShowEditorSettings} editorSettings An instance of ZohoShowEditorSettings
	 */
	setEditorSettings(editorSettings)	{
		const ZohoShowEditorSettings = require("./zoho_show_editor_settings").MasterModel;
		if((editorSettings != null) && (!(editorSettings instanceof ZohoShowEditorSettings)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: editorSettings EXPECTED TYPE: ZohoShowEditorSettings", null, null);
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
	MasterModel : CreatePresentationParameters,
	CreatePresentationParameters : CreatePresentationParameters
}
