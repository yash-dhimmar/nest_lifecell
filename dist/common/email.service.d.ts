export declare class EmailService {
    private transporter;
    constructor();
    sendMail(toMail: string, data: any): Promise<void>;
    private prepareMessage;
}
