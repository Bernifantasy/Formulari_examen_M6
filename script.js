function start() {
    const text = document.getElementById("text").value;
    const caracter = document.getElementById("caracter").value;

    if (text.split(" ").length < 2) {
        document.getElementById("resultats").innerHTML = "<p>El text ha de tenir com a minim 2 paraules.</p>";
        return;
    }
    
    if (caracter.length !== 1) {
        document.getElementById("resultats").innerHTML = "<p>Caracter no valid.</p>";
        return;
    }

    const paraules = text.split(" ");
    const paraulestrobades = [];

    for (let i = 0; i < paraules.length; i++) {
        const paraula = paraules[i];
        let posicions = [];
        let totalOcurrencias = 0; 
        let parts = paraula.split(caracter);

        if (parts.length > 1) { 
            let paraularesaltada = "";
            let posicioActual = 0;

            for (let j = 0; j < parts.length - 1; j++) {
                paraularesaltada += parts[j]; 
                paraularesaltada += "<b>" + caracter + "</b>"; 
                posicioActual += parts[j].length + 1; 
                posicions.push(posicioActual); 
                totalOcurrencias++; 
            }
            paraularesaltada += parts[parts.length - 1]; 

            paraulestrobades.push("<li>" + paraularesaltada + " (posicions: " + posicions.join(", ") + ", total: " + totalOcurrencias + ")</li>");
        }
    }

    const resultats = document.getElementById("resultats");
    resultats.innerHTML = ""; 

    if (paraulestrobades.length > 0) {
        const ul = document.createElement("ul");
        for (let i = 0; i < paraulestrobades.length; i++) {
            const li = document.createElement("li");
            li.innerHTML = paraulestrobades[i];
            ul.appendChild(li);
        }
        
        resultats.appendChild(ul);
    } else {
        resultats.innerHTML = "<p>No hi ha cap paraula amb aquest caracter.</p>";
    }
}
