function sendAjax(url){
	var xhr = new XMLHttpRequest();
	xhr.open("POST",url,true);
	xhr.send();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			var data = xhr.responseText;
			console.log(data);
		}
	}
}
