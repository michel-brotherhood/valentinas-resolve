import { Resend } from 'resend';

const resend = new Resend('re_HirwSpwh_E7GtECWbMxNayrVLABh1nRtv');

export default async function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Apenas aceitar POST
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
    });
  }

  try {
    const { formType, formData } = req.body;

    if (!formType || !formData) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields' 
      });
    }

    // Determinar destinatário baseado no tipo de formulário
    let toEmail, subject, htmlContent;

    if (formType === 'contabilidade') {
      toEmail = 'contabilidade@valentinasresolve.com.br';
      subject = 'Nova Solicitação de Atendimento Contábil';
      
      // Processar tipos de interesse
      const tiposInteresse = [];
      if (formData.cliente_cpf) tiposInteresse.push('Cliente da plataforma - Regularizar CPF');
      if (formData.autonomo_suporte) tiposInteresse.push('Profissional autônomo - Suporte contábil');
      if (formData.empresa_integracao) tiposInteresse.push('Empresa - Integração fiscal completa');

      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">💼 Contabilidade Integrada</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Nova solicitação de atendimento</p>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <h2 style="color: #1e293b; margin-bottom: 20px;">Dados do Cliente</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <p><strong>Nome Completo:</strong> ${formData.nome || 'Não informado'}</p>
              <p><strong>E-mail:</strong> ${formData.email || 'Não informado'}</p>
              <p><strong>Telefone/WhatsApp:</strong> ${formData.telefone || 'Não informado'}</p>
              <p><strong>Cidade:</strong> ${formData.cidade || 'Não informada'}</p>
            </div>

            ${tiposInteresse.length > 0 ? `
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <h3 style="color: #1e293b; margin-bottom: 15px;">Tipo de Interesse</h3>
              ${tiposInteresse.map(tipo => `<p style="margin: 5px 0;">✓ ${tipo}</p>`).join('')}
            </div>
            ` : ''}

            ${formData.descricao ? `
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <h3 style="color: #1e293b; margin-bottom: 15px;">Descrição da Necessidade</h3>
              <p style="line-height: 1.6;">${formData.descricao}</p>
            </div>
            ` : ''}

            <div style="background: #dbeafe; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <p style="margin: 0; color: #1e40af;">
                <strong>📧 Responder para:</strong> ${formData.email}<br>
                <strong>📱 WhatsApp:</strong> ${formData.telefone}
              </p>
            </div>
          </div>
          
          <div style="background: #1e293b; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0; opacity: 0.8;">Valentina's Resolve - Plataforma Inteligente de Serviços</p>
          </div>
        </div>
      `;
    } else {
      // Formulário de contato geral
      toEmail = 'contato@valentinasresolve.com.br';
      subject = 'Novo Contato pelo Site';
      
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #059669, #047857); color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">📞 Novo Contato</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Mensagem recebida pelo site</p>
          </div>
          
          <div style="padding: 30px; background: #f0fdf4;">
            <h2 style="color: #1e293b; margin-bottom: 20px;">Dados do Contato</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <p><strong>Nome:</strong> ${formData.nome || 'Não informado'}</p>
              <p><strong>E-mail:</strong> ${formData.email || 'Não informado'}</p>
              <p><strong>Telefone:</strong> ${formData.telefone || 'Não informado'}</p>
              ${formData.assunto ? `<p><strong>Assunto:</strong> ${formData.assunto}</p>` : ''}
              ${formData.tipo ? `<p><strong>Tipo:</strong> ${formData.tipo}</p>` : ''}
            </div>

            ${formData.mensagem ? `
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <h3 style="color: #1e293b; margin-bottom: 15px;">Mensagem</h3>
              <p style="line-height: 1.6;">${formData.mensagem}</p>
            </div>
            ` : ''}

            <div style="background: #dcfce7; padding: 15px; border-radius: 8px; border-left: 4px solid #059669;">
              <p style="margin: 0; color: #166534;">
                <strong>📧 Responder para:</strong> ${formData.email}<br>
                ${formData.telefone ? `<strong>📱 Telefone:</strong> ${formData.telefone}` : ''}
              </p>
            </div>
          </div>
          
          <div style="background: #1e293b; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0; opacity: 0.8;">Valentina's Resolve - Plataforma Inteligente de Serviços</p>
          </div>
        </div>
      `;
    }

    // Enviar e-mail via Resend
    const emailData = await resend.emails.send({
      from: 'Valentina\'s Resolve <noreply@valentinasresolve.com.br>',
      to: [toEmail],
      subject: subject,
      html: htmlContent,
      replyTo: formData.email
    });

    console.log('E-mail enviado com sucesso:', emailData);

    return res.status(200).json({ 
      success: true, 
      message: 'E-mail enviado com sucesso!',
      emailId: emailData.id
    });

  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    
    return res.status(500).json({ 
      success: false, 
      error: 'Erro interno do servidor',
      details: error.message
    });
  }
}

