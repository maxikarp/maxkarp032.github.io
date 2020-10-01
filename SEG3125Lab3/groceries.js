// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		pic:"foodAssets/Brocoli.jpg",
		isOrganic: true
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35,
		pic:"foodAssets/Bread.jpg",
		isOrganic: false
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.00,
		pic:"foodAssets/Salmon.jpg",
		isOrganic: true
	},
	{
		name: "Steak",
		vegetarian: false,
		glutenFree: true,
		price: 13.00,
		pic:"foodAssets/Steak.jpg",
		isOrganic: false
	},
	{
		name: "Tomato",
		vegetarian: true,
		glutenFree: true,
		price: 1.00,
		pic:"foodAssets/Tomato.jpg",
		isOrganic: true
	},
	{
		name: "Bagel",
		vegetarian: true,
		glutenFree: false,
		price: 0.50,
		pic:"foodAssets/Bagel.jpg",
		isOrganic: false
	},
	{
		name: "Cream Cheese",
		vegetarian: true,
		glutenFree: true,
		price: 3.00,
		pic:"foodAssets/CreamCheese.jpg",
		isOrganic: false
	},
	{
		name: "Rice",
		vegetarian: true,
		glutenFree: true,
		price: 6.00,
		pic:"foodAssets/Rice.jpg",
		isOrganic: false
	},
	{
		name: "Pasta",
		vegetarian: true,
		glutenFree: false,
		price: 6.00,
		pic:"foodAssets/Pasta.jpg",
		isOrganic: false
	},
	{
		name: "Banana",
		vegetarian: true,
		glutenFree: true,
		price: 0.89,
		pic:"foodAssets/Banana.jpg",
		isOrganic: true
	}
];


//inspired by: https://www.javascripttutorial.net/javascript-dom/javascript-checkbox/
function getDiet(){
	let selections = [];
	const checked = document.querySelectorAll('input[name="diet"]:checked');
	 checked.forEach((checkbox) => {
        selections.push(checkbox.value);
    });
	return selections;
}
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods) {

	var restrict = getDiet();
	restrict.toString();

	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restrict == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push({name: prods[i].name, price: prods[i].price.toString()});//appending a json into the list
		}
		else if ((restrict == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push({name: prods[i].name, price: prods[i].price.toString()});
		}
		else if ((restrict == "Vegetarian,GlutenFree") && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
			product_names.push({name: prods[i].name, price: prods[i].price.toString()});
		}		
		else if ((restrict == "Vegetarian,Organic") && (prods[i].vegetarian == true) && (prods[i].isOrganic == true)){
			product_names.push({name: prods[i].name, price: prods[i].price.toString()});
		}
		else if ((restrict == "GlutenFree,Organic") && (prods[i].glutenFree == true) && (prods[i].isOrganic == true)){
			product_names.push({name: prods[i].name, price: prods[i].price.toString()});
		}
		else if((restrict == "Vegetarian,GlutenFree,Organic") && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) && (prods[i].isOrganic == true)){
			product_names.push({name: prods[i].name, price: prods[i].price.toString()});
		}
		else if (restrict == ""){
			product_names.push({name: prods[i].name, price: prods[i].price.toString()});
		}
	}

	//sort the products using javascript sort
	product_names.sort((a,b) => (a.price > b.price) ? 1: -1) //means in smallest to largest order
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}