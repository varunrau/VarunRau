$(document).ready(function() {
    var oldWrapPos = 0;
    var open = true;
    $('.project').click(function(e) {
        var elements = $('.container').children();
        var container = $('.container');
        var elementsInRow = Math.floor(container.width() / $(elements[0]).width());
        var selectedPos = $(this).index();
        var row = Math.floor(selectedPos / elementsInRow) + 1;
        var wrapPos = (row * elementsInRow);
        var size = elements.length;
        if (wrapPos >= size) {
            wrapPos = size;
        }
        wrapPos -= 1;
        var pointerPos = 40 + ((selectedPos % elementsInRow) * 110);
        pointerPos = $(this).position().left + $(this).width() / 2 - 10;
        console.log("wrapPos = " + wrapPos);
        console.log("oldpos = " + oldWrapPos);
        if (wrapPos == oldWrapPos && open) {
            $('.info-arrow').css("left", pointerPos + 'px');
        } else {
            oldWrapPos = wrapPos;
            elements.removeClass('edge');
            $(elements[wrapPos]).addClass('edge');
            $('.info-wrapper').slideUp(function() {
                $(this).remove();
            });
            $('.info-wrapper').slideDown();
            $('.edge').after('<div class="info-wrapper"><div class="info-arrow" style="left:' + pointerPos + 'px"></div><div class="info-text"></div></div>');
            console.log('pulling down');
        }
        $('.info-text').text(description(selectedPos));
    });

    $('html').click( function (e) {
        if ( e.target == this ) {
            $('.info-wrapper').slideUp( function() { $(this).remove(); });
        }
        open = false;
    });
});

var description = function(card) {
    switch (card) {
        case 0: return "There are some great tools out there that make collaboration easy in engineering. But many of these tools are missing for the classroom. Class Notes brings organized collaboration to the classroom. Using the Google Drive API, it manages a huge collection of Google Docs that can be used to keep a huge collaborative notetaking effort easy and organized. With Class Notes, all you have to do is enter the class you're in and specify the day you want and you can instantly start editting the notes for both yourself and everyone in your class."
        case 1:
            return "One of the perennial problems in Computer Science is choosing the right data structure. Some data structures are fast for certain operations but slow for others. Often choosing a good data structure for your needs is very difficult, and many times it is made even more difficult when you do not know what the particular needs of your data structure are until it is already out in the wild. Smart Data Structure is a python tool that solves this problem. At compile-time, it looks at your code and predicts what data structure is most appropriate, then at run-time it constantly reevaluates its decision. If it finds that another data structure is better, it will swap out the data structures in real time. Now students don't have to worry about remembering when to use a Red-Black Tree or a Heap because they can just use Smart Data Structure. Building this tool was really fun because I got to directly apply what I had learned in class to an application that I will use in the future. Plus it was great studying for the final!";
        case 2:
            return "My friends mean a lot to me, so I decided to create a virtual museum in their honor. As I was building it and working with Three.js (a Javascript wrapper for WebGL), I was really excited because I thought I had created a really novel way to browse Facebook photos, a very common task on Facebook. After finishing and walking around this virtual museum, it turned out that walking around with a hallway with all your friends plastered on the walls is pretty creepy. In either case, I learned a lot of Javascript and graphics concepts and this was my first hackathon project that I did completely by myself.";
        case 3:
            return "18 people die every day in the U.S. waiting for a lifesaving organ transplant. This is a type of disease that is curable by proven surgical techniques. And yet those waiting for just one type of organ transplant consume over 10 percent of the entire medicare budget. The Lifechain project is the world's first open-source, not-for-profit, transplant-chain service. The Lifechain website uses social networks to connect people in order to save lives. Sign up to see how you and your friends can change lives.Lifechain will ask you for medical data that can be used to find matches and form chains between you and your friends. If a match is made, you will be informed--and if you are willing, you might be able to change someone's life forever. With a team of three other developers, I created Lifechain at AngelHack 2011 where we won second place!";
        case 4:
            return "I had been competing on a nationally-ranked High School Quizbowl team. Quizbowl, a Jeopardy!-like competition that requires both wit and quick reflexes, is buzzer based. Much of my team's success was owed to our multiple practice sessions with real buzzers. However, many teams that we competed with did not have access to buzzer systems and were disadvantaged. I decided to solve that problem by creating an iOS app that leverages Bonjour and enables any iPhone to act like a buzzer. The app also enables the creation of impromptu quizbowl matches between multiple players.";
        case 5:
            return "A music playing app that plays music across multiple desktop and mobile devices synchronously. After starting college, I noticed that many people had low-quality laptop speakers and if they could all play music together at the same time, we could have a really cool musical experience. Playing Mozart across four iPhones and three laptops at the same time was really cool and got me really excited for all the future apps I would build. This was my very first hackathon project and my first foray into Javascript and Node.js. Let the music begin!";
        return "test";
    }
};

