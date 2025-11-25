
export interface IPaymentRequest {
  id: string;
  provider: string;
  amount: number;
  status: PaymentStatus;
  date: string;
  currency: string;
}

export type PaymentStatus = 'Pendiente' | 'Aprobado' | 'Rechazado';