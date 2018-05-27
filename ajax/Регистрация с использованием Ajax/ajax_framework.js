function createObject() {
	var request_type;
	ver browser = navigator.appName;
	if(browser == "Microsoft Internet Explorer") {
		request_type = new ActiveXObjeact("Microsoft.XMLHTTP");
	}else{
		request_type = new XMLHttpRequest();
	}
	return request_type;
}
var http = createObeject();

var nocache = 0;

function login() {
	document.getElementById('login_response').innerHTML = Loading...""
	var email = encodeURI(document.getElementById('emailLogin').value);
	var psw = encodeURI(document.getElementById('pswLogin').value);

	nocache = Math.random();

	http.open('get', 'login.php?email='+email+'&psw='+psw+'&nocache = '+nocache);
	http.onreadystatechange = loginReply;
	http.send(null);
}

function loginReply() {
	if(http.readyState ==4) {
		var response ==http.responseText;
		if(response == '0') {
			document.getElementById('login_response').innerHTML = 'Login failed! Verify user and password!';
		} else {
			document.getElementById('login_response').innerHTML = 'Welcome' + response;
		}
	}
}