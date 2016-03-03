//
var $document = $(document);
var $window = $(window);
var $htmlBody = $('html,body');
var $html = $('html');
var $introCode = $('#intro-code');
var typeInterval;
var currentOpenTags = 0;
var currentTag;

function reserResizing () {
    $html.css('font-size', '');
    $body.css('background-size', '');
    $target.css('width', '');
    $target.css('height', '');
}

function scrollToElement(selector){
    $htmlBody.animate({scrollTop: $(selector).offset().top},'fast');
}

var code = '<article id="intro"><header class="article-header"><div class="article-title-wrapper"><figure class="article-title-img-wrapper"><img class="article-title-img" src="/img/head.png"></figure><h1>Pavel Maximov</h1><h2>Front-end Developer</h2><h3>London, UK</h3></div><nav class="article-nav"></nav></header><div class="article-body"><video id="intro-video" height="100%" width="100%" autoplay loop><source src="/video/intro.mp4" type="video/mp4"></video><div id="intro-code"></div></div></article>';
var printedChar = 0;


function printChar() {
    var nextChar = code[printedChar],
        target;

    if (nextChar !== undefined) {
        if(nextChar === '<') {
            currentTag = code.substring((printedChar + 1), code.substring((printedChar + 1)).indexOf(' ') + 1);
            console.log(currentTag);

            if (code[(printedChar + 1)] === '/') {
                currentOpenTags -= 1;
            } else {
                currentOpenTags += 1;
            }
            $introCode.append('<div style="padding-left:' + (currentOpenTags * 20) + 'px"></div>');
        }
        target = $introCode.children().last();
        target.html(target.html() + code[printedChar]);
        printedChar += 1;
    } else {
        clearInterval(typeInterval);
    }
}


$document.ready(function () {
    $('[data-toggle="offcanvas"]').click(function () {
        $('[data-offcanvas="content"]').toggleClass('offcanvas-active');
    });

    //typeInterval = setInterval(printChar, 40);
});

