
const gruposEstrellas = document.querySelectorAll(".estrellas");

gruposEstrellas.forEach((grupo) => {
    const botones = grupo.querySelectorAll("button");
    const mensaje = grupo.nextElementSibling;
    const nombrePlatillo = grupo.dataset.platillo;

    botones.forEach((boton) => {
        boton.addEventListener("click", () => {
            const calificacion = Number(boton.dataset.valor);

            botones.forEach((estrella) => {
                const valor = Number(estrella.dataset.valor);

                if (valor <= calificacion) {
                    estrella.classList.add("seleccionada");
                } else {
                    estrella.classList.remove("seleccionada");
                }
            });

            mensaje.textContent =
                `Has calificado ${nombrePlatillo} con ${calificacion} de 5 estrellas.`;
        });
    });
});
