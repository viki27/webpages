(function() 
{
	var dialog = document.getElementById('window6');
	document.getElementById('icon6').onclick =  function() { window.alert("Account Suspention");  };
	document.getElementById('text6').onclick =  function() { dialog.show();  };
	document.getElementById('exit6').onclick =  function() { dialog.close(); };
}
)();