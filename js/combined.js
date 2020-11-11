// de 7 à 8_1
finCouloir.link( toilettes, new THREE.Vector3(-272.82, -1022.92, 4876.26));

// de 8_1 à 7
toilettes.link( finCouloir, new THREE.Vector3(4619.64, -895.14, 1664.28));

// de 7 à 7_1
finCouloir.link( i18, new THREE.Vector3(-3946.71, 452.91, 3024.56));

// de 7_1 à 7
i18.link( finCouloir, new THREE.Vector3(2971.12, -187.10, -4009.57));

// de 6 à 6_1
milieuCouloir.link( i16, new THREE.Vector3(-2644.93, 457.17, 4208.51));

// de 6_1 à 6
i16.link( milieuCouloir, new THREE.Vector3(-3296.63, 24.10, 3754.21));

// de 6 à 6_2
milieuCouloir.link( i17, new THREE.Vector3(-790.09, 444.45, 4908.42));

// de 6_2 à 6
i17.link( milieuCouloir, new THREE.Vector3(2783.95, -432.74, -4121.67));