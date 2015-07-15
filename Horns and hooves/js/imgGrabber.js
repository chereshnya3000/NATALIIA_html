
addEventListener(window, "onload",
 function () {

		var imgs = document.getElementsByTagName('img'),
    L = imgs.length,
    i, tmp;
 
		for (i = 0; i < L; i++) {

				var src = imgs[i].getAttribute("src");

		    tmp = document.createElement('a');
		    tmp.setAttribute("class", "download");
		    tmp.setAttribute("href", imgs[i].src);
		    tmp.setAttribute("download", "");

		    imgs[i].parentNode.insertBefore(tmp, imgs[i]);
		    tmp.appendChild(imgs[i]);

		    var button = document.createElement('div');
		    button.setAttribute("class", "downloadMe");

		    var text = document.createTextNode("download");
		    button.appendChild(text);
		    tmp.appendChild(button);

		};

 });
