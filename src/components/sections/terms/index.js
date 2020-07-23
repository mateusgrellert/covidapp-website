import React from 'react'

import { Title, Text, Subtitle, SectionContainer, OL } from '_atoms'

import styles from './styles.module.css'

const Terms = () => {
  return (
    <SectionContainer className={styles.terms} id="terms">
      <div className={styles.aboutAppSection}>
        <Title alingment="left" className={styles.termsTitle}>
          Termos e Condições
        </Title>

        <Subtitle alingment="left" className={styles.termsSubtitle}>
            Termo de Consentimento Livre e Esclarecido
        </Subtitle>
        <Text className={styles.termsText}>
            Ao instalar/utilizar o aplicativo você está declarando estar ciente sobre os seguintes pontos:
            <OL>
                <li> CovidApp é um aplicativo que tem o objetivo de informar quando você teve contato (esteve próximo) de outro usuário do aplicativo que é um caso confirmado ou suspeito de coronavírus. Se isso ocorrer, você receberá uma notificação através do próprio aplicativo recomendando o que você deve fazer em função disso, como por exemplo, ficar de quarentena ou se encaminhar a um posto de saúde para fazer um teste. Essa notificação será definida pelos órgãos de saúde.</li>
                <li> O CovidApp não faz coleta de nenhuma informação pessoal que o identifique para o processamento e notificação dos contatos. Os dados anônimos de seus encontros serão utilizados para avisar outros usuários caso um médico ou autoridade sanitária o diagnostique como caso positivo ou suspeito de COVID-19. Essa notificação é feita de forma anônima. Nenhuma pessoa notificada saberá a identidade de quem foi diagnosticado.</li>
                <li> Apesar de não coletar dados que identifiquem o usuário, o CovidApp registra a cidade em que o aplicativo foi instalado para fins de pesquisa e construção de estatísticas agregadas. Além disso, é possível que a solicitação de novos dados possa ser realizada em futuras versões do aplicativo, mas informações que o identifiquem jamais serão requisitadas pelo aplicativo.</li>
                <li> Não haverá nenhum custo adicional ao participar da pesquisa, e seus encontros deixarão de ser registrados a qualquer momento se você encerrar o aplicativo, sem que você sofra qualquer prejuízo.</li>
                <li> Os dados coletados, totalmente anônimos, serão utilizados única e exclusivamente para notificar os usuários que tiverem contato com casos confirmados ou suspeitos de coronavírus  e  para fins de pesquisa pela Universidade Federal de Santa Catarina, e os resultados poderão ser publicados para fins científicos.</li>
            </OL>
        </Text>

        <Subtitle alingment="left" className={styles.termsSubtitle}>
            Termos Gerais
        </Subtitle>
        <Text className={styles.termsText}>
            <p> Ao fazer o download ou utilizar o aplicativo, estes termos irão automaticamente se aplicar a você, portanto é importante certificar-se de que os leu com atenção antes de utilizar o aplicativo. </p>
            
            <p> Este aplicativo é distribuído com o intuito de ser uma ferramenta útil no combate à COVID-19 através de avisos de exposição, porém  a Universidade Federal de Santa Catarina NÃO OFERECE qualquer garantia de seu correto funcionamento. </p>

            <p> É importante ter em mente que o aplicativo nem sempre funcionará da melhor forma possível. Algumas funcionalidades, como a detecção de encontros, dependem de fatores que estão fora do nosso alcance para que o registro seja feito com sucesso. Portanto, não nos responsabilizamos se o aplicativo não funcionar como esperado em alguns casos. </p>

            <p> Esse aplicativo tem propósito meramente informativo e não serve como substituto para qualquer diagnóstico ou procedimentos por especialistas. Nós NÃO nos responsabilizamos por qualquer decisão tomada pelos usuários com base nas informações prestadas pelo aplicativo. </p>

            <p>O aplicativo é disponibilizado TAL COMO ESTÁ ("AS IS"). A Universidade Federal de Santa Catarina não se responsabiliza por qualquer falha técnica na Internet ou no Aplicativo, bem como qualquer dano a usuários ou seu equipamento durante o uso do Aplicativo. </p>


            <p> A Universidade Federal de Santa Catarina está comprometida em garantir que o aplicativo é tão eficiente e útil quanto possível. Por isso, nós nos reservamos o direito de fazer modificações sobre o aplicativo a qualquer hora por qualquer motivo. </p>

            <p> O aplicativo CovidApp armazena e processa somente os dados necessários para manter nossos serviços. É sua a responsabilidade de manter seu telefone seguro. Portanto, não recomendamos que você remova as restrições de acesso impostas pelo sistema operacional através de técnicas como jailbreak. Essa ação pode tornar seu dispositivo vulnerável a programas maliciosos e a vírus, comprometendo a segurança do seu telefone e talvez impossibilitando que o CovidApp sequer funcione. </p>

            <p> O aplicativo usa serviços de terceiros que contêm seus próprios Termos e Condições.
            Um link para esses termos são dados a seguir:  </p>

            <div className={styles.termsURL}>
                &bull; <strong > Firebase - </strong> <a href="https://firebase.google.com/terms" > https://firebase.google.com/terms </a>
            </div>

            <p> Algumas funções do aplicativo vão requerer uma conexão ativa com a Internet, bem como o uso da interface Bluetooth. A Universidade Federal de Santa Catarina não pode ser responsabilizada caso o aplicativo não funcione se você não tem acesso à Internet ou se sua interface Bluetooth está desabilitada. </p>

            <p> Se você está usando o aplicativo fora de alcance de uma rede Wi-Fi, você deve ter em mente que os termos acordados com seu provedor de rede móvel serão considerados. Como consequência, você pode ser cobrado pelo seu provedor de rede móvel pelo custo de dados enviados e recebidos durante o período em que você utilizou o aplicativo. Ao utilizar o aplicativo, você está aceitando a responsabilidade sobre qualquer uma destas taxas, incluindo taxas de roaming se você estiver usando o aplicativo fora de seu território (região ou país) sem ter desativado o serviço de roaming. Se você não é a pessoa responsável pelo pagamento dos custos relacionados ao uso do seu dispositivo, tenha em mente que nós entendemos que você recebeu permissão dessa pessoa para utilizar o aplicativo. </p>

            <p> Na mesma linha, a Universidade Federal de Santa Catarina não assume a responsabilidade pela forma com a qual você usa o aplicativo, isto é, você precisa se certificar que seu dispositivo se mantém carregado -- se a bateria acabar e você não conseguir religar o celular para utilizar o serviço, a Universidade Federal de Santa Catarina não pode ser responsabilizada. </p> 

            <p> Eventualmente, será necessário atualizar o aplicativo. O aplicativo está atualmente nas lojas Android e iOS -- os requisitos para ambos os sistemas podem mudar, e você pode precisará baixar os updates se quiser seguir utilizando o aplicativo. A Universidade Federal de Santa Catarina não se compromete a manter diferentes versões do aplicativo somente para que ele seja compatível com a versão que você possui instalada no seu dispositivo. No entanto, você está se comprometendo a sempre atualizar o aplicativo quando isso é oferecido. A Universidade Federal de Santa Catarina se reserva o direito de descontinuar o aplicativo sem aviso prévio. A não ser que digamos o contrário, ao descontinuar o aplicativo: (a) os direitos e licenças dadas a você nestes termos irão terminar; (b) você deve parar de utilizar o aplicativo e (se necessário) deletá-lo do seu dispositivo. </p>
           
        <Subtitle alingment="left" className={styles.termsSubtitle}>
            Mudanças neste documento de Termos e Condições        
        </Subtitle>

        <p> Possivelmente será necessário atualizar nossos Termos e Condições eventualmente. Portanto, você deve revisar esta página periodicamente para perceber as modificações. Nós iremos notificar você quando essas mudanças ocorrerem. </p>

        <p> Estes termos e condições são efetivos a partir de 01-06-2020. </p>

        <Subtitle alingment="left" className={styles.termsSubtitle}>
            Fale conosco
        </Subtitle>

        <p>Se você tiver qualquer pergunta ou sugestão, não exite de entrar em contato conosco através do email covidapp@contato.ufsc.br.</p>

        <p>Este documento foi adaptado da versão em inglês gerada por <a href = "https://app-privacy-policy-generator.firebaseapp.com/"> App Privacy Policy Generator</a>. </p>
        </Text>
      </div>
    </SectionContainer>
  )
}

export default Terms
