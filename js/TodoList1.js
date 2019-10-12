//toggling style on li elements. Select ul & use li as argument. Ie.change ul when a li is clicked.
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
})

//click on X to delete Todo. Select ul & use span as argument. Ie.change ul when a span is clicked.
$("ul").on("click","span",function(){
    
    //to animate whole span & parent li
    $(this).parent().fadeOut(500, function(){
        //inside fadeOut() $(this) refers to "li" not "span"
        $(this).remove();
    });
    
    //this will prevent event bubbleups.i.e. only span event will trigger which is inside other events like li, ul, body
    event.stopPropagation();
    
})

//Add new Todos
$("input[type=text]").keypress(function(event){
    //enter key check (which = 13)
    if(event.which === 13){
        //grab the value of input after hitting enter
        var todoText = $(this).val();
        //remove input text after enter
        $(this).val(" ");
        //create a new li & add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + '<i class="fa fa-circle-o"></i> ' + todoText + "</li>");
    }
})

//fadeToggle() to the icon to toggle the input bar on/off
$(".fa-plus").on("click", function(){
    $("input[type=text]").fadeToggle();
})