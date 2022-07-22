const StreamWrapper = require("../../../../../../utils/util/stream_wrapper").MasterModel;
const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class CompareDocumentParameters{

	document1;
	url1;
	document2;
	url2;
	title;
	lang;
	keyModified = new Map();
	/**
	 * The method to get the document1
	 * @returns {StreamWrapper} An instance of StreamWrapper
	 */
	getDocument1()	{
		return this.document1;

	}

	/**
	 * The method to set the value to document1
	 * @param {StreamWrapper} document1 An instance of StreamWrapper
	 */
	setDocument1(document1)	{
		if((document1 != null) && (!(document1 instanceof StreamWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: document1 EXPECTED TYPE: StreamWrapper", null, null);
		}
		this.document1 = document1;
		this.keyModified.set("document1", 1);

	}

	/**
	 * The method to get the url1
	 * @returns {String} A String representing the url1
	 */
	getUrl1()	{
		return this.url1;

	}

	/**
	 * The method to set the value to url1
	 * @param {String} url1 A String representing the url1
	 */
	setUrl1(url1)	{
		if((url1 != null) && (!(Object.prototype.toString.call(url1) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: url1 EXPECTED TYPE: String", null, null);
		}
		this.url1 = url1;
		this.keyModified.set("url1", 1);

	}

	/**
	 * The method to get the document2
	 * @returns {StreamWrapper} An instance of StreamWrapper
	 */
	getDocument2()	{
		return this.document2;

	}

	/**
	 * The method to set the value to document2
	 * @param {StreamWrapper} document2 An instance of StreamWrapper
	 */
	setDocument2(document2)	{
		if((document2 != null) && (!(document2 instanceof StreamWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: document2 EXPECTED TYPE: StreamWrapper", null, null);
		}
		this.document2 = document2;
		this.keyModified.set("document2", 1);

	}

	/**
	 * The method to get the url2
	 * @returns {String} A String representing the url2
	 */
	getUrl2()	{
		return this.url2;

	}

	/**
	 * The method to set the value to url2
	 * @param {String} url2 A String representing the url2
	 */
	setUrl2(url2)	{
		if((url2 != null) && (!(Object.prototype.toString.call(url2) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: url2 EXPECTED TYPE: String", null, null);
		}
		this.url2 = url2;
		this.keyModified.set("url2", 1);

	}

	/**
	 * The method to get the title
	 * @returns {String} A String representing the title
	 */
	getTitle()	{
		return this.title;

	}

	/**
	 * The method to set the value to title
	 * @param {String} title A String representing the title
	 */
	setTitle(title)	{
		if((title != null) && (!(Object.prototype.toString.call(title) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: title EXPECTED TYPE: String", null, null);
		}
		this.title = title;
		this.keyModified.set("title", 1);

	}

	/**
	 * The method to get the lang
	 * @returns {String} A String representing the lang
	 */
	getLang()	{
		return this.lang;

	}

	/**
	 * The method to set the value to lang
	 * @param {String} lang A String representing the lang
	 */
	setLang(lang)	{
		if((lang != null) && (!(Object.prototype.toString.call(lang) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lang EXPECTED TYPE: String", null, null);
		}
		this.lang = lang;
		this.keyModified.set("lang", 1);

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
	MasterModel : CompareDocumentParameters,
	CompareDocumentParameters : CompareDocumentParameters
}
