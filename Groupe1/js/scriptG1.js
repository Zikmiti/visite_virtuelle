// à remettre si on travail dans le dossier du Groupe1
/*const grilleEntree = new PANOLENS.ImagePanorama('./img/1.jpg');
const couloirMer = new PANOLENS.ImagePanorama('./img/2.jpg');
const exterieur1 = new PANOLENS.ImagePanorama('./img/3.jpg');
const exterieur2 = new PANOLENS.ImagePanorama('./img/4.jpg');
const i4 = new PANOLENS.ImagePanorama('./img/4_1.jpg');
const i5 = new PANOLENS.ImagePanorama('./img/4_2.jpg');
const i6 = new PANOLENS.ImagePanorama('./img/4_3.jpg');
const parkingExt = new PANOLENS.ImagePanorama('./img/12.jpg');
const parkingInt = new PANOLENS.ImagePanorama('./img/13.jpg');*/

// Toutes les images du groupe 1
const grilleEntree = new PANOLENS.ImagePanorama('./Groupe1/img/1.jpg');
const couloirMer = new PANOLENS.ImagePanorama('./Groupe1/img/2.jpg');
const exterieur1 = new PANOLENS.ImagePanorama('./Groupe1/img/3.jpg');
const exterieur2 = new PANOLENS.ImagePanorama('./Groupe1/img/4.jpg');
const i4 = new PANOLENS.ImagePanorama('./Groupe1/img/4_1.jpg');
const i5 = new PANOLENS.ImagePanorama('./Groupe1/img/4_2.jpg');
const i6 = new PANOLENS.ImagePanorama('./Groupe1/img/4_3.jpg');
const parkingExt = new PANOLENS.ImagePanorama('./Groupe1/img/12.jpg');
const parkingInt = new PANOLENS.ImagePanorama('./Groupe1/img/13.jpg');

// à remettre après pour le G1
const viewer = new PANOLENS.Viewer({
    output: 'console'
});


const taille = 300;

// Ajout des images au viewer
viewer.add(grilleEntree, couloirMer, exterieur1, exterieur2, i4, i5, i6, parkingInt, parkingExt);

// à remettre après pour le G1
viewer.render.sortObjects = true;

origine = 1;
// Centre Initial
viewer.tweenControlCenter(new THREE.Vector3(-4816.61, 1267.89, -321.48), 0);

// Liens flèches

// de 1 à 2
grilleEntree.link(couloirMer, new THREE.Vector3(-4945.07, -459.98, -546.96));

// de 2 à 1
couloirMer.link(grilleEntree, new THREE.Vector3(253.16, -519.93, -4956.21));

// de 2 à 3
couloirMer.link(exterieur1, new THREE.Vector3(-4945.66, -620.26, -227.86));

// de 3 à 2
exterieur1.link(couloirMer, new THREE.Vector3(4227.96, -757.42, -2549.82));

// de 3 à 4
exterieur1.link(exterieur2, new THREE.Vector3(1131.42, -612.00, 4823.30));

// de 4 à 3
exterieur2.link(exterieur1, new THREE.Vector3(-1334.43, -313.23, -4799.00));
// de 4 à 4_1
exterieur2.link(i4, new THREE.Vector3(4729.00, -26.81, -1610.61));
// de 4 à 4_2
exterieur2.link(i5, new THREE.Vector3(4924.01, -241.73, 768.86));
// de 4 à 4_3
exterieur2.link(i6, new THREE.Vector3(4344.83, -267.50, 2448.02));

// de 4_1 à 4
i4.link(exterieur2, new THREE.Vector3(4841.33, -1237.20, -15.08));
// de 4_2 à 4
i5.link(exterieur2, new THREE.Vector3(-4885.56, -1040.75, 27.56));
// de 4_3 à 4
i6.link(exterieur2, new THREE.Vector3(-4785.63, -1206.01, -751.48));

// de 12 à 13
parkingExt.link(parkingInt, new THREE.Vector3(334.51, -404.39, 4965.62));

// de 13 à 12
parkingInt.link(parkingExt, new THREE.Vector3(-4988.06, -228.04, -56.79));

// quand on entre dans un panorama, on regarde d'où l'on vient (quelle origine) pour changer
// l'orientation si besoin.

/*basEscalier.addEventListener('enter', function () {
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
}*/