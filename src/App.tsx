import React from 'react';
import './App.css';
import 'fullpage.js';
import $ from 'jquery';

function App() : JSX.Element{
  $((): void => {
    $('#fullpage').fullpage({
      'anchors': ['s1', 's2', 's3'],
      //'verticalCentered': false,
      'css3': true,
      //'showActiveTooltip': true,
      'navigation': true,
      'navigationPosition': 'left',
      'scrollBar':false,
      responsiveHeight: 680,
      responsiveWidth: 1024,
      'afterLoad': function(anchorLink, index){		
        if( index === 1 ){
          $(".page").text("01");  
        }else if(index === 2 ){
          $(".page").text("02");
        }
        else if(index === 3 ){
          $(".page").text("03");
        }

         
      },
    });
  });

  return (
    <>
    <div id="topMenu">
      <div id="leftMenu">
        <img src="img/logo.png" alt="logo"/>
          <ul>
            <li><a href='#/'>Fiesta 소개</a></li>
            <li><a href='#/'>아바타</a></li>
            <li><a href='#/'>도입문의</a></li>
          </ul>
        </div>
      <div id="rightMenu">
        <ul>
          <li><img src="img/friend.png" alt="logo"/></li>
          <li><img src="img/message.png" alt="logo"/></li>
        </ul>
        <img src="img/my.png" alt="logo"/>
        </div>
    </div>
    <p className="page">01</p>
    <div id="fullpage">
        <div className="section" id="section0">
          <div className='divcss'>
            <p id="mainText">
              Fiesta<br />
                Metaverse
              </p>
            <button id="start">피에스타 시작</button>
          </div>

          <div id="mainBottom">
            <div id="threeBox">
              <div className="box">
                <span>01</span>
                <p><b>컨퍼런스 테마</b></p>
                <p>컨퍼런스 테마에서는 다음과 같은 기능들을
                  이용하여 컨퍼런스를 진행하실 수 있습니다.</p>
              </div>
              <div className="box">
                <span>02</span>
                <p><b>웨비나 테마</b></p>
                <p>웨비나 테마에서는 다음과 같은 기능들을
                  이용하여 웨비나를 진행하실 수 있습니다.</p>
              </div>
              <div className="box">
                <span>03</span>
                <p><b>커뮤니티 테마</b></p>
                <p>커뮤니티 테마에서는 다음과 같은 기능들을
                  이용하여 커뮤니티를 진행하실 수 있습니다.</p>
              </div>
            </div>
            <video controls width="400" poster="./img/video.png">
              <source src="" type="video/mp4" />
              </video>
          </div>
        </div>

        <div className="section" id="section1">

        </div>

        <div className="section" id="section2">

        </div>

      </div>
      </>
  );
}

export default App;
