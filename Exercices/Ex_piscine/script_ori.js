function myFunction(){
    $("#none").css("display","none");
    $("#club").css("display","none");
    $("#none2").css("display","none");
    $("#autres").val("");
    $("#moniteur").val("");
    $("label.error").css("display", "none");
};

$(function(){


    $("#reinitialiser").click(function (){
        $("#success").css("display","none");
    })
        $('#check').click(function() {
            if($('#club_et_ecole').is(':checked')) {
                {
                    $("#none").css("display","block");
                    $("#club").css("display","block");
                    $("#none2").css("display", "block");
                }

            }
            else{
                $("#none").css("display","none");
                $("#club").css("display","none");
                $("#none2").css("display","none");
                $("#autres").val("");
            }
        });

        $('#check').click(function (){
            if($('#moniteur_box').is(':checked')){
                $("#none2").css("display", "block");
                $("#moniteur").css("display", "block");
            }
            else{
                $("#none2").css("display", "none");
                $("#moniteur").css("display", "none");
                $("#moniteur").val("");
            }
        });

    $('#check').click(function() {
        if($(".other").is(":selected") ) {
            $("#autres").css("display","block");
        }
        else{
            $("#autres").css("display","none");
        }
    });


    $("#inscription_form").validate(
        {
            /*        rules:{
                        nom_per: {
                            required: true,
                            minlength: 2,
                        },
                        prenom_per: {
                            required: true,
                            minlength: 2,
                        },

                        num_per:{
                            required: true,
                            number: true,
                            minlength: 10,
                        },

                        email_per:{
                            required:true,
                            email:true,
                        },

                        autres: {
                            required: true,
                            minlength: 2,
                        },

                        club_per:{
                            required:true,
                        },

                        moniteur_per: {
                            required:true,
                        }
                    },
                    messages:{
                        nom_per: {
                            required: "Votre nom est indispensable ?? l'ouverture d'un compte",
                            minlength: "Votre nom doit ??tre compos?? de 2 caract??res au minimum"
                        },
                        prenom_per:{
                            required:"Votre pr??nom est indispensable ?? l'ouverture d'un compte",
                            minlength:"Votre pr??nom doit ??tre compos?? de 2 caract??res au minimum"
                        },
                        num_per:{
                            required:"Votre num??ro de t??l??phone est indispensable ?? l'ouverture d'un compte",
                            minlength:"Votre num??ro de t??l??phone doit avoir le format : 0XX XXX XX XX",
                            number: "Votre num??ro de t??l??phone doit contenir que des chiffres"
                        },
                        email_per: {
                            required:"Votre adresse e-mail est indispensable ?? l'ouverture d'un compte",
                            email:"Votre adresse e-mail doit avoir le format : ex@piscine.ch"
                        },
                        autres: {
                            required: "Un nom de club doit ??tre inscrit dans le champ obligatoirement !",
                            minlength: "Le nom du club doit ??tre plus long que 2 caract??res"
                        },
                        club_per: {
                            required: "Veuillez s??l??ctionner un choix"
                        },
                        moniteur_per: {
                            required: "Veuillez remplir ce champs"
                        }

                    },
             */



        submitHandler: function(form) {
            $.post(
                "./json/add_reservation.json.php",
            {
                nom: $("#nom_per").val(),
                prenom: $("#prenom_per").val(),
                email: $("#email_per").val(),
                telephone: $("#num_per").val(),
                categorie: $('input[name="club"]:checked').val(),
                club: $("#club_per").val(),
                club_name: $("#autres").val(),
                monitor: $("#moniteur:checked").val(),
                nb_eleves: $("#moniteur_per").val(),
                autres: $("#autres").val(),



            //$("#success").slideDown("Slow");
            // some other code
            // maybe disabling submit button
            // then:
           // $(form).submit();
            Function(data) {


                console.log(data.type),
                    $("#success").css("display", "block"),
                    $("#success .message").html("tout s'est bien pass??"),
            )
            "json"
         fail(function(){
            console.log("KO"),
            $("#success").css("display","block").addClass("alert-danger"),
            $("#success .message").html()
            })
        }

    }
            );





//jsbad