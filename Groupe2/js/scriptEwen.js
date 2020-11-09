// FAIRE CTRL SUR LES IMAGES EN 360° POUR CONNAITRE LEUR POSITION
var rayon = 0;

var field = true;
const debutCouloir = new PANOLENS.ImagePanorama('./img/5.jpg');
const i8 = new PANOLENS.ImagePanorama('./img/5_1.jpg');
const viewer = new PANOLENS.Viewer({
    output: 'console'
});

// var taille = 300;

debutCouloir.link( i8, new THREE.Vector3( 4395.93, -123.49, -2360.17 ) );
debutCouloir.link( i8, new THREE.Vector3( 4985.40, -261.75, -82.32 ) );
debutCouloir.link( i8, new THREE.Vector3( -4994.76, 59.19, 55.59 ) );

i8.link( debutCouloir, new THREE.Vector3( 4980.32, 29.56, -353.44 ) );


// panorama2.link( panorama1, new THREE.Vector3( -3429.01, 1205.85, -3421.88 ) );
/*var i9Infospot = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
i9Infospot.position.set(4985.40, -261.75, -82.32);
i9Infospot.addEventListener('click', onFocus);
debutCouloir.add(i9Infospot);


debutCouloir.link( panorama2, new THREE.Vector3( -3145.23, -3704.40, 1149.48 ) );

var i9Infospot3 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
i9Infospot3.position.set(-4994.76, 59.19, 55.59);
i9Infospot3.addEventListener('click', onFocus);
debutCouloir.add(i9Infospot3);

var i9Infospot2 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
i9Infospot2.position.set(4395.93, -123.49, -2360.17);
i9Infospot2.addEventListener('click', onFocus);
debutCouloir.add(i9Infospot2);

var debutCouloirInfospot = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
debutCouloirInfospot.position.set(4980.32, 29.56, -353.44);
debutCouloirInfospot.addEventListener('click', onFocus);
i8.add(debutCouloirInfospot);*/

let i8Infospot2 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
i8Infospot2.position.set(-4995.37, -18.56, -74.36);
i8Infospot2.addHoverText('YMCA');



i8.add(i8Infospot2);

viewer.add(debutCouloir);
viewer.add(i8);
viewer.getControl().rotateLeft(-90 * Math.PI / 180);
viewer.getControl().update();
viewer.render.sortObjects = true;

/*function onFocus() {
    console.log("Clic sur Infospot");
    if (field) {
        viewer.remove(debutCouloir);
        viewer.add(i8);
        viewer.setPanorama(i8);
    } else {
        viewer.remove(i8);
        viewer.add(debutCouloir);
        viewer.setPanorama(debutCouloir);
    }

    field = !field;


}*/

//console.log(infospot, infospot2);