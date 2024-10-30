let str = "";
let input = document.querySelector("#display1");
let recent = document.querySelector("#display")

function app(num) {

    let list = ["+", "-", "*", "/", "×", "%", ".", "÷"];
    let len = input.value.length;

    if (len > 0 && list.includes(num) && list.includes(input.value[len - 1])) {
        if (num === "*") {
            input.value = input.value.slice(0, len - 1) + "×";
        } else if (num === "/") {
            input.value = input.value.slice(0, len - 1) + "÷"
        } else {
            input.value = input.value.slice(0, len - 1)
            input.value = input.value.slice(0, len - 1) + num
        }
        str = str.slice(0, str.length - 1) + num


    } else {
        if (num === "*") {
            input.value += "×";
        } else if (num === "/") {
            input.value += "÷";
        } else {
            input.value += num;
        }
        str += num;
    }
}
function del() {
    let len = input.value.length;
    input.value = input.value.slice(0, len - 1)
    str = str.slice(0, len - 1)
}
function cl() {
    recent.value = ""
    str = ""
    input.value = ""
}
function search() {
    try {
        recent.value = input.value
        input.value = eval(str)
    } catch (error) {
        recent.value = input.value
        input.value = "ERROR"
    }


}