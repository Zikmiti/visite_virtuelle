// à remettre si on travail dans le dossier du groupe3
/*const basEscalier = new PANOLENS.ImagePanorama('./img/11.jpg');
const hautEscalier = new PANOLENS.ImagePanorama('./img/10.jpg');
const deckEtWC = new PANOLENS.ImagePanorama('./img/9.jpg');
const deck = new PANOLENS.ImagePanorama('./img/8.jpg');
const toilettes = new PANOLENS.ImagePanorama('./img/8_1.jpg');*/

// Toutes les images du groupe 3
const basEscalier = new PANOLENS.ImagePanorama('./Groupe3/img/11.jpg');
const hautEscalier = new PANOLENS.ImagePanorama('./Groupe3/img/10.jpg');
const deckEtWC = new PANOLENS.ImagePanorama('./Groupe3/img/9.jpg');
const deck = new PANOLENS.ImagePanorama('./Groupe3/img/8.jpg');
const toilettes = new PANOLENS.ImagePanorama('./Groupe3/img/8_1.jpg');
const i18 = new PANOLENS.ImagePanorama('./Groupe3/img/7_1.jpg');
const i17 = new PANOLENS.ImagePanorama('./Groupe3/img/6_2.jpg');
const i16 = new PANOLENS.ImagePanorama('./Groupe3/img/6_1.jpg');

// durée de transition à 0 pour tester plus rapidement
/*basEscalier.animationDuration = 0;
hautEscalier.animationDuration = 0;
deckEtWC.animationDuration = 0;
deck.animationDuration = 0;
toilettes.animationDuration = 0;*/


// const panorama6 = new PANOLENS.ImagePanorama( 'IMG3.6.jpg' );
// const panorama7 = new PANOLENS.ImagePanorama( 'IMG3.7.jpg' );

/*const viewer = new PANOLENS.Viewer({
    output: 'console'
});*/

// const theta = Math.PI / 10; // hauteur -pi/2 à pi/2
// const phi = Math.PI; // placement sur le cercle à plat - pi à pi, 0 = derrière, pi et -pi devant
// var rayon = basEscalier.radius;
// var position = new THREE.Vector3(
//     rayon * Math.cos(theta) * Math.sin(phi), // Attention Y sphère
//     rayon * Math.sin(theta), // Attention Z de la sphère
//     rayon * Math.cos(theta) * Math.cos(phi) // Attention X de la sphère
// );

const taille = 300;

viewer.add(basEscalier, hautEscalier, deckEtWC, deck, toilettes, i18, i17, i16);


// viewer.render.sortObjects = true;

origine = 1;
viewer.tweenControlCenter(new THREE.Vector3(-4816.61, 1267.89, -321.48), 0);

// fleches

// de 1 a 2
// de 11 à 10
basEscalier.link(hautEscalier, new THREE.Vector3(-4816.61, 1267.89, -321.48));

// de 2 a 1
// de 10 à 11
hautEscalier.link(basEscalier, new THREE.Vector3(3293.96, -1951.59, 3205.05));

// de 2 a 3
// de 10 à 9
hautEscalier.link(deckEtWC, new THREE.Vector3(-3561.66, -408.08, 3475.31));

// de 3 a 2
// de 9 à 10
deckEtWC.link(hautEscalier, new THREE.Vector3(2669.90, -790.11, -4144.62));

// de 3 a 4
// de 9 à 8
deckEtWC.link(deck, new THREE.Vector3(4819.19, -1010.72, 808.13));

// de 4 a 3
// de 8 à 9
deck.link(deckEtWC, new THREE.Vector3(4829.10, -995.93, 764.29));

// de 3 a 5
// de 9 à 8_1
deckEtWC.link(toilettes, new THREE.Vector3(-4697.29, -41.80, -1691.57));

// de 5 a 3
// de 8_1 a 9
toilettes.link(deckEtWC, new THREE.Vector3(-1715.60, -997.01, 4578.27));


// quand on entre dans un panorama

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

    // window.location.href = 'facebook.com';
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


function changePanorama(x, y, z) {
    viewer.tweenControlCenter(new THREE.Vector3(x, y, z), 0);
}