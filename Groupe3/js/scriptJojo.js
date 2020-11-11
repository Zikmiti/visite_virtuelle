// FAIRE CTRL SUR LES IMAGES EN 360° POUR CONNAITRE LEUR POSITION
const i16 = new PANOLENS.ImagePanorama('./img/6_1.jpg');
const i17 = new PANOLENS.ImagePanorama('./img/6_2.jpg');
const viewer = new PANOLENS.Viewer({
    output: 'console'
});


let i16Infospot1 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
i16Infospot1.position.set(-4862.39, 738.69, 858.45);
i16Infospot1.addHoverText('MIAW MIAW');

let i16Infospot2 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
i16Infospot2.position.set(-3315.90, 83.17, 3735.62);
i16Infospot2.addEventListener('click', letgoCouloir6);

i16.add(i16Infospot1, i16Infospot2);

let i17Infospot1 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
i17Infospot1.position.set(2840.26, -291.73, -4101.35);
i17Infospot1.addEventListener('click', letgoCouloir6);

i17.add(i17Infospot1);

let url = window.location.toString();
let splitUrl = url.split('#');
const anchor = splitUrl[1];

if (anchor && anchor !== null) {
    switch (anchor) {
        case 'i16':
            viewer.add(i16, i17);
            break;
        case 'i17':
            viewer.add(i17, i16);
            break;
        default:
            viewer.add(i16, i17);
    }
} else {
    viewer.add(i16, i17);
}

// viewer.add(i16);
viewer.getControl().rotateLeft(95 * Math.PI / 180);
viewer.getControl().update();
viewer.render.sortObjects = true;

function letgoCouloir6() {
    window.location.replace("../groupe2/groupe2.html#couloir6");
}
