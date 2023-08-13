function decimalToBinary(num) {
  //Write you code here
	let str = "";
	let n = num;

	while(n > 1){
		let remain = n % 2;
		str += remain;
		n = Math.floor(n/2);
	}

	if(n===1) str += "1";
	let ans = [...str].reverse().join("");
	return ans;
}


window.decimalToBinary = decimalToBinary;
