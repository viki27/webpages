(function() 
{
	var dialog = document.getElementById('window3');
	document.getElementById('icon3').onclick =  function() { window.alert("Security & Privacy");  };
	document.getElementById('text3').onclick =  function() { dialog.show();  };
	document.getElementById('exit3').onclick =  function() { dialog.close(); };
}
)();