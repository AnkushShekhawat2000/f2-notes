// Event deligation


// chat gpt :

// Event delegation ek JavaScript design pattern hai jo humko efficiently event handling karne ka tarika deta hai, especially jab hume dynamically added elements ke saath kaam karna hota hai. Chalo isko thoda detail mein samjhte hain:

// Problem Without Event Delegation
// Agar tumhare paas ek list of items hai (jaise ek <ul> ke andar multiple <li> elements), aur tum chahte ho ki har item pe click hone par kuch event trigger ho, to ek traditional approach ye hogi ki tum har <li> element pe separately ek event listener attach karo. Example:


// <ul>
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>

// <script>
//   document.querySelectorAll('li').forEach(function(item) {
//     item.addEventListener('click', function() {
//       alert('Item clicked');
//     });
//   });
// </script>




// Is approach mein problem tab aati hai jab hum new list items dynamically add karte hain. Us case mein hume manually naye items pe bhi event listeners add karne padte hain, jo inefficient hai.

// Event Delegation
// Event delegation is problem ko solve karta hai by leveraging event bubbling. Event bubbling ka matlab hai ki jab ek event kisi child element pe fire hoti hai, to wo automatically parent elements tak bubble hoti hai.

// Hum kya karte hain, instead of har child element pe event listener lagane ke, hum ek event listener parent element (jaise <ul>) pe laga dete hain, aur jab event bubble hoke parent element tak pahunchti hai, tab hum ye check karte hain ki actual event ka target kaunsa child element tha.



// <ul id="itemList">
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>

// <script>
//   document.getElementById('itemList').addEventListener('click', function(event) {
//     // event.target wo element hai jisme actual click hua
//     if (event.target.tagName === 'LI') {
//       alert(event.target.textContent + ' clicked');
//     }
//   });
// </script>

// Is example mein humne sirf parent <ul> element pe event listener attach kiya hai, aur jab bhi kisi <li> pe click hota hai, event bubble hoke parent <ul> pe aata hai. Phir hum event.target property se check karte hain ki kis <li> pe click hua hai.

// Benefits of Event Delegation:
// Efficiency: Hum multiple event listeners ko attach karne se bachte hain. Bas ek parent pe listener attach karke saare children ke liye events handle kar sakte hain.
// Dynamic Elements: Agar tum dynamic content add karte ho (jaise JavaScript se naye <li> elements add karte ho), to tumhe naye elements ke liye manually event listener attach nahi karna padta.
// Memory Efficiency: Har child element pe listener lagane se better memory management hoti hai kyunki sirf ek listener use hota hai.
// Event Bubbling vs Capturing
// Event Bubbling: Yeh default behavior hota hai, jisme event bottom se top ki taraf propagate karti hai (jaise child se parent tak).
// Event Capturing: Iska opposite hota hai, yeh top se bottom propagate karta hai. Capturing phase mein events us order mein process hoti hain jisme parent elements pehle aate hain.
// Event delegation ke liye bubbling phase hi kaam mein liya jata hai kyunki hum parent element pe listener lagate hain aur child element se event bubble hoti hui parent tak aati hai.

// Real-world Example:
// For example, agar tum ek shopping cart bana rahe ho jisme tum items dynamically add karte ho, tum cart ke parent element (jaise <div class="cart">) pe event listener laga sakte ho. Is tarah tum jitne bhi naye items add karoge, wo automatically handle ho jayenge bina naye listeners lagaye.

// <div class="cart" id="cart">
//   <button class="add-item">Add Item 1</button>
//   <button class="add-item">Add Item 2</button>
// </div>

// <script>
//   document.getElementById('cart').addEventListener('click', function(event) {
//     if (event.target.classList.contains('add-item')) {
//       alert('Item added: ' + event.target.textContent);
//     }
//   });
// </script>























// sir example
const groceryProducts = [
    {
        name: 'Gala Apples',
        price: 1.99,
        description: 'Fresh and crisp Gala apples, perfect for snacking or baking.'
    },
    {
        name: 'Whole Wheat Bread',
        price: 2.49,
        description: 'Nutritious whole wheat bread, great for sandwiches and toast.'
    },
    {
        name: 'Organic 2% Milk',
        price: 3.50,
        description: 'Creamy and organic 2% milk, sourced from local dairy farms.'
    },
    {
        name: 'Free-Range Brown Eggs',
        price: 2.99,
        description: 'High-quality free-range brown eggs, rich in nutrients.'
    },
    {
        name: 'Penne Pasta',
        price: 1.79,
        description: 'Versatile penne pasta, ideal for various pasta dishes.'
    },
    {
        name: 'Salmon Fillet',
        price: 8.99,
        description: 'Fresh, wild-caught salmon fillet, perfect for a healthy meal.'
    },
    {
        name: 'Greek Yogurt',
        price: 4.25,
        description: 'Creamy Greek yogurt, a delicious and protein-rich dairy option.'
    },
    {
        name: 'Spinach',
        price: 2.75,
        description: 'Organic spinach, packed with vitamins and minerals.'
    },
    {
        name: 'Ground Beef',
        price: 5.49,
        description: 'Lean ground beef, great for making burgers and pasta sauces.'
    },
    {
        name: 'Quinoa',
        price: 3.99,
        description: 'Nutrient-rich quinoa, a versatile and gluten-free grain.'
    },
    {
        name: 'Orange Juice',
        price: 2.99,
        description: 'Freshly squeezed orange juice, a refreshing morning drink.'
    },
    {
        name: 'Tomatoes',
        price: 1.50,
        description: 'Vine-ripened tomatoes, perfect for salads and cooking.'
    },
    {
        name: 'Almond Butter',
        price: 6.99,
        description: 'Smooth almond butter, a healthy spread for toast and snacks.'
    },
    {
        name: 'Honey',
        price: 4.49,
        description: 'Pure honey, a natural sweetener with various health benefits.'
    },
    {
        name: 'Green Beans',
        price: 2.25,
        description: 'Fresh green beans, a nutritious and versatile vegetable.'
    },
    {
        name: 'Brown Rice',
        price: 2.99,
        description: 'Whole grain brown rice, a healthy and hearty side dish.'
    },
    {
        name: 'Cheddar Cheese',
        price: 3.75,
        description: 'Sharp cheddar cheese, great for snacking and melting.'
    },
    {
        name: 'Black Beans',
        price: 1.25,
        description: 'Canned black beans, a convenient protein source for meals.'
    },
    {
        name: 'Avocado',
        price: 1.99,
        description: 'Ripe avocados, perfect for salads, sandwiches, or guacamole.'
    },
    {
        name: 'Dark Chocolate',
        price: 3.99,
        description: 'High-quality dark chocolate, a sweet treat with health benefits.'
    }
];

const productsContainer = document.getElementById("products");

productsContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" && e.target.id) {
        console.log(groceryProducts[e.target.id])
    }
})

groceryProducts.forEach((product, index) => {
    const productElement = document.createElement("div");
    const title = document.createElement("b");
    title.innerText = product.name;
    const description = document.createElement("p");
    description.innerText = product.description;

    const price = document.createElement("span");
    price.innerText = `$${product.price}`
    productElement.className = "product";

    const button = document.createElement("button");
    button.innerText = "Add";
    // <button>Add</button>


    // button.addEventListener("click", listener)
    button.id = index


    productElement.append(title, description, price, button);

    productsContainer.appendChild(productElement)
})
