// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
    if(this.isRunning){
      this.millisecs += 10;
      if(this.millisecs === 1000){
        this.millisecs = 0;
        this.secs += 1;
        if(this.secs === 60){
          this.secs = 0;
          this.mins += 1;
        }
      }
    }
  },
  reset: function(){
    this.mins = 0;
    this.secs = 0;
    this.millisecs = 0;
    this.laps = [];
    console.log(this.laps.length)
  },
  start: function(){
    this.isRunning = true;
    this.tickClock();
  },
  stop: function(){
    this.isRunning = false;
  },
  lap: function(){
    this.laps.push({min: this.mins, sec: this.secs, mil: this.millisecs});
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    mins      = ViewHelpers.zeroFill(mins, 2);
    secs      = ViewHelpers.zeroFill(secs, 2);
    millisecs = ViewHelpers.zeroFill(millisecs/10, 2);
    $('#mins').text(mins);
    $('#secs').text(secs);
    $('#millisecs').text(millisecs);
  },
  updateLapListDisplay: function(laps){
    if(laps.length !== 0){
      let mins = ViewHelpers.zeroFill(laps[0].min, 2);
      let secs = ViewHelpers.zeroFill(laps[0].sec, 2);
      let mils = ViewHelpers.zeroFill(laps[0].mil/10, 2);
      let newLap = $(`<li>${mins}:${secs}:${mils}</li>`);
      $('#lap-list').append(newLap);
    }
  },
};
const ViewHelpers = {
  zeroFill: function(number, length){
    number = Number(number).toString();
    if(number.length < length){
      for(let z = 1; z < length; z++){
        number = '0' + number;
      }
    }
      return number;
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
    ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
  },
  handleClickStart: function() {
    if(!Stopwatch.isRunning){
      Stopwatch.start();
    }
  },
  handleClickStopReset: function(){
    if(Stopwatch.isRunning){
      Stopwatch.stop();
    } else {
      Stopwatch.reset();
      ViewEngine.updateTimeDisplay(0,0,0);
      $('#lap-list').empty();
    }
  },
  handleClickLap: function(){
    if(Stopwatch.isRunning){
      Stopwatch.lap();
      ViewEngine.updateLapListDisplay(Stopwatch.laps);
      Stopwatch.laps.pop();
    }
  }
};

window.onload = function(){
  $('#start').click(AppController.handleClickStart);
  $('#stop').click(AppController.handleClickStopReset);
  $('#lap').click(AppController.handleClickLap);
};
