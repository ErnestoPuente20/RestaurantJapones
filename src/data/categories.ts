import {Soup, GlassWater, Coffee, Martini, Dessert, Beer} from 'lucide-react'
import type { Category } from "../types";

export const categories: Category[] = [
     {
        id: 1,
        name: 'Comida Japonesa',
        icon: Soup
    },
    {
        id: 2,
        name: 'Brebajes',
        icon: GlassWater
    },
    {
        id: 3,
        name: 'Infusiones',
        icon: Coffee
    },
    {
        id: 4,
        name: 'Cocteles',
        icon: Martini
    },
    {
        id: 5,
        name: 'Postres',
        icon: Dessert
    },
    {
        id: 6,
        name: 'Cervezas',
        icon: Beer
    },
]
   
    