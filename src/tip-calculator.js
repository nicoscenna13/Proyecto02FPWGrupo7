function calcularPropina() {
    const total = parseFloat(document.getElementById("total").value);
    const porcentaje = parseFloat(document.getElementById("porcentaje").value);

    if (!isNaN(total) && !isNaN(porcentaje)) {
        const propina = (total * porcentaje) / 100;
        const totalConPropina = total + propina;

        document.getElementById("propina").innerHTML = propina;
        document.getElementById("totalConPropina").innerHTML = totalConPropina;
    } else {
        alert("Por favor, ingrese números válidos.");
    }
}