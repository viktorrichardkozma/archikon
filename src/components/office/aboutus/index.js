import React, {Component} from 'react';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';

import './aboutus.scss'

//Action

class AboutUs extends Component {

  constructor(props) {
    super(props);
    this.state = {
        list: []
    };
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.projects !== prevState.projects) {
        return { list: nextProps.externalList };
    }
    else return null; // Triggers no change in the state
    }


  render() {
    const {visible,language} = this.props

    const data = {
      'en': 'ANGOL Az Archikon Kft 1989-ben alakult, és a kezdetek óta közösségi, kommerciális, lakó és ipari, teljeskörű építészeti és generáltervezéssel foglalkozik.<br/> Referenciáink között jelentős részt képviselnek a közösségek számára tervezett új épületek és épületrekonstrukciók. Az  Önkormányzatok, állami intézmények és közösségek megbízásából a kulturális, sport és szabadidő, oktatás nevelési, szociális, egészségügyi területen számos megvalósult épülettel rendelkezünk, melyek közül több épület kapott építészeti elismerést (Budapest Építészeti Nívódíj  oklevél, Építőipari nívódíj stb.) <br/> <br/>  Ingatlanfejlesztők számára elsősorban kiemelt értékkel bíró egyedi épületeket, átalakításokat, bővítéseket műemlékrekonstrukciót terveztünk. Az épületek és a beruházók, kivitelezők és a tervezők ezen a területen is elismerésben részesültek (Fiabci különdíj, aluta nívódíj) A lakóházaknál szintén az innovatív és környezettudatos megoldásokon van a hangsúly,  kiemelve az ország első 100 lakásos passzív társasházát. A harmadik tervezési szegmens az ipari jellegű feladatokat foglalja magában, elsősorban az autó és mikroelektronikai iparban (Audi, Infineon) és a gyógyszeriparban (Richter Gedeon Gyógyszergyár Nyrt, Egis Gyógyszergyár,  Chinoin Sanofi-Aventis) terveztünk.<br/> <br/>  Irodánk összeszokott társtervezői kapcsolatokkal rendelkezik és a tartószerkezeti-, épületgépészeti-, logisztikai-, elektromos-, közmű-, út- kerttervező, stb. partnerek közül a feladat jellegéhez legközelebb álló cégekkel szerződve készíti el a szakági terveket.'
      ,'hu': 'Az Archikon Kft 1989-ben alakult, és a kezdetek óta közösségi, kommerciális, lakó és ipari, teljeskörű építészeti és generáltervezéssel foglalkozik.<br/>   Referenciáink között jelentős részt képviselnek a közösségek számára tervezett új épületek és épületrekonstrukciók. Az  Önkormányzatok, állami intézmények és közösségek megbízásából a kulturális, sport és szabadidő, oktatás nevelési, szociális, egészségügyi területen számos megvalósult épülettel rendelkezünk, melyek közül több épület kapott építészeti elismerést (Budapest Építészeti Nívódíj  oklevél, Építőipari nívódíj stb.)<br/> <br/>   Ingatlanfejlesztők számára elsősorban kiemelt értékkel bíró egyedi épületeket, átalakításokat, bővítéseket műemlékrekonstrukciót terveztünk. Az épületek és a beruházók, kivitelezők és a tervezők ezen a területen is elismerésben részesültek (Fiabci különdíj, aluta nívódíj) A lakóházaknál szintén az innovatív és környezettudatos megoldásokon van a hangsúly,  kiemelve az ország első 100 lakásos passzív társasházát. A harmadik tervezési szegmens az ipari jellegű feladatokat foglalja magában, elsősorban az autó és mikroelektronikai iparban (Audi, Infineon) és a gyógyszeriparban (Richter Gedeon Gyógyszergyár Nyrt, Egis Gyógyszergyár,  Chinoin Sanofi-Aventis) terveztünk.<br/> <br/>  Irodánk összeszokott társtervezői kapcsolatokkal rendelkezik és a tartószerkezeti-, épületgépészeti-, logisztikai-, elektromos-, közmű-, út- kerttervező, stb. partnerek közül a feladat jellegéhez legközelebb álló cégekkel szerződve készíti el a szakági terveket.'
    }    

    return <div>
    {(visible===true) ? (
      (language.lang==='hu') ?
      (<div className="office-decription-wrapper">
        {renderHTML(data.hu)}
        </div>) : (<div className="office-decription-wrapper">
        {renderHTML(data.en)}
        </div>))
       : null }

      </div>
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.localization
  };
};

export default connect(mapStateToProps, {})(AboutUs);
