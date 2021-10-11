const ContactMessage = require("../model/ContactMessage");
class Home {

    index(request, response){
        
        let nomeError = request.flash("nomeError");
        let emailError = request.flash("emailError");
        let foneError = request.flash("foneError");
        let subjectError = request.flash("subjectError");
        let messageError = request.flash("messageError");

        nomeError = (nomeError == undefined || nomeError.length == 0) ? undefined : nomeError;

        return response.render('index',{nomeError, emailError, foneError, subjectError, messageError});
    }

    story(request, response){
        let contactNome = request.body.name;
        let contactEmail = request.body.email;
        let contactFone = request.body.fone;
        let contactSubject = request.body.subject;
        let contactMessage = request.body.message;

        let nomeError;
        let emailError;
        let foneError;
        let subjectError;
        let messageError;

        if(contactNome == undefined || contactNome == "" || contactNome.length < 5){
            nomeError = "validação nome";
        }

        if(contactEmail == undefined || contactEmail == ""){
            emailError = "O endereço de e-mail informado é inválido.";
        }

        if(contactFone == undefined || contactFone == ""){
            foneError = "O numero de telefone informado é inválido";
        }

        if(contactSubject == undefined || contactSubject == ""){
            subjectError = "O campo de assunto informado é inválido";
        }

        if(contactMessage == undefined || contactMessage == "" ){
            messageError = "O campo de mensagem informado é inválido";
        }

        if(nomeError != undefined || emailError != undefined || foneError != undefined || subjectError != undefined || messageError != undefined){
            // res.send("ESSE FORM E MUITO FEITO")
            request.flash("nomeError",nomeError);
            request.flash("emailError",emailError);
            request.flash("foneError",foneError);
            request.flash("subjectError",subjectError);
            request.flash("messageError",messageError);
            response.redirect('/#error')
        }else{
            // res.send("SHOW DE BOLA ESSE DORM")
            ContactMessage.create({
                name: contactNome,
                email: contactEmail,
                fone: contactFone,
                subject: contactSubject,
                message: contactMessage
                
            }).then(() => {
                response.redirect('/');
            }); 
        }  
    }
}


module.exports = new Home();