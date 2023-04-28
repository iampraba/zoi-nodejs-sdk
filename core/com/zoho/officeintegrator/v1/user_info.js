const Constants = require("../../../../../utils/util/constants").MasterModel;
const SDKException = require("../../../../../routes/exception/sdk_exception").MasterModel;

class UserInfo{

	userId;
	displayName;
	keyModified = new Map();
	/**
	 * The method to get the userId
	 * @returns {String} A String representing the userId
	 */
	getUserId()	{
		return this.userId;

	}

	/**
	 * The method to set the value to userId
	 * @param {String} userId A String representing the userId
	 */
	setUserId(userId)	{
		if((userId != null) && (!(Object.prototype.toString.call(userId) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: userId EXPECTED TYPE: String", null, null);
		}
		this.userId = userId;
		this.keyModified.set("user_id", 1);

	}

	/**
	 * The method to get the displayName
	 * @returns {String} A String representing the displayName
	 */
	getDisplayName()	{
		return this.displayName;

	}

	/**
	 * The method to set the value to displayName
	 * @param {String} displayName A String representing the displayName
	 */
	setDisplayName(displayName)	{
		if((displayName != null) && (!(Object.prototype.toString.call(displayName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayName EXPECTED TYPE: String", null, null);
		}
		this.displayName = displayName;
		this.keyModified.set("display_name", 1);

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
	MasterModel : UserInfo,
	UserInfo : UserInfo
}
