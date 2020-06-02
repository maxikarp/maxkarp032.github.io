// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		isOrganic: true
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35,
		isOrganic: false
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.00,
		isOrganic: true
	},
	{
		name: "Steak",
		vegetarian: false,
		glutenFree: true,
		price: 13.00,
		isOrganic: false
	},
	{
		name: "Toamto",
		vegetarian: true,
		glutenFree: true,
		price: 1.00,
		isOrganic: true
	},
	{
		name: "Bagel",
		vegetarian: true,
		glutenFree: false,
		price: 0.50,
		isOrganic: false
	},
	{
		name: "Cream cheese",
		vegetarian: true,
		glutenFree: true,
		price: 3.00,
		isOrganic: false
	},
	{
		name: "Rice",
		vegetarian: true,
		glutenFree: true,
		price: 6.00,
		isOrganic: false
	},
	{
		name: "Pasta",
		vegetarian: true,
		glutenFree: false,
		price: 6.00,
		isOrganic: false
	},
	{
		name: "Banana",
		vegetarian: true,
		glutenFree: true,
		price: 0.89,
		isOrganic: true
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push({name: prods[i].name, price: prods[i].price.toString()});//appending a json into the list
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push({name: prods[i].name, price: prods[i].price.toString()});
		}
		else if ((restriction == "GlutenFreeAndVeg") && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
			product_names.push({name: prods[i].name, price: prods[i].price.toString()});
		}		
		else if ((restriction == "VegetarianAndOrg") && (prods[i].vegetarian == true) && (prods[i].isOrganic == true)){
			product_names.push({name: prods[i].name, price: prods[i].price.toString()});
		}
		else if ((restriction == "GlutenFreeAndOrg") && (prods[i].glutenFree == true) && (prods[i].isOrganic == true)){
			product_names.push({name: prods[i].name, price: prods[i].price.toString()});
		}
		else if((restriction == "GlutenFreeAndVegAndOrg") && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) && (prods[i].isOrganic == true)){
			product_names.push({name: prods[i].name, price: prods[i].price.toString()});
		}
		else if (restriction == "None"){
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