window.onload = function () {
	var oText = document.getElementById("text");
	var oBtn = document.getElementById("btn");
	var oNow = null;
	var oNew = null;
	var timer = null;
	var str = "";
	var oP = document.createElement("p");
	document.body.appendChild(oP);

	oBtn.onclick = function () {
		oNew = new Date(oText.value + " " + "00:00:00");
		setInterval(function () {
			oNow = new Date();
			t = Math.floor( ( oNew - oNow ) / 1000 );
			
			if ( t >= 0 ) {
				
				str = Math.floor(t/86400)+'天'+Math.floor(t%86400/3600)+'时'+Math.floor(t%86400%3600/60)+'分'+t%60+'秒';
				oP.innerHTML = str;
			} else {
				
				clearInterval( timer );
			}
		},1000);
	}
}	