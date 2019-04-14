import { LoanType } from './loan-detail';

export class LoanRequest {
// {
//     "name": "string",
//     "loanAmount": 0,
//     "loanApr": 0,
//     "loanTermByDay": 0,
//     "loanNumberInstallments": 0,
//     "loanTimeBetweenInstallments": 0,
//     "collateralType": "string",
//     "collateralLabel": "string",
//     "fundType": "string",
//     "fundLabel": "string",
//     "initiatedByRole": "BORROWER",
//     "blockchainType": "ETHEREUM",
//     "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
// }
    
    constructor(
            id: string,
            loanAmount: number,
            loanApr: number,
            loanTermByDay: number,
            loanNumberInstallments: number,
            loanTimeBetweenInstallments: number,
            collateralType: string,
            collateralLabel: string,
            fundType: string,
            fundLabel: string,
            name: string,
            loanType: LoanType,
            initiatedByRole: string,
            acceptedById: string,
            blockchainType: string) {
        this.id = id;
        this.loanAmount = loanAmount;
        this.loanApr = loanApr;
        this.loanTermByDay = loanTermByDay;
        this.loanNumberInstallments = loanNumberInstallments;
        this.loanTimeBetweenInstallments = loanTimeBetweenInstallments;
        this.collateralType = collateralType;
        this.collateralLabel = collateralLabel;
        this.fundType = fundType;
        this.fundLabel = fundLabel;
        this.name = name;
        this.loanType = loanType;
        this.initiatedByRole = initiatedByRole;
        this.acceptedById = acceptedById;
        this.blockchainType = blockchainType;
    }

    id: string;
    loanAmount: number;
    loanApr: number;
    loanTermByDay: number;
    loanNumberInstallments: number;
    loanTimeBetweenInstallments: number;
    collateralType: string;
    collateralLabel: string;
    fundType: string;
    fundLabel: string;
    name: string;
    loanType: LoanType;
    initiatedByRole: string;
    acceptedById: string;
    blockchainType: string;
}

