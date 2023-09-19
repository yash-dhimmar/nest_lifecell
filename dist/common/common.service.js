"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonService = void 0;
class CommonService {
    async generateOtp(length) {
        try {
            var digits = '0123456789';
            let OTP = '';
            for (let i = 0; i < length; i++) {
                OTP += digits[Math.floor(Math.random() * 10)];
            }
            return parseInt(OTP);
        }
        catch (error) {
            throw error;
        }
    }
}
exports.CommonService = CommonService;
//# sourceMappingURL=common.service.js.map