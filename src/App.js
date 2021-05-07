import React, {Fragment} from 'react';
import "./styles/styles.scss";
import Curso from './Curso'

const App = () => (
  <Fragment>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" alt="Banner" src="https://es.uadyvirtual.uady.mx/pluginfile.php/1/core_admin/logo/0x200/1620050216/Header_logoUADYV.png" />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Mi super banner</p>
            <p> Una chafa de bootstrap</p>
            <a href="./" className="button">Botonazo</a>
          </div>
        </div>
      </div>
    </div>

    
    <div className="ed-grid m-grid-4">
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
    </div>
  </Fragment>
);

export default App;
