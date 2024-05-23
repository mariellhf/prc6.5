function add() {
    const firstNumber = parseInt(document.getElementById("1").value);
    const secondNumber = parseInt(document.getElementById("2").value);
    const answer = document.getElementById("3");

    answer.value = firstNumber + secondNumber;
    alert(answer.value  );
}