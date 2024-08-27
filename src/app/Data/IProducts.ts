export class IProduct {
    Id: number;
    Name: string;
    Image: string;
    Price: number;
    Description: string;
    Category: string
}

export const AllProducts: IProduct[] = [
    
    {
        Id: 1,
        Name: "iPhone 15",
        Image: "../images/iphone15.jpg",
        Description: "Apple iPhone 15, 128GB, 6GB, Single SIM, 5G - Blue ...",
        Category: "smartphones",
        Price: 2000,
    },
    {
        Id: 1,
        Name: "iPhone 14",
        Image: "../images/iphone14.jpg",
        Description: "An apple mobile which is nothing like apple",
        Category: "smartphones",
        Price: 590,
    },
    {
        Id: 3,
        Name: "Samsung S24 Ultra",
        Image: "../images/samsoungS24.jpg",
        Description: "Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Gray, 12GB, 512GB Storage)",
        Category: "smartphones",
        Price: 600,
    },
    {
        Id: 4,
        Name: "MacBook Pro",
        Image: "../images/macbook.jpg",
        Description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
        Category: "laptops",
        Price: 2300,
    },
    
]