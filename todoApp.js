$(document).ready(function(){
    $(".taskBox").hide();
    $(".taskBtn").click(function(){
        $(".taskBox").slideToggle(500);
        $("textarea").focus();
    });

    function checkChar() {
        var count = parseInt($("textarea").val().length);
        var charRem = 140 - count;
        $("#charRem").html(charRem);
    };

    $("textarea").keyup(function(){
            checkChar();
    });

    $(".cancelBtn").click(function(){
        $(".taskBox").slideUp(500);
    });

    $(".addBtn").click(addBtnClick);

    function addBtnClick() {
        if($(".addBtn").html()=="Add Task") {
            if($("textarea").val()!="") {
                var innerDiv = $("<div/>").addClass("innerDiv");
                var outerDiv = $("<div/>").addClass("outerDiv");
                outerDiv.append(innerDiv);
                $("#prntDiv").append(outerDiv);
                var input = $("<input/>")
                    .attr("type", "checkbox").addClass("checkbox");
                outerDiv.append(input);
                var h3 = $("<h3/>")
                    .click(h3Click)
                    .text($("textarea").val());
                innerDiv.append(h3);

                $(".taskBox").slideUp(500);
                $("textarea").val("");
                checkChar();
            }
        }
        else{
            $("#temp").prev().prev().find($("h3")).html($("textarea").val());
            $("#temp").remove();
            $(".taskBox").slideUp(500);
            $("textarea").val("");
            checkChar();
            $(".addBtn").html("Add Task");
        }
    };

    var editDiv = $("<div/>").addClass("editDiv");
    $(editDiv).append($("<img/>").attr("src","editIcon.jpg").addClass("btn4 editbtn").click(editbtn));
    $(editDiv).append($("<img/>").attr("src","deleteIcon.jpg").addClass("btn4 deletebtn").click(deletebtn));

    function h3Click(){
        $(editDiv).insertAfter($(this).closest(".outerDiv"));
        $(editDiv).slideToggle(500);
    };

    function editbtn(){
        $(".taskBox").slideDown(500);
        $(editDiv).slideUp();
        $("textarea").focus();
        $("textarea").val($(this).parent().prev().find("h3").html());
            checkChar();
        $(".addBtn").html("Edit");
        $(this).parent().prev().append($("<span/>").attr("id","temp"));
    };

    function deletebtn(){
        $(this).parent().prev().remove();
        $(this).parent().remove();
    };

    $(".btn2:first").click(function(){
        $(".outerDiv").show();
    });
    $(".btn2:nth-child(2)").click(function(){
        $(".outerDiv").show();
        $(".checkbox:checked").parent(".outerDiv").hide();
    });
    $(".btn2:last").click(function(){
        $(".outerDiv").show();
        $(".checkbox:not(:checked)").parent(".outerDiv").hide();
    });
});