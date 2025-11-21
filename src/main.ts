import { Product } from "./models/Product.js"
import { PhysicalProduct } from "./models/PhysicalProduct.js"
import { DigitalProduct } from "./models/DigitalProduct.js"
import { calculateTax } from "./utils/taxCalculator.js"

// Create instances of products
const products: Product[] = [
    new PhysicalProduct("PHY001", "Laptop", 999.99, 2.5),
    new PhysicalProduct("PHY002", "Keyboard", 79.99, 0.8),
    new PhysicalProduct("PHY003", "Monitor", 349.99, 5.2),
    new DigitalProduct("DIG001", "Antivirus Software", 49.99, 150),
    new DigitalProduct("DIG002", "Video Editing Suite", 199.99, 2500),
    new DigitalProduct("DIG003", "E-Book: TypeScript Guide", 29.99, 5)
]

// Display all products using polymorphism
console.log("=== Inventory Report ===\n")

for (const product of products) {
    console.log(product.displayDetails())
    console.log(`  Final Price (with tax): $${calculateTax(product).toFixed(2)}`)
    console.log("")
}

// Demonstrate polymorphism - same method call, different behavior
console.log("=== Tax Comparison ===\n")

const physicalItem = new PhysicalProduct("PHY004", "USB Cable", 19.99, 0.1)
const digitalItem = new DigitalProduct("DIG004", "Music Album", 9.99, 80)

console.log(`Physical Product: ${physicalItem.getName()}`)
console.log(`  Base Price: $${physicalItem.getPrice().toFixed(2)}`)
console.log(`  With Tax (10%): $${physicalItem.getPriceWithTax().toFixed(2)}`)
console.log("")

console.log(`Digital Product: ${digitalItem.getName()}`)
console.log(`  Base Price: $${digitalItem.getPrice().toFixed(2)}`)
console.log(`  With Tax (0%): $${digitalItem.getPriceWithTax().toFixed(2)}`)
