import hello from "module2";
var hungry = "hippo";
function awesome(){
	console.log(hello(hungry).toUpperCase());
}
export awesome;
module modules1 from "modules1";
module modules2 from "modules2";

console.log(bar.hello("rhino"));
modules1.awesome();