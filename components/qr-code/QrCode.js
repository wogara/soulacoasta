import QRCode from 'qrcode.react';

export default function QrCode({ link }) {
  return (
    <div>
      <QRCode value={link} />
    </div>
  );
}
