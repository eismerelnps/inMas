import { ProductType } from "../types/ProductType";


// function generateRandomProduct(): ProductType {
//   return {
//     id: '',
//     name: `Producto ${Math.floor(Math.random() * 100)}`,
//     description: `Descripción del producto ${Math.floor(Math.random() * 10000)}`,
//     category: `Categoría ${Math.floor(Math.random() * 5) + 1}`,
//     price: `${Math.floor(Math.random() * 1000)}`,
//     offerPrice: `${Math.floor(Math.random() * 900) + 100}`,
//     stock: Math.floor(Math.random() * 100),
//   };
// }

// const productsList: ProductType[] = Array.from({ length: 10 }, () => generateRandomProduct());

export const productsPlaceholder: ProductType[] = [
  {
    id: "5b3a4fbf-b17a-415a-a323-4e784234ca27",
    name: "Arroz Nacional",
    description: "",
    category: "Alimentos",
    unitOfMeasurement: 'kg',
    price: "180",
    offerPrice: "178.52",
    stock: 100,

    buyDate: new Date(2024, 6, 1),
    expireDate: new Date(2025, 6, 1)
  },
  {
    id: "5b3a4fbf-b17a-415a-a323-4e784234ca27",
    name: "Galletas Artesanales",
    description: "Sabor Chorizo y Ajo",
    category: "Confitura",
    unitOfMeasurement: 'unit',
    price: "160",
    offerPrice: undefined,
    stock: 100,

    buyDate: new Date(2024, 6, 1),
    expireDate: new Date(2025, 6, 1)
  },
  // {
  //   id: "5b3a4fbf-b17a-415a-a323-4e784234ca27",
  //   name: "Arroz Brasileño",
  //   description: "1 lb",
  //   category: "Alimentos",
  //   price: "200",
  //   offerPrice: "",
  //   stock: 110,
  // },
  // {
  //   id: "5b3a4fbf-b17a-415a-a323-4e784234ca27",
  //   name: "Monitor",
  //   description: "User-friendly",
  //   category: "Photography",
  //   price: "404.46",
  //   offerPrice: "178.52",
  //   stock: 9,
  // },
  // {
  //   id: "2276209e-647d-4df5-9061-4fdeb4de3a71",
  //   name: "Camera",
  //   description: "Top-rated",
  //   category: "Electronics",
  //   price: "531.49",
  //   offerPrice: "723.37",
  //   stock: 61,
  // },
  // {
  //   id: "163fa432-6f6c-45ba-ba1a-ebbb79abb05f",
  //   name: "Laptop",
  //   description: "Compact size",
  //   category: "Accessories",
  //   price: "295.35",
  //   offerPrice: "892.67",
  //   stock: 88,
  // },
  // {
  //   id: "ef5b4da4-5bb3-4f5c-bc3e-87f3b7578f40",
  //   name: "Camera",
  //   description: "User-friendly",
  //   category: "Home Office",
  //   price: "374.98",
  //   offerPrice: "715.72",
  //   stock: 65,
  // },
  // {
  //   id: "5211a8dd-59b1-4568-842d-5f0691f0b474",
  //   name: "Speaker",
  //   description: "Compact size",
  //   category: "Electronics",
  //   price: "686.66",
  //   offerPrice: "808.16",
  //   stock: 74,
  // },
  // {
  //   id: "47c41c2e-619a-4cbd-a95a-a32d898a0b42",
  //   name: "Camera",
  //   description: "Affordable",
  //   category: "Photography",
  //   price: "336.41",
  //   offerPrice: "290.45",
  //   stock: 91,
  // },
  // {
  //   id: "5e7fdb17-ec5f-4813-94e6-c33fca15dd98",
  //   name: "Printer",
  //   description: "Durable",
  //   category: "Audio",
  //   price: "113.29",
  //   offerPrice: "543.42",
  //   stock: 99,
  // },
  // {
  //   id: "e7e6cbe9-d355-46b7-a066-4bb957a7bb95",
  //   name: "Monitor",
  //   description: "Premium build",
  //   category: "Accessories",
  //   price: "416.72",
  //   offerPrice: "364.24",
  //   stock: 20,
  // },
  // {
  //   id: "720ef426-95de-4e86-90f4-79ee8377bae5",
  //   name: "Camera",
  //   description: "Best value",
  //   category: "Accessories",
  //   price: "335.72",
  //   offerPrice: "797.01",
  //   stock: 20,
  // },
  // {
  //   id: "241d6576-3e9a-4fe4-a4bc-eb7037b22044",
  //   name: "Mouse",
  //   description: "Compact size",
  //   category: "Accessories",
  //   price: "236.60",
  //   offerPrice: "873.27",
  //   stock: 40,
  // },
];

