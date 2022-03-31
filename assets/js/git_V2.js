// armellebrt;
const   pseudo = document.getElementById("pseudo"),
        allRepos = document.getElementById("allRepos"),
        lastRepos = document.getElementById("lastRepos"),
        listeRepo = document.getElementById("liste-repo"),
        newPseudo = document.getElementById("newPseudo"),
        photoUtilisateur = document.getElementById("photoUtilisateur");

let pseudoGit = document.getElementsByClassName("pseudoGit"),
  pseudoUtilisateur = "Grafikart",
  HTML = 0,
  JS = 0,
  PHP = 0,
  GO = 0,
  CSS = 0,
  C = 0,
  C2 = 0,
  C3 = 0,
  CoffeeScript = 0,
  Dart = 0,
  DM = 0,
  Elixir = 0,
  Groovy = 0,
  Java = 0,
  Kotlin = 0,
  Objective_C = 0,
  Perl = 0,
  PowerShell = 0,
  Python = 0,
  Ruby = 0,
  Rust = 0,
  Scala = 0,
  Shell = 0,
  Swift = 0,
  TypeScript = 0;




let tableLanguage = [
    "HTML",
    "JavaScript",
    "CSS",
    "PHP",
    "Go",
    "C" ,
    "C#" ,
    "C++" ,
    "CoffeeScript" ,
    "Dart" ,
    "DM" ,
    "Elixir" ,
    "Groovy" ,
    "Java" ,
    "Kotlin" ,
    "Objective-C" ,
    "Perl" ,
    "PowerShell" ,
    "Python" ,
    "Ruby" ,
    "Rust" ,
    "Scala" ,
    "Shell" ,
    "Swift" ,
    "TypeScript"
];


function testFuntion() {
  alert("test");
}
console.log(pseudoGit.length);

fetch(`https://api.github.com/users/${pseudoUtilisateur}`)
    .then((response) => response.json())
    .then((data) => {
        // (pseudo.innerHTML = data.login),
            (photoUtilisateur.src = data.avatar_url);
        for (let i = 0; i < pseudoGit.length; i++) {
            pseudoGit[i].innerHTML = data.login;
        }
        allRepos.innerHTML = data.public_repos;
        let dernierRepo = data.updated_at;
            dernierRepo = dernierRepo.split("T");
            dernierRepo = dernierRepo[0].split("-");
        lastRepos.innerHTML = dernierRepo[2] + '-' + dernierRepo[1] + '-' + dernierRepo[0];

    });

