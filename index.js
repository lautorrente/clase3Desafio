// Algoritmo con la sentencia for para el ingreso a un plan. Para acceder la persona debe tener 18 años o mas, pero debe ser menor a 40 años.

let edad = parseInt(prompt("Gobierno ARGENTINO pide que ingrese su edad"))

if (edad >=18 && edad < 40) {
    alert(`Usted tiene ${edad} años, puede ingresar al plan`)
    for (edad >=18; edad < 40;){
        if (edad != 39) {
            let accesoAlPlan = 39 - edad
            alert(`Usted puede seguir accediendo al plan por ${accesoAlPlan} años`)
        }
        else {
            alert("Este es el último año en el que usted puede acceder a este plan")
        }
        break
        
    }
}
else {
    alert(`La edad para acceder al plan es entre 18 y 39 años, usted tiene ${edad} años`)
}