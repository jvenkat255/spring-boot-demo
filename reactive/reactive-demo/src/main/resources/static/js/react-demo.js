var url = 'https://api.github.com/users?since=124'; 

var refreshButton = document.getElementById('fetch');

var refreshClickStream = Rx.Observable.fromEvent(refreshButton, 'click');

refreshClickStream.subscribe(event => {
	var responseStream = Rx.Observable.fromPromise($.getJSON(url));
	responseStream.subscribe(jsonData => {responseSubscriber(jsonData);});
});

var responseSubscriber = function(jsonData) {
	var responseArrayStream = Rx.Observable.fromArray(jsonData);
	responseArrayStream.subscribe(row => {responseArraySubscriber(row);});
};

var responseArraySubscriber = function(row) {
	console.log(row.login);
	addRow(row.login);
};

function addRow(newValue) {
    var ul = document.getElementById("items");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(newValue));
    ul.appendChild(li);
}
