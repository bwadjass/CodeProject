
import React from 'react';

export class PihaPojat extends React.Component {
  
  render() {
    const src = this.props.src;
    return (
      <div>
        <header>Suomen Pihapojat Oy</header>
        
        <section>
          <img src={src} /> 
        </section>
        
        <section>

        <article>

            <h2>Tervetuloa Internetsivuillemme!</h2>

            <p>Sivuiltamme löydät ajankohtaista tietoa yrityksestämme ja sen toiminnasta.
                Yrityksen palvelut -sivulta saat tarkempaa tietoa tarjoamistamme palveluista.
                Yhteyden meihin saat kätevästi puhelimitse tai yhteystietolomakkeen kautta.

                Kiitoksia jo etukäteen mielenkiinnostanne yritystämme kohtaan.
            </p>

        </article>

        <article>
            <h2>Palvelut</h2>

            <p>

              Suomen Pihapojat Oy on ammattitaitoinen viherrakennusta tarjoava yritys Helsingissä. Toiminta kattaa alan töitä vuosien kokemuksella. 
              Palvelemme asiakkaitamme pääasiallisesti Pääkaupunkiseudun alueella.
              Ota yhteyttä, meiltä saatte aina asiantuntevaa ja osaavaa palvelua!.
            </p>

        </article>
        
        </section>

        <footer>

                
                <strong>Suomen Pihapojat Oy</strong> <br/>
                <strong>Yhteyshenkilö: </strong> Sylvester Ezeh. <br/>
                <strong>Osoite: </strong>Kuusmiehentie 3 B 6 00690 Helsinki  <br/>
                <strong>Puhelin: </strong> +358452304241 <br/>
                <strong>Sähköposti: </strong> ndezeh@yahoo.com  <br/>
                <strong>Toimialue: </strong> Pääkaupunkiseutu <br/>
                <strong>Aukioloajat: </strong>Sopimuksen mukaan <br/>
                <strong>Toimiala: </strong> Viherrakennus
        </footer>

      </div>
    );
  }
}


