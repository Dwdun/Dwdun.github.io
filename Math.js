let alas= document.getElementById("alas")
let tinggi= document.getElementById("tinggi")
const hitung= document.getElementById("hitung")
const reset= document.getElementById("reset")
let jawaban = document.getElementById("jawaban")
const error = document.getElementById("error")

function shakeInput(input){
    input.classList.add("shake");
    setTimeout(() => input.classList.remove("shake"),300);
}

hitung.onclick= function(){
     if (!alas.value || !tinggi.value) {
  error.textContent = "Harap isi semua input terlebih dahulu!";
  if (!alas.value) shakeInput(alas);
  if (!tinggi.value) shakeInput(tinggi);
  return;
  }

   error.textContent="";

   nilaiAlas= alas.value ;
   nilaiTinggi= tinggi.value;
   alas.value="";
   tinggi.value="";
   operasi= (nilaiAlas * nilaiTinggi)/2;
   jawaban.innerHTML = `L = 1/2 × a × t
L = 1/2 × ${nilaiAlas} × ${nilaiTinggi}
<span style="background-color:  rgb(255, 247, 156);"> L = ${operasi}`;

}

reset.onclick = function() {
   alas.value = "";
   tinggi.value = "";
   jawaban.innerHTML = "";
   error.textContent="";
}