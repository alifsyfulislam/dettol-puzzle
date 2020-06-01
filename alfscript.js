$('.puzzle_start_text').css({opacity:'0'});
$('.puzzle_board').css({opacity:'1'});
setTimeout(()=>{
    $('.puzzle_start_text').css({opacity:'1'});
    $('.puzzle_board').css({opacity:'0'});
    randomCardPlacement();
    resultCounter();
    // $('.puzzle_brick_a1').addClass("blink");
    makeVisiableCursor()
},3e3);

function makeVisiableCursor() {
    $('.puzzle_cursor').css({opacity:1,zIndex:5});
    setTimeout(()=>{
        $('.puzzle_cursor').css({opacity:0,zIndex: -5});
    },1000);
}

let alfclock = 20;
let closeCounter;
function resultCounter(){
    $('.puzzle_timer').html(alfclock);
    $('.puzzle_brick_a1').click(()=>{
        $('.puzzle_start_text').css({opacity:'0'});
        $('.puzzle_board').css({opacity:'1'});
        closeCounter = setInterval(()=>{
            if (alfclock>0){
                --alfclock;
                $('.puzzle_timer').html(alfclock<10? '0'+alfclock : alfclock);
            } else{
                clearInterval(closeCounter);
            }
        },1e3);
    });
}


function randomCardPlacement() {
    $('.puzzle_brick_a1').css({ top: -15, left: -10, transform: 'rotate(65deg)'});
    $('.puzzle_brick_a2').css({ top: -15, left: 110, transform: 'rotate(35deg)'});
    $('.puzzle_brick_a3').css({ top: -15, left: 225, transform: 'rotate(10deg)'});
    $('.puzzle_brick_b4').css({ top: 65, left: -35, transform: 'rotate(40deg)'});
    $('.puzzle_brick_b5').css({ top: 210, left: 155, transform: 'rotate(55deg)'});
    $('.puzzle_brick_b6').css({ top: 65, left: 275, transform: 'rotate(20deg)'});
    $('.puzzle_brick_c7').css({ top: 145, left: -30, transform: 'rotate(35deg)'});
    $('.puzzle_brick_c8').css({ top: 200, left: 45, transform: 'rotate(35deg)'});
    $('.puzzle_brick_c9').css({ top: 195, left: 260, transform: 'rotate(35deg)'});
    startGame();
}

let selectorCard;
function startGame() {
    $("[class^='puzzle_brick_']").each(function(index){
        //do stuff
        $("[class^='puzzle_brick_']").eq(index).click(()=>{
            selectorCard = $("[class^='puzzle_brick_']").eq(index);
            makeGamePuzzel(index,selectorCard);
        });
    });
}
var flag = 0;
function makeGamePuzzel(val1,val2) {
    if (val1==0){
        val2.css({ top: 45, left: 52, transform: 'rotate(0deg)'});
        $('.puzzle_cursor').css({left: 169, top:11, opacity:0});
        flag = 1;
    }
    else if (val1==1 && flag==1){
        val2.css({ top: 45, left: 104, transform: 'rotate(0deg)'});
        $('.puzzle_cursor').css({left: 243, top:26, opacity:0});
        flag = 2;
    }
    else if (val1==2&& flag==2){
        val2.css({ top: 45, left: 164, transform: 'rotate(0deg)'});
        $('.puzzle_cursor').css({left: 9, top:112, opacity:0});
        flag = 3;
    }
    else if (val1==3&& flag==3){
        val2.css({ top: 90, left: 58, transform: 'rotate(0deg)'});
        $('.puzzle_cursor').css({left: 175, top:204, opacity:0});
        flag = 4;
    }
    else if (val1==4&& flag==4){
        val2.css({ top: 88, left: 119, transform: 'rotate(0deg)'});
        $('.puzzle_cursor').css({left: 260, top:114, opacity:0});
        flag = 5;
    }
    else if (val1==5&& flag==5){
        val2.css({ top: 88, left: 181, transform: 'rotate(0deg)'});
        $('.puzzle_cursor').css({left: 11, top:167, opacity:0});
        flag = 6;
    }
    else if (val1==6&& flag==6){
        val2.css({ top: 152, left: 55, transform: 'rotate(0deg)'});
        $('.puzzle_cursor').css({left: 93, top:202, opacity:0});
        flag = 7;
    }
    else if (val1==7&& flag==7){
        val2.css({ top: 150, left: 103, transform: 'rotate(0deg)'});
        $('.puzzle_cursor').css({left: 261, top:202, opacity:0});
        flag = 8;

        //last card auto
        $("[class^='puzzle_brick_']").eq(8).css({ top: 167, left: 182, transform: 'rotate(0deg)'});
        timerChecker();
    }
    // else if (val1==8&& flag==8){
    //     val2.css({ top: 167, left: 182, transform: 'rotate(0deg)'});
    // }
    else{
        makeVisiableCursor();
    }
}
function timerChecker(){
    let alfWin;
    $('.alf_box').fadeOut(1000);
    if (alfclock>0){
        clearInterval(closeCounter);
        setTimeout(()=>{
            $('.alf_box_win').css({zIndex:6});
            $('.puzzle_matched').css({opacity: 1}).fadeIn(1000);
            $('.awareness_text').css("background-image", "url(asset/awr1.png)");
            alfWin = 1;
            messageAwareness(alfWin);
        },1e3);
    }
    else{
        $('.puzzle_result_text').css("background-image", "url('asset/lose_text.png')");
        setTimeout(()=>{
            $('.alf_box_win').css({zIndex:6});
            $('.puzzle_matched').css({opacity: 1}).fadeIn(1000);
            $('.awareness_text').css("background-image", "url('asset/awr2.png')");
            alfWin = 0;
            messageAwareness(alfWin);
        },1e3);
    }
}
function messageAwareness(val3) {
    setTimeout(()=>{
        $('.alf_box_awareness').css({zIndex:7});
        if (val3==1){
            //win
            $('.awareness_text').css({opacity: 1}).fadeIn(1000);
        }
        else{
            //lose
            $('.awareness_text').css({opacity: 1}).fadeIn(1000);
        }
        landingPage();
    },2e3);

    function landingPage() {
        setTimeout(()=>{
            $('.alf_game_close').css({zIndex:8});
        },2e3);
    }
}








