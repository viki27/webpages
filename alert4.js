(function() 
{
	var dialog = document.getElementById('window4');
	document.getElementById('icon4').onclick =  function() { window.alert("Fake Profile / Impersonation");  };
	document.getElementById('text4').onclick =  function() { dialog.show();  };
	document.getElementById('exit4').onclick =  function() { dialog.close(); };
}
)();