// temel tipler :number , :string , :boolean ,
// any degeri bilinmeyen degiskenler icin ilk degerini girmek icin kullanilir

let age: number = 24;

let name: string = "umut";
let dsa: any = 23;

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
