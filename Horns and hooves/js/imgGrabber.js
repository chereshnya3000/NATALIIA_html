
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

				
		addEventListener(imgArray[i], "onmouseover", (function(index, div) {

			return function(){
				
				imgArray[index].parentNode.insertBefore(div, imgArray[index]);
				div.classList.add("enabled");
			
			}
		}
		)(i, button));
		
		
		addEventListener(imgArray[i], "onmouseout", (function(div) { 

			return function() {
			
				div.parentNode.removeChild(div);

			}

		})(button));
	}	
   
 });




