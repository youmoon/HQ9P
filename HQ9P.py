def interpreter(command):
    out, number = "", 0
    for n in range(len(command)):
        if command[n] in ["h", "H"]: out += "Hello World.\n"
        elif command[n] in ["q", "Q"]: out += command + "\n"
        elif command[n] == "9":
            for i in range(99, -1, -1):
                if i == 0: ...
                elif i == 1: out += "1 bottle of beer. \nTake one down and pass it around, \nno more bottles of beer on the wall.\n\n"
                else: out += f"{i} bottle of beer. \nTake one down and pass it around, \n{i - 1} bottles of beer on the wall.\n\n"
        elif command[n] == "+": number += 1
        else: return "--- EXCEPTION:\nunexpected characters found in source code.\n"
    return out

while True: print(interpreter(input(">>> ")))
# or you can use
import sys
print(interpreter(str(sys.argv[1])))
