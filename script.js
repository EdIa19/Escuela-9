const horario = {
    Lunes: [
        { materia: "Matemáticas", inicio: "(7:00)", fin: "(8:40)" },
        { materia: "Programacion", inicio:"(8:40)", fin: "(10:20)"},
        { materia: "Derecho", inicio: "(10:40)", fin: "(11:30)" },
        { materia: "Socioeconomia de Mexico", inicio: "(11:30)", fin: "(12:20)" },
        { materia: "Economia I", inicio: "(12:20)", fin: "(2:00)" },
    ],
    Martes: [
        { materia: "Geografia", inicio: "(7:00)", fin: "(7:50)" },
        { materia: "Psicologia I", inicio: "(7:50)", fin: "(8:40)" },
        { materia: "Matematicas V", inicio: "(8:40)", fin: "(9:30)" },
        { materia: "Economia I", inicio: "(9:30)", fin: "(10:20)" },
        { materia: "Salud, INT. Del Adolecente", inicio: "(10:40)", fin: "(12:20)" },
        { materia: "Introduccion a la filosofia ", inicio: "(12:20)", fin: "(1:10)" },
        
    ],
    Miércoles: [
      
    ],
    Jueves: [
       
    ],
    Viernes: [
        
    ],
    
};

const titulo = document.querySelector("#titulo");
const horarioDiv = document.getElementById("horario");
const diasDiv = document.getElementById("dias");

let selectedDay = null; 

function mostrarDias() {
    const diasTable = document.getElementById("dias");
    const diasTbody = document.createElement("tbody");
    
    diasTable.innerHTML = ""; 

    for (const dia in horario) {
        const diaRow = document.createElement("tr");
        const diaCell = document.createElement("td");
        diaCell.textContent = dia;
        diaCell.classList.add("day");
        diaCell.setAttribute("data-day", dia);
        diaCell.addEventListener("click", mostrarHorario);
        diaRow.appendChild(diaCell);
        diasTbody.appendChild(diaRow);
    }

    diasTable.appendChild(diasTbody);
    diasTable.classList.remove("hidden");
    horarioDiv.innerHTML = ""; 
    horarioDiv.classList.add("hidden");
}

function mostrarHorario() {
    selectedDay = this.getAttribute("data-day");
    const classes = horario[selectedDay];

    if (classes) {
        diasDiv.classList.add("hidden");
        horarioDiv.innerHTML = "";  

        const table = document.createElement("table");
        const thead = table.createTHead();
        const row = thead.insertRow();

        const materiaHeader = document.createElement("th");
        materiaHeader.textContent = "Clase";
        row.appendChild(materiaHeader);

        const horaHeader = document.createElement("th");
        horaHeader.textContent = "Hora";
        row.appendChild(horaHeader);

        classes.forEach(clase => {
            const row = table.insertRow();
            row.insertCell(0).textContent = clase.materia;
            row.insertCell(1).textContent = `${clase.inicio}-${clase.fin}`;
        });

        horarioDiv.appendChild(table);
        horarioDiv.classList.remove("hidden");
    }
}

titulo.addEventListener("click", function() {
    horarioDiv.innerHTML = "";  
    diasDiv.innerHTML = "";  
    diasDiv.classList.add("hidden");
    horarioDiv.classList.add("hidden");
    selectedDay = null; 
    mostrarDias();
});
function mostrarDias() {
    const diasContainer = document.querySelector(".days-container");
    diasContainer.innerHTML = ""; 
    for (const dia in horario) {
        const diaSpan = document.createElement("span");
        diaSpan.textContent = dia.toUpperCase();
        diaSpan.classList.add("day");
        diaSpan.setAttribute("data-day", dia);
        diaSpan.addEventListener("click", mostrarHorario);
        diasContainer.appendChild(diaSpan);
    }

    horarioDiv.innerHTML = ""; 
    horarioDiv.classList.add("hidden");
}
