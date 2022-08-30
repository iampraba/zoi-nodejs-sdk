const Constants = require("../../../../../utils/util/constants").MasterModel;
const SDKException = require("../../../../../routes/exception/sdk_exception").MasterModel;

class EditorSettings{

	unit;
	language;
	view;
	keyModified = new Map();
	/**
	 * The method to get the unit
	 * @returns {String} A String representing the unit
	 */
	getUnit()	{
		return this.unit;

	}

	/**
	 * The method to set the value to unit
	 * @param {String} unit A String representing the unit
	 */
	setUnit(unit)	{
		if((unit != null) && (!(Object.prototype.toString.call(unit) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: unit EXPECTED TYPE: String", null, null);
		}
		this.unit = unit;
		this.keyModified.set("unit", 1);

	}

	/**
	 * The method to get the language
	 * @returns {String} A String representing the language
	 */
	getLanguage()	{
		return this.language;

	}

	/**
	 * The method to set the value to language
	 * @param {String} language A String representing the language
	 */
	setLanguage(language)	{
		if((language != null) && (!(Object.prototype.toString.call(language) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: language EXPECTED TYPE: String", null, null);
		}
		this.language = language;
		this.keyModified.set("language", 1);

	}

	/**
	 * The method to get the view
	 * @returns {String} A String representing the view
	 */
	getView()	{
		return this.view;

	}

	/**
	 * The method to set the value to view
	 * @param {String} view A String representing the view
	 */
	setView(view)	{
		if((view != null) && (!(Object.prototype.toString.call(view) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: view EXPECTED TYPE: String", null, null);
		}
		this.view = view;
		this.keyModified.set("view", 1);

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
	MasterModel : EditorSettings,
	EditorSettings : EditorSettings
}
