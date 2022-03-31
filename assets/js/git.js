const   pseudo = document.getElementById("pseudo"),
        allRepos = document.getElementById("allRepos"),
        lastRepos = document.getElementById("lastRepos"),
        // inscription = document.getElementById("inscription"),
        photoUtilisateur = document.getElementById("photoUtilisateur");
        // pays = document.getElementById("pays"),
        // repos = document.getElementById("repos"),
        // follow = document.getElementById("follow");
let pseudoGit = document.getElementsByClassName("pseudoGit");

let HTML = 0;
let JS = 0;
let PHP = 0;

console.log(pseudoGit.length);

fetch(`https://api.github.com/users/armellebrt`)
    .then((response) => response.json())
    .then((data) => {
        // (pseudo.innerHTML = data.login),
        console.table(data),
            (photoUtilisateur.src = data.avatar_url);
        for (let i = 0; i < pseudoGit.length; i++) {
          pseudoGit[i].innerHTML = data.login;
        }

        allRepos.innerHTML = data.public_repos;
    // (update.innerHTML = data.updated_at),
    // (repos.innerHTML = data.public_repos);
    let dernierRepo = data.updated_at;
        dernierRepo = dernierRepo.split("T");
        console.log(dernierRepo);
        dernierRepo = dernierRepo.reverse();
        console.log(dernierRepo);
        // dernierRepo = dernierRepo.split("-");
        lastRepos.innerHTML = dernierRepo[2] + '-' + dernierRepo[1] + '-' + dernierRepo[0];
                                        new Chart(document.getElementById("chartjs-4"), {
                                    "type": "doughnut",
                                    "data": {
                                        "labels": ["JS", "PHP", "HTML"],
                                        "datasets": [{
                                            "label": "Issues",
                                            "data": [300, 50, 100],
                                            "backgroundColor": ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"]
                                        }]
                                    }
                                });
    });
  
fetch(`https://api.github.com/users/MAGICTNT/subscriptions`)
    .then((response) => response.json())
    .then((repo) => {
        console.log(repo.length);
        for (let x = 0; repo.length; x++){
            console.log(repo[x].language);
            switch (repo[x].language) {
                case 'HTML':
                    HTML++;
                    break;
            }
        }
    })
    ;
