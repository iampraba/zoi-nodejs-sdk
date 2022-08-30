const Constants = require("../../../../../utils/util/constants").MasterModel;
const SDKException = require("../../../../../routes/exception/sdk_exception").MasterModel;

class WatermarkSettings{

	text;
	type;
	orientation;
	fontName;
	fontSize;
	fontColor;
	opacity;
	keyModified = new Map();
	/**
	 * The method to get the text
	 * @returns {String} A String representing the text
	 */
	getText()	{
		return this.text;

	}

	/**
	 * The method to set the value to text
	 * @param {String} text A String representing the text
	 */
	setText(text)	{
		if((text != null) && (!(Object.prototype.toString.call(text) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: text EXPECTED TYPE: String", null, null);
		}
		this.text = text;
		this.keyModified.set("text", 1);

	}

	/**
	 * The method to get the type
	 * @returns {String} A String representing the type
	 */
	getType()	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param {String} type A String representing the type
	 */
	setType(type)	{
		if((type != null) && (!(Object.prototype.toString.call(type) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: String", null, null);
		}
		this.type = type;
		this.keyModified.set("type", 1);

	}

	/**
	 * The method to get the orientation
	 * @returns {String} A String representing the orientation
	 */
	getOrientation()	{
		return this.orientation;

	}

	/**
	 * The method to set the value to orientation
	 * @param {String} orientation A String representing the orientation
	 */
	setOrientation(orientation)	{
		if((orientation != null) && (!(Object.prototype.toString.call(orientation) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: orientation EXPECTED TYPE: String", null, null);
		}
		this.orientation = orientation;
		this.keyModified.set("orientation", 1);

	}

	/**
	 * The method to get the fontName
	 * @returns {String} A String representing the fontName
	 */
	getFontName()	{
		return this.fontName;

	}

	/**
	 * The method to set the value to fontName
	 * @param {String} fontName A String representing the fontName
	 */
	setFontName(fontName)	{
		if((fontName != null) && (!(Object.prototype.toString.call(fontName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fontName EXPECTED TYPE: String", null, null);
		}
		this.fontName = fontName;
		this.keyModified.set("font_name", 1);

	}

	/**
	 * The method to get the fontSize
	 * @returns {number} A number representing the fontSize
	 */
	getFontSize()	{
		return this.fontSize;

	}

	/**
	 * The method to set the value to fontSize
	 * @param {number} fontSize A number representing the fontSize
	 */
	setFontSize(fontSize)	{
		if((fontSize != null) && (!(Object.prototype.toString.call(fontSize) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fontSize EXPECTED TYPE: number", null, null);
		}
		this.fontSize = fontSize;
		this.keyModified.set("font_size", 1);

	}

	/**
	 * The method to get the fontColor
	 * @returns {String} A String representing the fontColor
	 */
	getFontColor()	{
		return this.fontColor;

	}

	/**
	 * The method to set the value to fontColor
	 * @param {String} fontColor A String representing the fontColor
	 */
	setFontColor(fontColor)	{
		if((fontColor != null) && (!(Object.prototype.toString.call(fontColor) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fontColor EXPECTED TYPE: String", null, null);
		}
		this.fontColor = fontColor;
		this.keyModified.set("font_color", 1);

	}

	/**
	 * The method to get the opacity
	 * @returns {Float} A Float representing the opacity
	 */
	getOpacity()	{
		return this.opacity;

	}

	/**
	 * The method to set the value to opacity
	 * @param {Float} opacity A Float representing the opacity
	 */
	setOpacity(opacity)	{
		if((opacity != null) && (!(Object.prototype.toString.call(opacity) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: opacity EXPECTED TYPE: Float", null, null);
		}
		this.opacity = opacity;
		this.keyModified.set("opacity", 1);

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
	MasterModel : WatermarkSettings,
	WatermarkSettings : WatermarkSettings
}
