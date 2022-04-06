export interface Cards {
    productNumber: string;
    productBrand: string;
    limitRD: number;
    BalanceRD: number;
    LimitUS: number;
    BalanceUS: number;
    clientName: string;
    productEndingDate: string;
}

export interface Movements {
    productNumber: string;
    amount: number;
    description: string;
    transactionType: number;
    date: string;
}

export interface Payment {
    productNumber: string;
    amount: number;
}

export interface Credentials {
    username: string;
    password: string;
}

export enum CardBrand {
    Visa = 'Visa',
    MasterCard = 'Mastercard',
}
