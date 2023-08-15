function main() {
    const template = $("#concertTarget").html();
    Mustache.parse(template);

    console.log(Mustache);
}

$(document).ready(function() {
    main();
});
   