// settings
var NUM_COLS = 4;

$(document).ready(function(){
	// initialize page
	var datalink = $("#datalink").val();
	$.get(datalink, function(data){
		modules = convert_1D_to_2D(data, NUM_COLS);
		$("body").append(Templates.modules({
			'modules': modules
		}));

		/* START jQuery Methods */

    var modules = new Bloodhound({
        datumTokenizer: function(d) { 
          return Bloodhound.tokenizers.whitespace(d.name); 
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        prefetch: '/modulesinfo'
    });
     
    modules.initialize();
     
    $('.searchbox .typeahead').typeahead(null, {
        name: 'modules',
        displayKey: 'name',
        source: modules.ttAdapter(),
    });

    $('#searchBtn').click(function (e) {
        e.preventDefault();
        $.scrollTo($('#moduleName').val());
    });

		/* END jQuery Methods */

	});
});

function convert_1D_to_2D(array, numcols){
	var new_array = [];
	var curr_row = [];
	for (var i = 0; i < array.length; i++){
		curr_row.push(array[i]);
		if ((i + 1) % numcols === 0){
			new_array.push(curr_row);
			curr_row = [];
		}
	}
	if (curr_row.length > 0)
		new_array.push(curr_row);
	return new_array;
}