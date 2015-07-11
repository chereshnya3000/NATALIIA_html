
addEventListener(window, "onload",
 function () {

	var container = document.getElementById("wrapper");

	var imgArray = container.getElementsByTagName('img');


	for(var i=0; i < imgArray.length; i++) {
		// var src = imgArray[i].getAttribute("src");
	    var img = imgArray[i];
		var button = document.createElement('a');
		var text = document.createTextNode("download");
		button.appendChild(text);
		button.setAttribute("class", "downloadBtn");
		button.setAttribute("href", img.src);
		button.setAttribute("download", "");

		button.onclick = function (e) {
		    if (!e) {
		        window.event.cancelBubble = true;
		    } else if (e.stopPropagation) {
		        e.stopPropagation();
		    }
		}

        imgArray[i].parentNode.insertBefore(button, img);

		addEventListener(img, "onmouseover", (function (div) {
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
