window.addEventListener("load", function () {

    const loading = document.getElementById("loading");
    const card = document.getElementById("card");

    setTimeout(function () {

        loading.style.display = "none";

        card.classList.add("show");

    }, 2000);

});
