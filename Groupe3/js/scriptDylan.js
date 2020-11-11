// à remettre si on travail dans le dossier du groupe3
/*const basEscalier = new PANOLENS.ImagePanorama('./img/11.jpg');
const hautEscalier = new PANOLENS.ImagePanorama('./img/10.jpg');
const deckEtWC = new PANOLENS.ImagePanorama('./img/9.jpg');
const deck = new PANOLENS.ImagePanorama('./img/8.jpg');
const toilettes = new PANOLENS.ImagePanorama('./img/8_1.jpg');
const i18 = new PANOLENS.ImagePanorama('./img/7_1.jpg');
const i17 = new PANOLENS.ImagePanorama('./img/6_2.jpg');
const i16 = new PANOLENS.ImagePanorama('./img/6_1.jpg');*/

// Toutes les images du groupe 3
const basEscalier = new PANOLENS.ImagePanorama('./Groupe3/img/11.jpg');
const hautEscalier = new PANOLENS.ImagePanorama('./Groupe3/img/10.jpg');
const deckEtWC = new PANOLENS.ImagePanorama('./Groupe3/img/9.jpg');
const deck = new PANOLENS.ImagePanorama('./Groupe3/img/8.jpg');
const toilettes = new PANOLENS.ImagePanorama('./Groupe3/img/8_1.jpg');
const i18 = new PANOLENS.ImagePanorama('./Groupe3/img/7_1.jpg');
const i17 = new PANOLENS.ImagePanorama('./Groupe3/img/6_2.jpg');
const i16 = new PANOLENS.ImagePanorama('./Groupe3/img/6_1.jpg');

// à retirer après pour le G1 (laisser si on travaille dans le dossier groupe 3)
/*const viewer = new PANOLENS.Viewer({
    output: 'console'
});*/

// durée de transition à 0 pour tester plus rapidement
/*basEscalier.animationDuration = 0;
hautEscalier.animationDuration = 0;
deckEtWC.animationDuration = 0;
deck.animationDuration = 0;
toilettes.animationDuration = 0;*/

// Ajout des images au viewer
viewer.add(basEscalier, hautEscalier, deckEtWC, deck, toilettes, i18, i17, i16);

origine = 1;
viewer.tweenControlCenter(new THREE.Vector3(-4816.61, 1267.89, -321.48), 0);

// liens flèches

// de 11 à 10
basEscalier.link(hautEscalier, new THREE.Vector3(-4816.61, 1267.89, -321.48));

// de 10 à 11
hautEscalier.link(basEscalier, new THREE.Vector3(3293.96, -1951.59, 3205.05));
// de 10 à 9
hautEscalier.link(deckEtWC, new THREE.Vector3(-3561.66, -408.08, 3475.31));

// de 9 à 10
deckEtWC.link(hautEscalier, new THREE.Vector3(2669.90, -790.11, -4144.62));
// de 9 à 8
deckEtWC.link(deck, new THREE.Vector3(4819.19, -1010.72, 808.13));
// de 9 à 8_1
deckEtWC.link(toilettes, new THREE.Vector3(-4697.29, -41.80, -1691.57));

// de 8 à 9
deck.link(deckEtWC, new THREE.Vector3(4829.10, -995.93, 764.29));

// de 8_1 a 9
toilettes.link(deckEtWC, new THREE.Vector3(-1715.60, -997.01, 4578.27));


// quand on entre dans un panorama, on regarde d'où l'on vient (quelle origine) pour changer
// l'orientation si besoin.

basEscalier.addEventListener('enter', function () {
    if (origine == 2) changePanorama(4944.68, -604.67, 281.76);
    origine = 1;
    console.log(origine);
})

// orientation panorama 2
hautEscalier.addEventListener('enter', function () {
    if (origine == 1) changePanorama(-4095.06, -289.79, -2841.10);
    if (origine == 3) changePanorama(2669.90, -790.11, -4144.62);
    origine = 2;
    console.log(origine);
});

deckEtWC.addEventListener('enter', function () {
    if (origine == 2) changePanorama(-2447.93, 488.71, 4326.59);
    if (origine == 4) changePanorama(-4577.40, -95.59, -1998.01);
    if (origine == 5) changePanorama(4500.36, -1072.05, 1876.95);
    origine = 3;
    console.log(origine);
});

deck.addEventListener('enter', function () {
    if (origine == 3) changePanorama(4829.10, -995.93, 764.29);
    if (origine == 5) changePanorama(4317.25, -1007.56, 2291.25);
    origine = 4;
    console.log(origine);
});

toilettes.addEventListener('enter', function () {
    if (origine == 3) changePanorama(2105.96, -818.03, -4453.91)
    origine = 5;
    console.log(origine);
})

// Fonction permettant de changer le centre de la photo dans laquelle on va aller
function changePanorama(x, y, z) {
    viewer.tweenControlCenter(new THREE.Vector3(x, y, z), 0);
}