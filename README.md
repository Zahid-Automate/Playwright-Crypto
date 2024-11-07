# Encrypted Login Test Project

This project demonstrates automated login testing with encrypted credentials using Playwright and CryptoJS.

## Project Structure

```
project/
├── utils/                    # Utility functions
│   ├── encryption.js        # Encryption/decryption logic
│   └── encrypt-env.js       # Script to encrypt environment variables
├── tests/                    # Test files
│   └── login.spec.js        # Login test implementation
├── .env                      # Environment variables (encrypted)
├── .env.encrypted           # Backup of encrypted values
└── .gitignore               # Git ignore configuration
```

## Setup

1. Install dependencies:
```bash
npm install playwright crypto-js dotenv
```

2. Create `.env` file with your credentials:
```env
UN=your_username
PASSWORD=your_password
```

3. Encrypt your credentials:
```bash
node utils/encrypt-env.js
```

4. Update `.env` file with encrypted values from `.env.encrypted`

## Running Tests

```bash
npx playwright test tests/login.spec.js
```

## Security Notes

- Never commit `.env` or `.env.encrypted` files to version control
- Store encryption keys securely
- Update `.gitignore` to exclude sensitive files
- Keep original credentials backed up securely

## Dependencies

- Playwright
- CryptoJS
- dotenv

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
