document.addEventListener("DOMContentLoaded", () => {
        const data = JSON.parse(localStorage.getItem("syntacticErrors"));
        console.log(data);
        

        if (!data || !Array.isArray(data)) {
            tableBody.innerHTML = '<tr><td colspan="5">No se encontraron errores</td></tr>';
            return;
        }

        data.forEach((error, index) => {
            const colums = document.getElementById("table");

            const row = document.createElement('tr');
            row.innerHTML += `
                <td>${index + 1}</td>
                <td>${error.lexeme || '-'}</td>
                <td>${error.description ?? '-'}</td>
                <td>${error.column || '-'}</td>
                <td>${error.row ?? '-'}</td>
            `;

            colums.appendChild(row)
        });
    });