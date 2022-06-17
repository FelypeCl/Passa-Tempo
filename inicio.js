var qntdAmor = 0;
var frame = 0;

const frases = ["Ehhh.....", "desde o dia que eu te conheci", "eu me apaixonei por...",
        "cada um de seus detalhes..", "do seu sorriso...", "do seus olhos...",
        "das suas bobices...", "o fato de você conseguir me tirar de si",
        "sem nenhum esforço.", "....",
        "Quero um dia acordar e assim que abrir os olhos..", "ver você.",
        "perceber o quanto sou feliz por te ter...",
        "Sou o garoto mais feliz do mundo do teu lado...", "quero você e apenas você...",
        "quero viver esse amor..", "quero viver nessa vida com você",
        "então meu bem...", "EU TE AMO", "e cada dia te amarei mais.", "<3",
        "<3","<3","<3","<3","<3","<3","<3","<3","<3","<3",
        "<3","<3","<3","<3","<3","<3","<3","<3","<3","<3",
        "<3","<3","<3","<3","<3","<3","<3","<3","<3","<3",
        "<3","<3","<3","<3","<3","<3","<3","<3","<3","<3",
        "<3","<3","<3","<3","<3","<3","<3","<3","<3","<3",]

const musica = new Audio();
musica.src = "./musica/song.mp3";
musica.volume = 0.2;

document.getElementById("coracao1").style.display = "none";
document.getElementById("coracao2").style.display = "none";
document.getElementById("coracao3").style.display = "none";
document.getElementById("amorB").style.display = "none";
document.getElementById("textoDeDeclaracao").style.display = "none";

document.getElementById("comecar").addEventListener("click", () => {    
    musica.play();

    document.getElementById("amorB").style.display = "block";
    document.getElementById("textoDeDeclaracao").style.display = "block";

    setInterval(() => {
        amor();
    }, 1200);

    setInterval(() => {
        declaracao()
    }, 5000);

    setTimeout(() => {
        document.getElementById("coracao1").style.display = "block";
    }, 1500);

    setTimeout(() => {
        document.getElementById("coracao2").style.display = "block";
    }, 6500);

    setTimeout(() => {
        document.getElementById("coracao3").style.display = "block";
    }, 10500);

    document.getElementById("comecar").style.visibility = "hidden";
});

function declaracao() {
    document.getElementById("declaracao").innerHTML = frases[frame];
    frame++;
}

function amor() {
    document.getElementById("fundoColorido").style.width = ""+qntdAmor+"px";
    if(qntdAmor <= 150){
        qntdAmor++;
    }
}