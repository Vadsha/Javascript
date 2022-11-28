
const autoCompleteInput = document.getElementsByClassName('autoCompleteInput')[0];
let products;

const resource = 'https://fakestoreapi.com/products';
const fetchFunction = async () => {
    const fetched = await fetch(resource);
    const responseData = await fetched.json();
    products = responseData;
    autoCompleteInput.disabled = false;
}
fetchFunction();

const resultContainer = document.getElementsByClassName('resultContainer')[0];
const selectedContainer = document.getElementsByClassName('selectedContainer')[0];
let filteredProducts =[];
autoCompleteInput.addEventListener('keyup' , (event) =>{
    if (event.key === "ArrowDown" || event.key === "ArrowUp" || event.key ==="Enter") {
        navigateProduct(event.key);
        return;
    }
    resultContainer.textContent = "";
    const searchText = event.target.value.toLowerCase();
    filteredProducts = products.filter(product =>{
        return product.title.toLowerCase().includes(searchText);
    });
    if (searchText.length === 0) {
        return;
    }
    const productsToShow = filteredProducts.length > 0;
    if (productsToShow) {
        for (let i = 0; i < filteredProducts.length; i++) {
            const productItem = document.createElement('div');
            productItem.id = filteredProducts[i].id;
            productItem.classList.add('productItem');

            const productItemTitle = document.createElement('div');
            productItemTitle.append(filteredProducts[i].title);
            productItemTitle.classList.add('productItemTitle');


            const productItemImage = document.createElement('img');
            productItemImage.src = filteredProducts[i].image;
            productItemImage.classList.add('productItemImage');

            productItem.append(productItemTitle , productItemImage);
            resultContainer.append(productItem);
        }
    }
    
});

let indexToSelect = -1;
const navigateProduct = (key) =>{
    
    const selectFunction = (indexToSelect) =>{
        let selectedProductId = filteredProducts[indexToSelect].id.toString();
        let selectedProduct = document.getElementById(selectedProductId);
        selectedProduct.style.backgroundColor = "#206FFE";
        selectedProduct.style.color = "white";
        return selectedProduct;
    }
    const deselectFunction = () =>{
        const indexToDeselect = document.getElementsByClassName('selected')[0];
        indexToDeselect.style.backgroundColor = "white";
        indexToDeselect.style.color = "black";
        indexToDeselect.classList.remove('selected');
    }

    if (key === "ArrowDown") {
        if (indexToSelect === filteredProducts.length - 1) {
            indexToSelect = -1;
            deselectFunction();
            return;
        }
        indexToSelect += 1;
        const selectedProductFromFunction = selectFunction(indexToSelect);

        if (indexToSelect > 0) {
            deselectFunction();
        }
        selectedProductFromFunction.classList.add("selected");
        
    }

    else if (key === "ArrowUp") {
        if (indexToSelect === -1) {
            return;
        }
        if (indexToSelect === 0) {
            indexToSelect = -1;
            deselectFunction();
            return;
        }

        indexToSelect -= 1;
        deselectFunction();
        const selectedProductFromFunction = selectFunction(indexToSelect);
        selectedProductFromFunction.classList.add("selected");

    }

    else{
        const enteredProduct = selectFunction(indexToSelect);
        console.log(enteredProduct.title);
        enteredProduct.classList.add('enteredProduct');
        resultContainer.remove();   
        selectedContainer.append(enteredProduct);
    }
};