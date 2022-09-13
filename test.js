let price_st = 2100;
let how_st = 1000;
function how(st) {
	how_st = st;
	rez = how_st / price_st;
	document.getElementById('rezult').innerText = "You can buy " + rez + " BTC";
}
function price(st) {
	price_st = st;
	rez = how_st / price_st;
	document.getElementById('rezult').innerText = "You can buy " + rez + " BTC";
}