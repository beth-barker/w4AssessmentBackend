const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector(`#fortuneBtn`)
const goalBtn = document.querySelector(`#goalsBtn`)
const goalInput = document.querySelector(`#goalsInput`)
const goalsDiv = document.querySelector(`#goalsDiv`)
const delInput = document.querySelector(`#delInput`)
const delBtn = document.querySelector(`#delBtn`)



let baseURL = `http://localhost:4000/api`
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get(`${baseURL}/fortune`)
    .then(res => {
        console.log(res.data)
        alert(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}

const getGoals = () => {
    goalsDiv.innerHTML = ""

    axios.get(`${baseURL}/goals`)
    .then(res => {
        for(let i = 0; i < res.data.length; i++){
            let newSpan = document.createElement('p')
            newSpan.textContent = `${i + 1}. ${res.data[i]}`
            goalsDiv.appendChild(newSpan)
        }
    })
    .catch(err => {
        console.log(err)
    })
}

const addGoal = () => {
    goalsDiv.innerHTML = ''

    let bodyObj = {
        goal: goalInput.value
    }

    axios.post(`${baseURL}/goals`, bodyObj)
    .then(res => {
        for(let i = 0; i < res.data.length; i++){
            let newSpan = document.createElement('p')
            newSpan.textContent = `${i + 1}. ${res.data[i]}`
            goalsDiv.appendChild(newSpan)
        }
    })
    .catch(err => {
        console.log(err)
    })

    goalInput.value = ""
}

const deleteGoal = () => {
    goalsDiv.innerHTML = ""

    let deleteID = delInput.value

    axios.delete(`${baseURL}/goals/${deleteID}`)
    .then(res => {
        for(let i = 0; i < res.data.length; i++){
            let newSpan = document.createElement('p')
            newSpan.textContent = `${i + 1}. ${res.data[i]}`
            goalsDiv.appendChild(newSpan)
        }
    })
    .catch(err => {
        console.log(err)
    })

    delInput.value = ""
}



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
goalBtn.addEventListener('click', addGoal)
delBtn.addEventListener('click', deleteGoal)


getGoals()