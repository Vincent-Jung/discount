discountArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
seniorityArray = [1, 2, 3, 4];

const invoiceObj = document.getElementById("invoice");
let discountFilteredArray = 0;
let seniorityObj = document.getElementById("seniority");

window.onload = function () {
  const seniorityObj = document.getElementById("seniority");
  for (let i = 0; i < seniorityArray.length; i++) {
    let option = document.createElement("option");
    option.text = `Bonus fidélité +${seniorityArray[i]}%`;
    option.value = seniorityArray[i];
    seniorityObj.options[seniorityObj.options.length] = option;
  }
};

function populateDropdown(thisDropdown) {
  thisDropdown.innerHTML = "";

  let defaultOption = document.createElement("option");
  defaultOption.text = "-- Choisir une remise --";
  defaultOption.value = "";
  thisDropdown.appendChild(defaultOption);
  for (let i = 0; i < discountFilteredArray.length; i++) {
    option = document.createElement("option");
    option.text = `Remise de ${discountFilteredArray[i]} %`;
    option.value = discountFilteredArray[i];
    thisDropdown.options[thisDropdown.options.length] = option;
  }
}

function adjustDiscount() {
  currentInputInvoice = Number(invoiceObj.value);

  if (currentInputInvoice < 50) {
    discountFilteredArray = discountArray.slice(0, 3);
  } else if (currentInputInvoice < 150) {
    discountFilteredArray = discountArray.slice(0, 5);
  } else if (currentInputInvoice < 250) {
    discountFilteredArray = discountArray.slice(0, 10);
  } else if (currentInputInvoice >= 250) {
    discountFilteredArray = discountArray.slice(0, 15);
  } else {
    console.log("Pas de remise cette fois, désolé.");
  }

  const discountObj = document.getElementById("discount");
  populateDropdown(discountObj);
}

function adjustSeniority() {
  customer_seniority = seniorityObj.value;

  if (customer_seniority == 1) {
    discount += 1;
  } else if (customer_seniority == 2) {
    discount += 2;
  } else if (customer_seniority == 3) {
    discount += 3;
  } else if (customer_seniority >= 4) {
    discount += 4;
  } else {
    console.log("Fidélité inférieure à 1 an.");
  }
  console.log(customer_seniority);
  return customer_seniority;
}

function calculateFinalInvoice() {
  let invoiceValue = document.getElementById("invoice").value;
  let discountValue = document.getElementById("discount").value;
  let seniorityValue = document.getElementById("seniority").value;
  let totalDiscount = Number(discountValue) + Number(seniorityValue);
  let finalInvoice = invoiceValue - (invoiceValue * totalDiscount) / 100;

  document.getElementById("displayFinalInvoice").innerHTML = `${finalInvoice}€`;
}

document.getElementById("invoice").addEventListener("input", adjustDiscount);

document.getElementById("seniority").addEventListener("input", adjustSeniority);

document
  .getElementById("finalInvoice")
  .addEventListener("click", calculateFinalInvoice);
