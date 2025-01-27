// let soru = {
//   soruMetni: "Hangisi javascript paket yonetim uygulamasidir ? ",
//   cevapSecenekleri: {
//     a: "node.js",
//     b: "typescript",
//     c: "Npm",
//   },
//   dogruCevap: "c",
//   cevabiKontrolEt: function (cevap) {
//     return cevap === this.dogruCevap;
//   },
// };

// console.log(soru.soruMetni);
// console.log(soru.cevabiKontrolEt("c"));

function Question(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;

  console.log(this);
}

Question.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

let soru1 = new Question(
  "Hangisi javascript paket yonetim uygulamasidir ?",
  {
    a: "node.js",
    b: "typescript",
    c: "Npm",
  },
  "c"
);

// let soru2 = new Question(
//   "Hangisi .net paket yonetim uygulamasidir ?",
//   {
//     a: "node.js",
//     b: "typescript",
//     c: "Nuget",
//   },
//   "c"
// );

let sorular = [
  new Question(
    "1-)Hangisi javascript paket yoneti uygulamasidir ?",
    { a: "node.js", b: "typescript", c: "Npm" },
    "c"
  ),
  new Question(
    "2-)Hangisi javascript paket yonetm uygulamasidir ?",
    { a: "node.js", b: "typescript", c: "Npm" },
    "c"
  ),
  new Question(
    "3-)Hangisi javascript paket yotim uygulamasidir ?",
    { a: "node.js", b: "typescript", c: "Npm" },
    "c"
  ),
  new Question(
    "4-)Hangisi javascript paket yoneim uygulamasidir ?",
    { a: "node.js", b: "typescript", c: "Npm" },
    "c"
  ),
  new Question(
    "5-)Hangisi javascript paket netim uygulamasidir ?",
    { a: "node.js", b: "typescript", c: "Npm" },
    "c"
  ),
];

// for ( let s of sorular){

//     console.log(s.soruMetni);
// }

// console.log(soru1.soruMetni);
// console.log(soru1.dogruCevap);
// console.log(soru2.soruMetni);
// console.log(soru2.dogruCevap);
// console.log(soru2.cevabiKontrolEt("a"));

function Quiz(sorular) {
  this.sorular = sorular;
  this.soruIndex = 0;
}
Quiz.prototype.soruGetir = function () {
  return this.sorular[this.soruGetir];
};

const quiz = new Quiz(sorular);

console.log(quiz.soruGetir());
