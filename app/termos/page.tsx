import Link from 'next/link'
import styles from './legal.module.css'

export default function TermosPage() {
  return (
    <div className={styles.legalContainer}>
      <div className={styles.legalContent}>
        <Link href="/" className={styles.backButton}>← Voltar</Link>
        
        <h1>Termos de Uso</h1>
        <p className={styles.lastUpdated}>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

        <div className={styles.section}>
          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e usar a plataforma Minha Dúvida Trabalhista ("Plataforma"), você concorda 
            em cumprir e estar vinculado aos seguintes Termos de Uso. Se você não concordar com 
            estes termos, por favor, não use nossa Plataforma.
          </p>
        </div>

        <div className={styles.section}>
          <h2>2. Descrição do Serviço</h2>
          <p>
            A Minha Dúvida Trabalhista é uma plataforma informativa que oferece acesso a:
          </p>
          <ul>
            <li>Legislação trabalhista brasileira</li>
            <li>Súmulas dos tribunais</li>
            <li>Jurisprudências consolidadas</li>
            <li>Decisões judiciais recentes</li>
            <li>Interpretações em linguagem acessível</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>3. Natureza Informativa</h2>
          <p className={styles.highlight}>
            <strong>IMPORTANTE:</strong> As informações fornecidas nesta Plataforma são de caráter 
            estritamente informativo e educacional. Elas NÃO constituem aconselhamento jurídico 
            e NÃO substituem a consulta a um advogado especializado.
          </p>
          <p>
            Para questões jurídicas específicas, você deve sempre consultar um advogado trabalhista 
            devidamente habilitado pela OAB.
          </p>
        </div>

        <div className={styles.section}>
          <h2>4. Cadastro e Conta de Usuário</h2>
          <p>
            Para acessar determinadas funcionalidades, você precisará criar uma conta. Você concorda em:
          </p>
          <ul>
            <li>Fornecer informações verdadeiras, precisas e atualizadas</li>
            <li>Manter a segurança de sua senha</li>
            <li>Ser responsável por todas as atividades em sua conta</li>
            <li>Notificar-nos imediatamente sobre qualquer uso não autorizado</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>5. Uso Adequado da Plataforma</h2>
          <p>Você concorda em NÃO:</p>
          <ul>
            <li>Usar a Plataforma para fins ilegais ou não autorizados</li>
            <li>Tentar obter acesso não autorizado a sistemas ou redes</li>
            <li>Interferir ou interromper os serviços</li>
            <li>Copiar, reproduzir ou distribuir conteúdo sem autorização</li>
            <li>Usar bots, scripts ou ferramentas automatizadas sem permissão</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>6. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo da Plataforma (textos, gráficos, logos, ícones, imagens, áudios, vídeos e software) 
            é propriedade da Minha Dúvida Trabalhista ou de seus fornecedores de conteúdo e está protegido 
            pelas leis de direitos autorais brasileiras e internacionais.
          </p>
          <p>
            As legislações, súmulas e decisões judiciais citadas são de domínio público e podem ser 
            consultadas em suas fontes oficiais.
          </p>
        </div>

        <div className={styles.section}>
          <h2>7. Limitação de Responsabilidade</h2>
          <p>
            A Plataforma é fornecida "no estado em que se encontra" e "conforme disponível". 
            Não garantimos que:
          </p>
          <ul>
            <li>O serviço será ininterrupto ou livre de erros</li>
            <li>As informações sejam completamente precisas ou atualizadas em tempo real</li>
            <li>Os resultados obtidos através do uso serão adequados às suas necessidades</li>
          </ul>
          <p className={styles.highlight}>
            <strong>Em nenhum caso seremos responsáveis por:</strong>
          </p>
          <ul>
            <li>Danos diretos, indiretos, incidentais ou consequenciais</li>
            <li>Perdas de lucros, dados ou outras perdas intangíveis</li>
            <li>Decisões tomadas com base nas informações da Plataforma</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>8. Modificações nos Termos</h2>
          <p>
            Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. 
            As alterações entrarão em vigor imediatamente após a publicação na Plataforma. 
            É sua responsabilidade revisar periodicamente os Termos.
          </p>
        </div>

        <div className={styles.section}>
          <h2>9. Cancelamento e Suspensão</h2>
          <p>
            Podemos, a nosso critério exclusivo, suspender ou encerrar seu acesso à Plataforma 
            se acreditarmos que você violou estes Termos de Uso.
          </p>
          <p>
            Você pode cancelar sua conta a qualquer momento através das configurações de perfil.
          </p>
        </div>

        <div className={styles.section}>
          <h2>10. Lei Aplicável</h2>
          <p>
            Estes Termos serão regidos e interpretados de acordo com as leis do Brasil. 
            Qualquer disputa relacionada a estes Termos será submetida à jurisdição exclusiva 
            dos tribunais brasileiros.
          </p>
        </div>

        <div className={styles.section}>
          <h2>11. Contato</h2>
          <p>
            Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do 
            email: <a href="mailto:contato@minhaduvidatrabalhista.com.br">contato@minhaduvidatrabalhista.com.br</a>
          </p>
        </div>

        <div className={styles.footer}>
          <p>
            Ao usar a Plataforma Minha Dúvida Trabalhista, você reconhece que leu, compreendeu 
            e concorda em estar vinculado a estes Termos de Uso.
          </p>
        </div>
      </div>
    </div>
  )
}

