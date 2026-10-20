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
        ressources.textContent = github.login;

        const imgGit = document.createElement("img");
        document.getElementById("cv").appendChild(imgGit);
        imgGit.id = "imgGit";
        imgGit.src = github.avatar_url;
        
        fetch("https://api.github.com/users/Alexgiur/repos")
          .then((response) => response.json())
          .then((github) => {
            const repos = document.createElement("div");
            document.getElementById("cv").appendChild(repos);
            repos.id = "repos";
            github.forEach((repo) => {
              repos.innerHTML += "<br>" + repo.name;
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

  const summary = document.createElement("div");
  cv.appendChild(summary);
  summary.id = "summary";
  summary.innerHTML = profil.experiences;

  const skills = document.createElement("ul");
  cv.appendChild(skills);
  skills.id = "skills";

  profil.competences.forEach((competence) => {
    const skill = document.createElement("li");
    skills.appendChild(skill);
    skill.innerHTML = competence;
  });
}
