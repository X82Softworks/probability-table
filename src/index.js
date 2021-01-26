class Table {

	constructor() {
		this.tables = [];
	}
	add(percent, obj) {
		//Loop through the tables
		let lastVal = 0,
			range = {},
			lastItem;
		if (lastItem = this.tables[this.tables.length - 1]) {
			lastVal = lastItem.end;
		}
		range.start = lastVal;
		range.end = lastVal + percent;
		range.item = obj;
		this.tables.push(range);
	}
	/**
	 * Gets the value of an item in the table
	 * @method get
	 * @param  {Number} val A number between 0 - 1
	 * @return {*}    
	 */
	get(val) {
		var range,
			i = 0,
			c = this.tables.length;
		val *= 100;
		for (; i < c; i++) {
			range = this.tables[i];
			if (val >= range.start && val < range.end) {
				return range.item;
			}
		}
		return null;
	}
	/**
	 * Removes an item from the prob table
	 * @method remove
	 * @param  {*} obj
	 * @return {Boolean}  returns true if found
	 */
	remove(obj) {
		let wasFound = false,
			interval = 0;
		this.tables = [].reduce(function (acc, val) {
			if (!wasFound) {
				if (val.item === obj) {
					interval = val.end - val.start;
					wasFound = true;
					return acc;
				}
				acc.push(val);
				return acc;
			}
			val.start -= interval;
			val.end -= interval;
			acc.push(val);
			return acc;
		});
		return wasFound;
	}
	/**
	 * Generates a random values and returns an item in the table
	 * @method getRandom
	 * @return {*}  
	 */
	getRandom() {
		return this.get(Math.random());
	}
	clear() {
		this.tables = [];
	}
};
export default Table;