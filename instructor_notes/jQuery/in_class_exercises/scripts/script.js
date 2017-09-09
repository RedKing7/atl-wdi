// 1. Use jQuery to fetch all `h1` tags and save them to a variable called $h1
let $h1 = $('h1');
// 2. Grab the HTML element that is both an H1 and has an ID of "second"
let $second = $('h1#second');
// 3. Select the div with an ID of 'myDiv' and change the text to say "jQuery makes JS easy!"
$('div#myDiv').text("jQuery is so much better than vanilla JS")
// 4. Append this image to end of the body. http://www.fillmurray.com/200/200
let newImage = $(`<img src='http://www.fillmurray.com/200/200' title='no one will believe you'/>`).css('display','none').fadeIn(4000);
newImage.appendTo('body');
// 5. Change the background color of the page to green.
$('body').css('background-color', 'green')
// 6. Remove the div with and ID of 'myDiv'

$('button').click(function(){
    alert('don\'t press my button')
});
$('h1').click(function($event){
    console.log($event)
    console.log(this)
    this.style.color = 'purple'

})

$('div').on({
    'click': function(){console.log('clicked')},
    'hover': function(){console.log('hovered')},
    'blur': function(){console.log('blurred')},
    'change': function(){console.log('changed')},
    'keydown': function(){console.log('keyed')},
    'dblclick': function(){console.log('dclicked')}
})

$('button').on({
    'click': function(event){
        switch(event.which){
            case 1: alert('leftclick'); break;
            case 2: alert('midclick'); break;
            case 3: alert('rightclick'); break;
            default: alert('the heck kinda mouse are you using?')
        }
    }
})
