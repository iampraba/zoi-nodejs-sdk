const Constants = require("../../../../../utils/util/constants").MasterModel;
const SDKException = require("../../../../../routes/exception/sdk_exception").MasterModel;

class Margin{

	left;
	right;
	top;
	bottom;
	keyModified = new Map();
	/**
	 * The method to get the left
	 * @returns {String} A String representing the left
	 */
	getLeft()	{
		return this.left;

	}

	/**
	 * The method to set the value to left
	 * @param {String} left A String representing the left
	 */
	setLeft(left)	{
		if((left != null) && (!(Object.prototype.toString.call(left) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: left EXPECTED TYPE: String", null, null);
		}
		this.left = left;
		this.keyModified.set("left", 1);

	}

	/**
	 * The method to get the right
	 * @returns {String} A String representing the right
	 */
	getRight()	{
		return this.right;

	}

	/**
	 * The method to set the value to right
	 * @param {String} right A String representing the right
	 */
	setRight(right)	{
		if((right != null) && (!(Object.prototype.toString.call(right) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: right EXPECTED TYPE: String", null, null);
		}
		this.right = right;
		this.keyModified.set("right", 1);

	}

	/**
	 * The method to get the top
	 * @returns {String} A String representing the top
	 */
	getTop()	{
		return this.top;

	}

	/**
	 * The method to set the value to top
	 * @param {String} top A String representing the top
	 */
	setTop(top)	{
		if((top != null) && (!(Object.prototype.toString.call(top) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: top EXPECTED TYPE: String", null, null);
		}
		this.top = top;
		this.keyModified.set("top", 1);

	}

	/**
	 * The method to get the bottom
	 * @returns {String} A String representing the bottom
	 */
	getBottom()	{
		return this.bottom;

	}

	/**
	 * The method to set the value to bottom
	 * @param {String} bottom A String representing the bottom
	 */
	setBottom(bottom)	{
		if((bottom != null) && (!(Object.prototype.toString.call(bottom) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: bottom EXPECTED TYPE: String", null, null);
		}
		this.bottom = bottom;
		this.keyModified.set("bottom", 1);

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
	MasterModel : Margin,
	Margin : Margin
}
