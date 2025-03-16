// QuerySelector e QueryselctorAll

const cursost = [...document.getElementsByTagName("div")]
const cursos = [...document.getElementsByClassName("curso")]
const cursoc1 = document.getElementById("c1")
const cursoc2 = [...document.getElementsByClassName("c2")]


const queriselect = document.querySelector("div") //  ele retorna o primeiro elemento que ele encontrar que é uma div
const queriselect2 = [...document.querySelectorAll("div")] // me retorna uma coleção com todas as div
const queriselect3 = document.querySelectorAll(".curso") // pra chamar uma classe utilizamos o . como  no CSS
const queriselect4 = document.querySelectorAll("#c1")[0] // chama um elemento pelo id utilizando # e o nome do id
const queriselect5 = [...document.querySelectorAll("div,p")] // indico que quero as tag Div e tag P
const queriselect6 = [...document.querySelectorAll("div,[class]")] // chama toas as divs, mas soemntes as que contem o atributo [Class]
const queriselect7 = [...document.querySelectorAll("div > p")]  // chama todas as divs que em um elemento filho dentro dela, no caso o P

console.log(queriselect7)

/* console.log(cursost)
console.log(cursoc1)s
console.log(cursos)
console.log(cursoc2) */

queriselect2.map((el, i) => {
    // Aqui você pode usar o índice 'i' para acessar e alterar o elemento
    if (i === 2) {  // Exemplo: se você quiser alterar o terceiro elemento (índice 2)
        el.classList.add("destaque");
        el.innerHTML = "ehhehee"
    }
});