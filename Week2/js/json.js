// JavaScript Document
var json = {
	'task1': {
		'category': ['Category', 'Design'],
		'task': ['Task', 'Design Level 1'],
		'startDate': ['Start Date', '2013-03-22'],
		'endDate': ['End Date', '2013-03-28'],
		'hours': ['Hours', '30'],
		'description': ['Description', 'Design the first level, "Ides of March" of the game. Start with a bang for an introduction']
	},
	'task2': {
		'category': ['Category', 'Art'],
		'task': ['Task', 'Main Character Concept Art'],
		'startDate': ['Start Date', '2013-03-19'],
		'endDate': ['End Date', '2013-03-24'],
		'hours': ['Hours', '5'],
		'description': ['Description', 'Outline some first ideas']
	},
	'task3': {
		'category': ['Category', 'Programming'],
		'task': ['Task', 'Level Progression'],
		'startDate': ['Start Date', '2013-06-01'],
		'endDate': ['End Date', '2013-06-10'],
		'hours': ['Hours', '10'],
		'description': ['Description', 'Create the function that allows the game to go from one level to the next']
	},
	'task4': {
		'category': ['Category', 'Sound'],
		'task': ['Task', 'Gun Sounds'],
		'startDate': ['Start Date', '2013-03-20'],
		'endDate': ['End Date', '2013-03-20'],
		'hours': ['Hours', '8'],
		'description': ['Description', 'Go to the firing range, and record some sounds for pistols and assault rifles']
	},
	'task5': {
		'category': ['Category', 'UI'],
		'task': ['Task', 'Start Menu'],
		'startDate': ['Start Date', '2013-03-19'],
		'endDate': ['End Date', '2013-03-23'],
		'hours': ['Hours', '15'],
		'description': ['Description', 'Design and program the start menu']
	},
	'task6': {
		'category': ['Category', 'Programming'],
		'task': ['Task', 'Particle Engine'],
		'startDate': ['Start Date', '2013-04-01'],
		'endDate': ['End Date', '2013-04-28'],
		'hours': ['Hours', '50'],
		'description': ['Description', 'Create a good and efficient particle engine']
	},
	'task7': {
		'category': ['Category', 'Design'],
		'task': ['Task', 'Combat'],
		'startDate': ['Start Date', '2013-06-10'],
		'endDate': ['End Date', '2013-06-28'],
		'hours': ['Hours', '50'],
		'description': ['Description', 'Work on the initial strength and balancing of the weapons']
	},
	'task8': {
		'category': ['Category', 'Art'],
		'task': ['Task', 'Level Art'],
		'startDate': ['Start Date', '2013-04-9'],
		'endDate': ['End Date', '2013-04-24'],
		'hours': ['Hours', '30'],
		'description': ['Description', 'Work on the level art for the first level']
	},
	'task9': {
		'category': ['Category', 'Sound'],
		'task': ['Task', 'UI Sounds'],
		'startDate': ['Start Date', '2013-04-01'],
		'endDate': ['End Date', '2013-04-28'],
		'hours': ['Hours', '50'],
		'description': ['Description', 'Create sounds that fit the theme or the game, and style of the UI elements']
	},
	'task10': {
		'category': ['Category', 'UI'],
		'task': ['Task', 'Pause Menu'],
		'startDate': ['Start Date', '2013-04-22'],
		'endDate': ['End Date', '2013-04-28'],
		'hours': ['Hours', '10'],
		'description': ['Description', 'Create an efficient and clean pause menu']
	},
	'task11': {
		'category': ['Category', 'Art'],
		'task': ['Task', 'Weapon Concept'],
		'startDate': ['Start Date', '2013-04-02'],
		'endDate': ['End Date', '2013-04-04'],
		'hours': ['Hours', '20'],
		'description': ['Description', 'Come up with some concept ideas for the weapons']
	},
	'task12': {
		'category': ['Category', 'Programming'],
		'task': ['Task', 'Level One Scripting'],
		'startDate': ['Start Date', '2013-04-01'],
		'endDate': ['End Date', '2013-04-28'],
		'hours': ['Hours', '50'],
		'description': ['Description', 'Script all of the events of level one']
	},
	'task13': {
		'category': ['Category', 'Design'],
		'task': ['Task', 'Level 2'],
		'startDate': ['Start Date', '2013-05-20'],
		'endDate': ['End Date', '2013-05-28'],
		'hours': ['Hours', '25'],
		'description': ['Description', 'Design level two, "Cloud 9"']
	},
	'task14': {
		'category': ['Category', 'Sound'],
		'task': ['Task', 'Voice Acting'],
		'startDate': ['Start Date', '2013-08-01'],
		'endDate': ['End Date', '2013-10-24'],
		'hours': ['Hours', '200'],
		'description': ['Description', 'Record the voice actors']
	},
	'task15': {
		'category': ['Category', 'UI'],
		'task': ['Task', 'HUD'],
		'startDate': ['Start Date', '2013-04-01'],
		'endDate': ['End Date', '2013-04-28'],
		'hours': ['Hours', '50'],
		'description': ['Description', 'Create the most important UI element the HUD to be unobtrusive, but informative']
	},
	'task16': {
		'category': ['Category', 'Design'],
		'task': ['Task', 'Level Three'],
		'startDate': ['Start Date', '2013-06-22'],
		'endDate': ['End Date', '2013-06-28'],
		'hours': ['Hours', '25'],
		'description': ['Description', 'Design Level Three, "We are the Champions: Of the World"']
	},
	'task17': {
		'category': ['Category', 'Art'],
		'task': ['Task', 'Main Antagonist Concept'],
		'startDate': ['Start Date', '2013-04-19'],
		'endDate': ['End Date', '2013-04-22'],
		'hours': ['Hours', '10'],
		'description': ['Description', 'Brainstorm, concept ideas for the main antagonist']
	},
	'task18': {
		'category': ['Category', 'Programming'],
		'task': ['Task', 'Enemy AI'],
		'startDate': ['Start Date', '2013-04-01'],
		'endDate': ['End Date', '2013-05-26'],
		'hours': ['Hours', '50'],
		'description': ['Description', 'Get a working Enemy AI system up and running that is usable for testing']
	},
	'task19': {
		'category': ['Category', 'Sound'],
		'task': ['Task', 'Vehicle Sounds'],
		'startDate': ['Start Date', '2013-06-10'],
		'endDate': ['End Date', '2013-06-30'],
		'hours': ['Hours', '30'],
		'description': ['Description', 'Gather potential sounds for in game vehicles']
	},
	'task20': {
		'category': ['Category', 'UI'],
		'task': ['Task', 'Multiplayer Menu'],
		'startDate': ['Start Date', '2013-07-19'],
		'endDate': ['End Date', '2013-07-24'],
		'hours': ['Hours', '15'],
		'description': ['Description', 'Design and Implement the multiplayer pre-game menu']
	}
}