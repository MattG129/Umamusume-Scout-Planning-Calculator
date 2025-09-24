$(function() {
	$('#Header').html(`
		<center><h1>Umamusume Scout Planning Calculator</h1></center>

		<center>
	    	<div class="alert alert-warning" role="alert" style="max-width: 80%;">
		        Due to upcoming changes in rewards given from Club Rankings, the estimates provided by this calculator may change at the beginning of next month.
	    	</div>
		</center>
	`)
});


$(function() {
	let Footer = '<center> <p>&#xA9; All rights reserved by Cygames, Inc. Other properties belong to their respective owners.</p>'

	if (Page != 'index') {
		Footer += '<a href="index.html" style="color: #054295; margin: 5px;"><i class="bi bi-arrow-left"></i> Back to calculator</a>'
	};

	if (Page != 'MoreInfo') {
		Footer += '<a href="MoreInfo.html" style="color: #054295; margin: 5px;">More Info</a>'
	};
	
	Footer += '<a target="_blank" href="https://github.com/MattG129/Umamusume-Wish-Planning-Calculator/issues" style="color: #054295; margin: 5px;">Feedback</a>'
	
	Footer += '<a target="_blank" href="https://mattg129.github.io/Genshin-Wish-Calculator/" style="color: #054295; margin: 5px;">Genshin Calculator</a> </center>'
	
	$('#Footer').html(Footer)
});