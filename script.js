$(document).ready(function() {
    let current = "0";

    function updateDisplay() {
        $("#display").val(current);
    }

    $("button").click(function() {
        let btn = $(this).text();

        if ($.isNumeric(btn) || btn === ".") {
            if (current === "0") current = btn;
            else current += btn;
        } else if (btn === "C" || btn === "CE") {
            current = "0";
        } else if (btn === "⌫") {
            current = current.slice(0, -1) || "0";
        } else if (btn === "+/-") {
            if (current.charAt(0) === "-") {
                current = current.substring(1);
            } else {
                current = "-" + current;
            }
        } else if (btn === "=") {
            try {
                current = eval(current).toString();
            } catch {
                current = "Error";
            }
        } else {
            current += btn; // operator (+, -, *, /)
        }

        updateDisplay();
    });
});