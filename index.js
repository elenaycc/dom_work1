document.addEventListener("DOMContentLoaded", function () {
  backgroundColor_element();
  updateFirstTile();
  createLİ();
  elemanıSil();
  styleChange();
});

/* 1.Bir HTML sayfasında bulunan bir başlık elementini (h1) JavaScript kullanarak değiştirin. Yeni başlık metni "Merhaba, Dünya!" olsun.

function updateFirstTile(){
let h1element = document.getElementsByTagName("h1")[0];
h1element.innerHTML = "Merhaba Dünya."; }*/

/* 2.Bir HTML sayfasında bulunan bir div elementinin arka plan rengini JavaScript kullanarak değiştirin.

function backgroundColor_element(){
document.getElementById("div1").style.backgroundColor = "red"; }*/

/* 3.Bir HTML sayfasında bulunan bir sırasız listeye JavaScript kullanarak yeni bir liste elemanı ekleyin ve ardından bir elemanı silin.

function createLİ(){
let ulEleman = document.getElementById("UL");
const elemanlar = ["d", "e", "f"];
for (i = 0; i < elemanlar.length; i++) {
  let newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode(elemanlar[i]));
  ulEleman.appendChild(newLi);
}}
function elemanıSil() {
  let list = document.getElementById("UL");
  list.removeChild(list.children[0]);
}*/

/*4. Bir düğmeye tıklandığında bir metni güncelleyen bir JavaScript fonksiyonunu çağırın.

function guncelle() {
  document.getElementById("1").innerHTML = "güncellendi.";
}*/

/*5.Bir HTML formunda kullanıcıdan bir metin girmesini isteyin. Ardından, girilen metni başka bir bölümde görüntüleyin.

function girilenMetniGoster() {
  let metinGirisiElementi = document.getElementById("metinGirisi");
  let girilenMetin = metinGirisiElementi.value;
  let gosterilenMetinElement = document.getElementById("girilenMetinBolumu");
  gosterilenMetinElement.innerHTML = "Girdiniz: " + girilenMetin;
}*/

/* 6. Bir HTML sayfasında bulunan bir div elementinin (veya istediğiniz bir elementin) stilini JavaScript kullanarak değiştirin. Örneğin, genişliğini artırın ve rengini değiştirin.
function styleChange(){
let secilen = document.getElementById("UL");
secilen.style.color = "red";
secilen.style.padding = "10px";}*/

/* 7. Bir HTML sayfasında bulunan bir sırasız listeyi (ul) JavaScript kullanarak filtreleyin. Örneğin, sadece belirli bir harfi içerenleri gösterin.
 
function filtreleme() {
  let filtreli = document.getElementById("UL").getElementsByTagName("li");
  for (let i = 0; i < filtreli.length; i++) {
    let metin = filtreli[i].innerText.toLowerCase();
    if (metin.includes("d")) {
      filtreli[i].style.display = "block";
    } else {
      filtreli[i].style.display = "none";
    }
  }
}
window.onload = filtreleme; */

/* 9. Bir HTML sayfasında bulunan bir liste üzerinde olay delegasyonu kullanarak tıklanan elemanın metnini gösterin.
document.getElementById("UL").addEventListener("click", function (event) {
  let tiklananeleman = event.target;
  if (tiklananeleman.tagName === "LI") {
    document.getElementById("olaydelegasyon").innerText =
      "Tıklanan eleman: " + tiklananeleman.innerText;
  }
}); */

/* 10. Bir HTML formunu JavaScript kullanarak doğrulayın. Örneğin, kullanıcı adı ve şifre alanlarını kontrol edin ve hatalı giriş durumunda bir uyarı gösterin.
function giris() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Kullanıcı adı ve şifre kontrolü
  if (username === "elin" && password === "sifre") {
    alert("Giriş başarılı!");
  } else {
    alert("Hatalı kullanıcı adı veya şifre. Lütfen tekrar deneyin.");
  }
}*/
