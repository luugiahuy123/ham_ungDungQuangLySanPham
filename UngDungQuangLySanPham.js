let products = [
    "Macbook pro 2020",
    "Macbook pro 2021",
    "Macbook pro 2022",
    "Macbook pro 2023"
];

function showAllProduct() {
    let str = "";
    for (let i = 0; i < products.length; i++) {
        str += `<tr>
        <td>${products[i]}</td>
        <td>
            <button onclick="editByIndex(${i})">sua</button>
        </td>
        <td>
            <button onclick="deleteByIndex(${i})">xoa</button>
        </td>
    </tr>`
    }
    document.getElementById("productsList").innerHTML = str;
}

showAllProduct();

function createNewProduct() {
    let newP = document.getElementById("newProduct").value;
    products.push(newP);
    showAllProduct();
    // xoa du lieu trong the input
    document.getElementById("newProduct").value = "";
    document.getElementById("newProduct").focus()
}

function deleteByIndex(index) {
    products.splice(index, 1);
    showAllProduct(index);
}

function editByIndex(index) {
    let newP2 = prompt("nhap");
    products.splice(index, 1);
    products.splice(index, 0, newP2);
    showAllProduct(index);
}