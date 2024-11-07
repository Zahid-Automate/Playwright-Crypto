// utils/encryption.js
const CryptoJS = require('crypto-js');
require('dotenv').config();

class Encryption {
    constructor() {
        // Read secret key from environment variables
        this.secretKey = process.env.CRYPTO_SECRET_KEY;
        
        if (!this.secretKey) {
            throw new Error('CRYPTO_SECRET_KEY not found in environment variables');
        }
    }

    encrypt(data) {
        if (!data) return null;
        try {
            return CryptoJS.AES.encrypt(data.toString(), this.secretKey).toString();
        } catch (error) {
            console.error('Encryption failed:', error);
            return null;
        }
    }

    decrypt(encryptedData) {
        if (!encryptedData) return null;
        try {
            const bytes = CryptoJS.AES.decrypt(encryptedData.toString(), this.secretKey);
            return bytes.toString(CryptoJS.enc.Utf8);
        } catch (error) {
            console.error('Decryption failed:', error);
            return null;
        }
    }
}

module.exports = new Encryption();