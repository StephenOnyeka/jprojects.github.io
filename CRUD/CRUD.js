var selectedRow = null;

// Show Alerts
function showAlert(message, className) {
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;

  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const main = document.querySelector(".main");
  container.insertBefore(div, main);

  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// Clear All Fields
function clearFields() {
  document.querySelector("#firstName").value = "";
  document.querySelector("#lastName").value = "";
  document.querySelector("#rollNo").value = "";
}

// Add Data
document.querySelector("#student-form").addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const rollNo = document.querySelector("#rollNo").value;

  // Validate
  if (firstName === "" || lastName === "" || rollNo === "") {
    showAlert("Please fill in all fields", "danger");
    return;
  }

  if (selectedRow === null) {
    // Add new student
    const list = document.querySelector("#student-list");
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${rollNo}</td>
            <td>
                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            </td>
        `;
    list.appendChild(row);
    showAlert("Student Added", "success");
  } else {
    // Update existing student
    selectedRow.children[0].textContent = firstName;
    selectedRow.children[1].textContent = lastName;
    selectedRow.children[2].textContent = rollNo;
    showAlert("Student Info Updated", "info");
  }

  clearFields();
  selectedRow = null;
});

// Edit Data
document.querySelector("#student-list").addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("edit")) {
    selectedRow = target.parentElement.parentElement;
    document.querySelector("#firstName").value =
      selectedRow.children[0].textContent;
    document.querySelector("#lastName").value =
      selectedRow.children[1].textContent;
    document.querySelector("#rollNo").value =
      selectedRow.children[2].textContent;
  }
});

// Delete Data
document.querySelector("#student-list").addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
    showAlert("Student Data Deleted", "danger");
  }
});
