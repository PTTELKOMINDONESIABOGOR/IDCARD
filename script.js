window.addEventListener("load", () => {

    const loading = document.getElementById("loading");
    const card = document.getElementById("card");
    const badge = document.querySelector(".badge");

    setTimeout(() => {

        loading.style.opacity = "0";

        setTimeout(() => {
            loading.style.display = "none";

            card.classList.add("show");

            // Animasi badge
            setTimeout(() => {
                badge.animate(
                    [
                        { transform: "scale(0.8)", opacity: 0 },
                        { transform: "scale(1.1)", opacity: 1 },
                        { transform: "scale(1)", opacity: 1 }
                    ],
                    {
                        duration: 600,
                        easing: "ease-out",
                        fill: "forwards"
                    }
                );
            }, 300);

        }, 500);

    }, 1800);

});
