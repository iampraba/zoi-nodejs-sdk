const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class InvaildConfigurationException{

	keyName;
	code;
	parameterName;
	message;
	keyModified = new Map();
	/**
	 * The method to get the keyName
	 * @returns {String} A String representing the keyName
	 */
	getKeyName()	{
		return this.keyName;

	}

	/**
	 * The method to set the value to keyName
	 * @param {String} keyName A String representing the keyName
	 */
	setKeyName(keyName)	{
		if((keyName != null) && (!(Object.prototype.toString.call(keyName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: keyName EXPECTED TYPE: String", null, null);
		}
		this.keyName = keyName;
		this.keyModified.set("key_name", 1);

	}

	/**
	 * The method to get the code
	 * @returns {BigInt} A BigInt representing the code
	 */
	getCode()	{
		return this.code;

	}

	/**
	 * The method to set the value to code
	 * @param {BigInt} code A BigInt representing the code
	 */
	setCode(code)	{
		if((code != null) && (!(Object.prototype.toString.call(code) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: code EXPECTED TYPE: BigInt", null, null);
		}
		this.code = code;
		this.keyModified.set("code", 1);

	}

	/**
	 * The method to get the parameterName
	 * @returns {String} A String representing the parameterName
	 */
	getParameterName()	{
		return this.parameterName;

	}

	/**
	 * The method to set the value to parameterName
	 * @param {String} parameterName A String representing the parameterName
	 */
	setParameterName(parameterName)	{
		if((parameterName != null) && (!(Object.prototype.toString.call(parameterName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: parameterName EXPECTED TYPE: String", null, null);
		}
		this.parameterName = parameterName;
		this.keyModified.set("parameter_name", 1);

	}

	/**
	 * The method to get the message
	 * @returns {String} A String representing the message
	 */
	getMessage()	{
		return this.message;

	}

	/**
	 * The method to set the value to message
	 * @param {String} message A String representing the message
	 */
	setMessage(message)	{
		if((message != null) && (!(Object.prototype.toString.call(message) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: message EXPECTED TYPE: String", null, null);
		}
		this.message = message;
		this.keyModified.set("message", 1);

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
	MasterModel : InvaildConfigurationException,
	InvaildConfigurationException : InvaildConfigurationException
}
