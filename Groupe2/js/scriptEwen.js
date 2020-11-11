// FAIRE CTRL SUR LES IMAGES EN 360° POUR CONNAITRE LEUR POSITION

// à remettre si on travaille dans le dossier du groupe2
/*const debutCouloir = new PANOLENS.ImagePanorama('./img/5.jpg');
const i8 = new PANOLENS.ImagePanorama('./img/5_1.jpg');
const milieuCouloir = new PANOLENS.ImagePanorama('./img/6.jpg');
const finCouloir = new PANOLENS.ImagePanorama('./img/7.jpg');*/


// Toutes les images du groupe 2
const debutCouloir = new PANOLENS.ImagePanorama('./Groupe2/img/5.jpg');
const i8 = new PANOLENS.ImagePanorama('./Groupe2/img/5_1.jpg');
const milieuCouloir = new PANOLENS.ImagePanorama('./Groupe2/img/6.jpg');
const finCouloir = new PANOLENS.ImagePanorama('./Groupe2/img/7.jpg');
const cafet = new PANOLENS.ImagePanorama('./Groupe2/img/7_2.jpg');
const cafetProf = new PANOLENS.ImagePanorama('./Groupe2/img/7_3.jpg');
const detenteProf = new PANOLENS.ImagePanorama('./Groupe2/img/7_4.jpg');

const viewer = new PANOLENS.Viewer({
    output: 'console'
});

// var taille = 300;

// de 5 à 5_1
debutCouloir.link( i8, new THREE.Vector3( 4395.93, -123.49, -2360.17 ) );
// de 5 à 6
debutCouloir.link( milieuCouloir, new THREE.Vector3( 4927.09, -828.87, -39.38 ) );
// a mettre lien vers 4
debutCouloir.link( i8, new THREE.Vector3( -4994.76, 59.19, 55.59 ) );

// de 5_1 à 5
i8.link( debutCouloir, new THREE.Vector3( 4980.32, 29.56, -353.44 ) );

// de 6 à 5
milieuCouloir.link( debutCouloir, new THREE.Vector3(-4981.29, -353.95, -91.57));
// de 6 à 7
milieuCouloir.link( finCouloir, new THREE.Vector3(4964.00, -513.09, 120.11));

// de 7 à 6
finCouloir.link(milieuCouloir, new THREE.Vector3(-4985.30, -133.23, -180.58));
// de 7 à 7_2
finCouloir.link(cafet, new THREE.Vector3(1951.56, -2354.94, -3945.43));
// de 7 à 7_3
finCouloir.link(cafetProf, new THREE.Vector3(4902.97, 29.37, -954.95));

// de 7_2 à 7
cafet.link(finCouloir, new THREE.Vector3(4665.62, -1756.31, 223.91));

// de 7_3 à 7
cafetProf.link(finCouloir, new THREE.Vector3(4686.20, -1686.12, 325.43));
// de 7_3 à 7_4
cafetProf.link(detenteProf, new THREE.Vector3(-4549.36, -2031.34, -299.03));

// de 7_4 à 7_3
detenteProf.link(cafetProf, new THREE.Vector3(4634.45, -1868.31, 30.37));

let i8Infospot1 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
i8Infospot1.position.set(-4995.37, -18.56, -74.36);
i8Infospot1.addHoverText('YMCA');

let i8Infospot2 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
i8Infospot2.position.set(4756.04, 495.68, 1435.56);
i8Infospot2.addHoverText('DAB');

let i8Infospot3 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
i8Infospot3.position.set(4713.67, 338.00, -1616.48);
i8Infospot3.addHoverText('DAB');

i8.add(i8Infospot1, i8Infospot2, i8Infospot3);

/* let goi16 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
goi16.position.set(-2642.97, 496.47, 4204.25);
goi16.addEventListener('click', letgoi16);

let i16 = 'i16';

let goi17 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
goi17.position.set(-769.01, 472.19, 4908.44);
goi17.addEventListener('click', letgoi17);

milieuCouloir.add(goi16, goi17);

let url = window.location.toString();
let splitUrl = url.split('#');
const anchor = splitUrl[1];

if (anchor && anchor !== null) {
    switch (anchor) {
        case 'couloir6':
            viewer.add(milieuCouloir, debutCouloir, finCouloir);
            break;
        case 'couloir5':
            viewer.add(debutCouloir, milieuCouloir, finCouloir);
            break;
        case 'couloir7':
            viewer.add(finCouloir, debutCouloir, milieuCouloir);
            break;
        default:
            viewer.add(debutCouloir, milieuCouloir, finCouloir);
    }
} else {
    viewer.add(debutCouloir, milieuCouloir, finCouloir);
}*/

viewer.add(debutCouloir, milieuCouloir, finCouloir, i8, cafet, cafetProf, detenteProf);
// viewer.add(i8);

// viewer.add(debutCouloir, i8, milieuCouloir, finCouloir); // le premier est celui qui s'affiche en premier
/*viewer.getControl().rotateLeft(-90 * Math.PI / 180);
viewer.getControl().update();*/
viewer.render.sortObjects = true;

/*function letgoi16() {
    window.location.replace("../groupe3/groupe3.html#i16");
}

function letgoi17() {
    window.location.replace("../groupe3/groupe3.html#i17");
}*/