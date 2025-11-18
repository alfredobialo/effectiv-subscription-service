// types.ts
export interface ProductMetadata {
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
  version: number;
  tags: string[];
  isActive: boolean;
  viewCount: number;
  lastViewedAt?: Date;
}

export interface ProductDimensions {
  length: number;
  width: number;
  height: number;
  unit: 'cm' | 'in' | 'm';
}

export interface ProductPricing {
  cost: number;
  price: number;
  currency: string;
  discount?: number;
  taxRate?: number;
}

export interface ProductInventory {
  sku: string;
  quantity: number;
  reorderLevel: number;
  warehouse: string;
  lastRestocked?: Date;
}

export enum ProductCategory {
  Electronics = 'ELECTRONICS',
  Clothing = 'CLOTHING',
  Food = 'FOOD',
  Books = 'BOOKS',
  Home = 'HOME',
  Sports = 'SPORTS',
  Other = 'OTHER'
}

export enum ProductStatus {
  Draft = 'DRAFT',
  Active = 'ACTIVE',
  Discontinued = 'DISCONTINUED',
  OutOfStock = 'OUT_OF_STOCK'
}

// product.model.ts
export class ProductModel {
  private _id: string;
  private _name: string;
  private _description: string;
  private _category: ProductCategory;
  private _status: ProductStatus;
  private _pricing: ProductPricing;
  private _inventory: ProductInventory;
  private _dimensions?: ProductDimensions;
  private _metadata: ProductMetadata;
  private _images: string[];
  private _attributes: Map<string, any>;

  constructor(
    id: string,
    name: string,
    description: string,
    category: ProductCategory,
    pricing: ProductPricing,
    inventory: ProductInventory,
    createdBy: string
  ) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._category = category;
    this._status = ProductStatus.Draft;
    this._pricing = pricing;
    this._inventory = inventory;
    this._images = [];
    this._attributes = new Map();

