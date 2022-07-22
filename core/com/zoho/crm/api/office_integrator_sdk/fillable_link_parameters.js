const StreamWrapper = require("../../../../../../utils/util/stream_wrapper").MasterModel;
const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class FillableLinkParameters{

	document;
	url;
	documentInfo;
	userInfo;
	prefillData;
	formLanguage;
	submitSettings;
	formOptions;
	keyModified = new Map();
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
	 * The method to get the prefillData
	 * @returns {Map} A Map representing the prefillData
	 */
	getPrefillData()	{
		return this.prefillData;

	}

	/**
	 * The method to set the value to prefillData
	 * @param {Map} prefillData A Map representing the prefillData
	 */
	setPrefillData(prefillData)	{
		if((prefillData != null) && (!(Object.prototype.toString.call(prefillData) == "[object Map]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: prefillData EXPECTED TYPE: Map", null, null);
		}
		this.prefillData = prefillData;
		this.keyModified.set("prefill_data", 1);

	}

	/**
	 * The method to get the formLanguage
	 * @returns {String} A String representing the formLanguage
	 */
	getFormLanguage()	{
		return this.formLanguage;

	}

	/**
	 * The method to set the value to formLanguage
	 * @param {String} formLanguage A String representing the formLanguage
	 */
	setFormLanguage(formLanguage)	{
		if((formLanguage != null) && (!(Object.prototype.toString.call(formLanguage) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: formLanguage EXPECTED TYPE: String", null, null);
		}
		this.formLanguage = formLanguage;
		this.keyModified.set("form_language", 1);

	}

	/**
	 * The method to get the submitSettings
	 * @returns {FillableSubmissionSettings} An instance of FillableSubmissionSettings
	 */
	getSubmitSettings()	{
		return this.submitSettings;

	}

	/**
	 * The method to set the value to submitSettings
	 * @param {FillableSubmissionSettings} submitSettings An instance of FillableSubmissionSettings
	 */
	setSubmitSettings(submitSettings)	{
		const FillableSubmissionSettings = require("./fillable_submission_settings").MasterModel;
		if((submitSettings != null) && (!(submitSettings instanceof FillableSubmissionSettings)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: submitSettings EXPECTED TYPE: FillableSubmissionSettings", null, null);
		}
		this.submitSettings = submitSettings;
		this.keyModified.set("submit_settings", 1);

	}

	/**
	 * The method to get the formOptions
	 * @returns {FillableFormOptions} An instance of FillableFormOptions
	 */
	getFormOptions()	{
		return this.formOptions;

	}

	/**
	 * The method to set the value to formOptions
	 * @param {FillableFormOptions} formOptions An instance of FillableFormOptions
	 */
	setFormOptions(formOptions)	{
		const FillableFormOptions = require("./fillable_form_options").MasterModel;
		if((formOptions != null) && (!(formOptions instanceof FillableFormOptions)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: formOptions EXPECTED TYPE: FillableFormOptions", null, null);
		}
		this.formOptions = formOptions;
		this.keyModified.set("form_options", 1);

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
	MasterModel : FillableLinkParameters,
	FillableLinkParameters : FillableLinkParameters
}
