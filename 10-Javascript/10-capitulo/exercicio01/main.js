let score


function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

    let finalScore

    if (scoreA) {
        finalScore = 'A'
    } else if (scoreB) {
        finalScore = 'B'
    } else if (scoreC) {
        finalScore = 'C'
    } else if (scoreD) {
        finalScore = 'D'
    } else if (scoreF) {
        finalScore = 'F'
    } else {
        finalScore = 'Nota inválida'
    }
    return (`O aluno ficou com nota final: ${finalScore}`)
}

console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(0))
console.log(getScore(1))
console.log(getScore(45))
console.log(getScore(60))
console.log(getScore(61))
console.log(getScore(75))
console.log(getScore(85))
console.log(getScore(95))



