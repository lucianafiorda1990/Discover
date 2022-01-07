let celcius = new String()
let fahrenheit = new String()


function getTemperature(temperature, measured) {
    // //resolução com if
    if (measured === 'c') {
        fahrenheit = (temperature * 9 / 5) + 32
        return fahrenheit
    } else if (measured === 'f') {
        celcius = (temperature - 32) * 5 / 9
        return celcius
    } else {
        console.log('Unidade de medida desconhecida')
    }


    //resolução com switch
    switch (measured) {
        case 'c':
            fahrenheit = (temperature * 9 / 5) + 32
            console.log(fahrenheit)
            break;
        case 'f':
            celcius = (temperature - 32) * 5 / 9
            console.log(celcius)
            break;
        default:
            console.log('Unidade de medida desconhecida')
            break;
    }

}

// console.log(getTemperature('95', 'f'))


//resolução do professor

function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if (!celsiusExists && !fahrenheitExists) {
        throw new Error('Unidade de medida de temperatura não identificada')
    }

    //fluxo ideal F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5 / 9
    let degreeSign = 'C'

    if (celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""))
        formula = (celsius) => (celsius * 9 / 5) + 32
        degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('35c'))
    console.log(transformDegree('95f'))
    console.log(transformDegree('95z'))
} catch (e) {
    console.log(e.message)
}