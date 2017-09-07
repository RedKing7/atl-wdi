// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
    let timer = document.getElementById('numeric-display');
    timer.innerHTML = timerValue;
    if(timerValue <= 10){
      timer.style.color = 'red';
      let size = (1.5 * Math.pow(1.05, 11 - timerValue)).toFixed(2);
      timer.style.fontSize = `${size}em`;
    }
  },
  drawProgressBars: function(timerValue){
    let bar = document.getElementsByClassName('progress-bar')[0];
    bar.style.width = `${100-timerValue}%`;
  },
  drawLitFuses: function(timerValue){
    let unburnt = document.getElementsByClassName('unburnt')[0];
    let burnt = document.getElementsByClassName('burnt')[0];
    
    if(timerValue === 100){
      unburnt.style.width = '98%';
      burnt.style.width = '0%';
    }else if(timerValue === 0){
      unburnt.style.width = '0%';
      burnt.style.width = '98%';
    }else{
      unburnt.style.width = `${timerValue * .98}%`;
      burnt.style.width = `${98 - (timerValue * .98)}%`;
    }
  },
  drawCrawlers: function(timerValue){
    let crawler = document.getElementsByClassName('crawler')[0];
    crawler.style.marginLeft = `${(100-timerValue)*10}px`;
    if(timerValue === 0 || timerValue % 2 === 0){
      crawler.style.marginTop = '0px';
    }else{
      crawler.style.marginTop = '10px';
    }
  }
};
