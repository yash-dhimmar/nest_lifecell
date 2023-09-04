export class CommonService {
  async generateOtp(length: number) {
    try {
      var digits = '0123456789';
      let OTP = '';
      for (let i = 0; i < length; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
      }
      return parseInt(OTP);
    } catch (error) {
      throw error;
    }
  }
}