export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, email, service, smsOptIn } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone are required' });
  }

  const serviceLabels = {
    single:   'Single Tooth Implant',
    multiple: 'Multiple Tooth Implants',
    full:     'Full Mouth Implants (123Teeth™)',
    unsure:   'Not Sure — Need Guidance',
  };

  const serviceLabel = serviceLabels[service] || 'Not specified';
  const smsText = smsOptIn ? '✅ Yes — opted in to SMS' : '❌ No — did not opt in';

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Orlando Lifestyle Dentistry <onboarding@resend.dev>',
        to:   ['orlandolifestyledentistry@gmail.com'],
        reply_to: email || undefined,
        subject: `New Consultation Request — ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f9f9f9;border-radius:8px;">
            <h2 style="color:#14B2CA;margin-top:0;">New Consultation Request</h2>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;width:140px;">Name</td><td style="padding:10px 0;border-bottom:1px solid #eee;">${name}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #eee;"><a href="tel:${phone.replace(/\D/g,'')}">${phone}</a></td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;">Email</td><td style="padding:10px 0;border-bottom:1px solid #eee;">${email || '—'}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;">Interested In</td><td style="padding:10px 0;border-bottom:1px solid #eee;">${serviceLabel}</td></tr>
              <tr><td style="padding:10px 0;font-weight:600;">SMS Consent</td><td style="padding:10px 0;">${smsText}</td></tr>
            </table>
            <p style="margin-top:24px;font-size:12px;color:#999;">Submitted via orlandolifestyledentistry.com · ${new Date().toLocaleString('en-US',{timeZone:'America/New_York'})}</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      console.error('Resend error:', err);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
