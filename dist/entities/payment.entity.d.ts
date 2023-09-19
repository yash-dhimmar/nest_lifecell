import { FinancePayment } from "./financePayment.entity";
import { Discount } from "./discount.entity";
import { Coupon } from "./coupon.entity";
import { EnrolledUser } from "./enrolledUser.entity";
export declare class Payment {
    id: number;
    enrollment_id: EnrolledUser;
    method: number;
    amount: number;
    status: number;
    otp: number;
    cheque_number: string;
    cheque_image: string;
    payment_link: string;
    reciept_photo: string;
    is_approved: number;
    is_verified: number;
    discount: Discount;
    coupon: Coupon;
    created_at: Date;
    updated_at: Date;
    financepaymentdetails: FinancePayment[];
}
