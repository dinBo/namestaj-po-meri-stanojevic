import React, { Component } from 'react';
import Aux from '../../hoc/_Aux';
import classes from './AboutUs.css';

import Footer from '../../components/Footer/Footer';

class AboutUs extends Component {


    componentDidMount() {
        window.scrollTo(0, 0);
    }


    render() {

        
        return (
            <Aux>
                <div className={classes.AboutUs}>
                    <div className={classes.Description}>

                        Crvena Jabuka ima 24 godina iskustva u izradi svih vrsta nameštaja i elemenata za vaše kuće, stanove, kancelarije i poslovne prostore. <br /><br/>

                        Naš dobro uigran i visoko profesionalan tim je zadužen za sprovođenje politike rada naše firme koju krase brzina, preciznost i posvećenost najvišim standardima kvaliteta i estetike u izradi nameštaja i drugih elemenata za prostor koji želite da opremite.<br /><br/>

                        Pravimo sve, od nameštaja za dnevne sobe (stolovi, tv komode, biblioteke, police), preko kupatilskog nameštaja (ugradni elementi za lavaboe, ogledala, ormarići, svetlo), do modernih kuhinja po meri. Osim toga, pravimo i američke plakare.<br /><br/>

                        Tu je i kompletan program za dečije sobe (kreveti, plakari, stolovi, radne površine), kao i izrada svih ostalih komada nameštaja koji su vašem domu ili poslovnom prostoru potrebni, poput cipelarnika, stočića za šminkanje, kompjuterskih stolova, radnih stolova, maski za radijatore…<br /><br/>

                        Sve Vaše ideje i želje možete saopštiti našem timu dizajnera, koji će rado i sa velikom stručnošću kompjuterski obraditi, pomoći Vam da osmislite ili osmisliti umesto Vas sve ono što Vam je potrebno da pretvorite Vaš stambeni prostor u dom, a Vaš poslovni prostor u savremeno mesto uspeha i prosperiteta.<br /><br/>

                        Našu firmu čini i visoko stručan tim profesionalnih radnika. Na raspolaganju su Vam i naša 3 dostavna vozila. Dostava, montaža i ugradnja nameštaja su uključene u cenu samog nameštaja.<br /><br/>

                        Naš posvećeni menadžment tim je tu da osigura uspešno upravljanje firmom, a svi zaposleni u izložbenom centru, koji se prostire na preko 100 kvm, su Vam uvek na usluzi i spremni da rade zajedno sa Vama na pronalaženju i izradi pravog komada nameštaja za Vas.<br /><br/>

                        Vaše je samo da poželite i zamislite, a na nama je da vaše želje i snove pretvorimo u realnost.
                        
                        Očekujemo Vas!
                        
                        Tim proivodnje nameštaja po meri – Crvena Jabuka Beograd
                        
                        
               </div>
                </div>

            </Aux>
        );
    }


}

export default AboutUs;