// SWDV 640: User Interface Design
// Week 7 JavaScript Assignment

class Concert {
    constructor(title, venue, time, date, min, max, image='images/wireframe_img.png') {
        this.title = title;
        this.venue = venue;
        this.time = time;
        this.date = date;
        this.price = { min: min, max: max }
        this.image = image;
    }
}

function main() {
    const concerts = [
        new Concert('Concert', 'Venue', '8:00 PM', 'dd/mm/yyyy', '25.00', '500.00'),
        new Concert('Concert', 'Venue', '8:00 PM', 'dd/mm/yyyy', '25.00', '500.00'),
        new Concert('Concert', 'Venue', '8:00 PM', 'dd/mm/yyyy', '25.00', '500.00'),
        new Concert('Concert', 'Venue', '8:00 PM', 'dd/mm/yyyy', '25.00', '500.00')
    ]

    const template = $("#concertTemplate").html();
    Mustache.parse(template);

    const rendered = Mustache.render(template, { concerts: concerts });
    $("#concertTarget").html(rendered);
}

$(document).ready(function() {
    main();
});
   