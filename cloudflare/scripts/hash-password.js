const crypto = require('crypto');

const password = process.argv[2];
if (!password || password.length < 12) {
  console.error('Usage: node cloudflare/scripts/hash-password.js "a-password-at-least-12-chars"');
  process.exit(1);
}

const salt = crypto.randomBytes(16);
crypto.pbkdf2(password, salt, 120000, 32, 'sha256', (_, derived) => {
  if (!derived) process.exit(1);
  const b64 = value => value.toString('base64url');
  console.log(`pbkdf2$${b64(salt)}$${b64(derived)}`);
});
