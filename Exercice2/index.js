function calculate(a, b, operator) {
    // Convertir a et b en nombres si possible
    const numA = Number(a);
    const numB = Number(b);
    // Vérifier si l'opérateur est valide
    if (!["+", "-", "*", "/"].includes(operator)) {
        return "Invalid operator";
    }
    if (operator === "/" && numB === 0) {
        return "Division by zero is not allowed";
    }
    switch (operator) {
        case '+':
            return numA + numB;
        case '-':
            return numA - numB;
        case '*':
            return numA * numB;
        case '/':
            return numA / numB;
    }
}

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

export default calculate
