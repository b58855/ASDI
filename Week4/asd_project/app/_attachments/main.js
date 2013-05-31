//Evan Combs
//ASDI 1305

$(document).on('pageinit', '#home', function()
{
	//code for home page
	
});

$('#addItems').on('pageinit', function()
{
	//code for add/edit item page will go here
	$('form #save').on('click', function(){
			var aiform = $('form');
			var aierrorlink = $('#errorslink');
			
			aiform.validate(
			{
				invalidHandler: function(form, validator)
				{
					aierrorlink.click();
					var text = '';
					for(var key in validator.submitted)
					{
						text += '<li>'+ key +'</li>';
					};
					$('#errorPage ul').html(text);
				},
				submitHandler: function()
				{
					var data = {
						"_id": "item:" + $('#category').val() + ':' + $('#task').val(),
						"category": ['Category', $('#category').val()],
						"task": ['Task', $('#task').val()],
						"assigned": ['Assigned', $('#assigned').val()],
						"startDate": ['Start Date', $('#startDate').val()],
						"endDate": ['End Date', $('#endDate').val()],
						"hours": ['Hours', $('#hours').val()],
						"description": ['Description', $('#description').val()]
					};
					$.couch.db("asd_project").saveDoc(data);
					window.location.reload();
				}
			});
		});
	$('form #reset').on('click', function(){
			window.location.reload();
		});
});


$(document).on('pageinit', '#editItems', function()
{	
	$('form #saveEdit').on('click', function(){
			var aiform = $('#form2');
			var aierrorlink = $('#errorslink2');
			
			aiform.validate(
			{
				invalidHandler: function(form, validator)
				{
					aierrorlink.click();
					var text = '';
					for(var key in validator.submitted)
					{
						text += '<li>'+ key +'</li>';
					};
					$('#errorPage ul').html(text);
				},
				submitHandler: function()
				{
					var data = {
						"_id": "item:" + $('#category2').val() + ':' + $('#task2').val(),
						"_rev": $('#saveEdit').data('rev'),
						"category": ['Category', $('#category2').val()],
						"task": ['Task', $('#task2').val()],
						"assigned": ['Assigned', $('#assigned2').val()],
						"startDate": ['Start Date', $('#startDate2').val()],
						"endDate": ['End Date', $('#endDate2').val()],
						"hours": ['Hours', $('#hours2').val()],
						"description": ['Description', $('#description2').val()]
					};
					$.couch.db("asd_project").saveDoc(data);
					window.location.reload();
				}
			});			
		});
		
	$('form #reset').on('click', function(){
			window.location.reload();
		});
});

$(document).on('pageinit', '#viewItems', function()
{
	getItems();
});

//gets all items from the database
function getItems()
{
	$.couch.db("asd_project").view("gda/items", {
		success:function(data){
			$.each(data.rows, function(index, item){
				//console.log(data);
				//console.log(index);
				//console.log(item);
				var category = item.value.category;
				var task = item.value.task;
				var assigned = item.value.assigned;
				var startDate = item.value.startDate;
				var endDate = item.value.endDate;
				var hours = item.value.hours;
				var description = item.value.description;
				var id = item.value.id;
				var rev = item.value.rev;
				//console.log(rev);
				$('#list').append(
					$('<div>').attr('data-role', 'collapsible').append(
						$('<h3>').html(task[1])).append(
							$('<p>').html('<br>' + category[0] + ': ' + category[1] + '<br>' + 
								assigned[0] + ': ' + assigned[1] + '<br>' + 
								startDate[0] + ': ' + startDate[1]  + '<br>' + 
								endDate[0] + ': ' + endDate[1] + '<br>' + 
								hours[0] + ': ' + hours[1] + '<br>' + 
								description[0] + ': ' + description[1] + 
								'<br> <a href="#editItems" class="edit" data-role="button">Edit</a> <br> <a href="#" class="delete" data-role="button">Delete</a>'
							)
						)
				);
				$('.edit:last').data('id', id).on('click', edit).data('rev', rev);
				$('.delete:last').on('click', remove).data('id', id).data('rev', rev);
			});
			$('#list').listview('refresh');
		}
	});
}

//removes an item from the database
function remove(){	
	var id = $(this).data('id');
	var rev = $(this).data('rev');
	//console.log(id);
	//console.log(rev);
	var answer = confirm("sure?" + id + rev);
	if (answer)
	{
		//console.log("ready");
		$.couch.db("asd_project").removeDoc({_id:id, _rev:rev});
		//console.log("deleted");
		window.location.reload();
	}
}

//gathers the information needed to edit an item
function edit(){
	var id = $(this).data('id');
	$.couch.db("asd_project").openDoc(id, {
    	success: function(data) {
        	$('#category2').val(data.category[1]);
			$('#task2').val(data.task[1]);
			$('#assigned2').val(data.assigned[1]);
			$('#startDate2').val(data.startDate[1]);
			$('#endDate2').val(data.endDate[1]);
			$('#hours2').val(data.hours[1]);
			$('#description2').val(data.description[1]);
			$('#saveEdit').data('rev', data._rev);
			console.log($('#saveEdit').data('rev'));
    	},
    	error: function(status) {
        	console.log(status);
    	}
	});
}