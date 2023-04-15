function calculateEmi(){
    var principalAmount = parseFloat(document.getElementById("amount").value);
    var noOfMonths = parseInt(document.getElementById("months").value);
    var interest = parseFloat(document.getElementById("interestRate").value);
    var emiAmount = (principalAmount + (principalAmount*interest/100))/noOfMonths;
    document.getElementById("emi").value = parseFloat(emiAmount).toFixed(2);
}