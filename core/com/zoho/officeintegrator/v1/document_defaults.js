const Constants = require("../../../../../utils/util/constants").MasterModel;
const SDKException = require("../../../../../routes/exception/sdk_exception").MasterModel;

class DocumentDefaults{

	orientation;
	paperSize;
	fontName;
	fontSize;
	trackChanges;
	language;
	margin;
	keyModified = new Map();
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
	 * The method to get the paperSize
	 * @returns {String} A String representing the paperSize
	 */
	getPaperSize()	{
		return this.paperSize;

	}

	/**
	 * The method to set the value to paperSize
	 * @param {String} paperSize A String representing the paperSize
	 */
	setPaperSize(paperSize)	{
		if((paperSize != null) && (!(Object.prototype.toString.call(paperSize) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paperSize EXPECTED TYPE: String", null, null);
		}
		this.paperSize = paperSize;
		this.keyModified.set("paper_size", 1);

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
	 * The method to get the trackChanges
	 * @returns {String} A String representing the trackChanges
	 */
	getTrackChanges()	{
		return this.trackChanges;

	}

	/**
	 * The method to set the value to trackChanges
	 * @param {String} trackChanges A String representing the trackChanges
	 */
	setTrackChanges(trackChanges)	{
		if((trackChanges != null) && (!(Object.prototype.toString.call(trackChanges) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: trackChanges EXPECTED TYPE: String", null, null);
		}
		this.trackChanges = trackChanges;
		this.keyModified.set("track_changes", 1);

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
	 * The method to get the margin
	 * @returns {Margin} An instance of Margin
	 */
	getMargin()	{
		return this.margin;

	}

	/**
	 * The method to set the value to margin
	 * @param {Margin} margin An instance of Margin
	 */
	setMargin(margin)	{
		const Margin = require("./margin").MasterModel;
		if((margin != null) && (!(margin instanceof Margin)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: margin EXPECTED TYPE: Margin", null, null);
		}
		this.margin = margin;
		this.keyModified.set("margin", 1);

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
	MasterModel : DocumentDefaults,
	DocumentDefaults : DocumentDefaults
}
