document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez les éléments du DOM
    const selectCouleur1 = document.getElementById("selectCouleur1");
    const selectCouleur2 = document.getElementById("selectCouleur2");
    const resultatNoeudPapillon = document.getElementById(
      "resultatNoeudPapillon"
    );
    const noeudPapillon = document.getElementById("noeudPapillon");
  
    // Écoutez les changements dans les sélecteurs de couleur
    selectCouleur1.addEventListener("change", personnaliserNoeudPapillon);
    selectCouleur2.addEventListener("change", personnaliserNoeudPapillon);
  
    function personnaliserNoeudPapillon() {
      const couleur1 = selectCouleur1.value;
      const couleur2 = selectCouleur2.value;
  
      // Mettez à jour l'image du nœud papillon en fonction des couleurs sélectionnées
      const cheminImage = `Assets/noeud2/${couleur1}${couleur2}.jpg`;
  
      resultatNoeudPapillon.style.display = "block";
  
      // Vérifiez si le fichier image existe avant de l'afficher
      const imageExiste = imageExisteDansAssets(cheminImage);
      if (imageExiste) {
        noeudPapillon.src = cheminImage;
      } else {
        resultatNoeudPapillon.style.display = "none";
      }
    }
  
    function imageExisteDansAssets(cheminImage) {
      const img = new Image();
      img.src = cheminImage;
      return img.width !== 0 && img.height !== 0;
    }
  
    noeudPapillon.style.width = "200px"; // Change la largeur à 200 pixels
    noeudPapillon.style.height = "auto"; // Laisse la hauteur ajustée automatiquement pour conserver les proportions
    noeudPapillon.style.margin = "10px";
  
    // Appelez la fonction de personnalisation initialement pour afficher l'image par défaut
    personnaliserNoeudPapillon();
  });
  