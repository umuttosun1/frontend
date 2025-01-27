var ogr1_isim = "Ada Bilgi";
var ogr1_dogum = 2012;
var ogr1_mat1 = 70;
var ogr1_mat2 = 70;
var ogr1_mat3 = 80;
var ogr1_yas = 2024 - ogr1_dogum;


var ogr2_isim = "Yigit Bilgi";
var ogr2_dogum = "2010";
var ogr2_mat1 = 40;
var ogr2_mat2 = 40;
var ogr2_mat3 = 50;
var ogr2_yas = 2024 - ogr2_dogum;

var ogr1_ort = (ogr1_mat1+ ogr1_mat2 + ogr1_mat3)/3;
var ogr2_ort = (ogr2_mat1+ ogr2_mat2 + ogr2_mat3)/3;

var durum1 = (ogr1_ort >= 50);
var durum2 = (ogr2_ort >=50);


console.log(durum1);

