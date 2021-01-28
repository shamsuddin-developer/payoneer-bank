// Login button handler
const login = document.getElementById("login");
login.addEventListener("click", function () {
  document.getElementById("login-area").style.display = "none";
  document.getElementById("transection-area").style.display = "block";
});

// Deposit button handler

const depositBtn = document.getElementById("add-deposit");
depositBtn.addEventListener("click", function () {
  const depositAmount = document.getElementById("deposit-amount").value;
  const depositAmountToNumber = parseFloat(depositAmount);
  updateBalance("current-deposit", depositAmountToNumber);
  updateBalance("total-balance", depositAmountToNumber);
  document.getElementById("deposit-amount").value = "";
});
function updateBalance(id, depositAmountToNumber) {
  const total = document.getElementById(id).innerText;
  const totalToNumber = parseFloat(total);
  const currentTotal = totalToNumber + depositAmountToNumber;
  document.getElementById(id).innerText = currentTotal;
}

// Withdraw button handler
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function () {
  const withdrawAmount = document.getElementById("withdraw-amount").value;
  const withdrawAmountToNumber = parseFloat(withdrawAmount);
  updateBalance("current-withdraw-amount", withdrawAmountToNumber);
  const currentTotalBalance = document.getElementById("total-balance")
    .innerText;
  const currentTotalBalanceToNumber = parseFloat(currentTotalBalance);
  const currentBalance = currentTotalBalanceToNumber - withdrawAmountToNumber;
  document.getElementById("total-balance").innerText = currentBalance;
  document.getElementById("withdraw-amount").value = "";
});
