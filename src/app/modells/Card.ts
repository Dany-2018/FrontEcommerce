export class Card {
    id_card?: number
    name?: string
    lastName?: string
    cc?: number
    phone?: number
    email?: string
    address?: string
    birthDate?: string | null = null;
    insertDate?: string | null = null;
    modificationDate?: string | null = null;
    enableUser?: boolean
    number?: number
    type?: string
    cvv?: number
    status?: number
    monthExpiry?: string
    yearExpiry?: string
}   