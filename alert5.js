(function() 
{
	var dialog = document.getElementById('window5');
	document.getElementById('icon5').onclick =  function() { window.alert("Copyright Infringement");  };
	document.getElementById('text5').onclick =  function() { dialog.show();  };
	document.getElementById('exit5').onclick =  function() { dialog.close(); };
}
)();