    // Initialize metadata
    this._metadata = {
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy,
      updatedBy: createdBy,
      version: 1,
      tags: [],
      isActive: true,
      viewCount: 0
    };
  }

  // Getters
  get id(): string { return this._id; }
  get name(): string { return this._name; }
  get description(): string { return this._description; }
  get category(): ProductCategory { return this._category; }
  get status(): ProductStatus { return this._status; }
  get pricing(): ProductPricing { return { ...this._pricing }; }
  get inventory(): ProductInventory { return { ...this._inventory }; }
  get dimensions(): ProductDimensions | undefined { return this._dimensions ? { ...this._dimensions } : undefined; }
  get metadata(): ProductMetadata { return { ...this._metadata }; }
  get images(): string[] { return [...this._images]; }

  // Setters with metadata tracking
  set name(value: string) {
    this._name = value;
    this.updateMetadata();
  }

  set description(value: string) {
    this._description = value;
    this.updateMetadata();
  }

  set status(value: ProductStatus) {
    this._status = value;
    this.updateMetadata();
  }

  // Update methods
  updatePricing(pricing: Partial<ProductPricing>, updatedBy: string): void {
    this._pricing = { ...this._pricing, ...pricing };
    this.updateMetadata(updatedBy);
  }

  updateInventory(inventory: Partial<ProductInventory>, updatedBy: string): void {
    this._inventory = { ...this._inventory, ...inventory };
    this.updateMetadata(updatedBy);
  }

  setDimensions(dimensions: ProductDimensions, updatedBy: string): void {
    this._dimensions = dimensions;
    this.updateMetadata(updatedBy);
  }

  // Image management
  addImage(imageUrl: string, updatedBy: string): void {
    if (!this._images.includes(imageUrl)) {
      this._images.push(imageUrl);
      this.updateMetadata(updatedBy);
    }
  }

  removeImage(imageUrl: string, updatedBy: string): void {
    const index = this._images.indexOf(imageUrl);
    if (index > -1) {
      this._images.splice(index, 1);
      this.updateMetadata(updatedBy);
    }
  }

  // Tag management
  addTag(tag: string, updatedBy: string): void {
    if (!this._metadata.tags.includes(tag)) {
      this._metadata.tags.push(tag);
      this.updateMetadata(updatedBy);
    }
  }

  removeTag(tag: string, updatedBy: string): void {
    const index = this._metadata.tags.indexOf(tag);
    if (index > -1) {
      this._metadata.tags.splice(index, 1);
      this.updateMetadata(updatedBy);
    }
  }

  // Custom attributes
  setAttribute(key: string, value: any, updatedBy: string): void {
    this._attributes.set(key, value);
    this.updateMetadata(updatedBy);
  }

  getAttribute(key: string): any {
    return this._attributes.get(key);
  }

  getAllAttributes(): Record<string, any> {
    return Object.fromEntries(this._attributes);
  }

  // Metadata operations
  incrementViewCount(): void {
    this._metadata.viewCount++;
    this._metadata.lastViewedAt = new Date();
  }

  activate(updatedBy: string): void {
    this._metadata.isActive = true;
    this._status = ProductStatus.Active;
    this.updateMetadata(updatedBy);
  }

  deactivate(updatedBy: string): void {
    this._metadata.isActive = false;
    this._status = ProductStatus.Discontinued;
    this.updateMetadata(updatedBy);
  }

  private updateMetadata(updatedBy?: string): void {
    this._metadata.updatedAt = new Date();
    this._metadata.version++;
    if (updatedBy) {
      this._metadata.updatedBy = updatedBy;
    }
  }

  // Calculated properties
  get finalPrice(): number {
    let price = this._pricing.price;
    if (this._pricing.discount) {
      price -= (price * this._pricing.discount / 100);
    }
    return price;
  }

  get profitMargin(): number {
    return ((this._pricing.price - this._pricing.cost) / this._pricing.price) * 100;
  }

  get isInStock(): boolean {
    return this._inventory.quantity > 0;
  }

  get needsReorder(): boolean {
    return this._inventory.quantity <= this._inventory.reorderLevel;
  }

  // Serialization
  toJSON(): Record<string, any> {
    return {
      id: this._id,
      name: this._name,
      description: this._description,
      category: this._category,
      status: this._status,
      pricing: this._pricing,
      inventory: this._inventory,
      dimensions: this._dimensions,
      metadata: this._metadata,
      images: this._images,
      attributes: this.getAllAttributes()
    };
  }

  /*static fromJSON(json: Record<string, any>): ProductModel {
    const product = new ProductModel(
      json.id,
      json.name,
      json.description,
      json.category,
      json.pricing,
      json.inventory,
      json.metadata.createdBy
    );

    product._status = json.status;
    product._dimensions = json.dimensions;
    product._metadata = json.metadata;
    product._images = json.images || [];

    if (json.attributes) {
      Object.entries(json.attributes).forEach(([key, value]) => {
        product._attributes.set(key, value);
      });
    }

    return product;
  }*/

  // Clone product
  clone(newId: string, createdBy: string): ProductModel {
    const cloned = new ProductModel(
      newId,
      `${this._name} (Copy)`,
      this._description,
      this._category,
      { ...this._pricing },
      { ...this._inventory, sku: `${this._inventory.sku}-COPY` },
      createdBy
    );

    if (this._dimensions) {
      cloned.setDimensions({ ...this._dimensions }, createdBy);
    }

    this._images.forEach(img => cloned.addImage(img, createdBy));
    this._metadata.tags.forEach(tag => cloned.addTag(tag, createdBy));
    this._attributes.forEach((value, key) => cloned.setAttribute(key, value, createdBy));

    return cloned;
  }
}

// Example usage
const product = new ProductModel(
  'prod-001',
  'Wireless Headphones',
  'Premium noise-cancelling wireless headphones',
  ProductCategory.Electronics,
  {
    cost: 50,
    price: 149.99,
    currency: 'USD',
    discount: 10,
    taxRate: 8.5
  },
  {
    sku: 'WH-001',
    quantity: 150,
    reorderLevel: 20,
    warehouse: 'WH-NY-01'
  },
  'user@example.com'
);

// Add metadata
product.addTag('bluetooth', 'user@example.com');
product.addTag('audio', 'user@example.com');
product.setAttribute('brand', 'AudioTech', 'user@example.com');
product.setAttribute('warranty', '2 years', 'user@example.com');

// Update product
product.setDimensions({ length: 20, width: 18, height: 8, unit: 'cm' }, 'user@example.com');
product.addImage('https://example.com/headphones-1.jpg', 'user@example.com');
product.activate('user@example.com');

// Track views
product.incrementViewCount();

console.log('Product:', product.toJSON());
console.log('Final Price:', product.finalPrice);
console.log('Profit Margin:', product.profitMargin.toFixed(2) + '%');
console.log('Needs Reorder:', product.needsReorder);
