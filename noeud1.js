document.addEventListener("DOMContentLoaded", function () {
  // Sélectionne les éléments du DOM
  const selectCouleur1 = document.getElementById("selectCouleur1");
  const selectCouleur2 = document.getElementById("selectCouleur2");
  const resultatNoeudPapillon = document.getElementById(
    "resultatNoeudPapillon"
  );
  const noeudPapillon = document.getElementById("noeudPapillon");

  // Charge l'image par défaut
  const cheminImageDefaut = `Assets/noeud1/bleubleu.jpg`;
  noeudPapillon.src = cheminImageDefaut;

  // Liste des couleurs possibles
  const couleursPossibles = ["bleu", "bleuciel", "jaune", "terracotta", "rose"];

  // Préchargez les images au chargement de la page
  prechargerImages(couleursPossibles);

  // Écoute les changements dans les sélecteurs de couleur
  selectCouleur1.addEventListener("change", personnaliserNoeudPapillon);
  selectCouleur2.addEventListener("change", personnaliserNoeudPapillon);

  function personnaliserNoeudPapillon() {
    const couleur1 = selectCouleur1.value;
    const couleur2 = selectCouleur2.value;

    const cheminImage = `Assets/noeud1/${couleur1}${couleur2}.jpg`;

    resultatNoeudPapillon.style.display = "block";

    // Crée une nouvelle image de manière asynchrone
    const img = new Image();
    img.onload = function () {
      // Lorsque l'image est chargée avec succès
      noeudPapillon.src = cheminImage;
    };
    img.onerror = function () {
      // En cas d'erreur de chargement de l'image
      resultatNoeudPapillon.style.display = "none";
    };
    img.src = cheminImage;
  }

  noeudPapillon.style.width = "200px";
  noeudPapillon.style.height = "auto";
  noeudPapillon.style.margin = "10px";

  // Appelez la fonction de personnalisation initialement pour afficher l'image par défaut
  personnaliserNoeudPapillon();
  
  function prechargerImages(couleurs) {
    couleurs.forEach((couleur1) => {
      couleurs.forEach((couleur2) => {
        const cheminImage = `Assets/noeud1/${couleur1}${couleur2}.jpg`;
        const img = new Image();
        img.src = cheminImage;
      });
    });
  }
});
