/* @A-Z = 64-90
   a-z = 97-122
   0-9 = 48-57

*/
function isNumberExist(str) {
    let numberExist = false;
    for (let i = 0; i < str.length; i++) {
        for (let k = 48; k <= 57; k++) {
            if (str[i] == String.fromCharCode(k)) {
                numberExist = true;
            }
        }
    }
    return numberExist;
}

function isUpperCaseLatterExist(str) {
    let upperCaseLatterExist = false;
    for (let i = 0; i < str.length; i++) {
        for (let k = 65; k <= 90; k++) {
            if (str[i] == String.fromCharCode(k)) {
                upperCaseLatterExist = true;
            }
        }
    }
    return upperCaseLatterExist;
}

function isLowerCaseLatterExists(str) {
    let lowerCaseLatter = false;
    for (let i = 0; i < str.length; i++) {
        for (let k = 97; k <= 122; k++) {
            if (str[i] == String.fromCharCode(k)) {
                lowerCaseLatter = true;
            }
        }
    }
    return lowerCaseLatter;
}

function StrengthCheck(str) {
    let prograce = 0;
    if (str.length >= 8 && str.length <= 16) {
        document.getElementById("min8").style.listStyle = "initial";
        prograce += 25;
    } else {
        document.getElementById("min8").style.listStyle = "circle";
    }

    if (isLowerCaseLatterExists(str)) {
        document.getElementById("lower").style.listStyle = "initial";
        prograce += 25;
    } else {
        document.getElementById("lower").style.listStyle = "circle";
    }

    if (isUpperCaseLatterExist(str)) {
        document.getElementById("upper").style.listStyle = "initial";
        prograce += 25;
    } else {
        document.getElementById("upper").style.listStyle = "circle";
    }

    if (isNumberExist(str)) {
        document.getElementById("int").style.listStyle = "initial";
        prograce += 25;
    } else {
        document.getElementById("int").style.listStyle = "circle";
    }
    return prograce;
}

function validate(str) {

    let validater = false;
    if (str.length >= 4 && str.length <= 16) {
        for (let i = 0; i < str.length; i++) {
            validater = false;
            for (let k = 48; k <= 122; k++) {
                if (k == 58) {
                    k = 64;
                    continue;
                } else if (k == 91) {
                    k = 96;
                    continue;
                } else if (str[i] == String.fromCharCode(k)) {
                    validater = true;
                    break;
                }
            }
            if (validater == false) {
                break;
            }
        }
    }
    return validater;
}
function show(str) {
    if (StrengthCheck(str) == 100) {
        document.getElementById("stgh").style.color = "white";
        document.getElementById("stgh").innerHTML = "strong";
    } else if (StrengthCheck(str) == 75) {
        document.getElementById("stgh").style.color = "orange";
        document.getElementById("stgh").innerHTML = "medium";
    } else if (StrengthCheck(str) <= 50) {
        document.getElementById("stgh").style.color = "red";
        document.getElementById("stgh").innerHTML = "weak";
    }
}
function checkit() {
    let str = document.getElementById("val").value;
    show(str);

    document.getElementById("pbar").value = StrengthCheck(str);



    if (validate(str)) {
        document.getElementById("wrt").style.color = "white";
        document.getElementById("wrt").innerHTML = "valid";
    } else {
        document.getElementById("wrt").style.color = "red";
        document.getElementById("wrt").innerHTML = "password invalid";
    }
}

