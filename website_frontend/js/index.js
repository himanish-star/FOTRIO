

$(document).ready(function(){

    /*javascript to make carousel of destination finder function*/
    $('.carousel').carousel();

    $(document).ready(function() {
        $('select').material_select();
    });

    /*javascript to make tabs of destination finder function*/
    let hideTabs = function (cb) {
        for (let clickTab of clickTabs) {
            let descriptionHref = clickTab.getAttribute('href');
            $(`${descriptionHref}`).css('display','none');
        }
        cb();
    };
    let clickTabs = $('.clickTabs');
    for (let clickTab of clickTabs) {
        clickTab.onclick = function () {
            hideTabs( function () {
                let descriptionHref = clickTab.getAttribute('href');
                $(`${descriptionHref}`).css('display','block');
            });
        };
    }
});



