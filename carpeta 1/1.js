let persona = {
    Embarazo: "si",
    semanas:10,
    edad : 19,
    locadidad: "Sur",
    nacimiento: 2004,
}

if(persona.edad >= 18 && persona.locadidad == "Norte"){
    console.log("Te puedes vacunar");
}else{
    console.log("Lo sentimos. No cumples con uno o más de los requisitos.");
}
if(persona.Embarazo == "si" && persona.semanas >= 9){
    console.log("Te puedes vacunar");
}else{
    console.log("Lo sentimos.No cumples con uno o más de los requisitos. ");
}
if(persona.nacimiento <=1993){
    console.log("Te puedes vacunar");
}else{
    console.log("Lo sentimos.No cumples con uno o más de los requisitos. ");
}