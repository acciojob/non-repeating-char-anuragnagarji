function firstNonRepeatedChar(str) {
 let n=str.length;
	

	let nonREPEAT="",check={};
	
for(let i=0;i<n;i=i+1){
	if(Object.hasOwn(check,str[i])){
	check[str[i]]++;
	}
	else{
		check[str[i]]=1;
	}
}
	
	for(let i in check){
		if(check[i]==1){
			return i;
		}
	}
	
return null;
	}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
