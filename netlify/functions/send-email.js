const { Resend } = require('resend');

const resend = new Resend('re_HirwSpwh_E7GtECWbMxNayrVLABh1nRtv');

exports.handler = async (event, context) => {
  // Permitir apenas POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Lidar com preflight CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  try {
    const { formType, formData } = JSON.parse(event.body);
    
    let toEmail, subject, htmlContent;

    // Determinar destinatário baseado no tipo de formulário
    if (formType === 'contabilidade') {
      toEmail = 'contabilidade@valentinasresolve.com.br';
      subject = 'Nova Solicitação - Contabilidade Integrada';
      
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e40af, #3730a3); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">💼 Contabilidade Integrada</h1>
            <p style="color: #e0e7ff; margin: 10px 0 0 0;">Nova solicitação de atendimento</p>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <h2 style="color: #1e40af; margin-bottom: 20px;">Dados do Cliente</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
              <strong style="color: #374151;">Nome Completo:</strong><br>
              <span style="color: #6b7280;">${formData.nome || 'Não informado'}</span>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
              <strong style="color: #374151;">E-mail:</strong><br>
              <span style="color: #6b7280;">${formData.email || 'Não informado'}</span>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
              <strong style="color: #374151;">Telefone/WhatsApp:</strong><br>
              <span style="color: #6b7280;">${formData.telefone || 'Não informado'}</span>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
              <strong style="color: #374151;">Cidade:</strong><br>
              <span style="color: #6b7280;">${formData.cidade || 'Não informado'}</span>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
              <strong style="color: #374151;">Tipo de Interesse:</strong><br>
              <span style="color: #6b7280;">${formData.interesse || 'Não informado'}</span>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
              <strong style="color: #374151;">Descrição da Necessidade:</strong><br>
              <span style="color: #6b7280;">${formData.descricao || 'Não informado'}</span>
            </div>
          </div>
          
          <div style="background: #1e40af; padding: 20px; text-align: center;">
            <p style="color: white; margin: 0; font-size: 14px;">
              📧 E-mail enviado automaticamente via Valentina's Resolve
            </p>
          </div>
        </div>
      `;
    } else {
      // Formulário de contato geral
      toEmail = 'contato@valentinasresolve.com.br';
      subject = 'Nova Mensagem - Site Valentina\'s Resolve';
      
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #f59e0b, #d97706); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">📞 Novo Contato</h1>
            <p style="color: #fef3c7; margin: 10px 0 0 0;">Mensagem recebida pelo site</p>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <h2 style="color: #d97706; margin-bottom: 20px;">Dados do Contato</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
              <strong style="color: #374151;">Nome:</strong><br>
              <span style="color: #6b7280;">${formData.nome || 'Não informado'}</span>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
              <strong style="color: #374151;">E-mail:</strong><br>
              <span style="color: #6b7280;">${formData.email || 'Não informado'}</span>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
              <strong style="color: #374151;">Telefone:</strong><br>
              <span style="color: #6b7280;">${formData.telefone || 'Não informado'}</span>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
              <strong style="color: #374151;">Assunto:</strong><br>
              <span style="color: #6b7280;">${formData.assunto || 'Não informado'}</span>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
              <strong style="color: #374151;">Mensagem:</strong><br>
              <span style="color: #6b7280;">${formData.mensagem || 'Não informado'}</span>
            </div>
          </div>
          
          <div style="background: #d97706; padding: 20px; text-align: center;">
            <p style="color: white; margin: 0; font-size: 14px;">
              📧 E-mail enviado automaticamente via Valentina's Resolve
            </p>
          </div>
        </div>
      `;
    }

    // Enviar e-mail via Resend
    const { data, error } = await resend.emails.send({
      from: 'noreply@valentinasresolve.com.br',
      to: [toEmail],
      subject: subject,
      html: htmlContent,
    });

    if (error) {
      console.error('Erro ao enviar e-mail:', error);
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST, OPTIONS'
        },
        body: JSON.stringify({ 
          success: false, 
          error: 'Erro ao enviar e-mail',
          details: error 
        })
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ 
        success: true, 
        message: 'E-mail enviado com sucesso!',
        emailId: data.id 
      })
    };

  } catch (error) {
    console.error('Erro na função:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ 
        success: false, 
        error: 'Erro interno do servidor',
        details: error.message 
      })
    };
  }
};

