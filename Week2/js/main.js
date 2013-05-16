//Evan Combs
//ASDI 1305

$('#home').on('pageinit', function()
{
	//code for home page
});

$('#addItems').on('pageinit', function()
{
	//code for add/edit item page will go here
	$('form #save').on('click', saveToLocal);
	$('form #reset').on('click', function(){
			window.location.reload();
		});
});

$('#viewItems').on('pageinit', function()
{
	//code for view items page
	getLocalData();
	$('#deleteAll').on('click', function(){
			var confirmDelete = confirm('Delete Items?');
			if(confirmDelete)
			{
				localStorage.clear();
				window.location.reload();
			}
		});
	/*$('#parseJSON').on('click', function(){
		$.getJSON('xhr/data.json', function(data){
			console.log(data);
		});
	});
	$('#parseXML').on('click',  function(){
		$.ajax({
			url : "xhr/data.xml", 
			type : "GET"
			//dataType : "xml" 
		}).done(function(){
				console.log('hi');
			});
	});	*/	
});


//saves data
function saveToLocal()
{
	var oldKey = $(this).data('key') //gets the value of the key if there is already one
	//console.log(oldKey);
	//if not previous key set a new key - else use previous key
	if(!oldKey)
	{
		//creates key value for local storage
		var key = Math.floor(Math.random() * 10000000000);
		console.log(key);
	}
	else
	{
		key = oldKey
	}
	//gets form values, stores them in an object	
	var data = {};
	data.category = ['Category', $('#category').val()];
	data.task = ['Task', $('#task').val()];
	data.assigned = ['Assigned', $('#assigned').val()];
	data.startDate = ['Start Date', $('#startDate').val()];
	data.endDate = ['End Date', $('#endDate').val()];
	data.hours = ['Hours', $('#hours').val()];
	data.description = ['Description', $('#description').val()];
	console.log(data);
	//saves to local storage, converts object to string
	localStorage.setItem(key, JSON.stringify(data));
	alert('Saved');
	window.location.reload();
}

//gets and displays data
function getLocalData()
{
	//if not data
	if(localStorage.length === 0)
	{
		for(var i in json)
		{
			var id = Math.floor(Math.random()*10000000000); //creates a unique key for each item
			localStorage.setItem(id, JSON.stringify(json[i])); //gets each item from json and saves it to local storage
		}
	}
	//display the data
	$('#items').append('<ul data-role="listview" data-filter="true"></ul>');
	for (var i = 0; i < localStorage.length; i++)
	{
		var key = localStorage.key(i); //gets the key from local storage
		//console.log(key);
		var value = localStorage.getItem(key); //gets the items associated with the key
		//console.log(value);
		var object = JSON.parse(value);	 //parses the data so it is readable
		//console.log(object);	
		$('#items ul').append('<div data-role="collapsible"><h3>Test</h3><p></p></div>'); //creates the html the data will live in
		for(var j in object)
		{
			$('p:last').append(object[j][0]+ ': ' + object[j][1] + '<br />'); //places the data into the html
			//console.log(object[j]);
		}
		$('<a href="#addItems">Edit</a>').appendTo('p:last').on('click', editItem).data('key', key); //creates an edit button
		$('<a href="#">Delete</a>').appendTo('p:last').on('click', deleteItem).data('key', key); //creates a delete button
	}
}

//deletes a single item
function deleteItem()
{
	var confirmDelete = confirm('Delete Item?'); //make sure the delete action is wanted
	if(confirmDelete)
	{
		localStorage.removeItem($(this).data('key')); //deletes item
		window.location.reload();
	}
}

//edit an item
function editItem()
{
	var key = $(this).data('key'); //finds the key for the item to be edited
	var items = localStorage.getItem(key); //gets item data
	$('form #save').data('key', key); //attaches key to submit button in order to not create a new key
	var data = JSON.parse(items);
	
	//populates form with data
	$('#category').val(data.category[1]);
	$('#task').val(data.task[1]);
	$('#assigned').val(data.assigned[1]);
	$('#startDate').val(data.startDate[1]);
	$('#endDate').val(data.endDate[1]);
	$('#hours').val(data.hours[1]);
	$('#description').val(data.description[1]);
}