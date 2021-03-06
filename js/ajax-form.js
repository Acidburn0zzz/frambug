
// Forulaire openbug

$(document).ready(function() {
    // Lorsque je soumets le formulaire
    $('#formopenbug').on('submit', function(e) {
        e.preventDefault(); // J'empêche le comportement par défaut du navigateur, c-à-d de soumettre le formulaire

	tinyMCE.get("bug_text").save(); // Nécessaire pour valider le tinymce

        var $this = $(this); // L'objet jQuery du formulaire
 
        // Je récupère les valeurs
        var bug_name = $('#bug_name').val();
        var bug_text = $('#bug_text').val();

        // Je vérifie une première fois pour ne pas lancer la requête HTTP
        // si je sais que mon PHP renverra une erreur
        if(bug_name == '' || bug_text == '' ) {
            alert('Les champs doivent êtres remplis');
        } else {
            // Envoi de la requête HTTP en mode asynchrone
            $.ajax({
                url: $this.attr('action'), // Le nom du fichier indiqué dans le formulaire
                type: $this.attr('method'), // La méthode indiquée dans le formulaire (get ou post)
                data: $this.serialize(), // Je sérialise les données (j'envoie toutes les valeurs présentes dans le formulaire)
                dataType: 'json', // JSON
                success: function(json) {
			if(json.reponse === 'ok') {
                       		//alert('Tout est bon');
				window.location.href = 'list.php';
	                } else {
                        	alert('Erreur : '+ json.reponse);
                    	}
		}
            });
        }
    });
});


// Forulaire addcomment

$(document).ready(function() {
    // Lorsque je soumets le formulaire
    $('#formaddcomment').on('submit', function(e) {
        e.preventDefault(); // J'empêche le comportement par défaut du navigateur, c-à-d de soumettre le formulaire

        tinyMCE.get("comm_text").save(); // Nécessaire pour valider le tinymce

        var $this = $(this); // L'objet jQuery du formulaire

        // Je récupère les valeurs
        var comm_text = $('#comm_text').val();

        // Je vérifie une première fois pour ne pas lancer la requête HTTP
        // si je sais que mon PHP renverra une erreur
        if( comm_text == '' ) {
            alert('Les champs doivent êtres remplis');
        } else {
            // Envoi de la requête HTTP en mode asynchrone
            $.ajax({
                url: $this.attr('action'), // Le nom du fichier indiqué dans le formulaire
                type: $this.attr('method'), // La méthode indiquée dans le formulaire (get ou post)
                data: $this.serialize(), // Je sérialise les données (j'envoie toutes les valeurs présentes dans le formulaire)
                dataType: 'json', // JSON
                success: function(json) {
                        if(json.reponse === 'ok') {
                                //alert('Tout est bon');
                                //window.location.href = 'list.php';
				document.location.reload(true);
                        } else {
                                alert('Erreur : '+ json.reponse);
                        }
                }
            });
        }
    });
});

// Forulaire updatestate

$(document).ready(function() {
    // Lorsque je soumets le formulaire
    $('#formupdatestate').on('submit', function(e) {
        e.preventDefault(); // J'empêche le comportement par défaut du navigateur, c-à-d de soumettre le formulaire
        
        var $this = $(this); // L'objet jQuery du formulaire
        
        // Je récupère les valeurs
        var bug_id = $('#bug_id').val();
	var state = $('#state').val();
        
        // Je vérifie une première fois pour ne pas lancer la requête HTTP
        // si je sais que mon PHP renverra une erreur
        if( bug_id == '' || state == '' ) {
            alert('Les champs doivent êtres remplis');
        } else {
            // Envoi de la requête HTTP en mode asynchrone
            $.ajax({ 
                url: $this.attr('action'), // Le nom du fichier indiqué dans le formulaire
                type: $this.attr('method'), // La méthode indiquée dans le formulaire (get ou post)
                data: $this.serialize(), // Je sérialise les données (j'envoie toutes les valeurs présentes dans le formulaire)
                dataType: 'json', // JSON
                success: function(json) {
                        if(json.reponse === 'ok') {
                                //alert('Tout est bon');
                                document.location.reload(true);
                        } else {
                                alert('Erreur : '+ json.reponse);
                        }
                }
            });
        }
    });
});

// Forulaire login

$(document).ready(function() {
    // Lorsque je soumets le formulaire
    $('#formlogin').on('submit', function(e) {
    
        e.preventDefault(); // J'empêche le comportement par défaut du navigateur, c-à-d de soumettre le formulaire

        var $this = $(this); // L'objet jQuery du formulaire

        // Je récupère les valeurs
        var username = $('#username').val();
	var password = $('#password').val();

        // Je vérifie une première fois pour ne pas lancer la requête HTTP
        // si je sais que mon PHP renverra une erreur
        if( username == '' || password == '' ) {
            alert('Les champs doivent êtres remplis');
        } else {
            // Envoi de la requête HTTP en mode asynchrone
            $.ajax({
                url: $this.attr('action'), // Le nom du fichier indiqué dans le formulaire
                type: $this.attr('method'), // La méthode indiquée dans le formulaire (get ou post)
                data: $this.serialize(), // Je sérialise les données (j'envoie toutes les valeurs présentes dans le formulaire)
                dataType: 'json', // JSON
                success: function(json) {
                        if(json.reponse === 'ok') {
                                //alert('Tout est bon');
                                window.location.href = 'index.php';
                        } else {
                                alert('Erreur : '+ json.reponse);
                        }
                }
            });
        }
    });
});




// Lien a asupprimerxxxx
$(document).ready(function() {
    // Lorsque je soumets le formulaire
    $('.asupprimerxxxx').on('click', function(e) {
        e.preventDefault(); // J'empêche le comportement par défaut du navigateur, c-à-d de soumettre le formulaire

        var $this = $(this); // L'objet jQuery du formulaire

        // Je récupère les valeurs
        var id = $('#id').val();

        // Je vérifie une première fois pour ne pas lancer la requête HTTP
        // si je sais que mon PHP renverra une erreur
        if(id == '') {
            alert('Les champs doivent être remplis');
        } else {
            // Envoi de la requête HTTP en mode asynchrone
            $.ajax({
                url: $this.attr('action'), // Le nom du fichier indiqué dans le formulaire
                type: $this.attr('method'), // La méthode indiquée dans le formulaire (get ou post)
                data: $this.serialize(), // Je sérialise les données (j'envoie toutes les valeurs présentes dans le formulaire)
                dataType: 'json', // JSON
                success: function(json) {
                        if(json.reponse === 'ok') {
                                //alert('Tout est bon');
                                window.location.href = 'admin.php';
                        } else {
                                alert('Erreur : '+ json.reponse);
                        }
                }
            });
        }
    });
});



