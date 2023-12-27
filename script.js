function firstNonRepeatedChar(str) {
 let n=str.length;
	if(n%2==0)
 {
	 return null;
 }
else{
	let nonREPEAT="",chech=true;
for(let i=0;i<n;i=i+2){
	if(str[i]!=str[i+1]){
		return str[i];
	}
}
}
	
 
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
