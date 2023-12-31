function carouselDefiner(result) {

    if (result === '1') {
        const model1 = document.getElementById("model-1").setAttribute('class', 'carousel-item active');
        const model2 = document.getElementById("model-2").setAttribute('class', 'carousel-item');
        const model3 = document.getElementById("model-3").setAttribute('class', 'carousel-item');
    }
    else if (result === '2') {
        const model2 = document.getElementById("model-2").setAttribute('class', 'carousel-item active');
        const model1 = document.getElementById("model-1").setAttribute('class', 'carousel-item');
        const model3 = document.getElementById("model-3").setAttribute('class', 'carousel-item');
    }
    else {
        const model3 = document.getElementById("model-3").setAttribute('class', 'carousel-item active');
        const model1 = document.getElementById("model-1").setAttribute('class', 'carousel-item');
        const model2 = document.getElementById("model-2").setAttribute('class', 'carousel-item');
    }
};

window.addEventListener("load", function () {
    const model1 = document.getElementById("model-1");
    const model2 = document.getElementById("model-2");
    const model3 = document.getElementById("model-3");

    const modelSelector = document.getElementById("model_selector");
    modelSelector.addEventListener("change", function (event) {
        let result = event.target.value;
        carouselDefiner(result);
    });
});
