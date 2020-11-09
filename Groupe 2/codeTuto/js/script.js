// FAIRE CTRL SUR LES IMAGES EN 360° POUR CONNAITRE LEUR POSITION
var i = 100;
var rayon = 0;

var field = true;
      const panorama = new PANOLENS.ImagePanorama( './img/i9.jpg' );
      const otherpic = new PANOLENS.ImagePanorama( './img/cafetprof.jpg');
      const viewer = new PANOLENS.Viewer( { output: 'console' } );

        const theta = Math.PI/10; // hauteur -pi/2 à pi/2
        const phi = Math.PI; // placement sur le cercle à plat - pi à pi, 0 = derrière, pi et -pi devant
        var rayon = panorama.radius;
        console.log("Rayon : "+rayon);
        var position = new THREE.Vector3(
            rayon * Math.cos(theta) * Math.sin(phi), // Attention Y sphère
            rayon * Math.sin(theta), // Attention Z de la sphère
            rayon * Math.cos(theta) * Math.cos(phi)// Attention X de la sphère
        );

        /*var taille = 300;
        var infospot = new PANOLENS.Infospot( taille * position.length() / rayon, PANOLENS.DataImage.Info );
        infospot.position.copy( position );
//        infospot.addHoverText( 'Infospot1');
        infospot.addEventListener( 'click', onFocus );
        panorama.add( infospot );*/

        //var infospot2 = new PANOLENS.Infospot( taille * position.length() / rayon, PANOLENS.DataImage.Info );
        var infospot2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
        infospot2.position.set( 4974.75, -459.07, 36.96 );
        infospot2.addEventListener( 'click', onFocus );
        panorama.add(infospot2);
        
        /*var otherinfo = new PANOLENS.Infospot( taille * position.length() / rayon, PANOLENS.DataImage.Info );
        otherinfo.position.copy( position );
//        otherinfo.addHoverText( 'Infospot1');
        otherinfo.addEventListener( 'click', onFocus );
        otherpic.add( otherinfo );
        //otherpic.add(infospot2);*/
      viewer.add( panorama );
      viewer.render.sortObjects = true;

      //var infospot2 = new PANOLENS.Infospot( taille * position.length() / rayon, PANOLENS.DataImage.Info );
      var infospot3 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
      infospot3.position.set( 4936.98, -627.98, 376.11 );
      infospot3.addEventListener( 'click', onFocus );
      otherpic.add(infospot3);
      
      function onFocus () {
        // i += i;
        // infospot2.position.set(i, -2000, -5000);
        // panorama.add(infospot2);
        console.log("Clic sur Infospot");
        if(field) {
          viewer.remove(panorama);
          viewer.add(otherpic);
          viewer.setPanorama(otherpic);
        } else {
          viewer.remove(otherpic);
          viewer.add(panorama);
          viewer.setPanorama(panorama);
        }

        field = ! field;


    }

    //console.log(infospot, infospot2);