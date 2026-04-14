import type {LucideIcon} from 'lucide-react'

export interface Category {
    id: number
    name: string
    icon: LucideIcon
}

export interface MenuItem {
    id: number
    categoryId: number
    name: string
    description?: string
    price?: number
    variants?: MenuVariant[]
    image: string
    note?: string
}

export interface MenuVariant {
    id: number
    name: string
    description?: string
    price: number
}