function firstNonRepeatedChar(str) {
 let n=str.length;
	

	let nonREPEAT="",chech=true;
for(let i=0;i<n;i=i+2){
	if(str[i]!=str[i+1]){
		return str[i];
	}
}
return null;
	}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
