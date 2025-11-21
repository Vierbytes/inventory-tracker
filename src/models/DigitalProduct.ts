import { Product } from "./Product.js"

export class DigitalProduct extends Product {
    private fileSize: number

    constructor(sku: string, name: string, price: number, fileSize: number) {
        super(sku, name, price)
        this.fileSize = fileSize
    }

    override getPriceWithTax(): number {
        return this.price // 0% tax for digital products
    }

    get fileSizeInMB(): string {
        return `${this.fileSize} MB`
    }

    displayDetails(): string {
        return `${super.displayDetails()}, File Size: ${this.fileSizeInMB}`
    }
}
