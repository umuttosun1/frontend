let sayilar = [3,5,6,7,12,23,45,66];

for ( let i = 0 ; i < sayilar.length ; i++){
    
    console.log(sayilar[i] * sayilar[i]);
}

for ( let i = 0 ; i < sayilar.length ; i++){
    if (sayilar[i] % 5 == 0)
        console.log(sayilar[i] + ' 5 in kati');
    else 
        console.log(sayilar[i] + ' 5 in kati degil');
}
