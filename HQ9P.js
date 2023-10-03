function interpreter(command) {
    let out = "";
    let number = 0;

    for (let n = 0; n < command.length; n++) {
        if (command[n] === "h" || command[n] === "H") {
            out += "Hello World.\n";
        } else if (command[n] === "q" || command[n] === "Q") {
            out += command + "\n";
        } else if (command[n] === "9") {
            for (let i = 99; i >= 0; i--) {
                if (i === 0) {
                    // Do nothing
                } else if (i === 1) {
                    out += "1 bottle of beer. \nTake one down and pass it around, \nno more bottles of beer on the wall.\n\n";
                } else {
                    out += `${i} bottle of beer. \nTake one down and pass it around, \n${i - 1} bottles of beer on the wall.\n\n`;
                }
            }
        } else if (command[n] === "+") {
            number += 1;
        } else {
            return "--- EXCEPTION:\nunexpected characters found in source code.\n";
        }
    }
    return out;
}

while (true) {
    console.log(interpreter(prompt(">>> ")));
}
