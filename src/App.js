import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import HomePage from './containers/HomePage/HomePage';
import AboutUs from './containers/AboutUs/AboutUs';
import Contact from './containers/Contact/Contact';
import Gallery from './components/Gallery/Gallery';

import { Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/home" component={HomePage} />

            <Route path="/kuhinje" exact render={

              () => <Gallery name="Kuhinje po meri" 
              desc="Kuhinje po meri su okosnica naše celokupne proizvodnje i jedan od najvećih ponosa naše dizajnerske i proizvodne ekipe.
              Kupovina gotovih kuhinjskih elemenata je stvar prošlosti.
              
              Moderno doba i nova arhitektonska i estetska rešenja u stambenim i drugim prostorima, danas zahtevaju mnogo veći obim dinamike i prilagođavanja svim tipovima prostora.
              
              Masovna izgradnja stambenih celina čini da se one u velikoj meri grade prema šablonu, u kome se sve stvari uklapaju u jedno te isto sivilo.
              
              Ono što Vi možete učiniti da biste Vaš dom učinili funkcionalnijim i da biste omogucili da se ističe u odnosu na druge, jeste izrada moderne i unikatne kuhinje po meri."
              url="https://www.universe-magic.com/images/2015/06/520-1-or-1435137046.jpg" alt="kuhinje" link="kuhinje"
              />

            } />

            <Route path="/ormari" exact render={

                () => <Gallery name="Ormari po meri" 
                desc="Ormari su danas ne samo neophodnost i sastavni deo svakog stambenog ili poslovnog prostora, već i estetski pečat koji čini skladnu celinu sa ostalim delovima prostora u kome se nalaze.

                Kako se menjaju godišnja doba i vremenske prilike, tako se police i vešalice plakara prazne jednom i pune drugom sezonskom odećom.
                
                Ova česta pojava njihovog preturanja i preuređivanja njihovog sadržaja, nameće tu potrebu da osim estetskog, poseduju i određeni funkcionalan kvalitet, koji omogućava lako i brzo menjanje stvari u njima.

                Ono što Vi možete učiniti da biste Vaš dom učinili funkcionalnijim i da biste omogucili da se ističe u odnosu na druge, jeste izrada modernih i unikatnih standardnih plakara po meri."
                url="http://www.spinola.rs/images/komadni_nameshtaj/plakari/velike/GARDharmonika_X_crna-gang.jpg" alt="ormari" link="ormari"
                />

                } />

                <Route path="/plakari" exact render={

                () => <Gallery name="Američki plakari po meri" 
                desc="Američki plakari sa kliznim vratima su neizostavni deo svakog savremenog doma, kako zbog svog modernog dizajna, tako i zbog ogromnog prostora za skladištenje stvari koji pružaju.

                Ukoliko želite da učinite Vaš dom pre svega funkcionalnijim, a u isto vreme lepšim i prijatnijim za život, onda su naši američki plakari koje izrađujemo prema Vašim željama, a sve to po veoma pristupačnim cenama, uz garanciju kvaliteta i brzine izrade, prava stvar za Vas.
                

                Ono što Vi možete učiniti da biste Vaš dom učinili funkcionalnijim i da biste omogucili da se ističe u odnosu na druge, jeste izrada modernih i unikatnih standardnih plakara po meri."
                url="http://www.crvenajabuka.co.rs/wp-content/uploads/2014/06/americki-plakari-primer.jpg" alt="plakari" link="plakari"
                />

                } />

                 <Route path="/kreveti" exact render={

                () => <Gallery name="Kreveti po meri" 
                desc="Izrada svih vrsta kreveta za Vaše spavaće sobe, izrada od iverice i medijapana, sve vrste i boje.
                Činimo da se osećate udobno u krevetima ručno izrađenim od strane naših vernih i dugogodišnjih radnika.
                Ono što Vi možete učiniti da biste Vaš dom učinili funkcionalnijim i da biste omogucili da se ističe u odnosu na druge, jeste izrada modernog i unikatnog nameštaja za Vaše spavaće sobe, sve po Vašoj meri."
                url="http://www.drvoflex.com/images/rio600.jpg" alt="kreveti" link="kreveti"
                />

                } />

                <Route path="/tv-komode" exact render={

                () => <Gallery name="TV komode po meri" 
                desc="U našoj firmi možete nabaviti razne vrste tv komada i polica za Vaše dnevne i spavaće sobe, ili poslovni prostor, ručno rađene od strane naših obučenih radnika.
                Moderno doba i nova arhitektonska i estetska rešenja u stambenim i drugim prostorima, danas zahtevaju mnogo veći obim dinamike i prilagođavanja svim tipovima prostora, naravno i Vašim dnevnim sobama.

                Ono što Vi možete učiniti da biste Vaš dom učinili funkcionalnijim i da biste omogucili da se ističe u odnosu na druge, jeste izrada modernih i unikatnih tv komoda po meri."
                url="http://arhiva.dalje.com/slike/slike_3/r1/g2010/m06/x231236718681332491_13.jpg" alt="komode" link="komode"
                />

                } />

                <Route path="/kupatila" exact render={

                () => <Gallery name="Kupatilski nameštaj" 
                desc="Znamo da je nekada teško uklopiti robusne komade nameštaja u izgled svog doma. Možda i niste sigurni gde bi i kako šta trebalo da stoji u Vašim kupatilima, naš dizajnerski tim će Vam izaći u susret.
                Kupovina gotovih  kupatilskih elemenata je stvar prošlosti, izrađujemo sve vrste kupailskog nameštaja.

                Moderno doba i nova arhitektonska i estetska rešenja u stambenim i drugim prostorima, danas zahtevaju mnogo veći obim dinamike i prilagođavanja svim tipovima prostora, pa tako i kupatilima.

                

                Ono što Vi možete učiniti da biste Vaš dom učinili funkcionalnijim i da biste omogucili da se ističe u odnosu na druge, jeste izrada modernog i unikatnog nameštaja po meri, a mi smo tu da Vam pomognemo tako što ćemo Vam predložiti najprodavanije proizvode."
                url="http://www.projektowanie-wnetrz.com/grafika/zdjecia//lazienka_pomysl_na_sciane_z_umywalka_i_lustrem.jpg" alt="kupatila" link="kupatila"
                />

                } />

            <Route path="/" exact component={HomePage} />

          </Switch>

        </Layout>
      </div>
    );
  }
}

export default App;
