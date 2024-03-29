let toplamPuan = 0;

function kalpOlustur() {
    const kalp = document.createElement("div");
    kalp.classList.add("kalp");
    kalp.style.left = Math.random() * 100 + "vw";
    kalp.style.animationDuration = Math.random() * 6 + 8 + "s";

    kalp.innerText = "💜";

    kalp.onclick = function() {
        kalp.remove();
        toplamPuan += 1;
        document.getElementById("puan").textContent = "Toplam Puan: " + toplamPuan;
    };

    document.body.appendChild(kalp);

    setTimeout(() => {
        kalp.remove();
    }, 10000);
}
