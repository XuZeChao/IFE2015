window.onload = function () {
	var oText = document.getElementById("text");
	var oBtn = document.getElementById("btn");
    var oDiv = document.createElement("div");
    oBtn.onclick = function () {
		var arr1 = oText.value.split(/[\s,，、;；]+/g);
        
        /*去空格 除重*/
		for (var i=0; i<arr1.length; i++) {       
			if (arr1[i] == " ") {
	    		arr1.splice(i,1);
	    	}
			for (var j=i+1; j<arr1.length; j++) {
				if (arr1[i] == arr1[j]) {
					arr1.splice(j,1);
					break;
				}
			}
		}
		
		if (oText.value == "" || arr1.length > 10) {
			alert("请正确输入");
		} else {
			for (var i=0; i<arr1.length; i++) {
				var hobby = document.createElement("input");
				hobby.type = "checkbox";
				oDiv.appendChild(hobby);
			    var hobby_text = document.createTextNode(arr1[i] + " ");
			    oDiv.appendChild(hobby_text);
			}	
			document.body.appendChild(oDiv);
	    }
    }
}