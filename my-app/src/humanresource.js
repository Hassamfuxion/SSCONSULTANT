import React from "react";
import './assets/css/bootstrap.min.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/animate.css';
import './assets/css/animated-text.css';
import './assets/css/all.min.css';
import playIcon from './assets/images/owl.video.play.png';
import { Helmet } from 'react-helmet';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "slick-carousel/slick/slick.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/main.css';
import './assets/responsive.css';

import './header.js';
import HeaderStyle from "./header.js";

const humanresource = () => {
  return (
    <>

    <div>
          <HeaderStyle variant="custom-variant" />
          {/* Other components */}
        </div>
    
    
        <div className="owl-carousel">
            <div className="owl-video-play-icon" style={{ backgroundImage: `url(${playIcon})` }} />
            {/* Other content */}
          </div>
    
       <header></header>
         <Helmet>
            <meta charset="UTF-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <title>SSCONSULTANT</title>
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* Favicon */}
            <link rel="icon" type="image/png" sizes="56x56" href="assets/images/favicon.png" />
            {/* Bootstrap CSS */}
            <link rel="stylesheet" href="assets/css/bootstrap.min.css" type="text/css" media="all" />
            {/* Carousel CSS */}
            <link rel="stylesheet" href="assets/css/owl.carousel.min.css" type="text/css" media="all" />
            {/* Other CSS files */}
            <link rel="stylesheet" href="assets/css/animate.css" type="text/css" media="all" />
            <link rel="stylesheet" href="assets/css/animated-text.css" type="text/css" media="all" />
            <link rel="stylesheet" href="assets/css/all.min.css" type="text/css" media="all" />
            <link rel="stylesheet" href="assets/css/flaticon.css" type="text/css" media="all" />
            <link rel="stylesheet" href="assets/css/theme-default.css" type="text/css" media="all" />
            <link rel="stylesheet" href="assets/css/meanmenu.min.css" type="text/css" media="all" />
            <link rel="stylesheet" href="assets/css/owl.transitions.css" type="text/css" media="all" />
            <link rel="stylesheet" href="venobox/venobox.css" type="text/css" media="all" />
            <link rel="stylesheet" href="assets/css/bootstrap-icons.css" type="text/css" media="all" />
            <link rel="stylesheet" href="assets/css/style.css" type="text/css" media="all" />
            <link rel="stylesheet" href="assets/css/responsive.css" type="text/css" media="all" />
            <link href="https://fonts.cdnfonts.com/css/clash-display" rel="stylesheet" />
          </Helmet>
      
        
    
      <meta charSet="UTF-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>SSCONSULTANT</title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Favicon */}
      <link
        rel="icon"
        type="image/png"
        sizes="56x56"
        href="assets/images/favicon.png"
      />
      {/* bootstrap CSS */}
      <link
        rel="stylesheet"
        href="assets/css/bootstrap.min.css"
        type="text/css"
        media="all"
      />
      {/* carousel CSS */}
      <link
        rel="stylesheet"
        href="assets/css/owl.carousel.min.css"
        type="text/css"
        media="all"
      />
      {/* animate CSS */}
      <link
        rel="stylesheet"
        href="assets/css/animate.css"
        type="text/css"
        media="all"
      />
      {/* animated-text CSS */}
      <link
        rel="stylesheet"
        href="assets/css/animated-text.css"
        type="text/css"
        media="all"
      />
      {/* font-awesome CSS */}
      <link
        rel="stylesheet"
        href="assets/css/all.min.css"
        type="text/css"
        media="all"
      />
      {/* font-flaticon CSS */}
      <link
        rel="stylesheet"
        href="assets/css/flaticon.css"
        type="text/css"
        media="all"
      />
      {/* theme-default CSS */}
      <link
        rel="stylesheet"
        href="assets/css/theme-default.css"
        type="text/css"
        media="all"
      />
      {/* meanmenu CSS */}
      <link
        rel="stylesheet"
        href="assets/css/meanmenu.min.css"
        type="text/css"
        media="all"
      />
      {/* transitions CSS */}
      <link
        rel="stylesheet"
        href="assets/css/owl.transitions.css"
        type="text/css"
        media="all"
      />
      {/* venobox CSS */}
      <link
        rel="stylesheet"
        href="venobox/venobox.css"
        type="text/css"
        media="all"
      />
      {/* bootstrap icons */}
      <link
        rel="stylesheet"
        href="assets/css/bootstrap-icons.css"
        type="text/css"
        media="all"
      />
      {/* Main Style CSS */}
      <link
        rel="stylesheet"
        href="assets/css/style.css"
        type="text/css"
        media="all"
      />
      {/* responsive CSS */}
      <link
        rel="stylesheet"
        href="assets/css/responsive.css"
        type="text/css"
        media="all"
      />
    
      
      {/* modernizr js */}
      <link href="https://fonts.cdnfonts.com/css/clash-display" rel="stylesheet" />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '/* From Uiverse.io by Praashoo7 */ \n\t\t/* HOLD THE ASTRONAUT */\n\t\t\n/* From Uiverse.io by kennyotsu */ \n/* RIP Uiverse points, welcome Creator points! */\n/* From Uiverse.io by Lakshay-art */ \n\n.section-banner {\n  height: 250px;\n  width: 250px;\n  position: relative;\n  transition: left 0.3s linear;\n  background: url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAAAAAAD/2wBDACYaHSEdGCYhHyErKCYtOV8+OTQ0OXVTWEVfinmRj4h5hYOYq9u6mKLPpIOFvv/Bz+Lp9fj1lLf////u/9vw9ez/2wBDASgrKzkyOXA+PnDsnYWd7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Oz/wAARCAE5AfQDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAgMEAQAFBv/EADoQAAIBAwIFAwIFAgUFAQADAAECEQADIRIxBCJBUWETcYEykRRCUqGxI8EFYnLR8DOCkuHxQxVTY//EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIBEBAQEAAwEBAAMBAQAAAAAAAAERAiExEkETUXEDYf/aAAwDAQACEQMRAD8A9T1Adg32rZPtWavI+9bA8VpAy3dftRDP5vtSmuDaPtXBWI5dSjyaYhx0jd/3riyD89TlXH029fzWAOufTtp96Yaf61rb1Kw3rQ/P+1KD92n2U0epTnQ3wKuAhxFo7GfisPE2huY94rAQThG9sAULBQPox4IpkDBftMJUz8Vmv/QPegV7cxoB/eiKof8A8ZpgFr4XdlHwaAcWn6x8LTQkbWVH2rpYHCn7U6AjiVPU/wDjW+uP1D5FFqJEQD70GknMADsBFAYuk7H7LXa26k/+NcGYefijWf8AgqANTxgH/wAazXc/Sf8AwpuOprGmOWKKSbrgTA/8TWes/wClaZqHWJ8Zro1dvmqhfrxuq/eu9YxISfY1rLp3VfkCsVo2Fv8AiqM9c/8A9bV3rx/+T/aiJU/UFHkNShYXJV1z3n/enSGi8D+UzRqxP5alNoz/ANa17ATWCyx+niAPmmQV6u4rdY61J6fELtdDfNDr4lTzIGHjemGrda9x962QdiKlW8mrmLp4KmqF0ESp/aKij0jxW6B0iksLUwXAPvXemoEy0eDQO0e1ZpHilBViSG+WrtNsn64PioGEe1cQImaDQnVprilsDOP+6qO1Cd5rp7A/ehLWx9Pp/LUOt5hTY+9A2T2H3rA+Y5fvS9dwQSLQ8zXfiAMMLRH+qiGF4MHT967VPQfcVO13hyZ9FSfDVnqWelhfk1cDjdUd/g0QugiQ0fNJFwDK2bcdxXeuZghR4j/1QMN8D89aL6H84oBfH6Y/7aI3kjNsfagaHU9Qfmt1Cdh96Ut2ye3/AI0X9IjlVDUUZYfoP3rNX/8Am3waGF/T+9CSqnKAe5oDNwdVYe9YbqdA1Z6w2BU0J4gLgqtMB+snUH70QvWz3+9Bbu+ocLjvpxWu4Xe1PkUB+qld6qePvSg9o/lK0RNro0e1MDPUH+X71nqp1FK1WRktq+KIC0/0zUyBnqp0/it9W33H2oBbQ400JtocTHtTIG60/UK6khE6XG+9dTBIeKukSBB7QKKzxF0nnIj2rbic35vcCsXUJ2MdDW+kVAh1lTFMXaovWB6Ed4NN9UEjH71nFVD3rPSU5k/egt3J/KBFZdukJIYKo3JzUxR+mi5E/c1zagOWKSpvMNXqrpO2JrR62row77UGM7A5kewqch9wQx7RVbFozbn2M1i20YfTHvVlTE/rNbXntftWWuKRjpKaT3BptxdLAKRnoKWbNtxGgT3HStdIpV8YIIrifJFQCwVIKOwHWMU4LciRcvDsGG9TIacbkGAwohdM5AIpDawCXtK4HWCDXWmRtgV8MaYKCysOvxQZGzVhxRCQNqhodRHU12onua6u22qprQW2j96wgjOPvXAEVsGJCE+1F1mqGkAVpdWHMs/NCCMyo+ZrdYGNGr5NBk2JyF+4oh6PRT8Ut3Trailm1auNKgr/AKRQURaO6P8A+NZpsloCtPaK62giAHI7kYpn07H9qi4XptHKhj8U1Vjv80vUQ+ogrPmuLmcKfcGgYdUYJqN7xW7pchx/mUVR6hIgjHkVLxNkMZClT52pIU1b1m6IkKR0Bx+9M3H9Ncd1ivPWxJyG+BNV8Pw628uAD071bJENlQOYE+9CSp+m18laZqVR9LHzFGus7KAP8xqauEAtP/TSPIrtJnCLnuKpz4/iu001cTi23VU+1ELafpXzijM94odQiAfim1HC2o2An/SKE236KnvprIA5rhI6RWszRI5E+5P+1Bg4ePqcjwKNURTAT5oFa3Opyy/5ZrvUDNB5VO0GnZ0J7kYEg9MVi3gejTQNw7ESpB7VhssowsE+Jq9BhuADJNL/ABABjB96A8OWySQfesW3peDme9XIhwdGyUFYSs8oIrhaBPYe9NW1AgMY8VAvUZzntTxKrLYFYtsJ596wyNgKlVzC0RLKtLe2pUemo+cURtyMA/FC9twOVT96DEtEzJJHaSKMWQNrYHvmpmLkEGB7rRW72kQY+KuVFOhh+VPtQXLZK8qKD3mlniiozDe4Io0vi4JE+RU7Ur036KCaaL11bcent13ojeQDr9xQ/iB00/ar6jA11iCAZ9q66HccyKvk4NMF8gA8p9gaWRdvOeXSvmgEWrjCdaV1A1u4CdJePaupqYaLzIDrU+DRq9q5iAf2NKJ/TDL+k5ikkgDUDHijat7VttomkPZIBIyPFLW6ymdQgdTVKuHTnI+KCeGAkN9jT0vLEODMUGoAn8w7daFoJlRimmHWgtsQhHpk7bgU9Au6mPFQA5wKIcQRiRioPQrCpI3n5qMcXJgdKf6pUDUMHY96mGmAMP0x96xrcn6iPbFctxWyGo8UAC2BsI75zWBVGYgzTY81kVNUkl5AgnOykUItXGuarhGiPpmRW3CgYMQ6kdQKWblu7I9VWB6DV/vVRO7XLbEKDp7EdKqtkNaDCYPep7o9Jiq2f+e1O4e4XTSTLDcRWmKYq6jR/wBNBLGZ2oCwt2yxHKKga63EXfGwFT1Y9A3URslQPFcLiXCAA4z0xSV4VNOWnzSL1tLbaVE+ZpkV6JdUHM4juxpfrNq/phWBOJevM0ZzE1VwqQZW6yxvimYapLv1VB/3H/asN5UGp3UD3NNVgRGpm8kUFx7TLBAbrtUUPqI41C8n/bBrLiyQpuEE7cu9TOigFovqv+oCkEIBLKQO+qasiLXdbWTcUt5eP2pB4vnEPv8ApQ/yTU6i3MgR5OKciocBZO21XEGt/wBQx/U94mjTh2uGeb5NErpYJIEv17Um5xV0neJ7Vm8msWJZW2p1QJ6k1xu2VEhgenKK8m9xRAAkt7nArEXRl31E1P8AR6n4m1OzT3NGrl8gGPtXli4Z3ptu4yiVP96ar0DcCgSRG2aW18wcrEdDk+1JRzIlmjsaaDbIL+mogwwjpVRqkuDv8mmi3jaKS922qkWwVnqKS11j9LEeNWaCi9ZY8w3japnVhkiTTLXFMmG5h5qlXt3TA3q7iYiFu4d9KjfJFPQoluG0knqM1Pdtm2xIyJ3oQVjrNVDjdGAq/vTV4joRUgHiPbFEHYY1Y81ehWLtpsGiGjp/FRlh1g/FbgbE1MNXACiORSVb00BuH2pLcUGeNOOgms4uqGuKlIucSFMaTPY4pPq88sCR2ihI1NJA7fFWCq3d1gsGhR36UxHBGGDDxSbNq0qmTq8UbXLekDpttQH6iiZbBxWPbRxI0k+01LdKs2Xke9FbVDEOZ6AUwb6DfpI9tqw2Lh3EeZmmG+qmJON60XptmO8Sau0yFLaKiGEHuaM2wxBYwegArrxuFeXIMQdqU+ldJWPUAgsTimmHniLds6YyOtYeJaJ0iNgamfXcIySfBmuJ0WxLEnsRU6OzzeYHKgGuqX1T2rqbDKp5QeYhpG0UF0DVKmR2pHqw8HV70dt4MgzntU1XBZ2FOI0EDdgJNZaUBA5EdKwQ8yd/3q6MYjJXoY7xWoTGrHvFEq6CSRMUBTSCy7desVFOKW2WSnyBUN+zHMN53mmBocGSCcxt801nUjmGfAmgmNzVYUG22pd2OK1eMa3iZ7SJph15Akidlz9xvSmtW2GxX22q7E+RfioYFWwd6us8QGEEj3ryrdokw2zdR1pyAKYmI7Hapasj1VuoRvFHIPWvOVyhzBEYP+9NNwrGRt0FPRXQlUGdI94paXRoy2Z3mDRJq3JBG80QF8ADSpXU3V2wKWeFthAblwKe4wKHjFD8wH01Ot6RpfmUbZqyIO4LOnSL5j/QaXbcWzg6xttFY40EsBg9DSmddQOBmqituJaNielLBdj2Hk1OXIwSI3it9aQObPSgsSzbwTc+FFHr9Mf0/SUdyTJrzyzHm39jBoWZ99hvE0HoniQiS7hyezRU9/iy4gQoqInIHWhck5GBtNXDVLXzqIDEntNBdF5AWMHqSBtRHhlt2muMWJXMjFFbH4izDrAjDT+9YvJUfqv+oiquE4opq15MdqnuWmtHmBicHoaK1avOJRQJ6mt2yxJqj1dTTBAJiT3rTOSYxXXLTPp1BSQMg9DQNZuu2bgA/wAo3rj03tT3WDMCqwCMVRbLsdLswIE/SKxeF0OG1ExmIqlQSIwPereUvUSBt2oJLPI89a1FVcIvyTRhJOTRaVEQMT96are4Bmd+9EnKfjbuKWxEkgx7VjPAgEk+cRTUES0EAwPHalyZ3/esJ61qnbvTVEJKnIjzTLOgZYGOsGkPJPb2oZINX6hiq86hAgbUR1qYk+9DJ70Shm2FWVMaGIGduldMYmZo0QTklvCj+9MVih5bBB7jJqpgEtsSMR770TMll8QSPmuYastdjw9KuIU3GB+YbGpeS465edzuAPaglgpwCpMSaE71pk7MCO1Z+qY0M8zrIPijF30ztPfzSciRMVhMZJppiuxxJDqGVQD9RJinlV4kF1kKBAkRXnodX1HTJ+wqgMuUyQMkjE+9WUUKthGVVy5/N/eivM+vRbUT+qkorTzaY6TWG22AA3vFUBpcTq+1cgDCWACDMT36UbsmnSWJj/kTStRbqJG0dKaYdecuoAaE6YqV7oJ/UfAgCiuF7ilSZnqaWU5SSdtwKswd6pyFBidxQo7MTj96w9oEdia7WEJ0IgjqTNMiaxjcnlcgdtNdXalYkvJPvXUyGtt3lcREkd9xTUy/71HaWL+e2artkgEgEzWOUyrO1CmSVJAHvAoyvMDIWDmaRqKzIydiacmllALcsSfFVY1LunG4O9YCNQ0zM70okhuUYitW4Y2x1rO9tYdIksCFJPwKU7rmMGehxXE5xGe2KwgYDCDV1kAuANLuABgSJpgbUAVuJHeSaTdRArPpAEZih0MlqQoneBQNNpoNzlYd5z9qAkySwNdDadTgAHbNZAIHbxUHaniJkVhe4BgY8muLKuZCjuaD1keRiAMk4qxNZ+KAEjJ7GrbT3MEEgHYHavMZ7InQpMj2HvQhric4JHmt4a9i5dS6wEBbi5UzGalfmElRIzEVH65IEk42g04X1Nogy0kZ61ZEa+ogAZHilvIXIx280RAwwneRPTxQnDSCJjvVQKhsEYH81yIDzawo280WiTzbdhREBFGCf70GaQgwhM9CcUBPTBPatLFnBAAAPU70Uu7EsQevvQAQoEDB796AntuDMiibAyoH96WSAMb1UFcZmbmcv8zVVtuIYLotgKfzE6qjCsRIUke1HYZ7d1SoIz2rPKTFi0WdZm/DnoBgCm/TgEDoIoWYkTGKzWMEkAR3xXDutiB6zPvXKZPQGlo6XEJQgkdAIzQWrgZiCNLjcGphqg75FcDB7GsD4iKwAkb1AZjeawsTSb970UEDmO1JtcVykXDnoQtbk5WabFWnNZEGJqa1eDMfUuMewIgVWiM55QTSywlBGaYFFJ4ktYWdJmevSu4X1bv9RrxgH6QMU+eta38OYClkE1TpDGpbNy414gppUCpFccHNdOKawUmCc0PpjoZpKAljiTWy22o+1bpzvjxWrbLGAPirtOgAd6etsWlMNDMMjxWC31I5R+9axVgdX1U8M0s2wfJodJRt4opg5BnuKINJzHzU0woyZ6igKxmMmq/RkTkRua4WweoqpiZVxtTkJGwE00WsTQxpJ6U1ccXIG8fNYxcpqdjpOwJrok4msKjrk1fpnANBoc0emK4iR1qagE3jrQLcDi9LYBgEd6C8WKlLWSTBM0qyrmw+lQ2QCCM/Fbk61nRlyUnAn7UtiOgrV1L9XJ2neuAWZyK6INAI5lJPWBXUS8SqKFVMe011QLtfXgSoXOKrssBeOtRB6AdPFQKNLQWgHBq1XW5J2IJjzWee+tcT7h5o0hc401oGSoEr1JrkAKlHyvQjMVtu6FVkkTMz3FY1uwp7skKByjFaaBhmU/fpTOmaxQMZ7Vp8Z9zWMa4NO2aMj0sVI2FaY04MYxFYpxG9aD9qstCgGkkMfk1l11tqWf8A+0zSCZH2qDjGl1AcN3jvV4zal6DeueodJUKAd94oLVr1CwnbrFYiydRwvUzFPN1SCiCZjJx8V3zGSltAOdZ5V+oigRgpJgT0kVTxCLb4YCIZyDSE0aCSwB2jvVGF9SAFcgQDFcAxHKrQR96YWVVaDH6Rn71od8B3wR0xjzQYj4CtgiiuoTBiR4oSLe8EeWp1omYYQNvIqCe2xBGCQDmDRnNuTzT1rXTTcGoAnc9iO9YrMNm9t8fagxSIzt0okD7lSoPWtIKTIAIXMjJ/vQlOUxk46YoAJM5IPvXQg3WuYQD37djWLcO0KfeiLbCkW11AyBTznmC47VDZvuWVdIjxTDdvn6bQXse1cbxuussxl66NRQKADgk1KXgQmB3qheEZsu+TvRfgfLGewrcvGM2WkuzWbo0MDyiYGKPVb4idSlbkYIzNZf4cWlXTJJ6f+qBy5T/phO5URNXJe4nh3DXMshfVtpmjuXxafTBJqFWKsCNxTXuNdM8oA2ExFS8OzVN2x69wN9IjeZol4BFA1yT4NIt8WUUAiYFOHHMLBlBOwJb/AIamcp0vQX4EBuVyB5zTbNo2k06if2o7SveTVmOviteyyAnUJHes22+tZGK7JgH4ORSfxa+vpVVEmCw/mjSSYOPegb/DySSsgdYzV43+0v8A4qUkKA33ArQAJg70sKYE5jArjIHWsOjnkjFcokgMaxQTvTrBb1OUCBvAFIld+HO3XzFGLCrlobxOKewV4l9x96VpNsgGCPetpMYw5pU6R2iuLJsyJPeK4yWiYz1NZoyeZZ/1VntroIFsGYPvitNu0STzfaKLSYwy5812gwcH4FU2N5SgQao74rRaUdpNLDEMwKAnuBBFd6mJEE1E010dMxONxSnYxE/FcbzsNyB4oe5pbE0tr4spzH2AyTWNdWVDMA5/KTmgvm3a/qsIO3JjV7155vH1fUSVI7nV/Na48djNq69eW0MnmOwiak/EONXNrnuSB9qo4iG4bn+qJE7zUiWXddQGPOK1xkztmhdzcYsxyf8AkVTea5atIVICsIiNsVtrhkVQ10ie04pfEH1+JVEIOwHaau7UK5i3OSWIwSaJlZbmiDPYVl1QpicjeBArNR3G81saQ6cpLA9jiuo2uKsaGGRJ1AEz7muqDXsG1AuyAdiM0y5aCW+RixAkEGRFU8Xp/CLa1Auu53jNRopB0u3KDHf4qeh3D8SPTcuCdOcbxVQe3etFiqsNMg9a8sP6d1SRKj9OMU4X9BBUn0mJjGVNYvHL06S7FaqoUQTvNETilBulF0B6VybdO9YJNBfYrblNyQKnaxc1iSdZ71vjx1zqssB9TKD5MUQYBZBkHOK8+7OqC5Yjc0SsFvKwXlXcKavx0mm3Lj3bhtBtCgx5NBfsKqKbYIOxB/mi4llW8rqRDCQf70oX9I0lRGxg1vj4lGlkOAbrmQYx0FYStt0ULAB1HO9Dcu2ysKrE7yTtSoJInrma0h1wtel2xJiIwtKlnYEnwIHSmMhNnJ+k/T3oeRnWBA05B6Gg5CQYTMHOKIEqxYvBxhYmKWHIQiIPetXDRt70Dw4XJkHyN6zWSx9NcdcTSIAPc91py3baCLeo5mG2oNNzAS6ueh7UDDSZHMo6jpWsy5IQBu8z+1AiTq1Y0jp3oD1sFAccvTqR7dqDXzNpEg7E71qIG5hnuK0Wi2cnt5oBBVSNShjH5TQAbDHzTQCsQomrE4NUCs6zc7TgVLyxZNDaspyqoljgmrk4fSAPpPtW2lCLqAM96NGDNAmBXF0avDiZIDUwWFAIH70q4+lSA2SayzcLZ3A3nrVCr/DW3PMBt7EVPc4HUvJE+a9BwrOZHjeuKou/70lsT15Nn/D2a4VuKygCZGxo7n+G5JtsV8MJr1gqPkMa3lGCwmr9VMjxf/4xwJN1Z6ACawf4c++sHO0RXssVU8oAPQ1Hxl64FYnJAytX7p8mWHVLaqLcsNzRPb1A9O0dKk4fiEeHckLHaqBfV/pA0/vXO2tkOhUgEZ7ijtsLkpdeEjBGwp+kNiRFefeuXeHuEXF1ICOZcR8VePaVeLSgw+rTGGkUL2VSNR5fGakPFhhyux6ZG1ZqJ21H4q24TtW9tVgpI65pRMuCcKO1CrHsQetH9Zhois61jg+htVssD2JxVOsXbfKRMSyHMVO2kYFCq62AG/TxVlSw4hhlhHnvXSPHemEhLAD3C0mCJ2pJW3+VwR5Bq4mj080aST4rnL2iCoKjwaWrorAzMdIrn4uSVdQwPbpTU1zMW3O46npXaYUZz1pKkk9Ypg3gmKzQSgA0RyMUERBmtLYmoAuhWlDsRBFeQ66XKzMHeN69S64RGuHYDYda8264eDnUcsfNdv8AmzycDpdWdRBG3cU27ebURb+naaWSOUqxIAGD0NcR6jHSOcmAo6963kZAzMzSxJI706zqRTdG+ynse9LdVDQjagwjIyD7VwMKbbCJPXpVHb5ZiW81gUExq60egOx9NWbPaiPDXFHPC+C2aDllRCsI9q6jR0CgG5c/7RiuoCwpVdQAIkAf8/5FAzSoEjqNJ6jpQqzMCG0BiPqIjHiu06Ms5PTsM+9RQQSdJIMztnbamLavLaANstbIkjsaosH0xhrd0dlgVlziGj6NIMZnegn4W4wYWyZXp4qwbeakB0qGzqUQI6R/9ol4kGA40nv0rny473GpT7cC7bLEAAmCdp6VJxLv+IeSJBIxVnLctkGCD2pP4RCSTcJ+KceUnqWJxausuoIY3msTSVOtyPA61TxDBLBG04FSbmtcbrKhbaM4Nm9Ljo4ikm2wIR0YN0xvRFECqRcmfqGnIojcLtpa67p0Bj+KvakR80YjSGBOqcCMVTqs3SEHDwTuZ0xU7qtskFiWGDEEferLqYIk8+qCD5zWl7iGEc6SJB8UkKSBAmqrPCu7hGIIAk5kL/tQTgk3JLRO5rGJD4Mx1Br0P8SsIiTbCrBkwe9QBCTyjV7UgK1bNwnBgbkVS/CXEtEA6Qc6Tuar4Lg2VJuHSAZIjeu4lVuhn1KF2mdqmmPKSdypOIkDatIK5YMPfFExUHlZiAZAnrTLKq0kvG5O81Qq2hIPQb0TXdI0g1pEbBiDtiJ9qS+CcR4oLOAt+rda6/MEIgdz0r0gJbmgHpXlf4Y2niSemkye1eqtxVbB33Jrjz9dOPjmQwZOOwrrZj8kUwXEnLCuZ16Gsa0WwUkEjNDpecRp80LaS3T70TtC7T7U1TAumGjPjrWM4JDNgAYFbYDm1Fz470bqoG01EJt3SXYKeUeN6Y3MATM+KWiBCWXA7UxDIJoObK9zU3EEMNR22qg7RSHwuYgUHmQbN0AQUc9RtV1k6QAzZjbtU/E2vUBg5mQehpfCXicEnUNjXS9zU8uPUtycnatv2UvLpcSJneK62y+mCe2a43BHiuap7nCp6JtqsJM4rzuJs/h2UK+SJicivSvcbbtKVUFn7dvevKcPcuFiZYmYmu3CVjlYAMRkEz71dwl57iuWElAM96gII3EUbaktxsGg4O9dLxlZlseizhgSDnauRypBHTvUvBn+mw7GapRScmuFmV1l2KXvC5YaSAx770j1VUczRO00q44tjMknYDc1IbzawzAGPykYFanG8mLcW+qj4U53o2SFVu9QPeLOrDBHUVcjF7KE4nYVOXHEl1oNHBYz2rFWQKC+j6GVTkjesxTNaEGLi8u5nalNxVkHSpL/AOkVHbYLZe2bYDsYLN0+KFQSWCmYE4rpOETTXum5cT1UItqfpmk3X9S+z4AY9q0EC4qqsNMb7Uy/psnREtOoEYitzJUYgtJdALErOQFNZ6SO8rcUL1JxFIZtRJySTOTXCCeYwPatIuuW+EUIQxOMsrbn5qa61ksPSVh3LGZpIBY4BJ8UbeoUWQdI2ximAjfuxGvHZcD9q7QxIe5gRIB60r8tMVRI1cx6CgYb5/KgbyVmupluwugTH3rqgWtxmH9Yak7msYp6IXTzdM7eTQKYPc7ZrZ1nmIgbVQBl3lmz3rQwDGJmNyYoyjlJW2xHeJpYEk6ht0oDeSIBkdR3oWwxZtz0FFayGMxAyQK5LbXFLjYYzUCwSuxI9qOxeay0jKncGsFsk5kDvFZsI/tTILBxCnSGGnVtkGu4oA2dhMx7VGELHlExuaqBDWvSurt9LKZM+1YvHPGtSkwSCKJYMDSF/wAxk1S1myTat6xqIPOBAPv5qmzaCBcBmOxYbCtXliY882m1RE1sW1DAnPTTtNezbsAuTCyTMAbD+9KvcJaVv+iq53B3qfS/LyAY/aiRtTBSSE3IFWX7AIOjSp7bVHoKvpICknM9KssqWYc9w8QujoFgE0zhnt2w1kA3LjGB0BqVtSFh9Q6mis8hZ1ABAxPSriPWvXw+sTpQCJB3+K8p7bXLui3LH3oNTOwUSPc1zAkwpkAZMUwX2/wlhCt4lnKj8sxSn4qwoK2wxEQMATUhVljUDByJ600j00xoJI3A6Uwa91rjBjAA2WMUi5JYkiJpyXGwCiXB1GmP3Ga7iNDEabXpmNg2oUg7g3ChxAnGetU+riKgRLkzbBMbkbVcypoUq6kxDAdDXPnx/W+PIQuHrRi5mkbVsma5419KBcAOTRK41SKlMnatyBTDVoumYms/FNqYEbVGWjrXSSJj5imGqm4gMcmhW8QQAZFS+RWqzdKfK7FhugDfFTXrpJ5TQyzY3rNBjO/ak4mtQs2OlJcBbq3BiBDVbZti2NbCRE57UllXUVKkDse3mt+M7pY47SCBzfxSjxFy44AuBVOCdhVNq1YU/Qv2mkccwJVEgBckVeOb0XS7oHqkIy3B0Y9qEJcIJUjsQDmO/tSgYmtDkgKWMdprrjmMKzAqo1kAZGf+CutFCyrcgAbkjxtXa99LaFPQSZrPShdZMKdp/N7UDbSvZuAlSEfAkRNXcsAgjGTXmO1y5AY/TgSdqrHEK9tEUy74PjvXPnx71qVLDgrcBkk4PmgaSxPWaawKFrbGY+kk0sNAMgGe9dIzTEt+ogCkBhMz1roZXTUTKnEmgtkFgCYnrWMFF2EaVnc1B6i3kQhCQDEieua13LdMd6g4oRd1TqDDlNGOMK2Su7TjH81y+OumtZxkLcVgBJWphqIMdBJondrhliTS9q68ZkZMsMUvKw6GdulOvWhcd2QktO28+xoGVfSLqV5sGTke1Osa2tWwFGpZhien81Lf1YmVtNuEEMcEn+1LIgwZmjvL6d51zg0bO1yyJkkGMwa0haNoBgDOJjatd2do3A2iqOHtWLkAzJWDJ69KVdtPaYcrAjuIpoXIGnE96fwdv1+LtqTk5JNLthR9YOrz0piIRc12mUMMhZ39qlFP4f1HuEysNETMV1b+IQ5bWCcmFH966oqDGYWB19qK3ABMjuCeleld4S0y67av3xkVBdUqQXmScBsn7VdRTY4lfUUPLIMcmwNNuJY4i4SP6aHfFQXLvpsAiskZy00+3xYKhW0g0wdxHCm2g9PU9o/mA6ii4d2scOBjPRhmT1pqOBazlTlgDis4srdRXsprZVgx0FRQ2la8xW6ueojpVL8Lw2lmVVwuc4qS3xMcM3pOVuAAMX/tQ+qt1FtkPqJ5iNj8UQPEJbFqFTAzqBxSFvBUK20A1CGJyaddIsYsvrBXBjYf2qQKT4rUDbagsS2817KQACwjrHepP8PsBucDwvt5r0btjXpUEKsbd65crtahT3YcHeexpdy6boMQF99zQPbYSXme8TTuFFtmIJBIyDUUhRqkkQR22oLiK2lrtrPQzFVta5nUsRGcCcVKyExrhcbdT8UzAN7hbdy0GtFsHJPXxSbFuwZN25B7KJpygK07jrNTtYZnYrDKR06fFalZwN22gckEmT+1Y+pRrWAOkRWiJ0uCrDOf4qi3whvLAXQRnUx6VrQhnIsDUupiRzzJxSVdgI0gj2os2rpQ8yg5HQ117ScohCjvNVDFvC4ArWhqn6hvFV3xYS2NOpHIzI6V5s7ECCKaOILf9VQ5/wAxIqKaVtH/AKV0wT9BU796M+itouGAcYAXp7ih4fibNljcNpdQOBJNLbiFa8zC2NROGZtu2KYKGvW7SKdM3OoLf2pbcQ557lkqoEAzAouHspdZ71xmKJu3UnvUjXHucpuMyTiTU+YaMX7jEAHTPan2eLW2vMGcg4IiKkIAnSfFcIhgd+lX5hr0NQcHmUO0SYkjx/FUfh7SJpVw9xtpO1RWCy2x6eJ6gVtxHDQ5zg1zUZh7pGqJPUQKf+GeSWYEHqCIqQAF4LQp3MVZw7IF9JyCCZGdzGfirKA4eyru7sx9Mdx0oipNzVbj68AZn70T2Xd/6NzkP+alG4bPEujJqiSxJ3oNvXDOliW0mBNILljLGSase3aFsl5BzAG/zXm37oQGBntUu1fDy4VCUEkAmDXnKNbEsxk+Jk1vqFgdZJboe1Yhi4Dgidj1rpx44zbrSqL3PcHFAxEmBFbu2THmsJ3EzW0aqgkSQB1ozcLE82F2nFKraA5wJjrmjW3cGlkXMghpEClAwBRazq1AgnrI3qA9TNcm5BBwcTjxW+gdSqHUE9Cf2oFcajPKpOwGKIvbjSLY3kUGG0yNzAiDuOlHatJdUAlluedjS2BJO4gTBNGzaNMbadwSM96lFFoKVayyEAflJmPY+9RldLNBwpPzVqMLgyOZcHpBpTaRxDNcTWI22BOwNY43taQukNnNO4ewSNVzC76Y3plhUAMhfUVjkZpv/M05cvwkS8R6Ru7ENuegpVu66XNSxMRkdKdcX1L5/pkhVnBjUKB0Cf8A5GTsNUx8VqeYEsZMkyTXAAEGZnoDR7WIjmLV34dypdSpAzvV0clz0Lp1IDIj2q61/iKXkFviLQc7dp/2rzvTMEntOM1wPLAAmd+tM0e3xP8Ah6suuyRn9Rn96867baw+loHtRWOMvWdIuDUnkbV6d27ZuWZJGiN27eKng8cXD3B966iv2AtyFlRGzGDXVUWWeLcWbnrIxExM1IyEu98IRbB5Z716d69bs2dOmIEDr8YryeIv+s4YAADAHapApjqaT3ya5bbNEAmdsb1jGWxV2m6/puqGQMFYHtP2rQjXVBClj0Iiaaoe2MYaYDA1Uipw1lTcYi7BPeut2w7AhxO8nEVNEiK6NzyJIyTHXvVljhyES4RpdpjtB8066ba31uELoRdMHAM9ql4riXYaFblGyrEUFVlOHtDRcIIjcDFT8TYsoNVlwy7x2qK5cZ4DT5rAIwRMdRTB63BQtvlyHWRnaqbMOksWLyQJNeVwtxbd5VDSj4E4g16L3fRaSgaZNc7MbDcRrgKIIJOd4obFt2S4QRJXlMfemXeIttBB1CJC6Zg96nVxMLIzjxUDLLMsqSArbgiQa65YJP8ATKE9Qp2o3ZTbBOSBB5s/alrduKAFKoh6ximBT23Vgrb+21Ekpmd+4ow5DqVEMBzNMhq0IXsyDmdompgwqt1gDaTJ3C0F3h9S6bZ0FdhOK49ASSexFMUGdx8VO2pI8u7auWrgDwDvIrnJgM0sT3NVcVcB4gIw5QIM9T70i+qat4gSZzPiu02ztzvpTABgVjI2Gaw6SD0I2810kNrWFMyKK4Gy9wSW2M1UAFBEagD2NGFlRHMZ6UJCwCJgHNapKNAeI65oD9ZfTdFGjUZnfHal2/rABAzuaxgJ5FaPajNi6qByuCYjrQbeZS7aCIkxj96V5qq0i310BlW5MknrXXuEu20iJjJA3oO4a96dwKMjbNenxT22t6dUsfAM/PSvIUjUvUjpG9etbs27g9QDBGANge1Y5RqE27OsQokjxRM3oaxcRWuHY9qoa4LSaWBBBw460q/dS6nRjBjBkVAdm4lgFUEkj71124guQbahxMkrNKtJoI1AzkEHAGKAurFQYxIIyRUVl1wNRChl75Ge/ivOUhbpPEWywJ6yK9MOqjlQGJ3yD5qDiXN5yArEqSWmtcGaHiUsQHsMMzy5wKmpyBCpBB1RygCZoHGx0x8YrpEBTLbqkygY9J6VtoIZ1KT/AN0U8W7PQZI2kEfegWosXFOo+m3sTNGLdhZVjqPTTkmtt8ItxuUkAYMkR96tt8DbAMK7eUFS1XnXkBJCWCmdyZpLIy7qR71654Sw5ILlH35hFTXuDldQIJHnBikqIM0+w+idQERtGTXIAL2i4IEdBEVbxPC2nS21toJ5c4Aq6IyLaoWB1Qdz/tThD2VKiIP7VIHdDpnAO001eJbRoKoQQZMZ96BgIRpQMR1HitvOHs/0yGJO0ZipxdbTvttR8O0XC2oqW2jas2fpoBcZLjRAPWBijXimEyAfbFVXWtpJW5bdj3Xp5IpYtG+ZW3I2JU4FT32KXZvHnDGOXBJz7Cl3ypbXbP1bx0pjcN6ZBMxEyCCDQjSQ2oaAOpAB+BTrdCw4mfSBJ6mTRWrhBOm3qDHaetCzieUH5NCXJiIEdq1gt4e7ZgW01Kex60TWLbHKj3GDUnDIzPqVQxXIWYqkXggIuowcDIGa52WXpSr9p0Xllh3A2obXr2VMs1u2ckzE060WvWyr7mcLgx381KLLKwIZSNwRWpvlHeldu88MwPU9a6ii+6jlZgBAIMYrq0jj6ttmtsSpGCCaWQF6ya245dyxySetZ5OTVRwAI6A9qc1xTbAJMqCARShgeZ2owAxMqAe21AKX3U7k/NGb2n6d+xG1AEEaiuPBrlU6pUbd6A9bYkySJntQSrHYjsJogx1CVB8U305MvOckrk0GLwjPiCG7VycMSdJKhgMLqyasNhPTFzSLg3BJ/vWHi1wGAI8ipohILn0gMgmPftV9i4L/AA664LDDUl0V3mVE/Y+9ZcR0s60OUGCMEVLNWdKhYBhVfS3SScmgOpG0sIZehpfD8R6kq0SomQP+Zq4onELDmLijcb1yrefqR2DNlSPHau0xqGvpsOtXpw5Nso8EjYmpblh7Txk9QwGxohABHXNPDAgAIFB6igYAMep23msPjFTWsE1wxBzHWlcRxBtW4BILY1Dp7Vu+JqbimGtF6ASavHupfC7beoTqgwD9Rk0H03Mc2k9NqzqzyCZrEYqZU8x813c2zAzufFNlnREOCnRh9opDSG5p9qcLksG1EMNmJ/aoGRrQQFDYwh/mjS0BAcaSTtG1St9Mg7HAO9XcGUdCjKG7EeKigUKrDBk9RQcRce3dhSQwwSDXo6Ftg6UJuE48ea8/i09Jxr5ycmcTSBCjROoQYwKdY4t7WZDZzJqcwVJBg9qyMTqG21VDSBcvcmJPWvZtsq8OpZmCgadMzPmvF4Z1t3wzbfxXrWnKiGYAE48Vjl61J0XfYuusnqRt06VKSwO9U3NEAZMd6QVBEg5FZqsDd+tOtkHRIBA2AME0j+a3VB2HzU0UEMyRoMgAT1Fee2ocW6KwGpoknHzTLnFv9NtsRBM4NTH6uacnNdOM/WbVFywFvQtxdawTpOx70xi7W7q6Sy/UWnINPtWlZSVgBVnakcPeVeJaCChJw+JjzUltMRMdLYEd60Mp+qas4jhla5rkWg2QPqFQsulokEdxXSIat0lkUAwOwya9VrpRUCrLETpDbVLwl+1w41i0CwBk0u7xQvcQX0gA7gioKbYN2I17yWjAz2qg2NZaCjA/VJiT3rzTcKmQSTMkZzT14tTbyV1dv/dMVQ3AqTqdwAegqe8Q9uNxP0DtFMbjBcxqHtOalvKxzpJM9+lSCMiCRR2VLOIE09OGVx1BP2qqxwRtMtyDyiSSd6tqYmtcLcN4powDDA7CuvqisbaQSm0V6N5v6Bh8HfVJFeQ31fVk43qTsaq6yeaCF/NWqyoxBTWvUTSSZJ236Vonoa0K7V4I+i2rKH2ESPtQXlF1QVWH1FSsbeKC5xNy4YJnEBQKt4XhWKIIOvfesW4smom4VxoAXJ3O4qz0EIIYavenm26nTpz2FZp+K5Xla18vN4jTauKLXKV3gmaLhh63ql5JIg5qy9ZW4IYA+aGzYFkNBmTO1a++k+UjWkU/mDAA43HkUl3knOqe4qviQwIdJkYMdqmCi79UIf1bA1043YhJJO9dRMukxIPtXVpHHxW2hNwDPxRG2VyRIG8UAkHG5oCxpnYjEdz3rGbVmMmtA1HOJ8VnpvMaT22oNQ9yK1ebEGK0pyjTnuOorgRkDHvQbqhYjE9q5bmjrA7DFcLTs3IGIAnvXGy88wHsaBlu8VA0sQJ6U9LK3l+vbOOnmplQ4GnfvRhmsPn7A7VBXZtqpIK6iD0PSguIpEA6e4M11niNaEGQ4XPkd6DiiVuXCesHHSorrctedoGFCwBEVaFuCLmr6Rg/2qWwQ2pg5dQZkiKZ6zKAFMT+9c763PHoC4ttFVmJaNz1oLlwMg5wucZivP8AVciWhveuZmcySZjFNiCYgMTLH3oWYb0s6gMihDJrm4wgD6SdzUzaa1ryic5FCbtp2i6OU7N+mp3bW8xiIAGTQ7jH2rpOOMn8TwdzhnDCGttswzSLiFR0jvVacW9tNBAe3H0npQXUmyt1Mox+x7GqJnlhMgwKxSQaLTPTMT70IEtWkMEiP4NMRtGVJOcRiaWn1Q370wrqYBdjuRtNQVX+KZQsiSRM96guO1xpMmqrzg20UcwAnOM0gjlABKk9ZxQKho2P2rSjKJIIFNK3UQyuDjUDFDcv3GVUJhRsJoA0Np1FTp2mKv4Zi3DBtmVonvUKluh+Jqrhbo9P02gfpjvWeU2NcfVA1QdRmaCYo1OM7UpyCxFcnSuYjSABkUJH+1ZSrrSVXUQIzFWTWLSASjypgg4ow/qXF15z0FZcQpgjPcdaADrOa7/jD0XulLDAYMRUJUqxUENHaididJdzB7DamNZi3ba2wYncatzWeMyLeyg1y0rW4jM7ZrrRBmSBA3Oa5iGPMCD1oMBYg5rSGAMbcT4g0uCBBkfxW6ogg46CZo1H9P68kyRE0AjWxiSYFEl3TIZZ/kVy6naFXp2oiAR/UDavBmis9VQOXHcEVUilCDAYLGQ2PaoyEnZ1zmc0StctAsjcpFQenaXUpws9CTBpssBp9TTG2ARUvCcda0BXQB4yTsatco9oQVznJrNEl8apU3FjweledetaMiIOwmavvoSpzA7xMGvO06X550/5a1EbbtszMwUHSJI6VYvD23XXoZP8vT/5UvqRaBVSBMaviquCu6rcSeXBz0rPPc6a4+nWwEEKqr7CKot3fT5h9qSSJxWg4rz67K2vK2FAII2OKWbTsoxEn7UmCdjTE4i4uCQRtBrU5f2zZ/TDbZOVhSzyY3FVK2sGZEbUi+p1RWa1CDA2qTiFZSXXI7ETFVRuKxgAM1rjcc+URDh3uDUpEHtXVju9u46qxUTsK6vQ5q+I4O96YKwY3UUlOCusQWQgbV6fqzWi5ynEz2NTarxzZYNBEeTiuAu2+uVP071fetl9i+M6TmK30UaCQW8f/KuiNOJsx/UsDVO6mJrfxFjSALJZhuSTVT8EGLAHB7D+9CvA7xOMxtREovcPPNw0ezEURXhHgo7qf0nMfNOvcLpUkDVmonWgpPCoGhkuEMcMCCKaLIRB/SIUiGa4IqazxBQEESp3ESDVbB7LB0b+g/fOk1BLdPpXYUYCkb9DWtcN200gx9RbvHSqJtsGx6mkYC4jv8Uu2HW8QbZVGyB0xVG8MNHDspENOa1vqxWpAVgPihyDXC+uv4MQBFaNsbUBNLuu6AG2d+lJNZ0x3C5I1dh3qcWrlx/6aEmckD+TW2zNzVcyYnJiR2ouI4m40W0aBEEKIrrJjOse0lkf1HVX/TOpv2oFVX2DA9yBFBI5VABE7964LJ+qI85rQJ7ZmOvSRE0Vi8LRZGBNt8OOoofUgc3MvWmXLYVRcEkeO1B1+yAguW21LvU11PTfBlWEiruFYLcW0xlTlT0IoeKtcpQAgatSH36UEI37imSHH1cw26e1B9cYClcHzmjdTpMCCuSKo5izfWx5d4M9aFV6hgP9Q3rg+ASQIFcxWALYIxzZ3NAx7ruyLcgKPyqBmjCa49JdTr9QJ5j7Cp2OFGo7bREVqhkMgwag5o3Bz1ERFYqs2RuDimtfL/Vbtse5GTWhbcElTbBxIOoexoGrdYopMiRXFqUq+jc03XBXspyRVjWuGuIwUMjTvJEe9Y+WvpLcuhB3Y7CstvZZh6qsr9XVv7V1zhLqtqtrIicVOZ1QZDecVqSRm1Rd4a4rldWpMFWnGdsVO6MjQeuZG1UcPxDoCoaARB8e1WcUlu7b9S2ouM2xmIq7g8uSIM5FOttCkhiB+kzFElsXOXTBG++a9BEWzaPplyp/KpGPuKWo8gtJJP5t65CS4iJnrtTuItDVKIQNs0pkZBDCPNUYZaVkRvXIrIVcCRO4zWFTA87ZrJIwKoct2FGApB3jMVh0OZmCd5xS9WVI6CmhlJJHLNQYGAkMCJ7U2AIKsvNjIwfegCkEqxx0xg1qrpvBYJB7ZqDmtENzIV8gTRar9vCmQOlW8HatMp9S6STgANVR4WxEDVq6Zqarxm4h8hwRq7msDW1uK31L1gRVnE8NoIUspAyekVI6lV7DeNoqor4mxZbhSOHONWrJ3qLhGKXxjcQa21fuWSNIGn9JE1Xeshit6yChYZEYqXzFG8KJWsW6F+s6R3NTXjdgBmC7nBpJaZ1MzdhXP+Nv7XPxlnpqY+BWJxtt20kaSe9RKpJlSAd96EkR1kVr+OJ9165vQsA5rjdLQJ2ETXm277dckCBVaMGAMQCK53jjc5aKebahdhnVGO9EXCiftUnFPIAx5FSTazypFzSzltW+dq6tF1QI0T811elzO9V/P3o14hhiTHalgHVGTTEt6mAPXY9qgt4dvUBKtnp/86V34h7c+qhEGJqMF+GeRg/83r00C3rcsuR0NRQJxCvOg/ejd7kQqe+amvKRJ08wM460K3IVjrGo9JoDu+o6EHAqG5bCnuT0iqbrEkwCRAyTUrLDY61UL2r0f8NJuW7loiRuKgKiDODXo/4SQrOrCCRialWIdfpXZM6TKNHam2WAW4jNBtgwQN+lN/xHhCrs9sSGOr270m3bYW9JGXwI3Oab0GWeprrkaSwBMdBk1yYFBxN46DbUEedq5SbXTyE3b3MFQsAN8QZpds+oSHJjEz2pUw2Z/vWo0Ag5JrtJI52ntc1EgBVU9IyaFlhi25/k0kOwERIph5iACIHX3qowBWyd5+1EogdRnrWEaPnJo4xIM95oDNq4i6rQDhsYqmzYZbBFxSuxOYxU1m9csvyEROxq4f4gLo0X7P8A3DNShPCC56xXRGkSkZx1g1bd4dbiQu6MSPnpU6cYUeBcDIRAgAR7063xan6s/wCYGs3VQ3OAPqsVnedppVyy6mGh574Ir1W4mwWMPB8ijS5aKnUVMb4mrpjwm4VlElgPeksjKYK56V9C9pGXWpgeNqma2oOrA9lGaujx9LQTpNOs8T6QhrauOzVebxkyoM4IYY+1ATYdYuWQROCpgimiY3+HuiGs+m3Qq1Lu2YEoxYdiIMf3r0bfCcI4JRioP5XiiezctnPoFei4Ej5po8XY/wC1MUuxjUfk1678Lw963y2lV4xDbe8VH+Fu2WC6dQbaCY/amjbfEcRauI1xmdfzdcU3iOJ4O7GtS5HWKmucPdCgsjLGJIpbJpVsrynPmgpI4O4x5tIiBRJwV62jG28+DiomInVbUqO0zmvW/wAOOrgzpeWEyD0qVAcDa9Ry10MrJg+adxDMtzTpGk41f2oHuC05UMAxH0nvW6znBHeaisa8qMAwnHTINcfw5BDBVB3mhu3EtyEA+1SO3qMS37RVRnE8LoGtLcp4NZat2GQaiy98ZBo0Ny3lCY3iqk9LihDKFuDqBVHn3bVtG5XLINwRBrLcKiSE55EkTFW3rEAq66YnS3Q/+6newY0sCsmVJFABtMogyCf3rHYEZGryaotWCbUlsqYM9qX6NzWIGo7Y6UCEAmVMHtNXW+K0f9TlMZ80r8Hfa6LRUqWBPMMClXUuWGCPAkSJMip6KL943hrXIAjGajaHbnYnO5NHbJtkkqQerUxFLnkUPOSFOftVG2HVGAgMhGQcirrZF4KUEEYAio7tpkaFAaczEGl2btzh3OW3yvWoouKtvIZskjealZSWGxJ6CvVN31FDEqwYxBE9Kl/E2Ux+ESZwQaIBbdlkQ+sVbZgw29qG9w7W4aNaHZhtV/DcbZuOEa2ik7EqK9H0wbZOkT4xNNxcfNMgiQG+dqK2xUQJ8aTvVPFWUS5GkITmO1ToHa4LarLE9OtX1BAXbijSx0ncFqnIAYjMA1VdtXeHkAiCdwQf+GhtuqKcKzfxUhS3tyQQQARiYFdRNoczqtjxBrqor4O2Ll7IwFNZct3bVw2n1EETynFbwN023eBqldqe/EvuDBPWBNAhbJOAnN3bAHsKtTTZtBQdh1qR+LuFdh/FTa3dj/UUe7RTBRfvBpEb0FhdVxUYmCdzS1XrOqdop9qN4E9Y3pSKOItFLZVSfaKjdCBJECrTdkGTIO+KmugENEk96kE24IO4NHaZ0Iu7aTuKU0g4G9XWE9ay1tjpYbA1RWx9W2IO+xqYMjcRbxCgAdo7jxTeEUqgtvOrpQ8XYKsbiH3U1lonYSdqRdLsRpHLuBRlzIEQexO9daYW5JGtD0napItvRbhbiyRJmDHSkXEtoY0tt2irNVpiVRiFO2YIrfw/JObncTmtsIFDNy6dUjr0reZDIGe9Wra0MQVhencUxbJY5Bj2mqPPILACInMHFGNSAgie9O4m16UFl1LP0mkm5ADWg3p9iJigwMsYzTUCHfB9qQ5QnUrET0HStS442hh96B13hrg5tOpf1CgVTbOHimW7oflU6GjOcGityNlVx4AP8VAEEtuCTWglYyQPFUqllxhdLdiKF7LrOn9qAbd0oeUsJG24rvU6f+qAAzBAmihisHbyKDAx+PPStdRMlceIrltjqRHirV4VSkqDHY4oqBhBGmR71p9TTOqREirTwS6DCEGMQ2KBeFJYgELI2bepoiGoNkSdwYyPtV/DPedTKSRkNnP/ALpL8M5y2B0Pf2orRucPc0lge4nalGXL1wMW1NB/Kw/4RS+KVDZD+mM5JP8ANXlEdfUC5IzUl9XvOqhToQSF7nzUggWy93mCcverP8LtMLjvBCxEVUlogL0LDboBR3FHDp/TJB2icVdEXGw14DIalXTPKrkhcA11wuXLE58UEnAGogVUZckiG5x56Ua2TEyKHQ0/SZog5GX9vNAwKFWZyOkb1lrQ7AQVbxXTI6fFajC25Oj5maCu3dKgW7v9ROpO9Hc4ZdP9NZU5xup7j/akLcD/AEkT/FH+I9MgQQTgBRUxSp9C4uvUB3AMGg12vVJVgqT9h2NWLeJUhlBB7x/FJa1w7TrtquNwKBFu/N5lS4xQLCgtg0q7ZW4S7GGPWmtwAgNaeAe5x96eiBgRdlWAjU0Gfmgkkrw7qFOpIHxSLY19NJ9quexrGnM9IMGphZggHDCiG27rqpR2YgEEZ7UN+0L0suZM5MEU5LaMgk596FrBBlHWPNFDZuPYQroFwTMEgkV3orcMki03fof9q4m5b6qRQi9p6ZojW/w9gpjmY5BU1Zw/F3FTTdQyOhGaHg7yS2dIp9zhhkhtI/ap/qk3H4fiTDSG7HBrLNheGLFYJP5jmsa2shbihvP/ALqjRotBVIdowxoPN4+09tka2RobeO53pVnh34hgqgqozJ7V6b2fXt8ygMBOKltKS4UbTgVYMHDoZABGnH011PfhnuNOsDpG1dU0efaGmJ3296YwDfG1GV6SDHShMdK2ySbTM2Wo0tKOWC58VsmYMx9qarFMAADrFBqD08BFB7STW+swwVEeKE3kLZGT1BirEsKyDTn2NSql9UTzAiguurrAmmPw7IGgYFIYaWOINBoUFQW2GDFE6tZdSJDbgnFLDeenvTHuq1rSQSZxjags4a+LpGIIG1OvGWXEggg+K8lDpgmYGZG4qxLxvLpB5/OJqYunvZTrilXFtAaWcQfzDBo0utGl5le1Ia+UulWXUD+ZcUQTWhAIi4PImhFoO0FDnEKaxFFxgULqfGxp44e7cB/qMGB3bpVCxw2NCqxnInApg4e6pEsIAzDRT7a8Qoi4yN5WhuWy7STgfNZ1cIulr39PRC9M0i3Yu2gQmUmrRptid/FC2pzKR7TV1EZ4UN/UMjME023wFt/qAnoe9W21KLBBPvS7lyyridIxmpq4BOBtgiQY871lzhks3JFgsIwy7im/iE0whkDoK1eIUiCYPY07XpPctC4pJmB9xQLaa2wzMEYqktbYQTk9qBVUYW6wB/K1VkkFUBuMoMkwKcLrushAVH6qG+moxqB7xWIugeizEq2zDp7igZauWmTUEVWGw7+1a/FAGAxBjNZctFUPp3Cqnt2qcWRqMvPsN6i6aeJdt465Fbw1x2YgGBMkmuFpY65/UaIW1gjUtXobxF0C4oYyFM7VI/O4YklydztTTaeDDRPShXhiSJuFT5EURVaNshYwRRsuk6k+R0qVbekHVcn2pyMA0Y099VTF0u4zOeVip7Gpb151EEz4NXl1EzDewpVy3ZvNzg+KsR52ssZMrXQT9Jcj3iq7nDKAfTf4NTMjqvNlaqMJKgz9gaUxjpRQMkk52rihO0mgK0QQQSRTQTkfFDass4xAC9aIiOkmg5E1GVwR8U10uBVaBHeaXaaLkkxVDkC3FFCra9lx5NOVU3uEewqQLGYON4NOkESG9xOaYaoYoDqSV6V2gXDC7eNqBbYIEODNOtpGQ2anigSxG/TuelKv8OGdjkT1qzV0PSgulNJB/Y1B5DhkbSGx71tvruT70y/6SEkA/JmhDiJUZrSCCKTkfc1ly1bP0sV+aZa4Z7il2wKFrIUmcr4oAslrFwMpDf3r1bYBthkBAYTBO1QWwuiOk1SlzEEgDbapYSjnU8YDV2prcgzilsCeaPJNMtuGwTJHc/3qKzSWyTB96SYQ4XaYNW8oXtUtyILRSFLuPDcoAHuc11KLz2rq1iaNQrAApH8il3LJ/Jn33qgoynvXKCD9FB5zq4MEZoeYdP2r1Sqn6lx7Ul7VonDQfNXUedVNm84UDUYFMNgHYfNaOEc5A+KCsMb/AA5I36RUN22bZ2OKoso9uYjG8mnyCJaCBWVeaF1bADtRHh2jUBgbntVoe10AB/00l7jsYJkDoKCUIZ5dJ8GuBKY2I7inC/dQkZg5yK0Xdci5LL7ZFUHwj+qYddR87/eh46ycuCYn7UC3Bauh7Tah5Ga9EXFe2GH0moIuHUogSNsiKq9QqMHlHVhml3Wj6cGlMbpH6varmpuDPHANBJB/atZ3IlTM1MbcnUw0n704EASJI+1MNdN4qZTPeKSL7IdIVlP2qnU+4kCsLK+LmfMUCTf1iH9Ro2yKWHg4AHgiqmeyygEz7xSCeHzAbxBoFs+r8x9gIoWAXYgHzmqrd/Qp9Gyfc0Xpm8QXSI80COHHMWd4WqHQHSyyAdlJyaIWCTLYUdKJrYa4pOAuaitRdFpicadiaLUtxQWAXHSsZdaiSVXtUysysVywnBFJNVUEVZgnTvWMAy6kAkHAOKUt2AVaR5rtFwkuhB/y9KYmjAuFofSF6kGTRNYtRLaiO80vVdE+okDxTVaBDRFBJetvbnQrBfeRShdddmI+f7VfbZQIViRXXbNp8sBNNEI4lpyqn4ijN5Dumk+Kqt2rdudIrGS2zS4nxFUIRwxgNTemVmu9G0DK8vtWsqRyhvvFAB9oriAylSRBogpMnTPaDSm1AkFT9iaI30VCwEU0r0AzCdvGKJdZOxA70xbTn6QCPOKowlEt6QPgVO8sJx8VYOGkbkHztQNw7oNp9qglSRcBOwOZqj6gOtCbZ6CugjvVGOcHFLBOIIJpwtlxvRjhl6tTQFu5JjmnxTfUI6tWqidBRBFHtQTtxFzUYUn3FA3qvnPsKrZgBgQKQ7Mx5JFAleFcnKx81XY4NAAWOrwKUtu4WBZtu1WpJETFSrHMMQDAqa+krApt7UtR3rhJIyPFJCm/h1UA+poJ6VgtIrZu6j4pSAucuB5piqky10n4qoqFlQkAQe5ogqgZ37yKm1sTysI/1Gjsq6kl2LexrOLpxdQJGfc1LduPcMDTHim3FD5BIpDIFBMn2irAvR7Cuogy/pb9q6qi8gGhI7GK4GN64sO1RQNr6EfJrgJHOi/FECO9cdJ3zQCLQnGK5kcZVVn3ogw6YHiuZlODOaBYN1jzIPvRgCIZSI+1EqiMMCKMDHSpoUVAwF+KFkJEC3/aqAIrJHUCmiX0n3iK08MCJIIP7VQXIOBNCXY7UE34Vdzc+y5p4UBAqECO9EDdA2X7VvNH0KDQJNtgTpEjvOTQ+hcgQKpFwjBUVhuDoufeKdmJhYY9vmtazdj6lgU8luwj71mmchRPg1dMTm3eMAssVxsXDgH9qrQONwPvRFgN5n2qaYi/CsMGfvTF4eIJI/mn6idlJ+KOI3AmmmJiEUZyR2FMSQMKfkUZI+a3PegAqSc7dqEkhvpxRkkCYH3oSGPaKBbFmbqBXAaTjPck0yI7VkHuaoxraOohVY+GiuTUuCqgdBvXKoBmD8UXIcZqApAG9Lu6WENEUJt/oafeuCtEFB9qo1WAAgTjcGhe4D9D6fBFGF04Az7VpV+oX5WoBtgsOYrPisKN0WR4NboEzpM+KZkjK00KKv0Qn5rDrjdQe001VPWQPegcsDysftV0DmNoPhqNVwMkHyJpeq5/9FcC+5j7UBs1xM6hHsKJWdiCCPmlg5yw+00cKREn4FA0TGYmuKk70I0jq1bCHdprKlvbjagKYzP2p8IvauMnY4q6hIKAQJn2oXMEY+aafMGsI7CqOUmJAEd4rQCwwAfMxQOGJABx2iiVWX2ioBZIIJArgUAyINcVSeYGfmt9JWyJ+1VGiCMUxDHShCxitgdTUURTUN6nuWDrJAmmnT+ofNZqQ4J+xpBP6Qg6wBXC3amCx9xVXLGT96AhP+CrpgVsqolDWqur9I+K2Y2LV2f1n5oCLTjaOtDoY7hftXA9zJog3TFQAbTdIHutdRk+RXVexpcEbj7UM+f2rK470Rs1wNd1oxQBjua6O2qmUQqapMN+ljRgHsRTDQmmgSveuiOpraEb0HT/AJo+KElpw4+RRnagNUEA5/NPxWaH6afvWDeibpUGhT1j4rtOKEVvSg0qP1EfArNJ6E/auFGN6gVzLu371wYnr+9P60LVZQrU3cV2o7av3ohvWmqgAVG5BrdY7itND1oNJHiuAmuFMWopZQfqodI/XT+lYaahOkfrNbAH5q25tSDVDSJ2A+9coPUfY0la01UUDHSt+4+amXemVMXTNUd6zX3mu7UYqKHWO9YW8kfIrTuaBtqGuJn87fauGjqCfcUo/VXdaqGhLJOxH7UcKBgn70rpXCop0DrJ9zXAqMQKXW0wHy/8FZI7D7Vx2oDvQES3QCsAJ3P7Vwoqo6B1roE711D1qDSortu1cayqjTq8fahIJohW9KKCD2/atWR/8ojWURuofprixO8fNYdqyorSs9BXG1P5f3rl3pp2qWqT6X+U/eu9M9J+9N6UBq6F+m36R966irqqP//Z");\n  background-size: cover;\n  background-position: left;\n  bottom: 0px;\n  border-radius: 50%;\n  animation: earthRotate 30s linear 0s infinite;\n  box-shadow: 0px 0 20px RGBA(255, 255, 255, 0.2), -5px 0px 8px #c3f4ff inset,\n    15px 2px 25px #000 inset, -24px -2px 34px #c3f4ff99 inset,\n    250px 0px 44px #00000066 inset, 150px 0px 38px #000000aa inset;\n}\n@keyframes earthRotate {\n  0% {\n    background-position: 0 0;\n  }\n  100% {\n    background-position: 400px 0;\n  }\n}\n\n.curved-corner-star {\n  display: flex;\n  position: relative;\n}\n\n#curved-corner-bottomleft,\n#curved-corner-bottomright,\n#curved-corner-topleft,\n#curved-corner-topright {\n  width: 4px;\n  height: 5px;\n  overflow: hidden;\n  position: relative;\n}\n\n#curved-corner-bottomleft:before,\n#curved-corner-bottomright:before,\n#curved-corner-topleft:before,\n#curved-corner-topright:before {\n  content: "";\n  display: block;\n  width: 200%;\n  height: 200%;\n  position: absolute;\n  border-radius: 50%;\n}\n\n#curved-corner-bottomleft:before {\n  bottom: 0;\n  left: 0;\n  box-shadow: -5px 5px 0 0 white;\n}\n\n#curved-corner-bottomright:before {\n  bottom: 0;\n  right: 0;\n  box-shadow: 5px 5px 0 0 white;\n}\n\n#curved-corner-topleft:before {\n  top: 0;\n  left: 0;\n  box-shadow: -5px -5px 0 0 white;\n}\n\n#curved-corner-topright:before {\n  top: 0;\n  right: 0;\n  box-shadow: 5px -5px 0 0 white;\n}\n\n@keyframes twinkling {\n  0%,\n  100% {\n    opacity: 0.1;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n\n#star-1 {\n  position: absolute;\n  left: -20px;\n  animation: twinkling 3s infinite;\n}\n\n#star-2 {\n  position: absolute;\n  left: -40px;\n  top: 30px;\n  animation: twinkling 2s infinite;\n}\n#star-3 {\n  position: absolute;\n  left: 350px;\n  top: 90px;\n  animation: twinkling 4s infinite;\n}\n#star-4 {\n  position: absolute;\n  left: 200px;\n  top: 290px;\n  animation: twinkling 3s infinite;\n}\n#star-5 {\n  position: absolute;\n  left: 50px;\n  top: 270px;\n  animation: twinkling 1.5s infinite;\n}\n\n#star-6 {\n  position: absolute;\n  left: 250px;\n  top: -50px;\n  animation: twinkling 4s infinite;\n}\n#star-7 {\n  position: absolute;\n  left: 290px;\n  top: 60px;\n  animation: twinkling 2s infinite;\n}\n\n\n\n\n.card-id567 {\n  width: 190px;\n  height: 190px;\n  background: rgb(255, 255, 255);\n  border-radius: 1rem;\n  padding: 1rem;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 300ms ease;\n  animation: 8s thumb-thumb infinite;\n}\n\n.card-id567 svg path {\n  transition: 300ms ease;\n  stroke: rgb(20, 20, 20);\n  opacity: 0;\n}\n\n.bold-567 {\n  font-weight: bold;\n}\n\n.blurry-splash {\n  position: absolute;\n  inset: 0;\n  width: 60px;\n  margin: 0 auto;\n  height: 60px;\n  border-radius: 1rem;\n  z-index: -1;\n  opacity: 70%;\n  filter: blur(15px);\n  background: linear-gradient(\n    120deg, rgb(119, 0, 255)\n    , rgb(22, 94, 250), rgb(44, 226, 250));\n}\n\n.prompt-id567 {\n  position: absolute;\n  color: rgb(29, 29, 29);\n  text-align: center;\n}\n\n.really-small-text {\n  text-align: center;\n  width: 100%;\n  position: absolute;\n  font-size: 8px;\n  margin-top: 28px;\n  opacity: 0.5;\n}\n\n.card-id567:hover {\n  cursor: none;\n}\n\n.card-id567:hover .prompt-id567 {\n  transition: 300ms ease;\n  opacity: 0;\n}\n\n.token-container {\n  animation: 2s spinny-token-yayyy infinite;\n  margin-bottom: 10px;\n}\n\n.prompt-id567 svg path {\n  stroke: none;\n  opacity: 1;\n}\n\n.card-id567:hover svg path {\n  opacity: 1;\n}\n\n@keyframes spinny-token-yayyy {\n  0% {\n    transform: perspective(200px) rotateY(0deg);\n  }\n\n  100% {\n    transform: perspective(200px) rotateY(360deg);\n  }\n}\n\n@keyframes thumb-thumb {\n  0%, 10%, 100% {\n    transform: scale(100%);\n  }\n\n  5% {\n    transform: scale(103%);\n  }\n\n  7% {\n    transform: scale(97%);\n  }\n}\n\n\t\t\n\t\t.card {\n\t\t  position: relative;\n\t\t  width: 19em;\n\t\t  height: 25em;\n\t\t  display: flex;\n\t\t  flex-direction: column;\n\t\t  align-items: center;\n\t\t  justify-content: center;\n\t\t  background-color: #171717;\n\t\t  color: white;\n\t\t  font-family: Montserrat;\n\t\t  font-weight: bold;\n\t\t  padding: 1em 2em 1em 1em;\n\t\t  border-radius: 20px;\n\t\t  overflow: hidden;\n\t\t  z-index: 1;\n\t\t  row-gap: 1em;\n\t\t}\n\t\t.card img {\n\t\t  width: 12em;\n\t\t  margin-right: 1em;\n\t\t  animation: move 10s ease-in-out infinite;\n\t\t  z-index: 5;\n\t\t}\n\t\t.image:hover {\n\t\t  cursor: -webkit-grab;\n\t\t  cursor: grab;\n\t\t}\n\t\t\n\t\t.icons svg {\n\t\t  width: 20px;\n\t\t  height: 20px;\n\t\t}\n\t\t\n\t\t.card::before {\n\t\t  content: "";\n\t\t  position: absolute;\n\t\t  width: 100%;\n\t\t  height: 100%;\n\t\t  inset: -3px;\n\t\t  border-radius: 10px;\n\t\t  background: radial-gradient(#858585, transparent, transparent);\n\t\t  transform: translate(-5px, 250px);\n\t\t  transition: 0.4s ease-in-out;\n\t\t  z-index: -1;\n\t\t}\n\t\t.card:hover::before {\n\t\t  width: 150%;\n\t\t  height: 100%;\n\t\t  margin-left: -4.25em;\n\t\t}\n\t\t.card::after {\n\t\t  content: "";\n\t\t  position: absolute;\n\t\t  inset: 2px;\n\t\t  border-radius: 20px;\n\t\t  background: rgb(23, 23, 23, 0.7);\n\t\t  transition: all 0.4s ease-in-out;\n\t\t  z-index: -1;\n\t\t}\n\t\t\n\t\t.heading {\n\t\t  z-index: 2;\n\t\t  transition: 0.4s ease-in-out;\n\t\t}\n\t\t.card:hover .heading {\n\t\t  letter-spacing: 0.025em;\n\t\t}\n\t\t\n\t\t.heading::before {\n\t\t  content: "";\n\t\t  position: absolute;\n\t\t  top: 0;\n\t\t  left: 0;\n\t\t  width: 2px;\n\t\t  height: 2px;\n\t\t  border-radius: 50%;\n\t\t  opacity: 1;\n\t\t  box-shadow: 220px 118px #fff, 280px 176px #fff, 40px 50px #fff,\n\t\t\t60px 180px #fff, 120px 130px #fff, 180px 176px #fff, 220px 290px #fff,\n\t\t\t520px 250px #fff, 400px 220px #fff, 50px 350px #fff, 10px 230px #fff;\n\t\t  z-index: -1;\n\t\t  transition: 1s ease;\n\t\t  animation: 1s glowing-stars linear alternate infinite;\n\t\t  animation-delay: 0s;\n\t\t}\n\t\t.icons::before {\n\t\t  content: "";\n\t\t  position: absolute;\n\t\t  top: 0;\n\t\t  left: 0;\n\t\t  width: 2px;\n\t\t  height: 2px;\n\t\t  border-radius: 50%;\n\t\t  opacity: 1;\n\t\t  box-shadow: 140px 20px #fff, 425px 20px #fff, 70px 120px #fff, 20px 130px #fff,\n\t\t\t110px 80px #fff, 280px 80px #fff, 250px 350px #fff, 280px 230px #fff,\n\t\t\t220px 190px #fff, 450px 100px #fff, 380px 80px #fff, 520px 50px #fff;\n\t\t  z-index: -1;\n\t\t  transition: 1.5s ease;\n\t\t  animation: 1s glowing-stars linear alternate infinite;\n\t\t  animation-delay: 0.4s;\n\t\t}\n\t\t.icons::after {\n\t\t  content: "";\n\t\t  position: absolute;\n\t\t  top: 0;\n\t\t  left: 0;\n\t\t  width: 2px;\n\t\t  height: 2px;\n\t\t  border-radius: 50%;\n\t\t  opacity: 1;\n\t\t  box-shadow: 490px 330px #fff, 420px 300px #fff, 320px 280px #fff,\n\t\t\t380px 350px #fff, 546px 170px #fff, 420px 180px #fff, 370px 150px #fff,\n\t\t\t200px 250px #fff, 80px 20px #fff, 190px 50px #fff, 270px 20px #fff,\n\t\t\t120px 230px #fff, 350px -1px #fff, 150px 369px #fff;\n\t\t  z-index: -1;\n\t\t  transition: 2s ease;\n\t\t  animation: 1s glowing-stars linear alternate infinite;\n\t\t  animation-delay: 0.8s;\n\t\t}\n\t\t.card:hover .heading::before,\n\t\t.card:hover .icons::before,\n\t\t.card:hover .icons::after {\n\t\t  filter: blur(3px);\n\t\t}\n\t\t\n\t\t.image:active {\n\t\t  cursor: -webkit-grabbing;\n\t\t  cursor: grabbing;\n\t\t}\n\t\t.image:active + .heading::before {\n  box-shadow: 240px 20px #4b8cf1, 240px 25px #4b8cf1, 240px 30px #4b8cf1,\n    240px 35px #4b8cf1, 240px 40px #4b8cf1, 242px 45px #4b8cf1,\n    246px 48px #4b8cf1, 251px 49px #4b8cf1, 256px 48px #4b8cf1,\n    260px 45px #4b8cf1, 262px 40px #4b8cf1;\n  animation: none;\n  filter: blur(0);\n  border-radius: 2px;\n  width: 0.45em;\n  height: 0.45em;\n  scale: 0.65;\n  transform: translateX(9em) translateY(1em);\n}\n\n.image:active ~ .icons::before {\n  box-shadow: 262px 35px #4b8cf1, 262px 30px #4b8cf1, 262px 25px #4b8cf1,\n    262px 20px #4b8cf1, 275px 20px #4b8cf1, 275px 24px #4b8cf1,\n    275px 28px #4b8cf1, 275px 32px #4b8cf1, 275px 36px #4b8cf1,\n    275px 40px #4b8cf1, 275px 44px #4b8cf1, 275px 48px #4b8cf1;\n  animation: none;\n  filter: blur(0);\n  border-radius: 2px;\n  width: 0.45em;\n  height: 0.45em;\n  scale: 0.65;\n  transform: translateX(9em) translateY(1em);\n}\n\n.image:active ~ .icons::after {\n  box-shadow: 250px 100px #4b8cf1, 242px 60px #4b8cf1, 246px 60px #4b8cf1,\n    250px 60px #4b8cf1, 254px 60px #4b8cf1, 258px 60px #4b8cf1,\n    262px 60px #4b8cf1, 266px 60px #4b8cf1, 270px 60px #4b8cf1,\n    274px 60px #4b8cf1, 278px 60px #4b8cf1, 282px 60px #4b8cf1,\n    234px 60px #4b8cf1, 234px 60px #4b8cf1;\n  animation: none;\n  filter: blur(0);\n  border-radius: 2px;\n  width: 0.45em;\n  height: 0.45em;\n  scale: 0.65;\n  transform: translateX(9em) translateY(1.25em);\n}\n\n.heading::after {\n  content: "";\n  top: -8.5%;\n  left: -8.5%;\n  position: absolute;\n  width: 7.5em;\n  height: 7.5em;\n  border: none;\n  outline: none;\n  border-radius: 50%;\n  background: #f9f9fb;\n  box-shadow: 0px 0px 100px rgba(75, 140, 241, 0.8),\n    0px 0px 100px rgba(42, 74, 173, 0.8), inset #4b8cf1 0px 0px 40px -12px;\n  transition: 0.4s ease-in-out;\n  z-index: -1;\n}\n\n.card:hover .heading::after {\n  box-shadow: 0px 0px 200px rgba(75, 140, 241, 1),\n    0px 0px 200px rgba(42, 74, 173, 1), inset #4b8cf1 0px 0px 40px -12px;\n}\n\n\t\t.icons {\n\t\t  display: flex;\n\t\t  align-items: center;\n\t\t  justify-content: center;\n\t\t  flex-direction: row;\n\t\t  column-gap: 1em;\n\t\t  z-index: 1;\n\t\t}\n\t\t\n\t\t.instagram,\n\t\t.x,\n\t\t.discord {\n\t\t  position: relative;\n\t\t  transition: 0.4s ease-in-out;\n\t\t}\n\t\n\t\t.instagram svg path,\n\t\t.x svg path,\n\t\t.discord svg path {\n\t\t  stroke: #808080;\n\t\t  transition: 0.4s ease-in-out;\n\t\t}\n\t\t.instagram:hover svg path {\n\t\t  stroke: #cc39a4;\n\t\t}\n\t\t.x:hover svg path {\n\t\t  stroke: rgb(4, 137, 245);\n\t\t}\n\t\t.discord:hover svg path {\n\t\t  stroke: #8c9eff;\n\t\t}\n\t\t.instagram svg,\n\t\t.x svg,\n\t\t.discord svg {\n\t\t  transition: 0.3s ease-in-out;\n\t\t}\n\t\t.instagram:hover svg {\n\t\t  scale: 1.4;\n\t\t}\n\t\t.x:hover svg,\n\t\t.discord:hover svg {\n\t\t  scale: 1.25;\n\t\t}\n\t\t.instagram:hover:after,\n\t\t.x:hover:after,\n\t\t.discord:hover:after {\n\t\t  scale: 4;\n\t\t  transform: translateX(0.09em) translateY(0.09em);\n\t\t}\n\t\t\n\t\t.instagram::before {\n\t\t  content: "";\n\t\t  position: absolute;\n\t\t  top: -700%;\n\t\t  left: 1050%;\n\t\t  rotate: -45deg;\n\t\t  width: 5em;\n\t\t  height: 1px;\n\t\t  background: linear-gradient(90deg, #ffffff, transparent);\n\t\t  animation: 4s shootingStar ease-in-out infinite;\n\t\t  transition: 1s ease;\n\t\t  animation-delay: 1s;\n\t\t}\n\t\t.x::before {\n\t\t  content: "";\n\t\t  position: absolute;\n\t\t  top: -1300%;\n\t\t  left: 850%;\n\t\t  rotate: -45deg;\n\t\t  width: 5em;\n\t\t  height: 1px;\n\t\t  background: linear-gradient(90deg, #ffffff, transparent);\n\t\t  animation: 4s shootingStar ease-in-out infinite;\n\t\t  animation-delay: 3s;\n\t\t}\n\t\t.discord::before {\n\t\t  content: "";\n\t\t  position: absolute;\n\t\t  top: -2100%;\n\t\t  left: 850%;\n\t\t  rotate: -45deg;\n\t\t  width: 5em;\n\t\t  height: 1px;\n\t\t  background: linear-gradient(90deg, #ffffff, transparent);\n\t\t  animation: 4s shootingStar ease-in-out infinite;\n\t\t  animation-delay: 5s;\n\t\t}\n\t\t.card:hover .instagram::before,\n\t\t.card:hover .x::before,\n\t\t.card:hover .discord::before {\n\t\t  filter: blur(3px);\n\t\t}\n\t\t.image:active ~ .icons .instagram::before,\n\t\t.image:active ~ .icons .x::before,\n\t\t.image:active ~ .icons .discord::before {\n\t\t  animation: none;\n\t\t  opacity: 0;\n\t\t}\n\t\t\n\t\t@keyframes shootingStar {\n\t\t  0% {\n\t\t\ttransform: translateX(0) translateY(0);\n\t\t\topacity: 1;\n\t\t  }\n\t\t  50% {\n\t\t\ttransform: translateX(-55em) translateY(0);\n\t\t\topacity: 1;\n\t\t  }\n\t\t  70% {\n\t\t\ttransform: translateX(-70em) translateY(0);\n\t\t\topacity: 0;\n\t\t  }\n\t\t  100% {\n\t\t\ttransform: translateX(0) translateY(0);\n\t\t\topacity: 0;\n\t\t  }\n\t\t}\n\t\t\n\t\t@keyframes move {\n\t\t  0% {\n\t\t\ttransform: translateX(0em) translateY(0em);\n\t\t  }\n\t\t  25% {\n\t\t\ttransform: translateY(-1em) translateX(-1em);\n\t\t\trotate: -10deg;\n\t\t  }\n\t\t  50% {\n\t\t\ttransform: translateY(1em) translateX(-1em);\n\t\t  }\n\t\t  75% {\n\t\t\ttransform: translateY(-1.25em) translateX(1em);\n\t\t\trotate: 10deg;\n\t\t  }\n\t\t  100% {\n\t\t\ttransform: translateX(0em) translateY(0em);\n\t\t  }\n\t\t}\n\t\t\n\t\t@keyframes glowing-stars {\n\t\t  0% {\n\t\t\topacity: 0;\n\t\t  }\n\t\t\n\t\t  50% {\n\t\t\topacity: 1;\n\t\t  }\n\t\t\n\t\t  100% {\n\t\t\topacity: 0;\n\t\t  }\n\t\t}\n\n\t\t/* From Uiverse.io by mrhyddenn */ \n.shadow__btn {\n  padding: 10px 20px;\n  border: none;\n  font-size: 17px;\n  color: #fff;\n  border-radius: 7px;\n  letter-spacing: 4px;\n  font-weight: 700;\n  text-transform: uppercase;\n  transition: 0.5s;\n  transition-property: box-shadow;\n}\n\n.shadow__btn {\n  background: rgb(0,140,255);\n  box-shadow: 0 0 25px rgb(0,140,255);\n}\n\n.shadow__btn:hover {\n  box-shadow: 0 0 5px rgb(0,140,255),\n              0 0 25px rgb(0,140,255),\n              0 0 50px rgb(0,140,255),\n              0 0 100px rgb(0,140,255);\n}\n\t\t'
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n\t\t\t\t/* From Uiverse.io by ShrinilDhorda */ \n.btn {\nfont-size: 1.2rem;\npadding: 1rem 2.5rem;\nborder: none;\noutline: none;\nborder-radius: 0.4rem;\ncursor: pointer;\ntext-transform: uppercase;\nbackground-color: rgb(14, 14, 26);\ncolor: rgb(234, 234, 234);\nfont-weight: 700;\ntransition: 0.6s;\nbox-shadow: 0px 0px 60px #1f4c65;\n-webkit-box-reflect: below 10px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));\n}\n\n.btn:active {\nscale: 0.92;\n}\n\n.btn:hover {\nbackground: rgb(2,29,78);\nbackground: linear-gradient(270deg, rgba(2, 29, 78, 0.681) 0%, rgba(31, 215, 232, 0.873) 60%);\ncolor: rgb(4, 4, 38);\n}\n\t\t\t"
        }}
      />
      
    
      
      
      {/*==================================================*/}
      {/* End dexon Hero Section  */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start dexon Service Section  */}
      {/*==================================================*/}
     

      <div
  className="service-section style-two"
  style={{ background: 'linear-gradient(to right, blue, black)' }}
