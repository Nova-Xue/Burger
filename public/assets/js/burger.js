$(document).ready(function(){
    //single select for checkboxes
    $(".yet-burger").on("change", function () {
        $(".yet-burger").not(this).prop("checked", false);
    });
    $(".eaten-burger").on("change", function () {
        $(".eaten-burger").not(this).prop("checked", false);
    });
    //click button to change eaten_state
    $("#eat").click(function () {
        //add burger from yet to eaten
        let id = -1;
        $.each($(".yet-burger"), function () {
            if ($(this).is(":checked")) {
                id = $(this).val();
            }
        });
        if (id == -1) {
            alert("no burger to eat")
        } else {
            $.ajax("/" + id, {
                type: "PUT"
            }).then(function () {
                location.reload();
            });
        }
    });
    $("#redo").click(function () {
        //add burger from yet to eaten
        let id = -1;
        $.each($(".eaten-burger"), function () {
            if ($(this).is(":checked")) {
                id = $(this).val();
            }
        });
        if (id == -1) {
            alert("no burger to redo")
        } else {
            $.ajax("/" + id, {
                type: "PUT"
            }).then(function () {
                location.reload();
            });
        }
    });
    //validation before put
    $("#submit").click(function(e){
        if($("#burger").val()==""){//validation for empty input
           e.preventDefault();
           alert("burger can not be null");
        }else{//input not null  //validation for repeated item
            $.each($(".checkbox"),function(){//loop checkbox to find repeated one
                if($("#burger").val() == $(this).attr("data-name")){//find existing burget//if no repeat then no preventDefault will post the new burger
                    e.preventDefault();
                    if($(this).attr("name")== "rest"){ //yet burger alert
                        alert("you have an unfinished burger");
                        $("#burger").val("");
                    }else{//eaten burger  redo 
                        $.ajax("/" + $(this).val(), {
                            type: "PUT"
                        }).then(function () {
                            location.reload();
                        });
                    }
                }
            });
        }
    });
    //delete by id 
    $(".delete").click(function(e){
        e.preventDefault();
        $.ajax("/"+$(this).val(),{
            type : "DELETE"
        }).then(function(){
            location.reload();
        });
    });
});
