function (doc){
	if (doc._id.substr(0, 5) === "item:"){
		emit(doc._id.substr(5), {
			"category": doc.category,
			"task": doc.task,
			"assigned": doc.assigned,
			"startDate": doc.startDate,
			"endDate": doc.endDate,
			"hours": doc.hours,
			"description": doc.description
		});
	}
}