//your JS code here. If required.
function daysOfAYear(num) {
	if(num%4 === 0 && num%100 !===0 || num%400 === 0)
	{
		return 366;
	}
	else{
		return 365;
	}
}
daysOfAYear(1990)
console.log(daysOfAYear(num));
