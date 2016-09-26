(function() 
{
	var dialog = document.getElementById('window2');
	document.getElementById('icon2').onclick =  function() { window.alert("Joining PlexusMD");  };
	document.getElementById('text2').onclick =  function() { dialog.show();  };
	document.getElementById('exit2').onclick =  function() { dialog.close(); };
}
)();