const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class UIOptions{

	saveButton;
	chatPanel;
	fileMenu;
	darkMode;
	keyModified = new Map();
	/**
	 * The method to get the saveButton
	 * @returns {String} A String representing the saveButton
	 */
	getSaveButton()	{
		return this.saveButton;

	}

	/**
	 * The method to set the value to saveButton
	 * @param {String} saveButton A String representing the saveButton
	 */
	setSaveButton(saveButton)	{
		if((saveButton != null) && (!(Object.prototype.toString.call(saveButton) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: saveButton EXPECTED TYPE: String", null, null);
		}
		this.saveButton = saveButton;
		this.keyModified.set("save_button", 1);

	}

	/**
	 * The method to get the chatPanel
	 * @returns {String} A String representing the chatPanel
	 */
	getChatPanel()	{
		return this.chatPanel;

	}

	/**
	 * The method to set the value to chatPanel
	 * @param {String} chatPanel A String representing the chatPanel
	 */
	setChatPanel(chatPanel)	{
		if((chatPanel != null) && (!(Object.prototype.toString.call(chatPanel) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: chatPanel EXPECTED TYPE: String", null, null);
		}
		this.chatPanel = chatPanel;
		this.keyModified.set("chat_panel", 1);

	}

	/**
	 * The method to get the fileMenu
	 * @returns {String} A String representing the fileMenu
	 */
	getFileMenu()	{
		return this.fileMenu;

	}

	/**
	 * The method to set the value to fileMenu
	 * @param {String} fileMenu A String representing the fileMenu
	 */
	setFileMenu(fileMenu)	{
		if((fileMenu != null) && (!(Object.prototype.toString.call(fileMenu) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileMenu EXPECTED TYPE: String", null, null);
		}
		this.fileMenu = fileMenu;
		this.keyModified.set("file_menu", 1);

	}

	/**
	 * The method to get the darkMode
	 * @returns {String} A String representing the darkMode
	 */
	getDarkMode()	{
		return this.darkMode;

	}

	/**
	 * The method to set the value to darkMode
	 * @param {String} darkMode A String representing the darkMode
	 */
	setDarkMode(darkMode)	{
		if((darkMode != null) && (!(Object.prototype.toString.call(darkMode) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: darkMode EXPECTED TYPE: String", null, null);
		}
		this.darkMode = darkMode;
		this.keyModified.set("dark_mode", 1);

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
	MasterModel : UIOptions,
	UIOptions : UIOptions
}
