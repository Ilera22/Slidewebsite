// Inicializa AOS para animaciones en scroll
AOS.init();

// Función para enviar datos al servidor después de completar la encuesta
function sendDataToServer(survey) {
    // Aquí puedes añadir lógica para enviar datos al servidor o procesarlos como prefieras
    var resultElement = document.getElementById('surveyResult');
    resultElement.innerHTML = "Resultados: " + JSON.stringify(survey.data);
}

// Carga el JSON de la encuesta desde un archivo externo y lo inicializa
fetch('/survey.json')
    .then(response => response.json())
    .then(json => {
        var survey = new Survey.Model(json);
        $("#surveyElement").Survey({
            model: survey,
            onComplete: sendDataToServer
        });
    })
    .catch(error => console.error('Error loading the survey JSON:', error));
