fetch("https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/restaurant-bresilien.json")
    .then(response => response.json())
    .then(data => {

        const infoResto = document.getElementById("infoResto");
        const promessesClient = document.getElementById("promessesClient")
        const productsSection = document.getElementById("main");
        const servicesSec = document.getElementById("services");
        const temoignagesSec = document.getElementById("temoignagesSec");

        // infoResto
        const nomCommercial = document.createElement("h1");
        nomCommercial.textContent = data.nomCommercial;



        const texteAccroche = document.createElement("h2");
        texteAccroche.textContent = data.texteAccroche;

        const texteBouton = document.createElement("button");
        texteBouton.textContent = data.texteBouton;
        texteBouton.setAttribute("href", "#idMenu");
        // texteBouton.href = "#idMenu";
        // texteBouton.addEventListener(`click`, () => {
        //     document.getElementById("#idMenu").scrollIntoView({behavior : "smooth"});
        // });


        infoResto.appendChild(nomCommercial);
        infoResto.appendChild(texteAccroche);
        infoResto.appendChild(texteBouton);

        // promessesClient
        const promClient = data.promessesClient;
        const divProm = document.createElement("div");
        divProm.className = "divProm";
        promessesClient.appendChild(divProm);



        promClient.forEach(element => {
            const promessesClientP = document.createElement("h3");
            promessesClientP.textContent = element;
            divProm.appendChild(promessesClientP);
        });

        // main
        let plat = data.plats;

        plat.forEach(plats => {
            const card = document.createElement("div");
            card.className = "card";
            card.classList.add("plats");

            const nom = document.createElement("h3");
            nom.textContent = plats.nom;

            const desc = document.createElement("h4");
            desc.textContent = plats.desc;

            const img = document.createElement("img");
            img.src = plats["image-url"];
            img.alt = plats.title;

            card.appendChild(nom);
            card.appendChild(img);
            card.appendChild(desc);

            productsSection.appendChild(card);
        });

        // services

        let servicesA = data.services;

        servicesA.forEach(services => {
            const card = document.createElement("div");

            card.classList.add("services");
            card.className = "cardServ";


            const nom = document.createElement("h3");
            nom.textContent = services.nom;

            const desc = document.createElement("p");
            desc.textContent = services.desc;

            switch (nom.textContent) {
                case nom.textContent = "Événements Culturels":
                    card.innerHTML = `<i class="fa-solid fa-champagne-glasses"></i>`;
                    break;
                case nom.textContent = "Cours de Cuisine":
                    card.innerHTML = `<i class="fa-solid fa-pizza-slice"></i>`;
                    break;
                case nom.textContent = "Privatisation d'Espace":

                    card.innerHTML = `<i class="fa-solid fa-calendar-check"></i>`;
                    break;

            };
            card.appendChild(nom);
            card.appendChild(desc);

            servicesSec.appendChild(card);
        });

        // temoignages
        let temoignages = data.temoignages;

        temoignages.forEach(temoignages => {
            const card = document.createElement("div");
            card.classList.add("temoignages");

            const imgProf = document.createElement("img")
            imgProf.className = "imgProf";
            imgProf.src = "https://placehold.co/100";


            const prenom = document.createElement("h2");
            prenom.textContent = temoignages.prenom;

            const typeExperience = document.createElement("h3")
            typeExperience.textContent = temoignages.typeExperience;

            const commentaire = document.createElement("p");
            commentaire.textContent = temoignages.commentaire;

            const note = document.createElement("p");
            note.className = "note";
            // note.textContent = temoignages.note + "/5";

            function rateStar(note) {
                let star = "";
                for (let i = 0; i < 5; i++) {
                    if (i < note) {
                        star += "★";
                    } else {
                        star += "☆"
                    }
                }

                return star;

            }

            note.textContent = rateStar(temoignages.note);


            card.appendChild(imgProf);
            card.appendChild(prenom);
            card.appendChild(typeExperience);
            card.appendChild(commentaire);
            card.appendChild(note);

            temoignagesSec.appendChild(card);


        });

    })
    .catch(error => {
        console.error(`Erreur lors du chargement des produit: `, error);
    });


