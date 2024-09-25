function Date(day, month, year) {
	this.day = day;
	this.month = month;
	this.year = year;
	this.getDay = function () {
		return this.day;
	};
	this.getMonth = function () {
		return this.month;
	};
	this.getYear = function () {
		return this.year;
	};
	this.setDay = function (day) {
		this.day = day;
	};
	this.setMonth = function (month) {
		this.month = month;
	};
	this.setYear = function (year) {
		this.year = year;
	};
	this.setDate = function (day, month, year) {
		this.day = day;
		this.month = month;
		this.year = year;
	};
	this.toString = function () {
		return this.day + "/" + this.month + "/" + this.year;
	};
}
let date = new Date(23, 4, 2002);
console.log(date.setDate(10, 10, 2019));
console.log(date.toString()); // 10/10/2019
