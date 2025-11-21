export class Product {
    protected sku: string
    protected name: string
    protected price: number

    constructor(sku: string, name: string, price: number) {
        this.sku = sku
        this.name = name
        this.price = price
    }

    displayDetails(): string {
        return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price.toFixed(2)}`
    }

    getPriceWithTax(): number {
        return this.price
    }

    getPrice(): number {
        return this.price
    }

    getName(): string {
        return this.name
    }
}