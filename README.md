<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD Application</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
        crossorigin="anonymous">
    <link rel="stylesheet" href="CRUD.css">
</head>

<body>

    <div class="container mt-5">
        <div class="text-center">
            <h1 class="display-5 mb-5"> <strong>CRUD Application </strong></h1>
        </div>
        <div class="main row justify-content-center">
            <form action="" id="student-form" class="row justify-content-center mb-4"
                autocomplete="off">

                <div class="col-10 col-md-8 mb-3">
                    <label for="firstName">First Name</label>
                    <input class="form-control" id="firstName" type="text"
                        placeholder="Enter First Name">
                </div>
                <div class="col-10 col-md-8 mb-3">
                    <label for="lastName">Last Name</label>
                    <input class="form-control" id="lastName" type="text"
                        placeholder="Enter Last Name">
                </div>
                <div class="col-10 col-md-8 mb-3">
                    <label for="rollNo">Roll No</label>
                    <input class="form-control" id="rollNo" type="text"
                        placeholder="Enter RollNo">
                </div>
                <div class="col-10 col-md-8">
                    <input class="btn btn-success add-btn" type="submit" value="Submit">
                </div>
            </form>
            <div class="col-12 col-md-10 mt-5">
                <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Roll No</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="student-list">
                        <tr>
                            <td>Dear</td>
                            <td>Programmer</td>
                            <td>25</td>
                            <td>
                                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

<style>
  body{
    color: white;
    background-color: #1d2630
}</style>
    <script>
    var selectedRow = null;

function showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const main = document.querySelector('main');
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector('.alert').remove(),3000)
}
function clearFields() {
    document.querySelector('#firstName').value = '';
    document.querySelector('#lastName').value = '';
    document.querySelector('#rollNo').value = '';
}


document.querySelector('#student-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const rollNo = document.querySelector('#rollNo').value;

    if (firstName == "" || lastName == "" || rollNo == ""){
        showAlert("Please fill in all fields", "danger");
    } else {
        if (selectedRow == null) {
            const list = document.querySelector('#student-list');
            const row = document.createElement('tr');

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
            selectedRow = null;
            showAlert('Student Added', 'success');
        }
        else {
            selectedRow.children[0].textContent = firstName;
            selectedRow.children[1].textContent = lastName;
            selectedRow.children[2].textContent = rollNo;
            selectedRow = null;
            showAlert('Student Info Edited', 'info');
        }

        clearFields();
    }
});

document.querySelector('#student-list').addEventListener('click', (e) => {
    target = e.target;
    if (target.classList.contains('edit')) {
        selectedRow = target.parentElement.parentElement;
        document.querySelector('#firstName').value = selectedRow.children[0].textContent;
        document.querySelector('#lastName').value = selectedRow.children[0].textContent;
        document.querySelector('#rollNo').value = selectedRow.children[0].textContent;
    }
})

document.querySelector('#student-list').addEventListener('click', (e) => {
    target = e.target;
    if (target.classList.contains('delete')) {
        target.parentElement.parentElement.remove();
        showAlert('Student Data Deleted', 'danger');
    }
})
    </script>
</body>


</html>
