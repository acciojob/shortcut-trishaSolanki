function shortcut(s1, s2) {
  // your code here
if(s1.length > 0 && s2.length > 0){
	return s1.charAt(0).toUpperCase() + s2.charAt(0).toUpperCase();
}else{
	return '';
}
}

// Do not change the code below.
const s1 = prompt("Enetr s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
