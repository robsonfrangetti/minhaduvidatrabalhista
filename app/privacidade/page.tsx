import Link from 'next/link'
import styles from '../termos/legal.module.css'

export default function PrivacidadePage() {
  return (
    <div className={styles.legalContainer}>
      <div className={styles.legalContent}>
        <Link href="/" className={styles.backButton}>← Voltar</Link>
        
        <h1>Política de Privacidade</h1>
        <p className={styles.lastUpdated}>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

        <div className={styles.section}>
          <h2>1. Introdução</h2>
          <p>
            A Minha Dúvida Trabalhista ("nós", "nosso" ou "Plataforma") está comprometida em proteger 
            sua privacidade e seus dados pessoais. Esta Política de Privacidade descreve como coletamos, 
            usamos, armazenamos e protegemos suas informações, em conformidade com a Lei Geral de 
            Proteção de Dados (LGPD - Lei nº 13.709/2018).
          </p>
        </div>

        <div className={styles.section}>
          <h2>2. Dados que Coletamos</h2>
          
          <h3>2.1. Dados Fornecidos por Você</h3>
          <ul>
            <li><strong>Nome completo:</strong> Para personalizar sua experiência</li>
            <li><strong>Endereço de e-mail:</strong> Para criar e gerenciar sua conta, enviar confirmações e comunicações</li>
            <li><strong>Senha:</strong> Armazenada de forma criptografada para proteger sua conta</li>
          </ul>

          <h3>2.2. Dados Coletados Automaticamente</h3>
          <ul>
            <li><strong>Dados de navegação:</strong> Páginas visitadas, tempo de permanência, links clicados</li>
            <li><strong>Informações do dispositivo:</strong> Tipo de navegador, sistema operacional, endereço IP</li>
            <li><strong>Cookies e tecnologias similares:</strong> Para melhorar sua experiência</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>3. Como Usamos Seus Dados</h2>
          <p>Utilizamos suas informações para:</p>
          <ul>
            <li><strong>Criar e gerenciar sua conta:</strong> Autenticação e acesso à Plataforma</li>
            <li><strong>Fornecer nossos serviços:</strong> Disponibilizar conteúdo e funcionalidades</li>
            <li><strong>Comunicação:</strong> Enviar confirmações, atualizações e notificações importantes</li>
            <li><strong>Melhorar a Plataforma:</strong> Análise de uso para aprimorar a experiência</li>
            <li><strong>Segurança:</strong> Prevenir fraudes e proteger contra acessos não autorizados</li>
            <li><strong>Cumprimento legal:</strong> Atender requisitos legais e regulatórios</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>4. Base Legal para Processamento (LGPD)</h2>
          <p>Processamos seus dados pessoais com base em:</p>
          <ul>
            <li><strong>Consentimento:</strong> Ao criar uma conta, você consente com o uso de seus dados</li>
            <li><strong>Execução de contrato:</strong> Para fornecer os serviços solicitados</li>
            <li><strong>Legítimo interesse:</strong> Para melhorar e proteger nossos serviços</li>
            <li><strong>Cumprimento legal:</strong> Quando exigido por lei</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>5. Compartilhamento de Dados</h2>
          <p>
            <strong>Nós NÃO vendemos seus dados pessoais.</strong> Podemos compartilhar suas informações apenas com:
          </p>
          <ul>
            <li><strong>Provedores de serviços:</strong> Como Supabase (hospedagem de dados), que processam dados em nosso nome</li>
            <li><strong>Autoridades legais:</strong> Quando exigido por lei ou para proteger direitos legais</li>
            <li><strong>Transferência de negócios:</strong> Em caso de fusão, aquisição ou venda de ativos</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>6. Armazenamento e Segurança</h2>
          
          <h3>6.1. Onde Armazenamos</h3>
          <p>
            Seus dados são armazenados em servidores seguros fornecidos pelo Supabase, 
            que utiliza infraestrutura de nível empresarial com criptografia.
          </p>

          <h3>6.2. Medidas de Segurança</h3>
          <ul>
            <li>Criptografia de dados em trânsito (HTTPS/TLS)</li>
            <li>Criptografia de senhas (hash seguro)</li>
            <li>Autenticação segura</li>
            <li>Monitoramento de segurança</li>
            <li>Backups regulares</li>
          </ul>

          <h3>6.3. Período de Retenção</h3>
          <p>
            Mantemos seus dados pelo tempo necessário para fornecer nossos serviços e cumprir 
            obrigações legais. Você pode solicitar a exclusão de seus dados a qualquer momento.
          </p>
        </div>

        <div className={styles.section}>
          <h2>7. Seus Direitos (LGPD)</h2>
          <p>Você tem os seguintes direitos sobre seus dados pessoais:</p>
          <ul>
            <li><strong>Acesso:</strong> Confirmar se processamos seus dados e solicitar cópia</li>
            <li><strong>Correção:</strong> Atualizar ou corrigir dados incompletos ou incorretos</li>
            <li><strong>Exclusão:</strong> Solicitar a remoção de seus dados pessoais</li>
            <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
            <li><strong>Revogação de consentimento:</strong> Retirar consentimento a qualquer momento</li>
            <li><strong>Oposição:</strong> Opor-se ao processamento em certas circunstâncias</li>
            <li><strong>Informação:</strong> Sobre o uso compartilhado de dados com terceiros</li>
          </ul>
          <p>
            Para exercer seus direitos, entre em contato conosco através do email: 
            <a href="mailto:privacidade@minhaduvidatrabalhista.com.br">privacidade@minhaduvidatrabalhista.com.br</a>
          </p>
        </div>

        <div className={styles.section}>
          <h2>8. Cookies</h2>
          <p>
            Utilizamos cookies e tecnologias similares para melhorar sua experiência. Os cookies são 
            pequenos arquivos armazenados em seu dispositivo que nos ajudam a:
          </p>
          <ul>
            <li>Manter você logado entre sessões</li>
            <li>Lembrar suas preferências</li>
            <li>Entender como você usa a Plataforma</li>
            <li>Melhorar o desempenho do site</li>
          </ul>
          <p>
            Você pode configurar seu navegador para recusar cookies, mas isso pode afetar 
            algumas funcionalidades da Plataforma.
          </p>
        </div>

        <div className={styles.section}>
          <h2>9. Menores de Idade</h2>
          <p>
            Nossos serviços não são direcionados a menores de 18 anos. Não coletamos intencionalmente 
            dados de menores. Se você é pai/mãe ou responsável e acredita que seu filho forneceu 
            dados pessoais, entre em contato conosco.
          </p>
        </div>

        <div className={styles.section}>
          <h2>10. Transferência Internacional</h2>
          <p>
            Seus dados podem ser transferidos e armazenados em servidores fora do Brasil. 
            Garantimos que quaisquer transferências internacionais atendam aos requisitos da LGPD 
            e outras leis aplicáveis de proteção de dados.
          </p>
        </div>

        <div className={styles.section}>
          <h2>11. Alterações nesta Política</h2>
          <p>
            Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre 
            alterações significativas por e-mail ou através de aviso na Plataforma. A data da última 
            atualização será sempre indicada no topo deste documento.
          </p>
        </div>

        <div className={styles.section}>
          <h2>12. Encarregado de Dados (DPO)</h2>
          <p>
            Para questões relacionadas à proteção de dados, você pode entrar em contato com nosso 
            Encarregado de Proteção de Dados:
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:dpo@minhaduvidatrabalhista.com.br">dpo@minhaduvidatrabalhista.com.br</a>
          </p>
        </div>

        <div className={styles.section}>
          <h2>13. Contato</h2>
          <p>
            Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados, 
            entre em contato conosco:
          </p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:privacidade@minhaduvidatrabalhista.com.br">privacidade@minhaduvidatrabalhista.com.br</a></li>
            <li><strong>Email geral:</strong> <a href="mailto:contato@minhaduvidatrabalhista.com.br">contato@minhaduvidatrabalhista.com.br</a></li>
          </ul>
        </div>

        <div className={styles.footer}>
          <p>
            <strong>Autoridade Nacional de Proteção de Dados (ANPD):</strong><br />
            Você também tem o direito de apresentar uma reclamação à ANPD se acreditar que 
            violamos seus direitos de proteção de dados.
          </p>
        </div>
      </div>
    </div>
  )
}

