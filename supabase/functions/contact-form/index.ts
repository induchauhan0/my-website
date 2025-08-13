// Contact Form Edge Function
// Handles form submissions and sends emails to Bhavesh Goyal

Deno.serve(async (req) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Max-Age': '86400',
    'Access-Control-Allow-Credentials': 'false'
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  try {
    // Parse request body
    const requestData = await req.json();
    const {
      name,
      email,
      mobile,
      company,
      projectType,
      budget,
      timeline,
      message
    } = requestData;

    // Validate required fields
    if (!name || !email || !mobile || !message) {
      throw new Error('Name, email, mobile number, and message are required fields');
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Please provide a valid email address');
    }

    // Get environment variables
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    const recipientEmail = 'creativebhavesh.ds@gmail.com';

    if (!resendApiKey) {
      throw new Error('Email service configuration missing');
    }

    // Create professional email content
    const emailSubject = `New Project Inquiry from ${name} - ${projectType || 'General Inquiry'}`;
    
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #010302, #0A1411); color: #00FF88; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #0A1411; margin-bottom: 5px; }
          .value { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #00FF88; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
          .highlight { color: #00FF88; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎯 New Project Inquiry</h1>
            <p>Portfolio Contact Form Submission</p>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="label">👤 Client Name:</div>
              <div class="value">${name}</div>
            </div>
            
            <div class="field">
              <div class="label">📧 Email Address:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            
            <div class="field">
              <div class="label">📱 Mobile Number:</div>
              <div class="value"><a href="tel:${mobile}">${mobile}</a></div>
            </div>
            
            ${company ? `
            <div class="field">
              <div class="label">🏢 Company/Organization:</div>
              <div class="value">${company}</div>
            </div>
            ` : ''}
            
            ${projectType ? `
            <div class="field">
              <div class="label">🎨 Project Type:</div>
              <div class="value"><span class="highlight">${projectType}</span></div>
            </div>
            ` : ''}
            
            ${budget ? `
            <div class="field">
              <div class="label">💰 Budget Range:</div>
              <div class="value">${budget}</div>
            </div>
            ` : ''}
            
            ${timeline ? `
            <div class="field">
              <div class="label">⏰ Timeline:</div>
              <div class="value">${timeline}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">💬 Project Details:</div>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
            
            <div class="field">
              <div class="label">📅 Received:</div>
              <div class="value">${new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Kolkata',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
              })}</div>
            </div>
          </div>
          
          <div class="footer">
            <p>This inquiry was submitted through your portfolio website contact form.</p>
            <p><strong>Recommended Response Time:</strong> Within 24 hours</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email using Resend API
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <noreply@portfolio.bhaveshgoyal.com>',
        to: [recipientEmail],
        reply_to: email,
        subject: emailSubject,
        html: emailHtml
      })
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json();
      console.error('Resend API error:', errorData);
      throw new Error(`Failed to send email: ${errorData.message || 'Unknown error'}`);
    }

    const emailResult = await emailResponse.json();
    console.log('Email sent successfully:', emailResult.id);

    // Send auto-reply to the client
    const autoReplyHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #010302, #0A1411); color: #00FF88; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
          .highlight { color: #00FF88; font-weight: bold; }
          .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✅ Thank You, ${name}!</h1>
            <p>Your message has been received</p>
          </div>
          
          <div class="content">
            <p>Hi ${name},</p>
            
            <p>Thank you for reaching out through my portfolio website! I've received your inquiry about <span class="highlight">${projectType || 'your project'}</span> and I'm excited to learn more about your vision.</p>
            
            <p><strong>What happens next:</strong></p>
            <ul>
              <li>I'll review your project details carefully</li>
              <li>You'll receive a personal response within <span class="highlight">24 hours</span></li>
              <li>We can schedule a call to discuss your project in detail</li>
              <li>I'll provide a tailored proposal for your needs</li>
            </ul>
            
            <p>In the meantime, feel free to explore more of my work on my portfolio or connect with me on social media for behind-the-scenes content and creative insights.</p>
            
            <p>Looking forward to potentially collaborating with you!</p>
            
            <p>Best regards,<br>
            <strong>Bhavesh Goyal</strong><br>
            Creative Video Editor & Graphics Designer<br>
            📧 creativebhavesh.ds@gmail.com<br>
            📍 Mumbai, India</p>
          </div>
          
          <div class="footer">
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send auto-reply
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Bhavesh Goyal <noreply@portfolio.bhaveshgoyal.com>',
        to: [email],
        subject: `Thank you for your inquiry, ${name}! 🎨`,
        html: autoReplyHtml
      })
    });

    // Return success response
    return new Response(JSON.stringify({
      data: {
        success: true,
        message: 'Your message has been sent successfully! You should receive a confirmation email shortly.',
        emailId: emailResult.id
      }
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Contact form error:', error);

    const errorResponse = {
      error: {
        code: 'CONTACT_FORM_ERROR',
        message: error.message || 'Failed to send message. Please try again or contact directly via email.'
      }
    };

    return new Response(JSON.stringify(errorResponse), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});
