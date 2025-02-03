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

// generic type

function yazdir<T>(array: T[]): void {
  console.log(array);
}

yazdir(["umut", "tosun"]);
yazdir(["umut", 3]);
yazdir([false, true]);
yazdir([23, 54]);

interface GenericType<T> {
  name: string;
  age: number;
  salary: T[];
}

const obj4: GenericType<string> = {
  name: "umut",
  age: 21,
  salary: ["23000", "24000"],
};
const obj5: GenericType<number> = {
  name: "ahmet",
  age: 23,
  salary: [21222, 54444],
};

function write2<T>(array: GenericType<T>[]): void {
  array.forEach((value: GenericType<T>) => console.log(value));
}

let array43: GenericType<string | number>[] = [obj4, obj5];

write2(array43);

// extends - miras alma

interface OrtakAlanlar {
  id: string;
  createDate: string;
  olusturanKisi: string;
}

interface Musteri extends OrtakAlanlar {
  musteriNo: string;
}
interface Kurum extends OrtakAlanlar {
  kurumNo: string;
}

const kurum: Kurum = {
  id: "1",
  createDate: "123.32.32.2",
  olusturanKisi: "yunus",
  kurumNo: "2313213",
};
console.log(kurum);

//--------------------------
// partial , required, readonly, pick , omit

interface kullanici {
  name: string;
  age: number;
}

// partial : hepsi opsiyonel gibi davranilir
const kullanici1: Partial<kullanici> = {
  name: "esila",
};

//required :  her seyi doldurmak zorunda birakir
const kullanici2: Required<kullanici> = {
  name: "esila",
  //age: 23
};

// readonly : sadece okunabilir yapar
const kullanici3: Readonly<kullanici> = {
  name: "esila",
};

kullanici3.name = "umut";

// pick :sadece belirtilen degiskeni almak icin kullanilir
const kullanici4: Pick<kullanici, "name"> = {
  name: "esila",
};

// omit : belirtilen degisken disindakileri almak icin kullanilir
const kullanici5: Omit<kullanici, "name"> = {
  //   name: "esila",
  age: 23,
};
