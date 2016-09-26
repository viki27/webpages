(function() 
{
	var dialog = document.getElementById('window1');
	document.getElementById('icon1').onclick =  function() { window.alert("About PlexusMD");  };
	document.getElementById('text1').onclick =  function() { dialog.show();  };
	document.getElementById('exit1').onclick =  function() { dialog.close(); };
}
)();

<style>
			
			img {
			
			opacity: 1.0;
			filter: alpha(opacity=100); /* For IE8 and earlier */
				}

			img:hover {
						
			filter:hue-rotate(90deg);
			opacity: 0.5;
			
			filter: alpha(opacity=50); /* For IE8 and earlier */
			}
			</style>