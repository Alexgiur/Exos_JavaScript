fetch('profil.json')
    .then(response => response.json())
        .then(json =>
        {
            afficherCV(json); 
        });


function afficherCV(profil) {
    const cv = document.createElement("div")
    document.body.appendChild(cv)
    cv.id = "cv"

    const title = document.createElement("h1")
    cv.appendChild(title)
    title.id = "title"
    title.innerHTML = profil.nom

    const subtitle = document.createElement("h2")
    cv.appendChild(subtitle)
    subtitle.id = "subtitle"
    subtitle.innerHTML = profil.poste
    
    const profile = document.createElement("div")
    cv.appendChild(profile)
    profile.id = "profile"
    
    const infos = document.createElement("div")
    cv.appendChild(infos)
    infos.id = "infos"
    infos.innerHTML = profil.infos

    const summary = document.createElement("div")
    cv.appendChild(summary)
    summary.id = "summary"
    summary.innerHTML = profil.expériences

    const ressources = document.createElement("div")
    cv.appendChild(ressources)
    ressources.innerHTML = ressources

    const skills = document.createElement("ul")
    cv.appendChild(skills)
    skills.id = "skills"

    profil.compétences.forEach(compétence => {
        const skill = document.createElement("li")
        skills.appendChild(skill)
        skill.innerHTML = compétence
    });
        
    
}