>
  <div className="container">
    <div className="row">
      <div className="col-lg-5">
        <div className="dexon-section-title white padding-lg">
          <h4>Services</h4>
          <h1 className="sections">Human Resources</h1>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="dexon-desc">
          <p>
            SSConsultant provides a comprehensive Human Resource Management Solution to streamline HR operations. Our system covers essential modules like Payroll, Document Management, Time Management, and HRMS Setup, ensuring efficient and scalable HR processes for businesses of all sizes.
          </p>
        </div>
      </div>
    </div>

    <div className="row service-bg">
      <div className="col-lg-5">
        <div className="serivce-thumb">
          <img src="assets/images/resource/humanresource.jpg" alt="Human Resources" />
        </div>
      </div>
      <div className="col-lg-7">
        <div className="row">
          <div className="col-lg-12">
            <div className="single-service-box2">
              <div className="service-icon">
                <img src="assets/images/resource/icongif8.gif" alt="Payroll Icon" />
              </div>
              <div className="service-content">
                <h2 className="service-title">Payroll</h2>
                <p className="service-desc">
                  Efficient management of employee salaries, benefits, and compliance.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="single-service-box2">
              <div className="service-icon">
                <img src="assets/images/resource/icongif7.gif" alt="Document Management Icon" />
              </div>
              <div className="service-content">
                <h2 className="service-title">Document Management</h2>
                <p className="service-desc">
                  Centralized management and secure storage of employee documents.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="single-service-box2">
              <div className="service-icon">
                <img src="assets/images/resource/icongif6.gif" alt="Time Management Icon" />
              </div>
              <div className="service-content">
                <h2 className="service-title">Time Management</h2>
                <p className="service-desc">
                  Accurate tracking and management of employee attendance and working hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



     
    
    
    
    
    
    
    
    
 
      
    
    
    
    
   
    
        
    
    
        <div
        style={{
          background: "linear-gradient(to right, blue, black)",
          padding: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div className="card-id567">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -0.5 29 29"
            shapeRendering="crispEdges"
          >
            <path
              stroke="#000000"
              d="M0 0h7M8 0h2M14 0h1M16 0h5M22 0h7M0 1h1M6 1h1M13 1h1M17 1h2M22 1h1M28 1h1M0 2h1M2 2h3M6 2h1M8 2h1M11 2h4M18 2h1M20 2h1M22 2h1M24 2h3M28 2h1M0 3h1M2 3h3M6 3h1M8 3h2M11 3h1M13 3h1M15 3h5M22 3h1M24 3h3M28 3h1M0 4h1M2 4h3M6 4h1M8 4h4M13 4h1M15 4h1M19 4h1M22 4h1M24 4h3M28 4h1M0 5h1M6 5h1M9 5h1M12 5h2M17 5h4M22 5h1M28 5h1M0 6h7M8 6h1M10 6h1M12 6h1M14 6h1M16 6h1M18 6h1M20 6h1M22 6h7M9 7h1M11 7h1M15 7h6M0 8h4M6 8h1M8 8h1M13 8h2M17 8h3M21 8h1M24 8h3M28 8h1M2 9h1M4 9h2M7 9h1M9 9h1M14 9h1M16 9h1M19 9h2M22 9h3M28 9h1M0 10h5M6 10h1M8 10h1M13 10h1M16 10h1M18 10h1M20 10h1M22 10h3M26 10h2M1 11h1M3 11h2M7 11h1M11 11h4M16 11h1M18 11h1M20 11h5M28 11h1M1 12h3M5 12h2M9 12h1M11 12h1M13 12h5M19 12h1M25 12h2M0 13h2M3 13h3M8 13h1M10 13h2M14 13h1M16 13h2M19 13h2M22 13h2M26 13h3M0 14h1M2 14h1M4 14h3M9 14h2M12 14h1M14 14h1M16 14h1M19 14h3M23 14h2M26 14h3M0 15h2M3 15h2M8 15h1M12 15h1M14 15h3M20 15h1M22 15h3M27 15h1M0 16h1M2 16h3M6 16h1M10 16h2M18 16h1M20 16h2M24 16h2M27 16h1M1 17h2M4 17h1M7 17h3M12 17h1M14 17h2M18 17h1M20 17h2M23 17h1M25 17h3M0 18h1M3 18h1M6 18h1M8 18h5M15 18h2M23 18h1M26 18h1M2 19h4M12 19h1M14 19h1M16 19h2M19 19h3M26 19h1M1 20h1M3 20h1M6 20h7M14 20h2M17 20h10M8 21h3M12 21h1M18 21h1M20 21h1M24 21h5M0 22h7M9 22h6M19 22h2M22 22h1M24 22h2M27 22h1M0 23h1M6 23h1M9 23h1M13 23h3M18 23h1M20 23h1M24 23h2M27 23h1M0 24h1M2 24h3M6 24h1M10 24h1M12 24h1M14 24h4M20 24h5M26 24h3M0 25h1M2 25h3M6 25h1M8 25h1M11 25h2M15 25h2M19 25h3M24 25h2M28 25h1M0 26h1M2 26h3M6 26h1M8 26h1M10 26h2M13 26h1M21 26h1M23 26h1M26 26h1M28 26h1M0 27h1M6 27h1M8 27h1M11 27h1M14 27h1M16 27h1M18 27h3M23 27h1M25 27h1M27 27h1M0 28h7M8 28h1M14 28h3M19 28h2M25 28h1M27 28h1"
            />
          </svg>
          <div className="prompt-id567">
            <div className="token-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                height={50}
                width={50}
              >
                <path
                  fill="url(#paint0_linear_713_51)"
                  d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18V18ZM10 5.05L14.95 10L10 14.95L5.05 10L10 5.05V5.05ZM10 7.879L7.879 10L10 12.121L12.121 10L10 7.879V7.879Z"
                />
                <defs>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    y2="22.6007"
                    x2="16.4204"
                    y1={0}
                    x1={0}
                    id="paint0_linear_713_51"
                  >
                    <stop stopColor="#AF40FF" />
                    <stop stopColor="#5B42F3" offset="0.5" />
                    <stop stopColor="#00DDEB" offset={1} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="blurry-splash" />
            <p style={{ color: 'black' }}>
              Hover To scan*
              <br />
              <span className="bold-567">SSCONSULTANT</span>{" "}
            </p>
            <p className="really-small-text">at the expense of your sanity</p>
          </div>
        </div>
      </div>
    
    
      {/*==================================================*/}
      {/* End dexon Why Choose Section  */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start dexon Footer Section  */}
      {/*==================================================*/}
      <div className="footer-section style-two">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="widget widgets-company-info">
              <div className="dreamhub-logo">
                <a className="logo_thumb" href="/" title="SSConsultant">
                  <img src="assets/images/logo2.png" alt="SSConsultant" />
                </a>
              </div>
              <div className="company-info-desc">
                <p>
                  SSConsultant provides ERP software solutions that streamline your business operations and enhance efficiency, helping you achieve smooth workflows.
                </p>
              </div>
              <div className="follow-company-icon">
                <a href="https://facebook.com/SSConsultant">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://twitter.com/SSConsultant">
                  <i className="fab fa-twitter" />
                </a>
                <a href="https://linkedin.com/company/SSConsultant">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="https://pinterest.com/SSConsultant">
                  <i className="fab fa-pinterest-p" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pl-40">
            <div className="widget widget-nav-menu">
              <h4 className="widget-title">Informations</h4>
              <div className="menu-quick-link-content">
                <ul className="footer-menu">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About Us</a></li>  {/* Added About Us link */}
                  <li><a href="/service">Our Services</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="widget widget-nav-menu">
              <h4 className="widget-title">Contact Us</h4>
              <div className="menu-quick-info-content">
                <ul className="footer-info">
                  <li>
                    <a href="#">
                      Plot No. R-565, Sector 15-A/2, Buffer Zone North Nazimabad, Karachi, Pakistan
                    </a>
                  </li>
                  <li>
                    <a className="border-undr" href="mailto:info@ssconsultant.com.pk">
                      info@ssconsultant.com.pk
                    </a>
                  </li>
                  <li>
                    <a href="tel:+923334838368">+92 333 4838368</a> {/* Updated number */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pr-0">
            <div className="menu-quick-link-contact">
              <h4 className="widget-title">Newsletter</h4>
              <div className="subscribe-widget">
                <form action="#" method="get">
                  <input
                    type="text"
                    className="src-input-box"
                    placeholder="Search Here"
                    name="s"
                    defaultValue=""
                    title="src-input-box"
                  />
                  <span className="input-icn">
                    <i className="bi bi-send-fill" />
                  </span>
                </form>
              </div>
              <div className="widget-desc">
                <p>Stay updated with our latest ERP solutions and news. Subscribe to our newsletter.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer-bg">
          <div className="col-lg-12 col-md-12">
            <div className="footer-bottom-content text-center">
              <div className="footer-bottom-content-copy">
                <p>2023 - 2030 | All rights reserved by SSConsultant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    </>
  );
};

export default humanresource;
