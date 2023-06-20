import { createDecipheriv } from 'crypto';
import { config } from 'dotenv';

config();

export const decrypted = (textToDecrypt: string): string => {
  const [iv, text] = textToDecrypt.split(':');

  if (!iv || !text) throw new Error('Invalid encrypted text');

  const key = process.env.ENCRYPT_KEY;
  const decipher = createDecipheriv('aes-256-ctr', key, Buffer.from(iv, 'hex'));

  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(text, 'hex')),
    decipher.final(),
  ]);

  return decrypted.toString();
};
