// Testimonial Submission Edge Function
// Handles testimonial submissions and sends emails to Bhavesh Goyal

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
    // Parse form data (supports both JSON and multipart form data)
    const contentType = req.headers.get('content-type') || '';
    let formData: any = {};
    
    if (contentType.includes('multipart/form-data')) {
      const formDataRequest = await req.formData();
      for (const [key, value] of formDataRequest.entries()) {
        formData[key] = value;
      }
    } else {
      formData = await req.json();
    }

    const {
      name,
      position,
      company,
      type,
      testimonial,
      video
    } = formData;

    // Validate required fields
    if (!name || !type) {
      throw new Error('Name and testimonial type are required fields');
    }

    if (type === 'text' && !testimonial) {
      throw new Error('Testimonial content is required for text submissions');
    }

    if (type === 'video' && !video) {
      throw new Error('Video file is required for video submissions');
    }

    // Get environment variables
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    const recipientEmail = 'creativebhavesh.ds@gmail.com';

    if (!resendApiKey) {
      throw new Error('Email service configuration missing');
    }

    // Create professional email content
    const emailSubject = `New ${type === 'video' ? 'Video' : 'Written'} Testimonial from ${name}`;
    
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
          .testimonial-content { font-style: italic; max-height: 200px; overflow-y: auto; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎆 New Testimonial Submission</h1>
            <p>Portfolio Testimonial Form</p>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="label">👤 Client Name:</div>
              <div class="value">${name}</div>
            </div>
            
            ${position ? `
            <div class="field">
              <div class="label">💼 Position:</div>
              <div class="value">${position}</div>
            </div>
            ` : ''}
            
            ${company ? `
            <div class="field">
              <div class="label">🏢 Company:</div>
              <div class="value">${company}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">🎥 Submission Type:</div>
              <div class="value"><span class="highlight">${type === 'video' ? 'Video Testimonial' : 'Written Testimonial'}</span></div>
            </div>
            
            ${type === 'text' ? `
            <div class="field">
              <div class="label">💬 Testimonial Content:</div>
              <div class="value testimonial-content">${testimonial.replace(/\n/g, '<br>')}</div>
            </div>
            ` : `
            <div class="field">
              <div class="label">🎥 Video Testimonial:</div>
              <div class="value">Video file attached - please check the attachment or download from the testimonial system.</div>
            </div>
            `}
            
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
            <p>This testimonial was submitted through your portfolio website testimonial form.</p>
            <p><strong>Next Steps:</strong></p>
            <ul style="text-align: left; max-width: 400px; margin: 0 auto;">
              <li>Review the testimonial content</li>
              <li>Contact the client if needed for clarification</li>
              <li>Add approved testimonials to your portfolio</li>
              <li>Send a thank you note to the client</li>
            </ul>
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
        from: 'Portfolio Testimonials <testimonials@portfolio.bhaveshgoyal.com>',
        to: [recipientEmail],
        reply_to: formData.email || recipientEmail,
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
    console.log('Testimonial email sent successfully:', emailResult.id);

    // Send auto-reply to the client if email provided
    if (formData.email) {
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
              <h1>✨ Thank You, ${name}!</h1>
              <p>Your testimonial has been received</p>
            </div>
            
            <div class="content">
              <p>Hi ${name},</p>
              
              <p>Thank you so much for taking the time to share your experience working with me! Your <span class="highlight">${type === 'video' ? 'video testimonial' : 'written testimonial'}</span> means a lot and helps other potential clients understand the value of professional video editing and creative design services.</p>
              
              <p><strong>What happens next:</strong></p>
              <ul>
                <li>I'll review your testimonial within 24-48 hours</li>
                <li>With your permission, I may feature it on my portfolio website</li>
                <li>I'll reach out if I have any questions or need clarification</li>
                <li>You'll receive a personal thank you note from me</li>
              </ul>
              
              <p>Your feedback not only helps my business grow but also helps me continuously improve my services. I'm grateful for clients like you who take the time to share their experiences.</p>
              
              <p>If you have any additional projects or know someone who could benefit from professional video editing or graphic design services, I'm always here to help!</p>
              
              <p>Best regards,<br>
              <strong>Bhavesh Goyal</strong><br>
              Creative Video Editor & Graphics Designer<br>
              📧 creativebhavesh.ds@gmail.com<br>
              📱 +91 99751 99610<br>
              📍 Mumbai, India</p>
            </div>
            
            <div class="footer">
              <p>This is an automated response. Please do not reply to this email.</p>
              <p>For any questions, contact me directly at creativebhavesh.ds@gmail.com</p>
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
          to: [formData.email],
          subject: `Thank you for your testimonial, ${name}! 🎆`,
          html: autoReplyHtml
        })
      });
    }

    // Return success response
    return new Response(JSON.stringify({
      data: {
        success: true,
        message: 'Your testimonial has been submitted successfully! Thank you for your feedback.',
        emailId: emailResult.id
      }
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Testimonial submission error:', error);

    const errorResponse = {
      error: {
        code: 'TESTIMONIAL_SUBMISSION_ERROR',
        message: error.message || 'Failed to submit testimonial. Please try again or contact directly via email.'
      }
    };

    return new Response(JSON.stringify(errorResponse), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});