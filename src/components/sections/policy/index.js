import React from 'react'

import { Title, Text, Subtitle, SectionContainer, OL } from '_atoms'

import styles from './styles.module.css'

const Policy = () => {
  return (
  <SectionContainer className={styles.policy} id="policy">
      <Title alingment="left" className={styles.termsTitle}>
      Política de Privacidade
      </Title>

      <Text className={styles.termsText}>
      <p> A Universidade Federal de Santa Catarina e um time de voluntários internacionais desenvolveu o CovidApp como um aplicativo gratuito para ajudar no combate à Pandemia. Este aplicativo é disponibilizado pela Universidade Federal de Santa Catarina sem custos para sua utilização.
      </p>


      <p> Esta página serve para informar aos visitantes sobre nossas políticas de coleta, o uso e a divulgação de informações pessoais caso decida utilizar nosso Aplicativo.
      </p>

      <p> Ao decidir utilizar nosso Aplicativo, você está de acordo com a coleta e uso das informações descritas neste documento.
      </p>

      <Subtitle alingment="left" className={styles.termsSubtitle}>
        Informação Coletada e Utilizada
      </Subtitle>

      <p> O CovidApp NÃO coleta qualquer informação pessoal que identifique usuários. No entanto, nos reservamos o direito de acessar a lista de identificadores anônimos detectados pelo seu dispositivo durante a utilização do aplicativo, a data e hora de detecção, o tempo de duração e a força do sinal detectado, além da marca e modelo de seu aparelho.
      </p>

      <p>O CovidApp usa serviços de terceiros que possuem sua própria política de privacidade e termos de uso. O link abaixo aponta para seus termos:
      </p>

      <div className={styles.termsURL}>
      &bull; <strong > Firebase - </strong> <a href="https://firebase.google.com/terms" > https://firebase.google.com/terms </a>
      </div>

      <Subtitle alingment="left" className={styles.termsSubtitle}>
      Dados de Depuração
      </Subtitle>
      <p>
      Informamos que, quando o nosso Aplicativo é utilizado e um erro ocorre durante sua execução, coletamos dados sobre e informações (através de serviços de terceiros) no seu aplicativo chamados Dados de Depuração. Esses dados podem incluir informações como seu endereço IP (do inglês, Internet Protocol), nome do dispositivo, versão do sistema operacional, a configuração do aplicativo durante a execução, hora e data de uso e outras estatísticas.
      </p>


      <Subtitle alingment="left" className={styles.termsSubtitle}>
      Serviços Bluetooth Low Energy e Localização
      </Subtitle>

      <p>A funcionalidade de deteção de encontros entre dispositivos e aviso de exposição provida pelo CovidApp necessita que esses dispositivos tenham o serviço de Bluetooth e a Localização ativados. Ao utilizar o Aplicativo, você será convidado a ativar seu Bluetooth. Além disso por questões técnicas relacionadas a tecnologia Bluetooth Low Energy, você precisa permitir e manter ativado o serviço de Localização. NÃO serão coletados ou salvos dados de sua localização ou trajetória ao longo do tempo. A única informação salva, uma única vez para fins estatísticos, é a cidade de instalação do aplicativo.  Se você escolher não ativar e dar permissão aos serviços de Bluetooth e Localização, o Aplicativo não funcionará corretamente.</p>

      <Subtitle alingment="left" className={styles.termsSubtitle}>
      Tokens de Usuário
      </Subtitle>
      <p>O aplicativo armazena no dispositivo um arquivo com uma pequena quantidade de dados utilizados como identificador anônimo único.</p>

      <Subtitle alingment="left" className={styles.termsSubtitle}>
      Provedores de serviços
      </Subtitle>    

      Nós poderemos contratar empresas e serviços de terceiros pelos motivos a seguir:
      <OL>
      <li>  Para facilitar o desenvolvimento e a manutenção do nosso Aplicativo;</li> 
      <li>  Para prover o Serviço no nosso nome;</li> 
      <li>  Para realizar serviços relacionados ao Aplicativo;</li> 
      <li>  Para nos auxiliar a analisar como o Aplicativo está sendo usado.</li> 
      </OL>

      <p> Queremos informar aos nossos usuários que esses prestadores de serviços NÃO terão acesso a qualquer tipo de dados pessoais que identifique o usuário, pois NÃO coletamos esse tipo de dado.</p> 
      <Subtitle alingment="left" className={styles.termsSubtitle}>
      Segurança
      </Subtitle>

      Nós agradecemos sua confiança de que não iremos coletar nenhuma informação pessoal. 
      <Subtitle alingment="left" className={styles.termsSubtitle}>
      Links para outras Páginas
      </Subtitle>

      Este aplicativo pode conter links para outras páginas na Internet. Se você clicar nestes links, você será redirecionado às páginas indicadas. Note que estas páginas são externas e não são operadas por nós. Portanto, recomendamos fortemente que o usuário revise as Políticas de Privacidade destas páginas. Não temos controle sobre elas e não assumiremos responsabilidade pelo seu conteúdo.
      <Subtitle alingment="left" className={styles.termsSubtitle}>

      Mudanças nas Políticas de Privacidade
      </Subtitle>

      Nós reservamos o direito de alterar nossas Políticas de Privacidade se necessário. Portanto, é sua responsabilidade visitar esta página periodicamente em busca de qualquer mudança. Você será notificado sobre qualquer alteração.

      <p> Estes termos e políticas são efetivos a partir de 01-06-2020. </p>

      <Subtitle alingment="left" className={styles.termsSubtitle}>
      Fale conosco
      </Subtitle>

      <p>Se você tiver qualquer pergunta ou sugestão, não exite de entrar em contato conosco através do email covidapp@contato.ufsc.br.</p>

      <p>Este documento foi adaptado da versão em inglês gerada por <a href = "https://app-privacy-policy-generator.firebaseapp.com/"> App Privacy Policy Generator</a>. </p>
      </Text>
  </SectionContainer>
)
}

export default Policy
