document.addEventListener("DOMContentLoaded", () => {
    const colorOptions = document.querySelectorAll(".color");
    const iphoneImage = document.querySelector(".image-placeholder img");

    // Mapeia cores para imagens
    const colorToImage = {
        "#333": "iphone-16-preto.png",
        "#f0d7a7": "iphone-16-amarelo.png",
        "#ffffff": "iphone-16-branco.png",
        "#6b5b7a": "iphone-16-azul.png"
    };

    colorOptions.forEach(option => {
        option.addEventListener("click", () => {
            const color = window.getComputedStyle(option).backgroundColor;

            // Converter RGB para HEX para facilitar a correspondência
            const hex = rgbToHex(color);
            const imageName = colorToImage[hex];

            if (imageName) {
                iphoneImage.src = `static/${imageName}`;
            }
        });
    });

    // Função auxiliar para converter RGB em HEX
    function rgbToHex(rgb) {
        const rgbValues = rgb.match(/\d+/g).map(Number);
        return "#" + rgbValues.map(x =>
            x.toString(16).padStart(2, '0')
        ).join('');
    }
});
