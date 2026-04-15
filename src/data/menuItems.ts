import type { MenuItem } from "../types";

export const menuItems: MenuItem[] = [
    {
      id: 1,
      categoryId: 1,
      name: "Onigiris",
      variants: [
          { id: 1, name: "3 Onigiris normales", price: 29 },
          { id: 2, name: "3 Onigiris fritos", price: 33 },
      ],
      image: "/productos/onigiris.png"
    },

    {
      id: 2,
      categoryId: 1,
      name: "Ramen",
      note: "Shoyu: Salsa Soya Coreana · Miso: Salsa de frijol fermentado",
      variants: [
        { id: 1, name: "Ramen Miso de Cerdo", description: "Cerdo, fideos artesanales, naruto, alga nori, cebollín, sésamo molido, bok choy y huevo (aji tamago)", price: 49 },
        { id: 2, name: "Ramen Shoyu de Cerdo", description: "Cerdo, fideos artesanales, naruto, alga nori, cebollín, sésamo molido, bok choy y huevo (aji tamago)", price: 49 },
        { id: 3, name: "Ramen Shoyu de Pollo", description: "Pollo, fideos artesanales, naruto, brotes de alfalfa, cebollín, sésamo molido, bok choy y huevo (aji tamago)", price: 59 },
      ],
      image: "/productos/ramen.png"
    },
    {
      id: 3,
      categoryId: 1,
      name: "Yakisoba",
      variants: [
          { id: 1, name: "Yakisoba de  cerdo", price: 45 },
          { id: 2, name: "Yakisoba de pollo", price: 45 },
          { id: 3, name: "Yakisoba de mariscos (Katsuobushi)", price: 65 },
      ],
      image: "/productos/onigiris.png"
    },
    {
      id: 4,
      categoryId: 1,
      name: "Gyosas",
      description: "Seis gyosas de cerdo en salsa curry acompañado de teriyaki de maracuyá",
      price: 39,
      image: "/productos/gyosas.png"
    },
    {
      id: 5,
      categoryId: 1,
      name: "Banderillas",
      variants: [
          { id: 1, name: "Banderilla de queso mozarella", price: 45 },
          { id: 2, name: "Banderilla Mixta (queso mozarella y salchicha)", price: 45 },
          { id: 3, name: "Banderilla de salchicha", price: 65 },
      ],
      image: "/productos/onigiris.png"
    },
    {
      id: 6,
      categoryId: 2,
      name: "Sosuke",
      description: "Maracuya, flor de jamaica y pimienta rosada",
      image: "/productos/brebajes.png",
      price: 25
    },
    {
      id: 7,
      categoryId: 2,
      name: "Sosuke",
      description: "Maracuya, flor de jamaica y pimienta rosada",
      image: "/productos/brebajes.png",
      price: 25
    },
    {
      id: 8,
      categoryId: 2,
      name: "Sosuke",
      description: "Maracuya, flor de jamaica y pimienta rosada",
      image: "/productos/brebajes.png",
      price: 25
    },
    {
      id: 9,
      categoryId: 2,
      name: "Sosuke",
      description: "Maracuya, flor de jamaica y pimienta rosada",
      image: "/productos/brebajes.png",
      price: 25
    },
]