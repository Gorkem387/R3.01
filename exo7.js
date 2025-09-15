let minCom;
let totCom;

function verifier(minCom,totCom) {
    if (totCom >= minCom) {
        console.log("Livraison gratuite !");
    }
    else {
    console.log("Frais de livraison : " + totCom + " euros");
    }
    return 0;
}

verifier(10,100);
verifier(101,100);