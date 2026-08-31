 // calculs.js 

// premier bloc 
document.getElementById("btn-conversion").addEventListener("click", function() {
    let montantHT = parseFloat(document.getElementById("ht").value);
    let taux = parseFloat(document.getElementById("taux").value);
    let ttc= montantHT * (1 + taux / 100);
    document.getElementById("resultat-conversion").textContent= "TTC : " + ttc;
});

// deuxieme bloc 
document.getElementById("btn-escompte").addEventListener("click", function() {
    let brutht = parseFloat(document.getElementById("brut-ht").value);
    let txescompte= parseFloat(document.getElementById("tx").value); 
    let escompte= brutht * (txescompte / 100 );
    let netfinancier= brutht - escompte; 
    document.getElementById("resultat-escompte").textContent= netfinancier ; 
});

// troisieme bloc 
document.getElementById("btn-net").addEventListener("click", function() {
    let montantbt = parseFloat(document.getElementById("mtn-brut").value);
    let rrr= parseFloat(document.getElementById("rrr").value); 
    let Escompte = parseFloat(document.getElementById("escompte").value);
    let tva= parseFloat(document.getElementById("tv").value);
    let remiserrr= montantbt * (rrr / 100);
    let netcommercial= montantbt - remiserrr ;
    let montantescompte= netcommercial * (Escompte / 100) ;
    let netfinancier = netcommercial - montantescompte;
    let montanttva= netfinancier * (tva / 100 ) ;
    let netapayer = netfinancier + montanttva ;
    document.getElementById("resultat-co").textContent= netcommercial ;
    document.getElementById("resultat-fi").textContent= netfinancier ; 
    document.getElementById("re-netapayer").textContent= netapayer ;
});
