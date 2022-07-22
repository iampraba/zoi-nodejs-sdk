const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class PlanDetails{

	usageLimit;
	apikeyGeneratedTime;
	remainingUsageLimit;
	lastPaymentDateMs;
	nextPaymentDateMs;
	lastPaymentDate;
	apikeyId;
	planName;
	apikeyGeneratedTimeMs;
	paymentLink;
	nextPaymentDate;
	subscriptionInterval;
	totalUsage;
	subscriptionPeriod;
	keyModified = new Map();
	/**
	 * The method to get the usageLimit
	 * @returns {BigInt} A BigInt representing the usageLimit
	 */
	getUsageLimit()	{
		return this.usageLimit;

	}

	/**
	 * The method to set the value to usageLimit
	 * @param {BigInt} usageLimit A BigInt representing the usageLimit
	 */
	setUsageLimit(usageLimit)	{
		if((usageLimit != null) && (!(Object.prototype.toString.call(usageLimit) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: usageLimit EXPECTED TYPE: BigInt", null, null);
		}
		this.usageLimit = usageLimit;
		this.keyModified.set("usage_limit", 1);

	}

	/**
	 * The method to get the apikeyGeneratedTime
	 * @returns {String} A String representing the apikeyGeneratedTime
	 */
	getApikeyGeneratedTime()	{
		return this.apikeyGeneratedTime;

	}

	/**
	 * The method to set the value to apikeyGeneratedTime
	 * @param {String} apikeyGeneratedTime A String representing the apikeyGeneratedTime
	 */
	setApikeyGeneratedTime(apikeyGeneratedTime)	{
		if((apikeyGeneratedTime != null) && (!(Object.prototype.toString.call(apikeyGeneratedTime) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apikeyGeneratedTime EXPECTED TYPE: String", null, null);
		}
		this.apikeyGeneratedTime = apikeyGeneratedTime;
		this.keyModified.set("apikey_generated_time", 1);

	}

	/**
	 * The method to get the remainingUsageLimit
	 * @returns {BigInt} A BigInt representing the remainingUsageLimit
	 */
	getRemainingUsageLimit()	{
		return this.remainingUsageLimit;

	}

	/**
	 * The method to set the value to remainingUsageLimit
	 * @param {BigInt} remainingUsageLimit A BigInt representing the remainingUsageLimit
	 */
	setRemainingUsageLimit(remainingUsageLimit)	{
		if((remainingUsageLimit != null) && (!(Object.prototype.toString.call(remainingUsageLimit) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: remainingUsageLimit EXPECTED TYPE: BigInt", null, null);
		}
		this.remainingUsageLimit = remainingUsageLimit;
		this.keyModified.set("remaining_usage_limit", 1);

	}

	/**
	 * The method to get the lastPaymentDateMs
	 * @returns {BigInt} A BigInt representing the lastPaymentDateMs
	 */
	getLastPaymentDateMs()	{
		return this.lastPaymentDateMs;

	}

	/**
	 * The method to set the value to lastPaymentDateMs
	 * @param {BigInt} lastPaymentDateMs A BigInt representing the lastPaymentDateMs
	 */
	setLastPaymentDateMs(lastPaymentDateMs)	{
		if((lastPaymentDateMs != null) && (!(Object.prototype.toString.call(lastPaymentDateMs) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lastPaymentDateMs EXPECTED TYPE: BigInt", null, null);
		}
		this.lastPaymentDateMs = lastPaymentDateMs;
		this.keyModified.set("last_payment_date_ms", 1);

	}

	/**
	 * The method to get the nextPaymentDateMs
	 * @returns {BigInt} A BigInt representing the nextPaymentDateMs
	 */
	getNextPaymentDateMs()	{
		return this.nextPaymentDateMs;

	}

	/**
	 * The method to set the value to nextPaymentDateMs
	 * @param {BigInt} nextPaymentDateMs A BigInt representing the nextPaymentDateMs
	 */
	setNextPaymentDateMs(nextPaymentDateMs)	{
		if((nextPaymentDateMs != null) && (!(Object.prototype.toString.call(nextPaymentDateMs) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: nextPaymentDateMs EXPECTED TYPE: BigInt", null, null);
		}
		this.nextPaymentDateMs = nextPaymentDateMs;
		this.keyModified.set("next_payment_date_ms", 1);

	}

	/**
	 * The method to get the lastPaymentDate
	 * @returns {String} A String representing the lastPaymentDate
	 */
	getLastPaymentDate()	{
		return this.lastPaymentDate;

	}

	/**
	 * The method to set the value to lastPaymentDate
	 * @param {String} lastPaymentDate A String representing the lastPaymentDate
	 */
	setLastPaymentDate(lastPaymentDate)	{
		if((lastPaymentDate != null) && (!(Object.prototype.toString.call(lastPaymentDate) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lastPaymentDate EXPECTED TYPE: String", null, null);
		}
		this.lastPaymentDate = lastPaymentDate;
		this.keyModified.set("last_payment_date", 1);

	}

	/**
	 * The method to get the apikeyId
	 * @returns {BigInt} A BigInt representing the apikeyId
	 */
	getApikeyId()	{
		return this.apikeyId;

	}

	/**
	 * The method to set the value to apikeyId
	 * @param {BigInt} apikeyId A BigInt representing the apikeyId
	 */
	setApikeyId(apikeyId)	{
		if((apikeyId != null) && (!(Object.prototype.toString.call(apikeyId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apikeyId EXPECTED TYPE: BigInt", null, null);
		}
		this.apikeyId = apikeyId;
		this.keyModified.set("apikey_id", 1);

	}

	/**
	 * The method to get the planName
	 * @returns {String} A String representing the planName
	 */
	getPlanName()	{
		return this.planName;

	}

	/**
	 * The method to set the value to planName
	 * @param {String} planName A String representing the planName
	 */
	setPlanName(planName)	{
		if((planName != null) && (!(Object.prototype.toString.call(planName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: planName EXPECTED TYPE: String", null, null);
		}
		this.planName = planName;
		this.keyModified.set("plan_name", 1);

	}

	/**
	 * The method to get the apikeyGeneratedTimeMs
	 * @returns {BigInt} A BigInt representing the apikeyGeneratedTimeMs
	 */
	getApikeyGeneratedTimeMs()	{
		return this.apikeyGeneratedTimeMs;

	}

	/**
	 * The method to set the value to apikeyGeneratedTimeMs
	 * @param {BigInt} apikeyGeneratedTimeMs A BigInt representing the apikeyGeneratedTimeMs
	 */
	setApikeyGeneratedTimeMs(apikeyGeneratedTimeMs)	{
		if((apikeyGeneratedTimeMs != null) && (!(Object.prototype.toString.call(apikeyGeneratedTimeMs) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apikeyGeneratedTimeMs EXPECTED TYPE: BigInt", null, null);
		}
		this.apikeyGeneratedTimeMs = apikeyGeneratedTimeMs;
		this.keyModified.set("apikey_generated_time_ms", 1);

	}

	/**
	 * The method to get the paymentLink
	 * @returns {String} A String representing the paymentLink
	 */
	getPaymentLink()	{
		return this.paymentLink;

	}

	/**
	 * The method to set the value to paymentLink
	 * @param {String} paymentLink A String representing the paymentLink
	 */
	setPaymentLink(paymentLink)	{
		if((paymentLink != null) && (!(Object.prototype.toString.call(paymentLink) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paymentLink EXPECTED TYPE: String", null, null);
		}
		this.paymentLink = paymentLink;
		this.keyModified.set("payment_link", 1);

	}

	/**
	 * The method to get the nextPaymentDate
	 * @returns {String} A String representing the nextPaymentDate
	 */
	getNextPaymentDate()	{
		return this.nextPaymentDate;

	}

	/**
	 * The method to set the value to nextPaymentDate
	 * @param {String} nextPaymentDate A String representing the nextPaymentDate
	 */
	setNextPaymentDate(nextPaymentDate)	{
		if((nextPaymentDate != null) && (!(Object.prototype.toString.call(nextPaymentDate) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: nextPaymentDate EXPECTED TYPE: String", null, null);
		}
		this.nextPaymentDate = nextPaymentDate;
		this.keyModified.set("next_payment_date", 1);

	}

	/**
	 * The method to get the subscriptionInterval
	 * @returns {String} A String representing the subscriptionInterval
	 */
	getSubscriptionInterval()	{
		return this.subscriptionInterval;

	}

	/**
	 * The method to set the value to subscriptionInterval
	 * @param {String} subscriptionInterval A String representing the subscriptionInterval
	 */
	setSubscriptionInterval(subscriptionInterval)	{
		if((subscriptionInterval != null) && (!(Object.prototype.toString.call(subscriptionInterval) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: subscriptionInterval EXPECTED TYPE: String", null, null);
		}
		this.subscriptionInterval = subscriptionInterval;
		this.keyModified.set("subscription_interval", 1);

	}

	/**
	 * The method to get the totalUsage
	 * @returns {BigInt} A BigInt representing the totalUsage
	 */
	getTotalUsage()	{
		return this.totalUsage;

	}

	/**
	 * The method to set the value to totalUsage
	 * @param {BigInt} totalUsage A BigInt representing the totalUsage
	 */
	setTotalUsage(totalUsage)	{
		if((totalUsage != null) && (!(Object.prototype.toString.call(totalUsage) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: totalUsage EXPECTED TYPE: BigInt", null, null);
		}
		this.totalUsage = totalUsage;
		this.keyModified.set("total_usage", 1);

	}

	/**
	 * The method to get the subscriptionPeriod
	 * @returns {String} A String representing the subscriptionPeriod
	 */
	getSubscriptionPeriod()	{
		return this.subscriptionPeriod;

	}

	/**
	 * The method to set the value to subscriptionPeriod
	 * @param {String} subscriptionPeriod A String representing the subscriptionPeriod
	 */
	setSubscriptionPeriod(subscriptionPeriod)	{
		if((subscriptionPeriod != null) && (!(Object.prototype.toString.call(subscriptionPeriod) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: subscriptionPeriod EXPECTED TYPE: String", null, null);
		}
		this.subscriptionPeriod = subscriptionPeriod;
		this.keyModified.set("subscription_period", 1);

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
	MasterModel : PlanDetails,
	PlanDetails : PlanDetails
}
