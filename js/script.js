"use strict"

function partial(thisArg, func /*, 0..n args */) {
    var args = Array.prototype.slice.call(arguments).splice(2);
    return function () {
        var allArguments = args.concat(Array.prototype.slice.call(arguments));
        return func.apply(thisArg, allArguments);
    };
}
const createRow = partial(document, document.createElement, "tr");

const createCartRow = ({ productId, productName, productPrice, productAmount }) => {

    if (!productId || !productName || !productPrice || !productAmount) return null;

    const row = createRow();

    row.setAttribute("data-id", productId);

    const idCol = document.createElement("td");
    idCol.textContent = productId;
    const nameCol = document.createElement("td");
    nameCol.textContent = productName;
    const qtyCol = document.createElement("td");
    qtyCol.textContent = productAmount;
    const ppuCol = document.createElement("td");
    ppuCol.textContent = productPrice;
    const totalCol = document.createElement("td");
    totalCol.textContent = productPrice * productAmount;
    const deleteCol = document.createElement("td");
    deleteCol.textContent = "X";
    deleteCol.style.color = "red";
    deleteCol.style.cursor = "pointer";

    row.appendChild(idCol);
    row.appendChild(nameCol);
    row.appendChild(qtyCol);
    row.appendChild(ppuCol);
    row.appendChild(totalCol);
    row.appendChild(deleteCol);

    return row;
}

const attachBuyEvents = () => {

    const buttons = document.querySelectorAll("#products button");

    for (const button of buttons) {
        button.addEventListener("click", (e) => {

            let cart = document.querySelector("#cart>table");

            const cartTotal = cart.querySelector("tfoot>tr>th:nth-child(2)");

            if (!cart.querySelector("tbody")) // create table body if it does not exist
                cart.insertBefore(document.createElement("tbody"), cart.querySelector("tfoot"));

            cart = cart.querySelector("tbody");

            const article = e.currentTarget.parentElement;

            const productId = article.getAttribute("data-id");

            const productAmount = parseInt(article.querySelector("input.quantity").value);

            if (productAmount < 0) return;
            
            const productName = article.querySelector("h2").innerText;
            const productPrice = parseInt(article.querySelector("p.price").innerText);
            
            let productRow = null;

            if (!(productRow = cart.querySelector(`*[data-id="${productId}"]`))) {

                article.classList.toggle("sale");

                const product = { productId, productName, productPrice, productAmount };

                const row = createCartRow(product);

                const [,,,, totalCol, deleteCol] = [...row.querySelectorAll("td")];

                deleteCol.addEventListener("click", (e2) => {
                    article.classList.toggle("sale");


                    cartTotal.textContent = parseInt(cartTotal.textContent) - parseInt(totalCol.textContent);
                    
                    row.remove();
                });

                cart.appendChild(row);
                cartTotal.textContent = parseInt(cartTotal.textContent) + productAmount * productPrice;
            } else {
                const [,, qtyCol,, totalCol,] = [...productRow.querySelectorAll("td")];

                qtyCol.textContent = parseInt(qtyCol.textContent) + productAmount;
                totalCol.textContent = parseInt(totalCol.textContent) + productAmount*productPrice;

                cartTotal.textContent = parseInt(cartTotal.textContent) + productAmount*productPrice;
            }
        });
    }
}

attachBuyEvents();