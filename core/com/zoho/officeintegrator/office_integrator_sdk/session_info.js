const Constants = require("../../../../../utils/util/constants").MasterModel;
const SDKException = require("../../../../../routes/exception/sdk_exception").MasterModel;

class SessionInfo{

	documentId;
	createdTimeMs;
	createdTime;
	expiresOnMs;
	expiresOn;
	keyModified = new Map();
	/**
	 * The method to get the documentId
	 * @returns {String} A String representing the documentId
	 */
	getDocumentId()	{
		return this.documentId;

	}

	/**
	 * The method to set the value to documentId
	 * @param {String} documentId A String representing the documentId
	 */
	setDocumentId(documentId)	{
		if((documentId != null) && (!(Object.prototype.toString.call(documentId) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: documentId EXPECTED TYPE: String", null, null);
		}
		this.documentId = documentId;
		this.keyModified.set("document_id", 1);

	}

	/**
	 * The method to get the createdTimeMs
	 * @returns {BigInt} A BigInt representing the createdTimeMs
	 */
	getCreatedTimeMs()	{
		return this.createdTimeMs;

	}

	/**
	 * The method to set the value to createdTimeMs
	 * @param {BigInt} createdTimeMs A BigInt representing the createdTimeMs
	 */
	setCreatedTimeMs(createdTimeMs)	{
		if((createdTimeMs != null) && (!(Object.prototype.toString.call(createdTimeMs) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdTimeMs EXPECTED TYPE: BigInt", null, null);
		}
		this.createdTimeMs = createdTimeMs;
		this.keyModified.set("created_time_ms", 1);

	}

	/**
	 * The method to get the createdTime
	 * @returns {String} A String representing the createdTime
	 */
	getCreatedTime()	{
		return this.createdTime;

	}

	/**
	 * The method to set the value to createdTime
	 * @param {String} createdTime A String representing the createdTime
	 */
	setCreatedTime(createdTime)	{
		if((createdTime != null) && (!(Object.prototype.toString.call(createdTime) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdTime EXPECTED TYPE: String", null, null);
		}
		this.createdTime = createdTime;
		this.keyModified.set("created_time", 1);

	}

	/**
	 * The method to get the expiresOnMs
	 * @returns {BigInt} A BigInt representing the expiresOnMs
	 */
	getExpiresOnMs()	{
		return this.expiresOnMs;

	}

	/**
	 * The method to set the value to expiresOnMs
	 * @param {BigInt} expiresOnMs A BigInt representing the expiresOnMs
	 */
	setExpiresOnMs(expiresOnMs)	{
		if((expiresOnMs != null) && (!(Object.prototype.toString.call(expiresOnMs) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: expiresOnMs EXPECTED TYPE: BigInt", null, null);
		}
		this.expiresOnMs = expiresOnMs;
		this.keyModified.set("expires_on_ms", 1);

	}

	/**
	 * The method to get the expiresOn
	 * @returns {String} A String representing the expiresOn
	 */
	getExpiresOn()	{
		return this.expiresOn;

	}

	/**
	 * The method to set the value to expiresOn
	 * @param {String} expiresOn A String representing the expiresOn
	 */
	setExpiresOn(expiresOn)	{
		if((expiresOn != null) && (!(Object.prototype.toString.call(expiresOn) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: expiresOn EXPECTED TYPE: String", null, null);
		}
		this.expiresOn = expiresOn;
		this.keyModified.set("expires_on", 1);

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
	MasterModel : SessionInfo,
	SessionInfo : SessionInfo
}