fetch(`https://api.github.com/users/${pseudoUtilisateur}/subscriptions`)
    .then((response) => response.json())
    .then((repo) => {
        console.group(repo);
        for (let x = 0; x < repo.length; x++){
            //? incrementation des valeur de language
            switch (repo[x].language) {
                case 'HTML':
                    HTML++;
                    break;
                case 'JavaScript':
                    JS++;
                    break;
                case 'CSS':
                    CSS++;
                    break;
                case 'PHP':
                    PHP++;
                    break;
                case 'Go':
                    GO++;
                    break;
                case "C":
                    C++;
                    break;
                case "C#":
                    C2++;
                    break;
                case "C++":
                    C3++;
                    break;
                case "CoffeeScript":
                    CoffeeScript++;
                    break;
                case "Dart":
                    Dart++;
                    break;
                case "DM":
                    DM++;
                    break;
                case "Elixir":
                    Elixir++;
                    break;
                case "Groovy":
                    Groovy++;
                    break;
                case "Java":
                    Java++;
                    break;
                case "Kotlin":
                    Kotlin++;
                    break;
                case "Objective-C":
                    Objective_C++;
                    break;
                case "Perl":
                    Perl++;
                    break;
                case "PowerShell":
                    PowerShell++;
                    break;
                case "Python":
                    Python++;
                    break;
                case "Ruby":
                    Ruby++;
                    break;
                case "Rust":
                    Rust++;
                    break;
                case "Scala":
                    Scala++;
                    break;
                case "Shell":
                    Shell++;
                    break;
                case "Swift":
                    Swift++;
                    break;
                case "TypeScript":
                    TypeScript++;
                    break;
                default:
                    break;
            }
            //!-------------------------------------------
            //? création de div pour chaque repo de la liste
            let balise_a = document.createElement('a'),
                balise_nombreRepo = document.createElement('p'),
                balise_name = document.createElement('p'),
                balise_language = document.createElement('p'),
                balise_visibility = document.createElement('p'),
                name = document.createTextNode(`${repo[x].name} `),
                language = document.createTextNode(`${repo[x].language}`),
                visibility = document.createTextNode(` ${repo[x].visibility}`),
                nombreRepo = document.createTextNode(`${x+1}`);
            balise_nombreRepo.appendChild(nombreRepo);
            balise_name.appendChild(name);
            balise_language.appendChild(language);
            balise_visibility.appendChild(visibility);
            balise_a.href = `${repo[x].html_url}`;
            balise_a.classList.add( 'text-white',
                                    'p-5',
                                    'flex',
                                    'flex-row',
                                    'justify-around',
                                    'text-center');
            balise_name.classList.add('w-1/4');
            balise_language.classList.add('w-1/4');
            balise_visibility.classList.add('w-1/4');
            balise_a.appendChild(balise_nombreRepo);
            balise_a.appendChild(balise_name);
            balise_a.appendChild(balise_language);
            balise_a.appendChild(balise_visibility);
            listeRepo.appendChild(balise_a);
            //!-------------------------------------------

        }

        new Chart(document.getElementById("chartjs-4"), {
          type: "doughnut",
          data: {
            labels: tableLanguage,
            datasets: [
              {
                label: "Issues",
                data: [HTML , JS , CSS , PHP , GO , C , C2 , C3 , CoffeeScript , Dart , DM , Elixir , Groovy , Java , Kotlin , Objective_C , Perl , PowerShell , Python , Ruby , Rust , Scala , Shell , Swift , TypeScript
                ],
                backgroundColor: [
                  //?-----------------------------------------------------------------------------------\\

                  //?     tout les teint => https://fr.wikipedia.org/wiki/Liste_de_noms_de_couleur

                  //?-----------------------------------------------------------------------------------\\
                  "rgb(230 , 126 , 48)", // c
                  "rgb(136 , 66  , 29)", // Acajou
                  "rgb(121 , 248 , 248)", // Aigue-marine
                  "rgb(130 , 196 , 108)", // Amande
                  "rgb(145 , 40  , 59)", // Amarante
                  "rgb(240 , 195 ,	0 )", // Ambre
                  "rgb(136 , 77  , 167)", // améthyste
                  "rgb(48  , 48  , 48 )", // Anthracite
                  "rgb(255 , 255 , 255 )", // Blanc
                  "rgb(255 , 203 , 96 )", // Aurore
                  "rgb(86  , 130 , 3 )", // Avocat
                  "rgb(0   , 127 , 255 )", // Azur
                  "rgb(240 , 227 , 107 )", // Beurre
                  "rgb(247 , 255 , 60 )", // Jaune citron
                  "rgb(118 , 111 , 100 )", // Bis
                  "rgb(255 , 228 , 196 )", // Bisque
                  "rgb(133 , 109 , 77 )", // Bistre
                  "rgb(78  , 61  , 40 )", // Bitume (pigment)
                  "rgb(58  , 142 , 186 )", // Bleu acier
                  "rgb(84  , 114 , 174 )", // Bleu barbeau
                  "rgb(4   , 139 , 154 )", // Bleu canard
                  "rgb(38  , 196 , 236 )", // Bleu céleste
                  "rgb(142 , 162 , 198 )", // Bleu Charrette
                  "rgb(34  , 66  , 124 )", // Bleu de cobalt
                  "rgb(252 , 220 , 18 )", // Bouton d'or
                  "rgb(127 , 255 , 0 )", // Chartreuse
                ],
              },
            ],
          },
        });


    })
    ;
