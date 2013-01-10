// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/


$(document).ready(function() {
    console.log('hello 1');
    // Move the arrow so it points to the first project card.
    $('div.arrow-select').each(function() { $(this).css('margin-left', pos(0) + 'px'); });

    var init = description(0);
    $('div.description').text(init);

    $('div.project').click(function() {
        // Move the arrow
        $('div.arrow-select').css('margin-left', pos($(this).index()) + 'px');
        // Change the description
        var d = description($(this).index());
        $('div.description').text(d);
    });
});

var description = function(card) {
    console.log('desc');
    console.log(card);

    switch (card) {
        case 0:
            return "One of the perennial problems in Computer Science is choosing the right data structure. Some data structures are fast for certain operations but slow for others. Often choosing a good data structure for your needs is very difficult, and many times it is made even more difficult when you do not know what the particular needs of your data structure are until it is already out in the wild. Smart Data Structure is a python tool that solves this problem. At compile-time, it looks at your code and predicts what data structure is most appropriate, then at run-time it constantly reevaluates its decision. If it finds that another data structure is better, it will swap out the data structures in real time. Now students don't have to worry about remembering when to use a Red-Black Tree or a Heap because they can just use Smart Data Structure. Building this tool was really fun because I got to directly apply what I had learned in class to an application that I will use in the future. Plus it was great studying for the final!";
        case 1:
            return "My friends mean a lot to me, so I decided to create a virtual museum in their honor. As I was building it and working with Three.js (a Javascript wrapper for WebGL), I was really excited because I thought I had created a really novel way to browse Facebook photos, a very common task on Facebook. After finishing and walking around this virtual museum, it turned out that walking around with a hallway with all your friends plastered on the walls is pretty creepy. Try it for yourself <a href='www.varunrau.com/fbmuseum/index'>here. In either case, I learned a lot of Javascript and graphics concepts and this was my first hackathon project that I did completely by myself.";
        case 2:
            return "18 people die every day in the U.S. waiting for a lifesaving organ transplant. This is a type of disease that is curable by proven surgical techniques. And yet those waiting for just one type of organ transplant consume over 10 percent of the entire medicare budget. The Lifechain project is the world's first open-source, not-for-profit, transplant-chain service. The Lifechain website uses social networks to connect people in order to save lives. Sign up to see how you and your friends can change lives.Lifechain will ask you for medical data that can be used to find matches and form chains between you and your friends. If a match is made, you will be informed--and if you are willing, you might be able to change someone's life forever. With a team of three other developers, I created Lifechain at AngelHack 2011 where we won second place!";
        return "test";
    }
};


    // CARD - the card selected [0, num_projects)
    var pos = function(card) {
        return 208 * card + 100;
    };
