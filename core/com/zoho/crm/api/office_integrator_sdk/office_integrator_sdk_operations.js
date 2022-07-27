const APIResponse = require("../../../../../../routes/controllers/api_response").MasterModel;
const CommonAPIHandler = require("../../../../../../routes/middlewares/common_api_handler").MasterModel;
const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class OfficeIntegratorSDKOperations{
	/**
	 * The method to create document
	 * @param {CreateDocumentParameters} request An instance of CreateDocumentParameters
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async createDocument(request)	{
		const CreateDocumentParameters = require("./create_document_parameters").MasterModel;
		if((request != null) && (!(request instanceof CreateDocumentParameters)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: CreateDocumentParameters", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/writer/officeapi/v1/documents");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setContentType("multipart/form-data");
		handlerInstance.setRequest(request);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to create document preview
	 * @param {PreviewParameters} request An instance of PreviewParameters
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async createDocumentPreview(request)	{
		const PreviewParameters = require("./preview_parameters").MasterModel;
		if((request != null) && (!(request instanceof PreviewParameters)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: PreviewParameters", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/writer/officeapi/v1/document/preview");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setContentType("multipart/form-data");
		handlerInstance.setRequest(request);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to create watermark document
	 * @param {WatermarkParameters} request An instance of WatermarkParameters
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async createWatermarkDocument(request)	{
		const WatermarkParameters = require("./watermark_parameters").MasterModel;
		if((request != null) && (!(request instanceof WatermarkParameters)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: WatermarkParameters", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/writer/officeapi/v1/document/watermark");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setContentType("multipart/form-data");
		handlerInstance.setRequest(request);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to create mail merge template
	 * @param {MailMergeTemplateParameters} request An instance of MailMergeTemplateParameters
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async createMailMergeTemplate(request)	{
		const MailMergeTemplateParameters = require("./mail_merge_template_parameters").MasterModel;
		if((request != null) && (!(request instanceof MailMergeTemplateParameters)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: MailMergeTemplateParameters", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/writer/officeapi/v1/templates");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setContentType("multipart/form-data");
		handlerInstance.setRequest(request);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to get merge fields
	 * @param {GetMergeFieldsParameters} request An instance of GetMergeFieldsParameters
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getMergeFields(request)	{
		const GetMergeFieldsParameters = require("./get_merge_fields_parameters").MasterModel;
		if((request != null) && (!(request instanceof GetMergeFieldsParameters)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: GetMergeFieldsParameters", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/writer/officeapi/v1/fields");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setContentType("multipart/form-data");
		handlerInstance.setRequest(request);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to merge and deliver via webhook
	 * @param {MergeAndDeliverViaWebhookParameters} request An instance of MergeAndDeliverViaWebhookParameters
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async mergeAndDeliverViaWebhook(request)	{
		const MergeAndDeliverViaWebhookParameters = require("./merge_and_deliver_via_webhook_parameters").MasterModel;
		if((request != null) && (!(request instanceof MergeAndDeliverViaWebhookParameters)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: MergeAndDeliverViaWebhookParameters", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/writer/officeapi/v1/document/merge/webhook");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setContentType("multipart/form-data");
		handlerInstance.setRequest(request);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to merge and download document
	 * @param {MergeAndDownloadDocumentParameters} request An instance of MergeAndDownloadDocumentParameters
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async mergeAndDownloadDocument(request)	{
		const MergeAndDownloadDocumentParameters = require("./merge_and_download_document_parameters").MasterModel;
		if((request != null) && (!(request instanceof MergeAndDownloadDocumentParameters)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: MergeAndDownloadDocumentParameters", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/writer/officeapi/v1/document/merge");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setContentType("multipart/form-data");
		handlerInstance.setRequest(request);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to create fillable template document
	 * @param {CreateDocumentParameters} request An instance of CreateDocumentParameters
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async createFillableTemplateDocument(request)	{
		const CreateDocumentParameters = require("./create_document_parameters").MasterModel;
		if((request != null) && (!(request instanceof CreateDocumentParameters)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: CreateDocumentParameters", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/writer/officeapi/v1/fillabletemplates");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setContentType("multipart/form-data");
		handlerInstance.setRequest(request);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to create fillable link
	 * @param {FillableLinkParameters} request An instance of FillableLinkParameters
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async createFillableLink(request)	{
		const FillableLinkParameters = require("./fillable_link_parameters").MasterModel;
		if((request != null) && (!(request instanceof FillableLinkParameters)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: FillableLinkParameters", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/writer/officeapi/v1/fillabletemplates/fillablelink");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setContentType("multipart/form-data");
		handlerInstance.setRequest(request);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to convert document
	 * @param {DocumentConversionParameters} request An instance of DocumentConversionParameters
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async convertDocument(request)	{
		const DocumentConversionParameters = require("./document_conversion_parameters").MasterModel;
		if((request != null) && (!(request instanceof DocumentConversionParameters)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: DocumentConversionParameters", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/writer/officeapi/v1/document/convert");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setContentType("multipart/form-data");
		handlerInstance.setRequest(request);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to compare document
	 * @param {CompareDocumentParameters} request An instance of CompareDocumentParameters
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async compareDocument(request)	{
		const CompareDocumentParameters = require("./compare_document_parameters").MasterModel;
		if((request != null) && (!(request instanceof CompareDocumentParameters)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: CompareDocumentParameters", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/writer/officeapi/v1/document/compare");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setContentType("multipart/form-data");
		handlerInstance.setRequest(request);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to get session
	 * @param {String} sessionid A String representing the sessionid
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getSession(sessionid)	{
		if((!(Object.prototype.toString.call(sessionid) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sessionid EXPECTED TYPE: String", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/writer/officeapi/v1/sessions/");
		apiPath = apiPath.concat(sessionid.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to delete session
	 * @param {String} sessionid A String representing the sessionid
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deleteSession(sessionid)	{
		if((!(Object.prototype.toString.call(sessionid) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sessionid EXPECTED TYPE: String", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/writer/officeapi/v1/sessions/");
		apiPath = apiPath.concat(sessionid.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		let Object = require.resolve("./object");
		return handlerInstance.apiCall(Object, "application/json");

	}

	/**
	 * The method to get document info
	 * @param {String} documentid A String representing the documentid
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getDocumentInfo(documentid)	{
		if((!(Object.prototype.toString.call(documentid) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: documentid EXPECTED TYPE: String", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/writer/officeapi/v1/documents/");
		apiPath = apiPath.concat(documentid.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to delete document
	 * @param {String} documentid A String representing the documentid
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deleteDocument(documentid)	{
		if((!(Object.prototype.toString.call(documentid) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: documentid EXPECTED TYPE: String", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/writer/officeapi/v1/documents/");
		apiPath = apiPath.concat(documentid.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to create sheet
	 * @param {CreateSheetParameters} request An instance of CreateSheetParameters
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async createSheet(request)	{
		const CreateSheetParameters = require("./create_sheet_parameters").MasterModel;
		if((request != null) && (!(request instanceof CreateSheetParameters)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: CreateSheetParameters", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/sheet/officeapi/v1/spreadsheet");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setContentType("multipart/form-data");
		handlerInstance.setRequest(request);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to create sheet preview
	 * @param {SheetPreviewParameters} request An instance of SheetPreviewParameters
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async createSheetPreview(request)	{
		const SheetPreviewParameters = require("./sheet_preview_parameters").MasterModel;
		if((request != null) && (!(request instanceof SheetPreviewParameters)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: SheetPreviewParameters", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/sheet/officeapi/v1/spreadsheet/preview");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setContentType("multipart/form-data");
		handlerInstance.setRequest(request);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to get sheet session
	 * @param {String} sessionid A String representing the sessionid
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getSheetSession(sessionid)	{
		if((!(Object.prototype.toString.call(sessionid) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sessionid EXPECTED TYPE: String", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/sheet/officeapi/v1/sessions/");
		apiPath = apiPath.concat(sessionid.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to delete sheet session
	 * @param {String} sessionid A String representing the sessionid
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deleteSheetSession(sessionid)	{
		if((!(Object.prototype.toString.call(sessionid) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sessionid EXPECTED TYPE: String", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/sheet/officeapi/v1/sessions/");
		apiPath = apiPath.concat(sessionid.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to delete sheet
	 * @param {String} documentid A String representing the documentid
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deleteSheet(documentid)	{
		if((!(Object.prototype.toString.call(documentid) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: documentid EXPECTED TYPE: String", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/sheet/officeapi/v1/spreadsheet/");
		apiPath = apiPath.concat(documentid.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to create presentation
	 * @param {CreatePresentationParameters} request An instance of CreatePresentationParameters
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async createPresentation(request)	{
		const CreatePresentationParameters = require("./create_presentation_parameters").MasterModel;
		if((request != null) && (!(request instanceof CreatePresentationParameters)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: CreatePresentationParameters", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/show/officeapi/v1/presentation");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setContentType("multipart/form-data");
		handlerInstance.setRequest(request);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to create presentation preview
	 * @param {PresentationPreviewParameters} request An instance of PresentationPreviewParameters
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async createPresentationPreview(request)	{
		const PresentationPreviewParameters = require("./presentation_preview_parameters").MasterModel;
		if((request != null) && (!(request instanceof PresentationPreviewParameters)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: PresentationPreviewParameters", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/show/officeapi/v1/presentation/preview");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setContentType("multipart/form-data");
		handlerInstance.setRequest(request);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to get presentation session
	 * @param {String} sessionid A String representing the sessionid
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getPresentationSession(sessionid)	{
		if((!(Object.prototype.toString.call(sessionid) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sessionid EXPECTED TYPE: String", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/show/officeapi/v1/sessions/");
		apiPath = apiPath.concat(sessionid.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to delete presentation session
	 * @param {String} sessionid A String representing the sessionid
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deletePresentationSession(sessionid)	{
		if((!(Object.prototype.toString.call(sessionid) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sessionid EXPECTED TYPE: String", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/show/officeapi/v1/sessions/");
		apiPath = apiPath.concat(sessionid.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to delete presentation
	 * @param {String} documentid A String representing the documentid
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deletePresentation(documentid)	{
		if((!(Object.prototype.toString.call(documentid) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: documentid EXPECTED TYPE: String", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/show/officeapi/v1/presentation/");
		apiPath = apiPath.concat(documentid.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to get plan details
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getPlanDetails()	{
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/api/v1/plan");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

}
module.exports = {
	MasterModel : OfficeIntegratorSDKOperations,
	OfficeIntegratorSDKOperations : OfficeIntegratorSDKOperations
}
