import React , { useEffect } from "react";
import TradingViewWidget , { Themes }  from 'react-tradingview-widget';
import SubHeader, { SubHeaderLeft } from "../../layout/SubHeader/SubHeader";
import Harmony from "../../assets/img/wanna/harmony.png"
import JEWEL from "../../assets/img/wanna/JEWEL.png"
// import ETH from "../binnance/binnance"
import Card, {
  CardHeader,
  CardLabel,
  CardTitle,
  CardBody,
  CardFooter,
  CardFooterLeft,
} from "../../components/bootstrap/Card";
import Button from "../../components/bootstrap/Button";

import Page from "../../layout/Page/Page";
// import Popovers from '../../components/bootstrap/Popovers';
import Table from "./jewel"

import {Umair} from "./jewel"

// ONE COIN PRICE WEBSTREAM CONNECTED WITH BINNANCE






const DashboardPage = () =>
{
  useEffect(() => {
    // Update the document title using the browser API
    const ws = new WebSocket("wss://stream.binance.com:9443/ws/oneusdt@trade");
  
    const onePriceElement = document.getElementById('one-price')
    let lastPrice = null
    ws.onmessage = (event) => {
      console.log(event.data)
      const cryptoObject = JSON.parse(event.data);
      const price = parseFloat(cryptoObject.p).toFixed(6);
      onePriceElement.innerText = price;
      onePriceElement.style.color = !lastPrice || lastPrice ===  price > lastPrice ? 'green' : 'red' ;
      lastPrice = price;
    }
  } ,[]) ;


  return (
    <Page>

    
       <SubHeader>
        <SubHeaderLeft className="d-flex justify-content-center">
          <b>Portfolio Dashboard</b>
        </SubHeaderLeft>
      </SubHeader>

      <div className="row">
        <div className="col-6 mb-3">
          <Card className="mt-3">
            <CardHeader className="d-flex justify-content-center m-2">
              <CardLabel>
                <CardTitle>
                <img src={Harmony} alt="BigCo Inc. logo" width="180" height="180"/>
               <b> <h2 className="d-flex justify-content-center">ONE </h2> </b> 
               <small className="d-flex justify-content-center ">Harmony Blockchain</small>
                </CardTitle>
              </CardLabel>
            </CardHeader>
            <CardBody>
            <b><h1 id="one-price" className="d-flex justify-content-center"style={{ margin:"-20px 0px 0px 0px" , padding: "0px"}}>-</h1></b>
            </CardBody>
            <CardFooter className="d-flex justify-content-center m-2">
              <CardFooterLeft>
                <Button color="info" icon="Save" isLink>
                  Refresh
                </Button>
              </CardFooterLeft>
            </CardFooter>
          </Card>
        </div>

        <div className="col-6 mb-3">
          <Card className="mt-3">
            <CardHeader className="d-flex justify-content-center m-2">
              <CardLabel>
                <CardTitle>
                <img src={JEWEL} alt="BigCo Inc. logo" width="160" height="160"/>
               <b> <h2 className="d-flex justify-content-center">JEWEL </h2> </b> 
               <small className="d-flex justify-content-center ">Harmony Blockchain</small>
                </CardTitle>
              </CardLabel>
            </CardHeader>
            <CardBody>
            <b><h1  className="d-flex justify-content-center"style={{ margin:"-20px 0px 0px 0px" , padding: "0px"}}>
      ----
              </h1></b>
            </CardBody>
            <CardFooter className="d-flex justify-content-center m-2">
              <CardFooterLeft>
                <Button color="info" icon="Save" isLink>
                  Refresh
                </Button>
              </CardFooterLeft>
            </CardFooter>
          </Card>
        </div>
      </div>

<div className="row d-flex justify-content-center "> 
      <div className="col-12 mb-3 p-3 ">
        <TradingViewWidget 
          symbol= "COINEX:JEWELUSDT"
          interval = "15"
          timezone ="Asia/Karachi"
          theme={Themes.DARK}
          locale = "en"
          toolbar_bg ="#f1f3f6"
      />  </div>
 </div>

<div className="row d-flex justify-content-center "> 
  <div className="col-12 mb-3 pl-3 ">
        <TradingViewWidget 
          symbol= "BINANCE:ONEUSDT"
          interval = "15"
          timezone ="Asia/Karachi"
          theme={Themes.DARK}
          locale = "en"
          toolbar_bg ="#f1f3f6"
      />
 
 </div>
 </div>

 <div className='row h-100'>
					<div className='col-12'>
					<Table/>
          <Umair/>
					</div>
				</div>
 
    </Page>
  );
};




export default DashboardPage;
