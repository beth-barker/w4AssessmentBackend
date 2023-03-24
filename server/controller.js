
let goalsArray = ['Finish Assessment', 'Get a good grade']


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune : (req, res) => {
        //create array of fortunes to pull from
        const fortune = [`A lifetime of happiness lies ahead of you`, `A pleasant surprise is waiting for you`, `A lifetime friend shall soon be made`, `A smile is your personal welcome mat`, `Adventure can be real happiness`]
        
        let randI = Math.floor(Math.random() * fortune.length)
        let randFortune = fortune[randI]

        res.status(200).send(randFortune)
    },
    getGoals : (req, res) => {
        res.status(200).send(goalsArray)
    },
    addGoal : (req, res) => {
        let {goal} = req.body
        console.log(goal)
        goalsArray.push(goal)
        res.status(200).send(goalsArray)

    },
    deleteGoal : (req, res) => {
        let index = req.params.id - 1

        goalsArray.splice(index, 1)
        res.status(200).send(goalsArray)
    }

}