
const url = 'https://tank01-fantasy-stats.p.rapidapi.com/getNBAProjections?numOfDays=7&pts=1&reb=1.25&TOV=-1&stl=3&blk=3&ast=1.5&mins=0';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '72bef8a0e0mshc2a48bfbf76a33cp1f0bf9jsn2eba487d9cba',
		'X-RapidAPI-Host': 'tank01-fantasy-stats.p.rapidapi.com'
	}
	};
	try {
	//
let table = document.getElementById('table');

fetch(url, options)
.then((response) => {
	return response.json();
})
.then((data) => {
	let players = data;

	for(id in players.body.playerProjections){
		//creating the row and all cells
		let row = document.createElement('tr');
		let name = document.createElement('td');
		let team = document.createElement('td');
		let position = document.createElement('td');
		let points = document.createElement('td');
		let rebounds = document.createElement('td');
		let assists = document.createElement('td');
		let steals = document.createElement('td');
		let blocks = document.createElement('td');
		let turnovers = document.createElement('td');
		let fantasy_pts = document.createElement('td');

		if(players.body.playerProjections[id].fantasyPoints == 0){
			continue;
		}

		//changing innerHTML to the values returned by api
		name.innerHTML = players.body.playerProjections[id].longName;
		team.innerHTML = players.body.playerProjections[id].team;
		position.innerHTML = players.body.playerProjections[id].pos;
		points.innerHTML = players.body.playerProjections[id].pts;
		rebounds.innerHTML = players.body.playerProjections[id].reb;
		assists.innerHTML = players.body.playerProjections[id].ast;
		steals.innerHTML = players.body.playerProjections[id].stl;
		blocks.innerHTML = players.body.playerProjections[id].blk;
		turnovers.innerHTML = players.body.playerProjections[id].TOV;
		fantasy_pts.innerHTML = players.body.playerProjections[id].fantasyPoints;

		//inserting elements into HTML
		row.appendChild(name);
		row.appendChild(team);
		row.appendChild(position);
		row.appendChild(points);
		row.appendChild(rebounds);
		row.appendChild(assists);
		row.appendChild(steals);
		row.appendChild(blocks);
		row.appendChild(turnovers);
		row.appendChild(fantasy_pts);
		table.appendChild(row);
	};
});
} 
//error handling
catch{
	console.error(error);
}
