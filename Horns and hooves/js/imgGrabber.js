
addEventListener(window, "onload",
 function () {

	var container = document.getElementById("wrapper");

	var imgArray = container.getElementsByTagName('img');


	for(var i=0; i < imgArray.length; i++) {
		// var src = imgArray[i].getAttribute("src");

		var button = document.createElement('div');
		var text = document.createTextNode("download");
		button.appendChild(text);
		button.setAttribute("class", "downloadBtn");
		imgArray[i].parentNode.insertBefore(button, imgArray[i]);

		addEventListener(imgArray[i], "onmouseover", (function(div) {
			return function(){
				div.classList.add("enabled");
			}
		}
		)(button));


		addEventListener(imgArray[i], "onmouseout", (function(div) {
			return function() {
				div.setAttribute("class", "downloadBtn");
			}

		})(button));
	}

 });
