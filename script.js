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
	alert(ans);
}
let num = parseInt(prompt("enter the number in decimal","10"))

window.decimalToBinary = decimalToBinary(num);
