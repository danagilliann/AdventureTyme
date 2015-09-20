$(document).ready(function() {
	$('.nav-tabs a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
   });

	$('#submitButton').click(function() {
    var username = $("#username").val(),
		    password = $("#password").val();
		$.post( "/create", { username: username, password: password } );
  });
});
