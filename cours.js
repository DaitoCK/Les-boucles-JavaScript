

// BOUCLE WHILE 

//On initialise la variable let X

let x = 0, a = 0;
let y = 10, b = 10;


// Tant que 
while(x < 10){
    document.getElementById('p1').innerHTML +=
    ' x stocke la valeur ' + x + ' lors du passage n° '
    + (x + 1) + ' dans la boucle <br> ';

    x++;
}


// Boucles DO....WHILE

// Faire...tant que

//S'exécute correctement car a = 0; et que la condition de sortie est 10.

do {
    document.getElementById('p2').innerHTML +=
    'a stocke la valeur ' + a + ' lors du passage n° '
    + (a + 1) + ' dans la boucle<br>';
    a++;
}
while(a < 10);


//S'exécute pas car y = 10; est que la condition de sortie est 10 et dans le cas de la boucle while le code ne s'exécute pas.

while(y < 10){
    document.getElementById('p3').innerHTML +=
    'y stocke la valeur ' + y + ' lors du passage n° '
    + (y + 1) + ' dans la boucle<br>';
    y++;
}

//S'exécute au moins une fois car on utilise la boucle do...while est que b = 10.

do {
    document.getElementById('p4').innerHTML +=
    'b stocke la valeur ' + b + ' lors du passage n° '
    + (b + 1) + ' dans la boucle<br>';
    b++;
}
while(b < 10);




