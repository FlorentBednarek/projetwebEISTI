(this.webpackJsonpprojet_web=this.webpackJsonpprojet_web||[]).push([[0],{129:function(e,t,a){e.exports=a.p+"static/media/logo.1e0b9a13.png"},133:function(e,t,a){e.exports=a(281)},138:function(e,t,a){},139:function(e,t,a){},165:function(e,t){},167:function(e,t){},178:function(e,t){},180:function(e,t){},207:function(e,t){},209:function(e,t){},210:function(e,t){},216:function(e,t){},218:function(e,t){},236:function(e,t){},239:function(e,t){},255:function(e,t){},258:function(e,t){},281:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(32),o=a.n(r),s=(a(138),a(9)),i=a(10),c=a(12),m=a(11),u=(a(139),a(31)),p=a(6),d=a(48),h=a(129),v=a.n(h),E=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).toggleNavbar=n.toggleNavbar.bind(Object(d.a)(n)),n.state={collapsed:!0},n}return Object(i.a)(a,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){var e=this.state.collapsed,t=e?"collapse navbar-collapse":"collapse navbar-collapse show",a=e?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right";return l.a.createElement("nav",{className:"navbar navbar-expand-md bg-grad navbar-dark sticky-top"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"navbar-brand",href:"/"},l.a.createElement("img",{src:v.a,alt:"logo",width:"40px",height:"40px"})),l.a.createElement("button",{onClick:this.toggleNavbar,className:"".concat(a),type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"".concat(t),id:"navbarResponsive"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"collapsed nav-link",href:"/"},"Home ")),l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link",href:"/about"},"About ")),l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link",href:"/contact"},"Contact "))))))}}]),a}(n.Component),g=a(30),f=a(49),b=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={alertShow:!1,alertMessage:"",alertVariant:"",email:"",password:""},a}return Object(i.a)(n,[{key:"sendLogin",value:function(e){var t=this;e.preventDefault();var n=a(41).default,l=a(79).sha256,r=O+"getPrenom.php?mail="+this.state.email+"&password="+l(this.state.password);n.get(r).then((function(e){e.data>0?console.log("Mail et mdp bon ! Votre id est : ",e.data):t.setState({alertShow:!0,alertMessage:"Adresse mail ou mot de passe incorrect.",alertVariant:"danger"})})).catch((function(e){console.log(e),t.setState({alertShow:!0,alertMessage:"Une erreur s'est produite.",alertVariant:"warning"})}))}},{key:"inputChange",value:function(e){e.preventDefault();var t=e.target,a=t.name,n=t.value;this.setState(Object(g.a)({},a,n))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(f.a,{variant:this.state.alertVariant,id:"AlertIncorrect",show:this.state.alertShow,onClose:function(){return e.setState({alertShow:!1})},dismissible:!0},this.state.alertMessage),l.a.createElement("form",{onSubmit:function(t){return e.sendLogin(t)}},l.a.createElement("input",{className:"input",name:"email",type:"text",placeholder:"Ton adresse e-mail",value:this.state.email,onChange:function(t){return e.inputChange(t)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{className:"input",name:"password",type:"password",placeholder:"Ton mot de passe",value:this.state.password,onChange:function(t){return e.inputChange(t)}}),l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-danger",type:"submit"},"Connexion")),l.a.createElement(u.b,{className:"text-pink",to:"/"},"Mot de passe oubli\xe9 ?"))}}]),n}(n.Component),N=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={email:"",password:"",verifPassword:"",prenom:"",nom:"",dateBirth:"",ville:"",StudentCard:null,alertShow:!1,alertMessage:"",alertClass:"alert-danger",etape:0},a}return Object(i.a)(n,[{key:"fifteenYearsAgo",value:function(){var e=new Date;return e.setDate(e.getDate()-5475),e.toISOString().substr(0,10)}},{key:"verif",value:function(){var e=this.state.email.indexOf("@");return""===this.state.email?(this.setState({alertMessage:"Votre e-mail n'est pas pr\xe9cis\xe9."}),!1):-1===this.state.email.indexOf("@")?(this.setState({alertMessage:"Votre e-mail n'est pas correcte."}),!1):-1===this.state.email.indexOf(".com",e)&&-1===this.state.email.indexOf(".fr",e)&&-1===this.state.email.indexOf(".eu",e)&&-1===this.state.email.indexOf(".org",e)&&-1===this.state.email.indexOf(".net",e)?(this.setState({alertMessage:"Votre e-mail doit finir par .com/.fr/.eu/.org/.net."}),!1):this.state.password.length<6?(this.setState({alertMessage:"Votre mot de passe doit contenir plus de 6 caract\xe8re."}),!1):this.state.password!==this.state.verifPassword?(this.setState({alertMessage:"Vos mots de passe ne correspondent pas."}),!1):this.state.nom.length<2||this.state.nom.length<2?(this.setState({alertMessage:"Vous n'avez pas renseignez votre nom/pr\xe9nom."}),!1):this.state.ville.length<2?(this.setState({alertMessage:"Vous n'avez pas renseignez votre ville."}),!1):""!==this.state.dateBirth||(this.setState({alertMessage:"Votre date de naissance n'est pas pr\xe9cis\xe9e."}),!1)}},{key:"sendAccount",value:function(e){var t=this;e.preventDefault();var n=a(41),l=a(79).sha256;if(this.verif()){var r=new FormData;r.append("email",this.state.email),r.append("password",l(this.state.password)),r.append("prenom",this.state.prenom),r.append("nom",this.state.nom),r.append("dateBirth",this.state.dateBirth),r.append("ville",this.state.ville);var o=O+"newUser";n.post(o,r).then((function(e){if(console.log("R\xe9ponse newUser: "+e.data),e.data>=0){switch(e.data){case 0:t.setState({alertMessage:"L'adresse mail existe d\xe9j\xe0.",alertClass:"alert-danger"});break;case 1:t.setState({alertClass:"alert-primary",alertMessage:"Compte cr\xe9e avec succ\xe8s !",etape:1});break;default:t.setState({alertMessage:"La r\xe9ponse de l'API n'est pas celle attendue."})}t.setState({alertShow:!0})}else console.error("Probl\xe8me dans le retour de l'API/newUser.")})).catch((function(e){console.log(e)}))}else this.setState({alertShow:!0})}},{key:"sendCard",value:function(e){var t=this;e.preventDefault();var n=a(41),l=new FormData;l.append("file",this.state.StudentCard),l.append("email",this.state.email);var r=O+"setCarteEtudiante";n.post(r,l).then((function(e){if(console.log("R\xe9ponse setCarteEtudiante: "+e.data),e.data>=0){switch(e.data){case 0:t.setState({alertMessage:"Aucune carte \xe9tudiante n'a \xe9t\xe9 envoy\xe9e.",alertClass:"alert-secondary",etape:2});break;case 1:t.setState({alertClass:"alert-primary",alertMessage:"Carte \xe9tudiante envoy\xe9e avec succ\xe8s !",etape:2});break;case 2:t.setState({alertClass:"alert-danger",alertMessage:"Votre image d\xe9passe 2Mo !"});break;case 3:t.setState({alertClass:"alert-danger",alertMessage:"L'extension de votre image n'est pas accept\xe9e !"});break;default:t.setState({alertMessage:"La r\xe9ponse de l'API n'est pas celle attendue."})}t.setState({alertShow:!0})}else t.setState({alertClass:"alert-warning",alertMessage:"L'image a rencontr\xe9 un probl\xe8me durant l'upload.",alertShow:!0}),console.error("Probl\xe8me dans le retour de l'API/setCarteEtudiante.")})).catch((function(e){console.log(e),t.setState({alertClass:"alert-warning",alertMessage:"La requ\xeate/le serveur a rencontr\xe9 un probl\xe8me.",alertShow:!0})}))}},{key:"inputChangeStudentCard",value:function(e){var t=this,a=e.target.files,n=new FileReader;null!=a[0]?(n.readAsDataURL(a[0]),n.onload=function(e){t.setState({StudentCard:a[0]}),console.log(t.state.StudentCard)}):this.setState({StudentCard:null})}},{key:"inputChange",value:function(e){e.preventDefault();var t=e.target,a=t.name,n=t.value;this.setState(Object(g.a)({},a,n))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"text-blue"},this.state.alertShow&&l.a.createElement("div",{className:"alert alert-dismissible fade show "+this.state.alertClass},this.state.alertMessage),0===this.state.etape&&l.a.createElement("form",{onSubmit:function(t){return e.sendAccount(t)}},l.a.createElement("label",{htmlFor:"email"},"E-mail :"),l.a.createElement("input",{className:"input",id:"email",name:"email",type:"text",placeholder:"Ton adresse e-mail",value:this.state.email,onChange:function(t){return e.inputChange(t)}}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"password"},"Mot de passe :"),l.a.createElement("input",{className:"input",id:"password",name:"password",type:"password",placeholder:"Ton mot de passe",value:this.state.password,onChange:function(t){return e.inputChange(t)}}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"verifPassword"},"V\xe9rifie ton mot de passe :"),l.a.createElement("input",{className:"input",id:"verifPassword",name:"verifPassword",type:"password",placeholder:"Ton mot de passe",value:this.state.verifPassword,onChange:function(t){return e.inputChange(t)}}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"nom"},"Nom :"),l.a.createElement("input",{className:"input",id:"nom",name:"nom",type:"text",placeholder:"Ton Nom",value:this.state.nom,onChange:function(t){return e.inputChange(t)}}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"prenom"},"Pr\xe9nom :"),l.a.createElement("input",{className:"input",id:"prenom",name:"prenom",type:"text",placeholder:"Ton pr\xe9nom",value:this.state.prenom,onChange:function(t){return e.inputChange(t)}}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"ville"},"Ville :"),l.a.createElement("input",{className:"input",id:"ville",name:"ville",type:"text",placeholder:"Ta ville",value:this.state.ville,onChange:function(t){return e.inputChange(t)}}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"dateBirth"},"Date de naissance :"),l.a.createElement("input",{className:"input",id:"dateBirth",name:"dateBirth",type:"date",maxLength:"10",placeholder:"jj/mm/aaaa",min:"1960-01-01",max:this.fifteenYearsAgo(),value:this.state.dateBirth,onChange:function(t){return e.inputChange(t)}}),l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-danger",type:"submit"},"S'enregister")),1===this.state.etape&&l.a.createElement("form",{onSubmit:function(t){return e.sendCard(t)}},l.a.createElement("h4",null,"Envoi de la carte \xe9tudiante"),l.a.createElement("p",{color:"grey"},"Votre carte \xe9tudiante dois \xeatre au format .png/.jpg/.jpeg et ne doit pas d\xe9passer 2Mo."),l.a.createElement("label",{htmlFor:"Student_Card"},"Carte \xe9tudiante :"),l.a.createElement("input",{className:"input",type:"file",name:"StudentCard",id:"Student_Card",onChange:function(t){return e.inputChangeStudentCard(t)}}),l.a.createElement("br",null),l.a.createElement("button",{type:"submit"},"Upload")),2===this.state.etape&&l.a.createElement("div",null,l.a.createElement("h4",{className:"text-blue"},"Ton compte viens d'\xeatre cr\xe9\xe9"),l.a.createElement("p",{className:"text-blue"},"Je t'invite \xe0 aller vite te connecter pour profiter de notre application :)"),l.a.createElement("a",{href:"/"},l.a.createElement("button",{className:"btn btn-danger"},"Fermer"))))}}]),n}(n.Component),C=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={show:0},n}return Object(i.a)(a,[{key:"changeShow",value:function(e){this.setState({show:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h1",{className:"text-blue"},"RENCONTRES, DISCUSSIONS,"),l.a.createElement("h2",{className:"text-purp"},"ET VOUS ? "),l.a.createElement("h2",{className:"text-blue"},"QUI ALLEZ-VOUS ETUDIER ?"),0===this.state.show&&l.a.createElement("div",{className:"btn-group-vertical"},l.a.createElement("button",{className:"btn btn-danger",onClick:function(t){return e.changeShow(1)}},"Se connecter"),l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-danger",onClick:function(t){return e.changeShow(2)}},"Se cr\xe9er un compte")),1===this.state.show&&l.a.createElement("div",null,l.a.createElement("button",{className:"close",onClick:function(t){return e.changeShow(0)},"aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7")),l.a.createElement("p",{className:"text-danger"},"Tu n'as toujours pas de compte ?\xa0",l.a.createElement(u.b,{className:"text-pink",to:"/",onClick:function(t){return e.changeShow(2)}},"Je cours m'en faire un !")),l.a.createElement("h2",{className:"text-success"},"Connexion"),l.a.createElement(b,null)),2===this.state.show&&l.a.createElement("div",null,l.a.createElement("button",{className:"close",onClick:function(t){return e.changeShow(0)},"aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7")),l.a.createElement("h2",{className:"text-success"},"Cr\xe9ation du compte"),l.a.createElement(N,null)))}}]),a}(n.Component),S=a(132),w=a.n(S),y=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={Description:null,Taille:null,City:"Cergy",value1:{min:18,max:24}},n}return Object(i.a)(a,[{key:"inputChange",value:function(e){e.preventDefault();var t=e.target,a=t.name,n=t.value;this.setState(Object(g.a)({},a,n))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(t){return e.sendLogin(t)}},l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"Photo"},"Vos photos :"),l.a.createElement("input",{type:"file",name:"Photo",id:"Photo"})),l.a.createElement("br",null),l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("label",{className:"input-group-text",for:"sexe"},"Je suis :")),l.a.createElement("div",{className:"form-check form-check-inline"},l.a.createElement("label",{className:"form-check-label",for:"homme"},"un homme"),l.a.createElement("input",{className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"homme",value:"option1"})),l.a.createElement("div",{className:"form-check form-check-inline"},l.a.createElement("label",{className:"form-check-label",for:"femme"},"une femme"),l.a.createElement("input",{className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"femme",value:"option2"})),l.a.createElement("div",{className:"form-check form-check-inline"},l.a.createElement("label",{className:"form-check-label",for:"vivant"},"vivant"),l.a.createElement("input",{className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"vivant",value:"option3"}))),l.a.createElement("br",null),l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("label",{className:"input-group-text",for:"lookingfor"},"Je souhaite rencontrer :")),l.a.createElement("div",{className:"form-check form-check-inline"},l.a.createElement("label",{className:"form-check-label",for:"homme"},"des hommes"),l.a.createElement("input",{className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"homme",value:"option1"})),l.a.createElement("div",{className:"form-check form-check-inline"},l.a.createElement("label",{className:"form-check-label",for:"femme"},"des femmes"),l.a.createElement("input",{className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"femme",value:"option2"})),l.a.createElement("div",{className:"form-check form-check-inline"},l.a.createElement("label",{className:"form-check-label",for:"both"},"les deux"),l.a.createElement("input",{className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"both",value:"option3"}))),l.a.createElement("br",null),l.a.createElement("div",{className:"input-group "},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("label",{className:"input-group-text",for:"purpose"},"Ce que je cherche :")),l.a.createElement("select",{id:"purpose"},l.a.createElement("option",{selected:!0},"A remplir"),l.a.createElement("option",{value:"1"},"Du s\xe9rieux"),l.a.createElement("option",{value:"2"},"Aller boire un verre"),l.a.createElement("option",{value:"3"},"On verra"),l.a.createElement("option",{value:"4"},"Pas de prise de t\xeate"),l.a.createElement("option",{value:"5"},"Occuper ma soir\xe9e "),l.a.createElement("option",{value:"5"},"Amiti\xe9 "),l.a.createElement("option",{value:"5"},"Seulement tchatter "))),l.a.createElement("br",null),l.a.createElement("label",{for:"Age"},"Tranche d'age :"),l.a.createElement(w.a,{draggableTrack:!0,maxValue:35,minValue:18,onChange:function(t){return e.setState({value1:t})},onChangeComplete:function(e){return console.log(e)},value:this.state.value5}),l.a.createElement("br",null),l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("label",{className:"input-group-text",for:"Description"},"A propos de vous :")),l.a.createElement("textarea",{id:"Description",name:"Description",type:"text",placeholder:"Vous avez 350 caract\xe8res pour nous en dire plus ;)",style:{resize:"none"},rows:"2",cols:"50",maxlength:"350",value:this.state.Description,onChange:function(t){return e.inputChange(t)}})),l.a.createElement("br",null),l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("label",{className:"input-group-text",for:"City"},"Habite \xe0 :")),"                ",l.a.createElement("input",{id:"City",name:"City",type:"text",placeholder:"Paris",value:this.state.City,onChange:function(t){return e.inputChange(t)}})),l.a.createElement("br",null),l.a.createElement("div",{className:"input-group "},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("label",{className:"input-group-text",for:"Study"},"J'\xe9tudie au :")),l.a.createElement("select",{id:"Study"},l.a.createElement("option",{selected:!0},"A remplir"),l.a.createElement("option",{value:"1"},"Lyc\xe9e"),l.a.createElement("option",{value:"2"},"Universit\xe9"),l.a.createElement("option",{value:"3"},"Ecole d'Ing\xe9nieur"),l.a.createElement("option",{value:"4"},"Ecole de commerce"),l.a.createElement("option",{value:"5"},"Ecole sup\xe9rieur "),l.a.createElement("option",{value:"5"},"Reconversion "),l.a.createElement("option",{value:"5"},"Ann\xe9e sabatique "))),l.a.createElement("br",null),l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("label",{className:"input-group-text",for:"Taille"},"Taille :")),l.a.createElement("input",{id:"Taille",name:"Taille",type:"number",min:"100",max:"300",onChange:function(t){return e.inputChange(t)}}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("label",{className:"input-group-text",for:"Taille"},"cm"))),l.a.createElement("br",null),l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("label",{className:"input-group-text",for:"Yeux"},"Yeux :")),l.a.createElement("select",{id:"Yeux"},l.a.createElement("option",{selected:!0},"A remplir"),l.a.createElement("option",{value:"1"},"Noir"),l.a.createElement("option",{value:"2"},"brun "),l.a.createElement("option",{value:"3"},"auburn"),l.a.createElement("option",{value:"4"},"ch\xe2tain"),l.a.createElement("option",{value:"5"},"roux"),l.a.createElement("option",{value:"6"},"blond "),l.a.createElement("option",{value:"7"},"blanc"),l.a.createElement("option",{value:"8"},"Autre"))),l.a.createElement("br",null),l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("label",{className:"input-group-text",for:"Hair"},"Cheveux :")),l.a.createElement("select",{id:"Hair"},l.a.createElement("option",{selected:!0},"A remplir"),l.a.createElement("option",{value:"1"},"Noir"),l.a.createElement("option",{value:"2"},"Marron"),l.a.createElement("option",{value:"3"},"Vert"),l.a.createElement("option",{value:"4"},"Bleue"),l.a.createElement("option",{value:"5"},"Verron"),l.a.createElement("option",{value:"6"},"Autre"))),l.a.createElement("br",null),l.a.createElement("div",{className:"input-group "},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("label",{className:"input-group-text",for:"Sport"},"Activit\xe9s physique :")),l.a.createElement("select",{id:"Sport"},l.a.createElement("option",{selected:!0},"A remplir"),l.a.createElement("option",{value:"1"},"Passion\xe9"),l.a.createElement("option",{value:"2"},"R\xe9guli\xe8rement"),l.a.createElement("option",{value:"3"},"Parfois"),l.a.createElement("option",{value:"4"},"une fois au chalet"),l.a.createElement("option",{value:"5"},"Quelle horreur"))),l.a.createElement("br",null),l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("label",{className:"input-group-text",for:"Alcool"},"Alcool :")),l.a.createElement("select",{id:"Alcool"},l.a.createElement("option",{selected:!0},"A remplir"),l.a.createElement("option",{value:"1"},"Tous les jours"),l.a.createElement("option",{value:"2"},"R\xe9guli\xe8rement"),l.a.createElement("option",{value:"3"},"A l'occasion"),l.a.createElement("option",{value:"4"},"Jamais"))),l.a.createElement("br",null),l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("label",{className:"input-group-text",for:"Tabac"},"Tabac :")),l.a.createElement("select",{id:"Tabac"},l.a.createElement("option",{selected:!0},"A remplir"),l.a.createElement("option",{value:"1"},"Fr\xe9quemment"),l.a.createElement("option",{value:"2"},"A l'occasion"),l.a.createElement("option",{value:"3"},"Jamais"))),l.a.createElement("br",null),l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("label",{className:"input-group-text",for:"Pet"},"Animaux de compagnie :")),l.a.createElement("select",{id:"Pet"},l.a.createElement("option",{selected:!0},"A remplir"),l.a.createElement("option",{value:"1"},"Chiens"),l.a.createElement("option",{value:"2"},"Chats"),l.a.createElement("option",{value:"3"},"Beaucoup :)"),l.a.createElement("option",{value:"4"},"Autres"),l.a.createElement("option",{value:"5"},"Aucun"),l.a.createElement("option",{value:"6"},"Allergiques :'("))),l.a.createElement("br",null),l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("label",{className:"input-group-text",for:"Religion"},"Religion :")),l.a.createElement("select",{id:"Religion"},l.a.createElement("option",{selected:!0},"A remplir"),l.a.createElement("option",{value:"1"},"Agnosticisme"),l.a.createElement("option",{value:"2"},"Ath\xe9isme"),l.a.createElement("option",{value:"3"},"Bouddhisme"),l.a.createElement("option",{value:"4"},"Christianisme"),l.a.createElement("option",{value:"5"},"Hindouisme"),l.a.createElement("option",{value:"6"},"Ja\xefnisme"),l.a.createElement("option",{value:"7"},"Juda\xefsme"),l.a.createElement("option",{value:"8"},"Islam"),l.a.createElement("option",{value:"9"},"Zoroastrisme"),l.a.createElement("option",{value:"10"},"Sikhisme"),l.a.createElement("option",{value:"11"},"Spiritualit\xe9"),l.a.createElement("option",{value:"12"},"Autre"))),l.a.createElement("br",null),l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("label",{className:"input-group-text",for:"Astro"},"Signe astrlogique :")),l.a.createElement("select",{id:"Asro"},l.a.createElement("option",{selected:!0},"A remplir"),l.a.createElement("option",{value:"1"},"Verseau"),l.a.createElement("option",{value:"2"},"Poissons"),l.a.createElement("option",{value:"3"},"B\xe9lier"),l.a.createElement("option",{value:"4"},"Taureau"),l.a.createElement("option",{value:"5"},"G\xe9meaux"),l.a.createElement("option",{value:"6"},"Cancer"),l.a.createElement("option",{value:"7"},"Lion"),l.a.createElement("option",{value:"8"},"Vierge"),l.a.createElement("option",{value:"9"},"Scorpion"),l.a.createElement("option",{value:"10"},"Sagittaire"),l.a.createElement("option",{value:"11"},"Capricorne"))),l.a.createElement("br",null),l.a.createElement("button",{type:"submit"},"Sauvegarder")))}}]),a}(n.Component),x=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={alertShow:!1,alertMessage:"",alertVariant:"",ville:"",name:"",lat:null,long:null},a}return Object(i.a)(n,[{key:"sendLogin",value:function(e){e.preventDefault()}},{key:"inputChangeVille",value:function(e){var t=this;e.preventDefault(),this.setState({ville:e.target.value});var n=a(41).default,l="https://api-adresse.data.gouv.fr/search/?q="+e.target.value+"&type=municipality&autocomplete=1";n.get(l).then((function(e){if(console.log(e),null!==e.data)for(var a=0;a<10;a++)null!=e.data.features[0]&&(t.setState({name:e.data.features[0].properties.city,lat:e.data.features[0].geometry.coordinates[1],long:e.data.features[0].geometry.coordinates[0]}),console.log("name : "+e.data.features[0].properties.city),console.log("lat : "+e.data.features[0].geometry.coordinates[1]),console.log("long : "+e.data.features[0].geometry.coordinates[0]),t.setState({alertShow:!0,alertMessage:"Ville trouv\xe9e.",alertVariant:"secondary"}))})).catch((function(e){console.log(e),t.setState({alertShow:!0,alertMessage:"Une erreur s'est produite.",alertVariant:"warning"})}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(f.a,{variant:this.state.alertVariant,id:"AlertIncorrect",show:this.state.alertShow,onClose:function(){return e.setState({alertShow:!1})},dismissible:!0},this.state.alertMessage),l.a.createElement("form",{onSubmit:function(t){return e.sendLogin(t)}},l.a.createElement("input",{className:"input",name:"ville",type:"text",placeholder:"Ville",value:this.state.ville,onChange:function(t){return e.inputChangeVille(t)}}),l.a.createElement("label",{htmlFor:"ville"},"Ville trouv\xe9e : "+this.state.name),l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-danger",type:"submit"},"Ne fais rien")))}}]),n}(n.Component),k=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,{basename:"/"},l.a.createElement("div",{className:"App"},l.a.createElement(E,null),l.a.createElement(p.c,null,l.a.createElement(p.a,{path:"/",exact:!0,component:C}),l.a.createElement(p.a,{path:"/preference",exact:!0,component:y}),l.a.createElement(p.a,{path:"/position",exact:!0,component:x}))))}}]),a}(l.a.Component),O="https://projetwebeisti.000webhostapp.com/api/";a(280),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[133,1,2]]]);
//# sourceMappingURL=main.93ee68d0.chunk.js.map