export enum LoanType {
    BORROWER_INIT = 'Borrower Initiated',
    LENDER_INIT = 'Lender Initiated',
};

export class LoanRequest {
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

