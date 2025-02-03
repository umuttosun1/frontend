// temel tipler :number , :string , :boolean ,
// any degeri bilinmeyen degiskenler icin ilk degerini girmek icin kullanilir

let age: number = 24;
let name: string = "umut";
let abc: any = 23;

console.log(abc);
console.log(age);
console.log(name);

//--------------------------------------------------------------------
//union type
// union type: degiskenin hangi veri tiplerinden biri olabilecegini belirtmek icin kullanilir

let T: string | number | boolean = true;

console.log(T);

// Literal Type
// Literal Type: Degiskenin hangi degerleri alabilecegini belirtmek icin kullanilir verilen degerler disinda
// girilen verilerin setlenmesine izin verilmez

let statusResult: "pending" | "approved" | "rejected";

statusResult = "pending";
// statusResult = "ahmet";

console.log(statusResult);

// Array
// Array tanimlamalari

let names: string[] = ["Umut", "Diyar", "ibo"];
names.forEach((name) => console.log(name));

let numbers: number[] = [2, 321, 32, 423];
console.log(numbers);

let numbers2: Array<number> = [1, 2, 3];
console.log(numbers2);

// number[] = Array<number>         ayni sey

// union type ile array tanimlamasi

let array_name: (number | string | boolean)[] = ["umut", "tosun", 21, true];
console.log(array_name);

//-----------------------------------------------------------------------
// interface ve type : kendi tipimizi olusturmamizi sagliyor.

// TYPE
type User2 = {
  name: string;
  age: number;
};

// INTERFACE
interface User {
  name: string;
  age?: number;
}

const object1: User2 = {
  name: "umut",
  age: 21,
  // age : true             bunu kabul etmez . Userin icinde tanimlananlar disinda yeni degisken eklenemez
};
console.log(object1);

let array2: User[] = [{ name: "ahmet", age: 32 }];

console.log(array2);

// Optional Type ?
// Userda agein yanina soru isareti koydugum icin opsiyonel kullanim oldu ister kullanir ister kullanmam
const object2: User = {
  name: "umut",
};
console.log(object2);
//---------------------------------------------------------------------------------
// Function tanimlamalari

function topla(a: number, b: number): number | string {
  //bir suru islem yapmisim gibi dusun
  console.log(a + b);
  return a + b;
  //   return "umut";
  // return isleminde geriye donecek veri tipini parantezin disinda tanimlarin
}
const sonuc = topla(2, 4);
console.log(sonuc);

topla(2, 3);

function write(array5: Array<string>): void {
  array5.forEach((value) => console.log(value));
}

let dizi: Array<string> = ["umut", "tosun", "Ece"];
write(dizi);
