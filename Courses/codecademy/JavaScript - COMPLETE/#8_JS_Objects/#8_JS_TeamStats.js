// Team Stats
// We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, 
// you pick it. It''s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

// Once created, you can manipulate these data structures as well as gain insights from them. For example, you might want 
// to get the total number of games your team has played, or the average score of all of their games.

let team = {
    _players: [
      {firstName: 'John', lastName: 'Lightbody', age: 35}, 
      {firstName: 'Gary', lastName: 'Carson', age: 45}, 
      {firstName: 'Tim', lastName: 'Walker', age: 25}],
    _games: [
      {opponent: 'Hogg', teamPoints: 25, opponentPoints: 30},
      {opponent: 'Laidlaw', teamPoints: 35, opponentPoints: 40},
      {opponent: 'Barclay', teamPoints: 20, opponentPoints: 32},
    ],
    get players() {
      this._players;
    },
    get games() {
      this._games;
    },
    addPlayer(firstName, lastName, age) {
      let newPlayer = {
        firstName: firstName, 
        lastName: lastName,
        age: age
      };    
      this._players.push(newPlayer);
    },
    addGame(oppName, teamPoints, oppPoints) {
      let newGame = {
        opponent: oppName,
        teamPoints: teamPoints,
        oppenentPoints: oppPoints,
      }
      this._games.push(newGame);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame('jeff', 25, 40);
  team.addGame('colin', 15, 25);
  team.addGame('hazel', 35, 42);
  
  console.log(team._games);
  