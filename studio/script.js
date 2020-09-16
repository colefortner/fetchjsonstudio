// TODO: add code here

function init() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            json.sort((a, b) => Number(b.hoursInSpace) - Number(a.hoursInSpace));
            let count = 0;
            const div = document.getElementById("container");
            const h1 = document.getElementById("count");
            for(let i = 0; i < json.length; i++){
                count += 1
                div.innerHTML += `
                <div class ="astronaut">
                    <div class="bio">
                        <h3>First Name ${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li class=${json[i].active ? 'true' : 'false'}>Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}">
                </div>
                `;
            }
            h1.innerHTML = `${count} ${h1.innerHTML}`;
        })
    });
}

{/* <p className={winner ? 'Machine-winner': 'Machine-loser'}>
{winner ? 'Winner!': 'Loser!'}
</p> */}


window.onload = init;