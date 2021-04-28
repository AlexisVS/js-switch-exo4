let nombre1 = 5;
let nombre2 = 20;
let operateur = "*";
console.log(nombre1 + operateur + nombre2)

switch (operateur) {
    case "*":
        alert(nombre1 * nombre2)
        break;
    case "-":
        alert(nombre1 - nombre2)
        break;
    case "+":
        alert(nombre1 + nombre2)
        break;
    case "/":
        alert(nombre1 / nombre2)
        break;
    case "**":
        alert(nombre1 ** nombre2)
        break;
    default:
        alert("Tu as entrée des lettres")
        break;
}