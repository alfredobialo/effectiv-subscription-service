export interface BankTransferModel {
  fromAccount : TransferInfoModel;
  toAccount : TransferInfoModel;
  transDate : Date;
  transAmount : number,
  narration?: string
}

export interface  BankInfoModel {
  bankCode: string;
  bankName: string;
  bankId: number;
  bankLogo?: string;
}

export interface TransferInfoModel {
  accountNo : string;
  accountName : string;
  bankInfo : BankInfoModel;
}
