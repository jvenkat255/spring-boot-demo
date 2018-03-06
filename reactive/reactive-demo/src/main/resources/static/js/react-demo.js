var url = 'http://localhost:8080/bank-item/reactive'; 

var refreshButton = document.getElementById('fetch');

var refreshClickStream = Rx.Observable.fromEvent(refreshButton, 'click');

refreshClickStream.subscribe(event => {
	console.log("subscribed to click events on fetch");
	var eventSource = new EventSource(url);
	eventSource.onmessage = function(event) {
	    addRow(event.data);
	};
	eventSource.onerror = function() {
	    console.log("EventSource failed: closing the connection");
	    eventSource.close();
	};
});

var responseSubscriber = function(rawJsonData) {
	var responseArrayStream = Rx.Observable.from(rawJsonData);
	responseArrayStream.subscribe(row => {responseArraySubscriber(row);});
};

var responseArraySubscriber = function(row) {
	console.log("row: " + row);
	addRow(row.id);
};

function addRow(newValue) {
    var ul = document.getElementById("items");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(newValue));
    ul.appendChild(li);
}