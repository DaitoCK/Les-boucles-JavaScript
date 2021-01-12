
//Ici, on commence par initialiser une variable let i en lui passant la valeur 0.

//Ce poursui tant que i est inférieur à 10 et chaque passage ajoutera 1 à la valeur précedente de la variable let i.

for(let i = 0; i < 10; i++){
    document.getElementById('p1').innerHTML +=
    'i stocke la valeur ' + i + ' lors du passage n°'
    + (i + 1) + ' dans la boucle<br>';
}