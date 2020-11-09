// FAIRE CTRL SUR LES IMAGES EN 360° POUR CONNAITRE LEUR POSITION
var rayon = 0;

var field = true;
const debutCouloir = new PANOLENS.ImagePanorama('./img/cafetprof.jpg');
const i8 = new PANOLENS.ImagePanorama('./img/DABDAB.jpg');
const viewer = new PANOLENS.Viewer({
    output: 'console'
});

// var taille = 300;

var i9Infospot = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
i9Infospot.position.set(4974.75, -459.07, 36.96);
i9Infospot.addEventListener('click', onFocus);
debutCouloir.add(i9Infospot);

//var infospot2 = new PANOLENS.Infospot( taille * position.length() / rayon, PANOLENS.DataImage.Info );
var i9Infospot2 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
i9Infospot2.position.set(4936.98, -627.98, 376.11);
i9Infospot2.addEventListener('click', onFocus);
debutCouloir.add(i9Infospot2);

viewer.add(debutCouloir);
viewer.render.sortObjects = true;

function onFocus() {
    // i += i;
    // infospot2.position.set(i, -2000, -5000);
    // panorama.add(infospot2);
    console.log("Clic sur Infospot");
    if (field) {
        viewer.remove(panorama);
        viewer.add(otherpic);
        viewer.setPanorama(otherpic);
    } else {
        viewer.remove(otherpic);
        viewer.add(panorama);
        viewer.setPanorama(panorama);
    }

    field = !field;


}

//console.log(infospot, infospot2);