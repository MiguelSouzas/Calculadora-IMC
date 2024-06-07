
function calcular() {
    let idade = Number(document.getElementById("idade").value)
    let altura = Number(document.getElementById("altura").value)
    let peso = Number(document.getElementById("peso").value)
    let imc = peso / (altura ** 2)
    let comorbidade = ''

    let basicoA = 100 + (idade * 10 * (imc / 10))
    let standA = (150 + (idade * 15)) * (imc / 10)
    let premiumA = (200 + (imc * 10) + (idade * 20)) * (imc / 10)

    if (imc < 18,5) {
        comorbidade = 10
    } else if (imc < 25 ) {
        comorbidade = 1
    } else if (imc < 30) {
        comorbidade = 6
    } else if (imc < 35) {
        comorbidade = 10
    } else if (imc < 40) {
        comorbidade = 20
    } else if (imc >= 40) {
        comorbidade = 30
    }

    let basicoB = 100 + (comorbidade * 10 * (imc / 10))
    let standB = (150 + (comorbidade * 15)) * (imc / 10)
    let premiumB = (200 + (imc * 10) + (comorbidade * 20)) * (imc / 10)


    document.getElementById("resultado").innerText = "Aqui estão os seus resultados os planos: " + 
    "\n\nPLANO A" + 
    "\nPlano básico: " + basicoA.toFixed(2) +
    "\nPlano standart: " + standA.toFixed(2) + 
    "\nPlano premium: " + premiumA.toFixed(2) +

    "\n\nPLANO B" +
    "\nPlano básico: " + basicoB.toFixed(2) +
    "\nPlano standart: " + standB.toFixed(2) + 
    "\nPlano premium: " + premiumB.toFixed(2) 


}