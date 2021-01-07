let signo = prompt('¿Cuál es tu signo?')

console.log(signo);

switch (signo){
    case 'acuario':
        console.log('Tenderá a ofenderse por todo y considerar enemigas a todas las personas que lo estiman de verdad, ya que estará muy vulnerable a las críticas en el día de hoy.')
        break
    case 'piscis':
        console.log('Debe tener presente que quienes no comparten sus ideas o decisiones, no siempre son necesariamente sus enemigos. Respete las opiniones de los demás.')
        break
    case 'cancer':
    case 'cáncer':
        console.log('Sepa que de ahora en más, su futuro solo dependerá de usted solo. Entienda que ya está capacitado para tomar sus propias decisiones y realizar los planes deseados.')
        break
    default :
        consolelog('No es un signo zodiacal')
        break   
}

