const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

const SERVICE_LABELS = {
  single:   'Single Tooth Implant',
  multiple: 'Multiple Tooth Implants',
  full:     'Full Mouth Implants (123Teeth™)',
  unsure:   'Not Sure — Need Guidance',
};

module.exports = async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, phone, email, service, smsOptIn } = req.body || {};

  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone are required.' });
  }

  const serviceLabel = SERVICE_LABELS[service] || 'Not specified';
  const smsText      = smsOptIn ? '✅ Yes — opted in to SMS' : '❌ No — did not opt in';
  const timestamp    = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });

  try {
    const { data, error } = await resend.emails.send({
      from:     'Orlando Lifestyle Dentistry <hello@orlandolifestyledentistry.com>',
      to:       ['orlandolifestyledentistry@gmail.com'],
      reply_to: email || undefined,
      subject:  `New Consultation Request — ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head><meta charset="UTF-8"/></head>
        <body style="margin:0;padding:0;background:#f4f4f5;font-family:sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
            <tr><td align="center">
              <table width="100%" style="max-width:580px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
                <tr><td style="background:#050A0D;padding:28px 36px;">
                  <p style="margin:0;font-size:22px;font-weight:700;color:#14B2CA;">Orlando Lifestyle Dentistry</p>
                  <p style="margin:6px 0 0;font-size:13px;color:#8899aa;">New Consultation Request</p>
                </td></tr>
                <tr><td style="padding:32px 36px;">
                  <h2 style="margin:0 0 24px;font-size:18px;color:#111;">Contact Details</h2>
                  <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                    <tr>
                      <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:13px;font-weight:600;color:#555;width:140px;">Name</td>
                      <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:14px;color:#111;">${name}</td>
                    </tr>
                    <tr>
                      <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:13px;font-weight:600;color:#555;">Phone</td>
                      <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:14px;"><a href="tel:${phone.replace(/\D/g,'')}" style="color:#14B2CA;text-decoration:none;font-weight:600;">${phone}</a></td>
                    </tr>
                    <tr>
                      <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:13px;font-weight:600;color:#555;">Email</td>
                      <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:14px;color:#111;">${email ? `<a href="mailto:${email}" style="color:#14B2CA;text-decoration:none;">${email}</a>` : '—'}</td>
                    </tr>
                    <tr>
                      <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:13px;font-weight:600;color:#555;">Interested In</td>
                      <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;font-size:14px;color:#111;">${serviceLabel}</td>
                    </tr>
                    <tr>
                      <td style="padding:12px 0;font-size:13px;font-weight:600;color:#555;">SMS Consent</td>
                      <td style="padding:12px 0;font-size:14px;color:#111;">${smsText}</td>
                    </tr>
                  </table>
                </td></tr>
                <tr><td style="padding:0 36px 32px;">
                  <a href="tel:${phone.replace(/\D/g,'')}" style="display:inline-block;padding:14px 28px;background:#14B2CA;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;border-radius:8px;">Call ${name.split(' ')[0]} Back</a>
                </td></tr>
                <tr><td style="background:#f9f9f9;padding:20px 36px;border-top:1px solid #eee;">
                  <p style="margin:0;font-size:11px;color:#999;">Submitted via orlandolifestyledentistry.com · ${timestamp} ET</p>
                </td></tr>
              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend send error:', JSON.stringify(error));
      return res.status(500).json({ error: error.message || 'Failed to send email.' });
    }

    console.log('Email sent successfully, id:', data?.id);
    return res.status(200).json({ success: true, id: data?.id });

  } catch (err) {
    console.error('Unexpected error:', err.message);
    return res.status(500).json({ error: err.message || 'Server error.' });
  }
};
