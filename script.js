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


        infoResto.appendChild(nomCommercial);
        infoResto.appendChild(texteAccroche);
        infoResto.appendChild(texteBouton);

        // promessesClient
        const promClient = data.promessesClient;
        const divProm = document.createElement("div");
        divProm.className = "divProm";
        promessesClient.appendChild(divProm);



        promClient.forEach(element => {
            const promessesClientP = document.createElement("p");
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

            const nom = document.createElement("h3");
            nom.textContent = services.nom;

            const desc = document.createElement("p");
            desc.textContent = services.desc;

            card.appendChild(nom);
            card.appendChild(desc);

            servicesSec.appendChild(card);
        });

        // temoignages
        let temoignages = data.temoignages;

        temoignages.forEach(temoignages => {
            const card = document.createElement("div");
            card.classList.add("temoignages");

            const prenom = document.createElement("h2");
            prenom.textContent = temoignages.prenom;

            const typeExperience = document.createElement("h3")
            typeExperience.textContent = temoignages.typeExperience;

            const commentaire = document.createElement("p");
            commentaire.textContent = temoignages.commentaire;

            const note = document.createElement("p");
            note.textContent = temoignages.note;


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



// .split() para cortar a string 