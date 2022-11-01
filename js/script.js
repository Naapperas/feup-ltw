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

    const idCol

    return row;
}

const attachBuyEvents = () => {

    const buttons = document.querySelectorAll("#products button")

    for (const button of buttons) {
        button.addEventListener("click", (e) => {

            let cart = document.querySelector("#cart>table");

            if (!cart.querySelector("tbody")) // create table body if it does not exist
                cart.insertBefore(document.createElement("tbody"), cart.querySelector("tfoot"));

            cart = cart.querySelector("tbody");

            const article = e.currentTarget.parentElement;

            const productId = article.getAttribute("data-id");

            if (!cart.querySelector(`*[data-id="${productId}"]`)) {

                article.classList.toggle("sale");

                const productName = article.querySelector("h2").innerText;
                const productPrice = article.querySelector("p.price").innerText;
                const productAmount = article.querySelector("input.quantity").value;

                const product = { productId, productName, productPrice, productAmount };

                const row = createCartRow(product);

                cart.appendChild(row);
            } else {

            }
        });
    }
}

attachBuyEvents();