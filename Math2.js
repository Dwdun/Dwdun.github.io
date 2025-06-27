let a= document.getElementById("a")
let b= document.getElementById("b")
let c= document.getElementById("c")
const hitung= document.getElementById("hitung")
const reset= document.getElementById("reset")
let jawaban = document.getElementById("jawaban")
const error = document.getElementById("error")

function shakeInput(input){
    input.classList.add("shake");
    setTimeout(() => input.classList.remove("shake"),300);
}

hitung.onclick= function(){
   if (!a.value || !b.value || !c.value) {
  error.textContent = "Harap isi semua input terlebih dahulu!";
  if (!a.value) shakeInput(a);
  if (!b.value) shakeInput(b);
  if (!c.value) shakeInput(c);
  return;
  }

   error.textContent="";

   nilaiA= Number(a.value) ;
   nilaiB= Number(b.value);
   nilaiC= Number(c.value);
   a.value="";
   b.value="";
   c.value="";
   operasi= nilaiA + nilaiB + nilaiC;
   jawaban.innerHTML = `K = a + b + c <br>
   K = ${nilaiA} + ${nilaiB} + ${nilaiC}<br>
   <span style="background-color:  rgb(255, 247, 156);"> K = ${operasi}`;
}

reset.onclick = function() {
   a.value = "";
   b.value = "";
   c.value = "";
   jawaban.innerHTML = "";
   error.textContent="";
}