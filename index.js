function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}


// Getting a player's points 
function numPointsScored(playerName) {
    const game = gameObject();

    for (const side of ["home", "away"]) {
        const player = game[side].players[playerName];
        if (player) return player.points;
    }

    return null;
}


// Same thing for their shoe size
function shoeSize(playerName) {
    const game = gameObject();

    for (const side of ["home", "away"]) {
        const player = game[side].players[playerName];
        if (player) return player.shoe;
    }

    return null;
}


// Getting a team’s colors 
function teamColors(teamName) {
    const game = gameObject();

    if (game.home.teamName === teamName) return game.home.colors;
    if (game.away.teamName === teamName) return game.away.colors;

    return null;
}


// returning both team names in an array
function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}


// Returning the jersey numbers for all the players on a specific team
function playerNumbers(teamName) {
    const game = gameObject();

    const team =
        game.home.teamName === teamName
            ? game.home
            : game.away.teamName === teamName
            ? game.away
            : null;

    if (!team) return [];

    return Object.values(team.players).map(player => player.number);
}


// Returning all the stats of one player
function playerStats(playerName) {
    const game = gameObject();

    for (const side of ["home", "away"]) {
        const player = game[side].players[playerName];
        if (player) return Object.assign({}, player); // copying the object without using spread
    }

    return null;
}


// Finding the player with the biggest shoe then returning their rebounds
function bigShoeRebounds() {
    const game = gameObject();

    let biggestSize = -1;
    let rebounds = null;

    for (const side of ["home", "away"]) {
        for (const name in game[side].players) {
            const player = game[side].players[name];

            if (player.shoe > biggestSize) {
                biggestSize = player.shoe;
                rebounds = player.rebounds;
            }
        }
    }

    return rebounds;
}
