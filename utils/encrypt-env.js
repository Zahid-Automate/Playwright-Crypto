// utils/encrypt-env.js
const fs = require('fs');
const encryption = require('./encryption');
require('dotenv').config();

const encryptEnvFile = () => {
    try {
        // Read all variables from .env
        const username = process.env.UN;
        const password = process.env.PASSWORD;

        // Encrypt the values
        const encryptedUN = encryption.encrypt(username);
        const encryptedPASSWORD = encryption.encrypt(password);

        // Create content for encrypted env file
        const encryptedEnvContent = `ENCRYPTED_UN=${encryptedUN}
ENCRYPTED_PASSWORD=${encryptedPASSWORD}`;

        // Write to .env.encrypted file
        fs.writeFileSync('.env.encrypted', encryptedEnvContent);

        // Display results
        console.log('\nOriginal values:');
        console.log('UN:', username);
        console.log('PASSWORD:', password);

        console.log('\nEncrypted values have been saved to .env.encrypted:');
        console.log('ENCRYPTED_UN:', encryptedUN);
        console.log('ENCRYPTED_PASSWORD:', encryptedPASSWORD);

        // Verify decryption
        console.log('\nVerifying decryption:');
        console.log('Decrypted UN:', encryption.decrypt(encryptedUN));
        console.log('Decrypted PASSWORD:', encryption.decrypt(encryptedPASSWORD));
        
        console.log('\nEncryption completed successfully! Your credentials are now encrypted.');
        console.log('Please update your .env file with the encrypted values from .env.encrypted');
    } catch (error) {
        console.error('Error during encryption:', error);
    }
};

// Execute if running directly
if (require.main === module) {
    encryptEnvFile();
}