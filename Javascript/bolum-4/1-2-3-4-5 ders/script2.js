function Question(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}

Question.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

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

function Quiz(sorular) {
  this.sorular = sorular;
  this.soruIndex = 0;
}
Quiz.prototype.soruGetir = function () {
  return this.sorular[this.soruIndex];
};

const quiz = new Quiz(sorular);

// console.log(quiz.soruGetir());

document.querySelector(".btn-start").addEventListener("click", function () {
    
    document.querySelector(".btn-start").classList.add("hidden");
    document.querySelector(".quiz-box").classList.add("visible");
    
  
  
    if (quiz.sorular.length != quiz.soruIndex) {
    console.log(quiz.soruGetir());
    quiz.soruIndex += 1;
  } else {
    console.log("sorular bitti");
  }
});

