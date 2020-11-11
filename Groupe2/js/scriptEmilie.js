var field = true;

const panorama = new PANOLENS.ImagePanorama( 'images/grp2/fincouloir.jpg' );
const otherpic = new PANOLENS.ImagePanorama( 'images/grp2/cafet.jpg');
const viewer = new PANOLENS.Viewer( { output: 'console' } );

var camera = viewer.getCamera();
camera.position.set( 4975.40, -430.12, 89.82 );
viewer.setCameraFov(50);

var taille = 300;

var infospot = new PANOLENS.Infospot( taille , PANOLENS.DataImage.Info );
infospot.position.set(2202.79, -1302.37, -4284.01);
// infospot.addHoverText( 'Infospot1');
infospot.addEventListener( 'click', onFocus );
panorama.add( infospot );

var otherinfo = new PANOLENS.Infospot( taille , PANOLENS.DataImage.Info );
otherinfo.position.set( 4957.95, -550.82, 150.24 );
// otherinfo.addHoverText( 'Infospot1');
otherinfo.addEventListener( 'click', onFocus );
otherpic.add( otherinfo );

viewer.add( panorama );
viewer.render.sortObjects = true;

function onFocus () {
    console.log("Clic sur Infospot");
    if(field) {
        viewer.remove(panorama);
        viewer.add(otherpic);
        viewer.setPanorama(otherpic);
        camera.position.set( 4957.95, -550.82, 150.24 );
        viewer.setCameraFov(50);
    } else {
        viewer.remove(otherpic);
        viewer.add(panorama);
        viewer.setPanorama(panorama);
        viewer.setCameraFov(50);
    }
    field = ! field;
}
