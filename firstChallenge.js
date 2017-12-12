const TAX_RATE = 0.13;
const PHONE_PRICE = 120.21;
const ACCESORY_PRICE = 12.50;
const SPENDING_TRESHOLD = 50;
var accountBallance = 1500;
var amount = 0;
function taxCount(){
	return amount *TAX_RATE;
}
taxCount();
for(var i = 0; amount <SPENDING_TRESHOLD; i++){
	amount = ACCESORY_PRICE;
}

