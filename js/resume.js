$(function() {
    // load profle image
    $('.me img').attr('src', $('.me img').data('src'));
    $('link').each(function() {
        $(this).attr('href', $(this).data('href'));
    });

    // Grab the inline template
    var template = document.getElementById('event').innerHTML;

    // Parse it (optional, only necessary if template is to be used again)
    Mustache.parse(template);

    events = [
    "Lately, I’ve been freelancing. By night, I'm hacking on a secret project using Rails, React.js & After Effects.", 
    "Late July I became Fort Collins’ first <a href='http://kidcodeit.com'>Kidcodeit</a> instructor.", 
    "Before that, I spent 2 months in Monteverde, Costa Rica branding & developing a wordpress theme for <a href='http://monteverde.fm'>Montevere.fm</a>.", 
    "In May, I graduated with an HCI degree from Colorado State University. Our final project was an <a href='https://www.dropbox.com/s/elhq6hf3uzhvd9y/Part%203%20Final%20Report.docx?dl=0'>app for doormen</a>.", 
    "In January, I designed & built an e-learning <a href='http://ironwomanstrength.com'>product</a> for Leanna Carr.", 
    "In 2014 and 15, I worked with Ray on an e-tutoring <a href='http://chemwithray.com'>system</a> built to supplement university chemistry.", 
    "Early 2014, my internship with <a href='http://tackmobile.com'>Tack Mobile</a> ended. During it, I got to collaborate with some super talented folks. I helped ship <a href='http://tackmobile.com/work/start'>Start</a>, <a href='http://takenoted.com'>Noted</a> and <a href='https://itunes.apple.com/us/app/denver-rail/id523272854?mt=8'>Denver Rail</a>.", 
    "In 2013, I designed a logo and a landing page for the climbing accessory, <a href='https://vimeo.com/88199986'>Cam Keeper</a>.", 
    "Before that, I was diving into books about PHP, color theory, cybernetics and branding. I also maintained a flash gaming <a href='https://web.archive.org/web/20110202174521/http://relaxist.com/'>website</a> with a buddy."
    ];

    logos = ["nowsreal.png", "kidcodeit.png", "monteverdefm.png", "colostate.png", "ironwoman.png", "chemwithray.png", "tack.png", "camkeeper.png", "relaxist.png"];
    heights = [2, 2.8, 2.3, 2.6, 2, 2.3, 3, 3, 1.5]

    //Render the data into the template
    timeline = $("#timeline");
    $(events).each(function(i, e) {
        var height = heights[i];
        var rendered = Mustache.render(template, {content: events[i], logo: logos[i], height: height, half: height/2});
        $(timeline).append(rendered);
    })

});