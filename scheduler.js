script.js
/var definitions
var currentDay = $('#currentDay');
var container = $('.container');
var hours = ["9am", "10am", "11am" ,"12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
//run
currentDay.text(moment().format('dddd, MMMM Do'));
//create timeblocks
for(var i = 0; i < hours.length; i++){
    //add hours, textarea, and save btn to each block
    var timeBlock = $('<div>').addClass("time-block row");
    var hourBlock = $('<div>').addClass('hour col-1');
    var textBlock = $('<textarea>').addClass('description col');
    var SaveBtn = $('<button>').addClass('saveBtn col-1');
    SaveBtn.html('<i class="fas fa-archive"></i>')
    hourBlock.text(moment(hours[i], 'h A').format('hh A'));
    console.log(moment(hours[i], 'h A').format('hh A'));
    timeBlock.append(hourBlock);
    container.append(timeBlock);
    timeBlock.append(textBlock);
    timeBlock.append(SaveBtn);
}
