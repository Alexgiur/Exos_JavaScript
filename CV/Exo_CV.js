fetch("profil.json")
  .then((response) => response.json())
  .then((json) => {
    afficherCV(json);

    // bla bla bla
    fetch("https://api.github.com/users/Alexgiur")
      .then((response) => response.json())
      .then((github) => {
        const ressources = document.createElement("div");
        ressources.id = "ressources";
        document.getElementById("cv").appendChild(ressources);
        ressources.textContent = github.html_url;

        const imgGit = document.createElement("img");
        document.getElementById("cv").appendChild(imgGit);
        imgGit.id = "imgGit";
        imgGit.src = github.avatar_url;

        fetch("https://api.github.com/users/Alexgiur/repos")
          .then((response) => response.json())
          .then((github) => {
            const btnRepos = document.createElement("button");
            btnRepos.id = "btn-repos";
            btnRepos.textContent = "Afficher les Dépôts GitHub";
            document.getElementById("cv").appendChild(btnRepos);

            const repos = document.createElement("div");
            document.getElementById("cv").appendChild(repos);
            repos.id = "repos";
            repos.style.display = "none";

            github.forEach((repo) => {
              const lien = document.createElement("a");
              lien.href = repo.html_url;
              lien.target = "_blank";
              lien.textContent = repo.name;
              repos.appendChild(lien);
            });

            btnRepos.addEventListener("click", () => {
              if (repos.style.display === "none") {
                repos.style.display = "grid";
                btnRepos.textContent = "Masquer les Dépôts GitHub";
                btnRepos.classList.add("ouvert");
                repos.prepend(btnRepos); 
              } else {
                repos.style.display = "none";
                btnRepos.textContent = "Afficher les Dépôts GitHub";
                btnRepos.classList.remove("ouvert");
                repos.before(btnRepos);
              }
            });
          });
      });
  });

function afficherCV(profil) {
  const cv = document.createElement("div");
  document.body.appendChild(cv);
  cv.id = "cv";

  const title = document.createElement("h1");
  cv.appendChild(title);
  title.id = "title";
  title.innerHTML = profil.nom;

  const subtitle = document.createElement("h2");
  cv.appendChild(subtitle);
  subtitle.id = "subtitle";
  subtitle.innerHTML = profil.poste;

  const profile = document.createElement("div");
  cv.appendChild(profile);
  profile.id = "profile";

  const infos = document.createElement("div");
  cv.appendChild(infos);
  infos.id = "infos";
  infos.innerHTML = profil.infos;

  const logiciels = document.createElement("div");
  cv.appendChild(logiciels);
  logiciels.id = "logiciels";
  logiciels.innerHTML = profil.logiciels;

  const summary = document.createElement("div");
  cv.appendChild(summary);
  summary.id = "summary";
  summary.innerHTML = profil.experiences.join("<br><br>");

  const skills = document.createElement("ul");
  cv.appendChild(skills);
  skills.id = "skills";

  profil.competences.forEach((competence) => {
    const skill = document.createElement("li");
    skills.appendChild(skill);
    skill.innerHTML = competence;
  });
}
