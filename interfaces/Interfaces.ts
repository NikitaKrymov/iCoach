export interface Address {
    country: string, 
    state: string,
    city: string,
    street: string,
    zipCode: number
}

export interface Contacts {
    phone: number,
    email: string,
    address: Address
}

export interface Sale {
    id: string,
    title: string,
    courseId: string,
    date: Date,
    price: number,
    clientId: string
    trainerId: string
}

export interface AuthCredentials {
    username: string,
    password: string
}