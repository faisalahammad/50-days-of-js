const str = "JavaScript is awesome"

function reverseAString(str) {
    return (str === '') ? '' : reverseAString(str.substr(1)) + str.charAt(0);
}

console.log(`Reversed string is: ${reverseAString(str)}`)
