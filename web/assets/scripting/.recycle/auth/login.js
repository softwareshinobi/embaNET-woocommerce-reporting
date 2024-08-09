$(document).ready(function () {

    console.log("list / cookies / all");

    console.log(Cookies.get());

});

function loginUser() {

	console.debug("enter > loginUser");	

	console.log("list / cookies / before");

	console.log(Cookies.get());

	Cookies.set(KEY_USERNAME, $("#userName").val(), { path: '/' , expires: 365 })

	console.log("list / cookies / after");

	console.log(Cookies.get());

	console.log("list / cookies / ", KEY_USERNAME);

	console.log(Cookies.get(KEY_USERNAME));

	console.debug("exit < loginUser");	

	window.location.replace("../dashboard.html");

}
