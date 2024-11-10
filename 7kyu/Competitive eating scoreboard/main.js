function scoreboard (whoAteWhat) {
    let leaderboard = []
    for(let i = 0; i < whoAteWhat.length; i++){
        let score = 0
        score += whoAteWhat[i].chickenwings * 5
        score += whoAteWhat[i].hamburgers * 3
        score += whoAteWhat[i].hotdogs * 2
        leaderboard.push({name : whoAteWhat[i].name, score : +score})
    }
    leaderboard.sort((a, b) => a.score === b.score ? (a.name).localeCompare(b.name) : b.score - a.score)
    return leaderboard
    
    //console.log(leaderboard)
    }


    let whoAteWhat = [
        {name: "Billy The Beast", chickenwings: 17 , hamburgers: 7, hotdogs: 8},
        {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
        {name: "Dirtha" , chickenwings: 20, hamburgers: 4, hotdogs: 11},
        {name: "Joey Jaws", chickenwings: 8, hamburgers: 8, hotdogs: 15},
        {name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}
        
      ];
      
      scoreboard(whoAteWhat)
    //   result = [
    //     {name: "Big Bob", score: 134},
    //     {name: "Dirtha", score: 134,
    //     {name: "Billy The Beast", score: 122},
    //     {name: "Habanero Hillary", score: 98},
    //     {name: "Joey Jaws", score: 94}
    //   ]