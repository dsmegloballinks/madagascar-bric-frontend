import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          dashboard: "Dashboard",
          total_register_child: "Total Registered Child",
          last_wek_register_child: "Last Week Registered Child",
          last_month_register_child: "Last Month Registered Child",
          last_year_register_child: "Last Year Registered Child",
          start_date: "Start date",
          end_date: "End Date",
          region: "Region",
          district: "District",
          fokontany: "Fokontany",
          commune: "Commune",
          filter: "Filter",
          reset: "Reset",
          graph: "Graph",
          map: "Map",
          list: "List",
          welcome: "Welcome",
          last_7_days: "Last 7 days",
          gender_segregation: "Gender Segregation",
          male: "Male",
          female: "Female",
          this_year: "This Year",
          field_acivity: "Field Activities",
          form_submit: "Form Submission",
          niu: "NIU",
          child_name: "Child Name",
          mother_name: "Mother Name",
          dob: "Date of Birth",
          office_address: "Office Address",
          attached_files: "Attached Files",
          view: "View",
          registered_pic: "Registered Picture",
          bith_cert: "Birth Certificate",
          birth_declaration: "Declaration of Birth",
          reporting_info: "Reporting Infromation",
          number: "Number",
          dec_date: "Date of Declaration",
          trns_dec_date: "Date of Transcription of Declaration",
          day: "Day",
          month: "Month",
          year: "Year",
          child_info: "Information about Child",
          last_name: "Last Name",
          first_name: "First Name",
          bith_place: "Place of Birth",
          married_parents: "Married Parents",
          yes: "Yes",
          no: "No",
          same_resid: "Same Usual Residence",
          birth_hc: "Birth in Health Center",
          with_hcw: "With Healh Care Worker",
          bith_address: "Birth Place Address",
          mother_info: "Information about Mother",
          usual_resid: "Usual Residence",
          profession: "Profession",
          nationality: "Nationality",
          malagasy: "Malagasy",
          other_spec: "Other (To Specify)",
          father_info: "Information about Father",
          dec_info: "Declarant Information",
          link: "Link",
          father: "Father",
          mother: "Mother",
          family: "Family",
          health_worker: "Health Worker",
          matron: "Matron",
          ac: "AC",
          other: "Other",
          dec_sign: "Signature of Declarant",
          civil_sign: "Signature of Civil Status Officer",
          project_title: "Birth Registration Information Center (BRIC)",
          madag: "Information Center (BRIC)",
          brth_reg: "Birth Registration",
          logout: "Logout",
          print: "Print",
          reg_destails: "Registration Details",
          hour: "Hour",
          search: "Search",
          lets_signin: "Let's Sign In",
          signin_desc:
            "Get the process started in less than 10 minutes. Let us handle the rest",
          user_email: "Username / email",
          password: "Password",
          cnfrm_pass: "Confirm Password",
          forgot_password: "Forgot Password ?",
          login: "Login",
          welcom_cms: "Welcome to CMS",
          user_mng: "User Management",
          username: "User name",
          email: "Email",
          status: "Status",
          action: "Action",
          reset_pass: "Reset Password",
          add_user: "Add User",
          edit_user: "Edit User",
          save_user: "Save User",
          alert: "Alert!",
          reset_pass_msg: "Are you sure, you want reset the password?",
          reg_mng: "Registrar Management",
          add_reg: "Add Registrar",
          edit_reg: "Edit Registrar",
          save_reg: "Save Registrar",
          delete_reg: "Delete Registrar",
          department: "Department",
          official_contact: "Official Contact",
          view_apt: "View Appointments",
          location: "Location",
          appt_date: "Appointment Date",
          appt_time: "Appointment Time",
          appt_date_time: "Appointment Date & Appointment Time",
          appt_end_date: "Appointment End Date",
          appt_end_time: "Appointment End Time",
          appt_end_date_time: "Appointment End Date & Appointment End Time",
          appt_status: "Appointment Status",
          appt_by: "Appointed By",
          edit_appt: "Edit Appointment",
          update_appt: "Update Appointment Status",
          add_newappt: "Add New Appointment",
          appt_address: "Appointment Address",
          add_appt: "Add Apointment",
          appt: "Appointments",
          add: "Add",
          save: "Save",
          cancel: "Cancel",
          off_contct_no: "Official Contact Number",
          delete_msg: "Do you really want to delete this?",
          niu_mng: "NIU Management",
          all: "All",
          allocated: "Allocated",
          not_allocated: "Not Allocated",
          allo_commune: "Allocated Commune",
          allo_date: "Allocation Date",
          allo_time: "Allocation Time",
          niu_status: "NIU Status",
          view_history: "View History",
          upload_file: "Upload File",
          niu_track: "NIU Tracking",
          file_name: "File Name",
          import_date: "Date of Import",
          import_time: "Time of Import",
          no_records: "No. of Records",
          imp_history: "Import History",
          wrg_niu_no: "Wrong NIU Number",
          wrg_loc_allo: "Wrong NIU Location Allocation",
          dup_niu: "Duplicate NIU Number",
          err_type: "Error Type",
          error_rep_date: "Error Reported Date",
          error_cor_date: "Error Corrected Date",
          edit_niu: "Edit NIU",
          update_niu: "Update NIU Number",
          niu_number: "NIU Number",
          odk_mng: "ODK Record Management",
          imp_type: "Import Type",
          fetch_rec: "Fetch Records",
          fetch_rec_msg: "Are you sure, you want to fetch records?",
          processing: "Processing...",
          ok: "Ok",
          enter_mail: "Enter Email",
          enter_pass: "Enter Password",
          enter_username: "Enter user name",
          nospace_username: "Space is not allowed in username",
          enter_valid_mail: "Enter valid email",
          enter_valid_pass: "Password must contain 8 characters",
          enter_conf_pass: "Enter confirm password",
          match_pass: "Password and confirm password doesn't match",
          enter_last_name: "Enter last name",
          enter_first_name: "Enter first name",
          enter_dept: "Enter department",
          enter_contact: "Enter contact number",
          enter_app_add: "Enter appointment address",
          enter_app_status: "Enter appointment status",
          enter_app_date: "Enter appointment date",
          enter_app_time: "Enter appointment time",
          enter_app_by: "Enter appointed by",
          error: "Some error occured, please try again",
          appoint: "Appointed",
          transfer: "Transferred",
          post_await: "Posting awaited",
          success: "Information updated successfully",
          addsuccess: "Information added successfully",
          active: "Active",
          revoke: "Revoke",
          noData: "There are no records to display",
          delete_success: "Information deleted successfully",
          reset_pass_success: "Password has been sent to the user email",
          data_info: "Data Information!",
          warning: "Warning!",
          add_user_msg: "New User Created Successfully",
          update_user: "User Updated Successfully",
          active_status: "User Status Activated",
          revoke_status: "User Status Revoked",
          add_reg_msg: "New Registrar Created Successfully",
          update_reg_msg: "Registrar Updated Successfully",
          up_file_msg: "Upload File",
          fetch_record_msg: "Records Fetched Successfully",
          up_file_suc_msg: "File uploaded successfully",
        },
      },
      mg: {
        translation: {
          dashboard: "Anaty fiara",
          total_register_child: "Ankizy rehetra voasoratra anarana",
          last_wek_register_child: "Zaza Voasoratra tamin'ny herinandro lasa",
          last_month_register_child:
            "Zaza voasoratra anarana tamin'ny volana lasa",
          last_year_register_child:
            "Ankizy nisoratra anarana tamin'ny taon-dasa",
          start_date: "Daty Nanombohana",
          end_date: "Daty Farany",
          region: "Region",
          district: "DISTRIKA",
          fokontany: "Fokontany",
          commune: "Kaominina",
          filter: "Sivana",
          reset: "Mamerina",
          graph: "Tabilao",
          map: "Sarintany",
          list: "Lisitra",
          welcome: "TONGA SOA",
          last_7_days: "7 andro farany",
          gender_segregation: "Fanavahana lahy sy vavy",
          male: "Lahy",
          female: "Vehivavy",
          this_year: "Ity taona ity",
          field_acivity: "Hetsika eny an-kianja",
          form_submit: "Fanolorana endrika",
          niu: "NIU",
          child_name: "Anaran-janaka",
          mother_name: "Anaran-dreniny",
          dob: "Daty nahaterahana",
          office_address: "Adiresy birao",
          attached_files: "Rakitra mipetaka",
          view: "View",
          registered_pic: "Sary voasoratra",
          bith_cert: "Kopia nahaterahana",
          birth_declaration: "Fanambarana nahaterahana",
          reporting_info: "Fampahalalana momba ny tatitra",
          number: "Isa",
          dec_date: "Datin’ny fanambarana",
          trns_dec_date: "Datin'ny fandikana ny fanambarana",
          day: "Andro",
          month: "VOLANA",
          year: "TAOM-",
          child_info: "Vaovao momba ny zaza",
          last_name: "Anarana",
          first_name: "Fanampin'anarana",
          bith_place: "Toerana nahaterahana",
          married_parents: "Ray aman-dreny manambady",
          yes: "ENY",
          no: "Tsy misy",
          same_resid: "Trano fonenana mahazatra ihany",
          birth_hc: "Teraka tao amin’ny tobim-pahasalamana",
          with_hcw: "Miaraka amin'ny mpiasan'ny fahasalamana",
          bith_address: "Adiresy toerana nahaterahana",
          mother_info: "Fampahalalana momba ny reny",
          usual_resid: "Trano fonenana mahazatra",
          profession: "Asa",
          nationality: "Zom-pirenena",
          malagasy: "Malagasy",
          other_spec: "Hafa (mba hamaritana)",
          father_info: "Information momba ny rainy",
          dec_info: "Fanambaram-baovao",
          link: "Rohy",
          father: "Ray",
          mother: "RENY",
          family: "Family",
          health_worker: "Mpiasa ara-pahasalamana",
          matron: "Mpiasa azy",
          ac: "As",
          other: "Hafa",
          dec_sign: "Sonia declarant",
          civil_sign: "Sonia mpiasam-panjakana",
          project_title: "Foibe fampahalalam-baovao momba ny fahaterahana (BRIC)",
          madag: "Ivom-baovao (BRIC)",
          brth_reg: "Fisoratana anarana",
          logout: "Miala",
          print: "PIRINTY",
          reg_destails: "Antsipiriany momba ny fisoratana anarana",
          hour: "Ora",
          search: "Karohy",
          lets_signin: "Andao hiditra",
          signin_desc:
            "Atombohy ao anatin'ny 10 minitra latsaka ny dingana. Andeha hojerentsika ny ambiny",
          user_email: "Solonanarana / mailaka",
          password: "Tenimiafina",
          cnfrm_pass: "Confirmez le mot de passe",
          forgot_password: "Hadino ny tenimiafina ?",
          login: "Hiditra",
          welcom_cms: "Tongasoa eto amin'ny CMS",
          user_mng: "Fitantanana mpampiasa",
          username: "Anaran'ny mpampiasae",
          email: "Mailaka",
          status: "Sata",
          action: "Hetsika",
          reset_pass: "Reset tenimiafina",
          add_user: "Ampio mpampiasa",
          edit_user: "Manova mpampiasa",
          save_user: "Vonjeo ny mpampiasa",
          alert: "Mailo!",
          reset_pass_msg: "Azo antoka ve ianao, te hamerenana ny tenimiafina?",
          reg_mng: "Fitantanana rejisitra",
          add_reg: "Ampio mpisoratra anarana",
          edit_reg: "Hanova ny rejisitra",
          save_reg: "Vonjeo ny registrar",
          delete_reg: "Mamafa ny rejisitra",
          department: "MINISITERAN'NY",
          official_contact: "Fifandraisana ofisialy",
          view_apt: "Jereo ny fanendrena",
          location: "Toerana",
          appt_date: "Daty fanendrena",
          appt_time: "Fotoana fanendrena",
          appt_date_time: "Daty fanendrena sy fotoana fanendrena",
          appt_end_date: "Daty fiafaran'ny fanendrena",
          appt_end_time: "Fotoana fiafaran'ny fanendrena",
          appt_end_date_time: "Daty fiafaran'ny fanendrena sy ora fiafaran'ny fanendrena",
          appt_status: "Sata fanendrena",
          appt_by: "Notendren'ny",
          edit_appt: "Hanova ny fotoana",
          update_appt: "Manavao ny sata fanendrena",
          add_newappt: "Hanampy fanendrena vaovao",
          appt_address: "Adiresy fanendrena",
          add_appt: "Ampio fotoana",
          appt: "Fanendrena",
          add: "Hametraka",
          save: "Afa-tsy",
          cancel: "Hanafoana",
          off_contct_no: "Laharana ofisialy",
          delete_msg: "Tena tianao ve ny mamafa an'ity?",
          niu_mng: "Ny fitantanana ny NIU",
          all: "REHETRA",
          allocated: "Omena",
          not_allocated: "Tsy natokana",
          allo_commune: "Kaominina natokana",
          allo_date: "Daty fanomezana",
          allo_time: "Fotoana atokana",
          niu_status: "Sata NIU",
          view_history: "Jereo ny tantara",
          upload_file: "Mampakatra rakitra",
          niu_track: "Ny fanaraha-maso NIU",
          file_name: "Anaran'ny fisie",
          import_date: "Daty fanafarana",
          import_time: "Fotoana fanafarana",
          no_records: "Tsia. ny firaketana",
          imp_history: "Tantara import",
          wrg_niu_no: "Diso numéro",
          wrg_loc_allo: "Diso ny famatsiana toerana",
          dup_niu: "Duplicate ny isa",
          err_type: "Karazana fahadisoana",
          error_rep_date: "Daty tatitra diso",
          error_cor_date: "Daty voahitsy ny fahadisoana",
          edit_niu: "Manova niu",
          update_niu: "Fanavaozana ny laharana",
          niu_number: "Ny numéro",
          odk_mng: "Fitantanana firaketana odk",
          imp_type: "Karazana fanafarana",
          fetch_rec: "Maka rakitra",
          fetch_rec_msg: "Azo antoka ve ianao fa te haka rakitra?",
          processing: "Fanodinana...",
          ok: "Ok",
          enter_mail: "Ampidiro mailaka",
          enter_pass: "Ampidiro ny tenimiafina",
          enter_username: "Tsy mahazo toerana amin'ny solon'anarana",
          nospace_username: "Space is not allowed in username",
          enter_valid_mail: "Ampidiro mailaka manan-kery",
          enter_valid_pass: "Tsy maintsy misy tarehintsoratra 8 ny tenimiafina",
          enter_conf_pass: "Ampidiro ny tenimiafina fanamafisana",
          match_pass: "Tsy mifanaraka ny tenimiafina sy ny tenimiafina",
          enter_last_name: "Ampidiro anarana",
          enter_first_name: "Ampidiro anarana voalohany",
          enter_dept: "Midira ao amin'ny departemanta",
          enter_contact: "Ampidiro ny laharan-tariby",
          enter_app_add: "Ampidiro ny adiresin'ny fotoana",
          enter_app_status: "Ampidiro ny sata fanendrena",
          enter_app_date: "Ampidiro ny daty fanendrena",
          enter_app_time: "Ampidiro ny fotoana fanendrena",
          enter_app_by: "Ampidiro notendren'ny",
          error: "Nisy hadisoana nitranga, andramo indray azafady",
          appoint: "Nommé",
          transfer: "Transféré",
          post_await: "Publication attendue",
          success: "Nohavaozina soa aman-tsara ny vaovao",
          addsuccess:"Tafita soamantsara ny fampahalalana",
          active: "Active",
          revoke: "Manafoana",
          noData: "Tsy misy firaketana haseho",
          delete_success: "Voafafa soa aman-tsara ny fampahalalana",
          reset_pass_success: "Nalefa tamin'ny mailaka mpampiasa ny tenimiafina",
          data_info: "Data Information",
          warning: "FAMPITANDREMANA!",
          add_user_msg: "Noforonina soa aman-tsara ny mpampiasa vaovao",
          update_user: "Nohavaozina soa aman-tsara ny mpampiasa",
          active_status: "Satan'ny mpampiasa mavitrika",
          revoke_status: "Nofoanana ny satan'ny mpampiasa",
          add_reg_msg: "Noforonina soa aman-tsara ny fisoratana anarana vaovao",
          update_reg_msg: "Nohavaozina soa aman-tsara ny Registrar",
          up_file_msg: "Mampiakatra rakitra",
          fetch_record_msg: "Enregistrements récupérés avec succès",
          up_file_suc_msg: "Tafiditra soa aman-tsara ny rakitra",
        },
      },
      fr: {
        translation: {
          dashboard: "Tableau de bord",
          total_register_child: "Nombre total d'enfants inscrits",
          last_wek_register_child: "Dernière semaine Enfant inscrit",
          last_month_register_child: "Dernier mois Enfant enregistré",
          last_year_register_child: "Dernière année Enfant enregistré",
          start_date: "Date De Début",
          end_date: "Date De Fin",
          region: "Région",
          district: "District",
          fokontany: "Fokontany",
          commune: "Commune",
          filter: "Filtre",
          reset: "Remettre à zéro",
          graph: "Graphique",
          map: "Carte",
          list: "Liste",
          welcome: "Bienvenue",
          last_7_days: "7 derniers jours",
          gender_segregation: "Ségrégation des sexes",
          male: "Homme",
          female: "Féminin",
          this_year: "Cette année",
          field_acivity: "Activités sur le terrain",
          form_submit: "Soumission de formulaires",
          niu: "NIU",
          child_name: "Nom de l'enfant",
          mother_name: "Nom de la mère",
          dob: "Date de naissance",
          office_address: "Adresse du bureau",
          attached_files: "Fichiers joints",
          view: "Voir",
          registered_pic: "Photo enregistrée",
          bith_cert: "Acte de naissance",
          birth_declaration: "Déclaration de naissance",
          reporting_info: "Informations sur la déclaration",
          number: "Numéro",
          dec_date: "Date de la déclaration",
          trns_dec_date: "Date de transcription de la déclaration",
          day: "Jour",
          month: "Mois",
          year: "Année",
          child_info: "Informations sur l'enfant",
          last_name: "Nom de famille",
          first_name: "Prénom",
          bith_place: "Lieu de naissance",
          married_parents: "Parents mariés",
          yes: "Oui",
          no: "Non",
          same_resid: "Même résidence habituelle",
          birth_hc: "Naissance dans un centre de santé",
          with_hcw: "Avec un agent de santé",
          bith_address: "Adresse du lieu de naissance",
          mother_info: "Informations sur la mère",
          usual_resid: "Résidence habituelle",
          profession: "Profession",
          nationality: "Nationalité",
          malagasy: "Malgache",
          other_spec: "Autre (à préciser)",
          father_info: "Informations sur le père",
          dec_info: "Informations sur le déclarant",
          link: "Lien",
          father: "Père",
          mother: "Mère",
          family: "Famille",
          health_worker: "Agent de santé",
          matron: "Matrone",
          ac: "AC",
          other: "Autre",
          dec_sign: "Signature du déclarant",
          civil_sign: "Signature de l'officier d'état civil",
          project_title: "Centre d'information sur l'enregistrement des naissances (CIRB)",
          madag: "Centre d'information (CIRB)",
          brth_reg: "Enregistrement des naissances",
          logout: "Déconnexion",
          print: "Imprimer",
          reg_destails: "Détails de l'enregistrement",
          hour: "Heure",
          search: "Rechercher",
          lets_signin: "S'inscrire",
          signin_desc:
            "Démarrez le processus en moins de 10 minutes. Laissez-nous nous occuper du reste",
          user_email: "Nom d'utilisateur / email",
          password: "Mot de passe",
          cnfrm_pass: "Hamafiso ny tenimiafina",
          forgot_password: "Mot de passe oublié ?",
          login: "Login",
          welcom_cms: "Bienvenue au CMS",
          user_mng: "Gestion des utilisateurs",
          username: "Nom d'utilisateur",
          email: "Courriel",
          status: "Statut",
          action: "Action",
          reset_pass: "Réinitialiser le mot de passe",
          add_user: "Ajouter un utilisateur",
          edit_user: "Modifier l'utilisateur",
          save_user: "Enregistrer l'utilisateur",
          alert: "Alerte!",
          reset_pass_msg:
            "Etes-vous sûr de vouloir réinitialiser le mot de passe ?",
          reg_mng: "Gestion des bureaux d'enregistrement",
          add_reg: "Ajouter un bureau d'enregistrement",
          edit_reg: "Editer un bureau d'enregistrement",
          save_reg: "Sauvegarder le registrar",
          delete_reg: "Supprimer un officier d'état civil",
          department: "Service",
          official_contact: "Contact officiel",
          view_apt: "Voir les rendez-vous",
          location: "Lieu",
          appt_date: "Date du rendez-vous",
          appt_time: "Heure du rendez-vous",
          appt_date_time: "Date et heure du rendez-vous",
          appt_end_date: "Date de fin de rendez-vous",
          appt_end_time: "Heure de fin de rendez-vous",
          appt_end_date_time: "Date de fin de rendez-vous et heure de fin de rendez-vous",
          appt_status: "Statut de la nomination",
          appt_by: "Nommé par",
          edit_appt: "Modifier le rendez-vous",
          update_appt: "Mettre à jour le statut du rendez-vous",
          add_newappt: "Ajouter un nouveau rendez-vous",
          appt_address: "Adresse du rendez-vous",
          add_appt: "Ajouter un rendez-vous",
          appt: "Rendez-vous",
          add: "Ajouter",
          save: "Sauvegarder",
          cancel: "Annuler",
          off_contct_no: "Numéro de contact officiel",
          delete_msg: "Voulez-vous vraiment supprimer ceci?",
          niu_mng: "Direction du NIU",
          all: "Tous",
          allocated: "Attribué",
          not_allocated: "Non attribué",
          allo_commune: "Commune attribuée",
          allo_date: "Date d'attribution",
          allo_time: "Heure d'attribution",
          niu_status: "Statut NIU",
          view_history: "Voir l'historique",
          upload_file: "Télécharger un fichier",
          niu_track: "Suivi NIU",
          file_name: "Nom du fichier",
          import_date: "Date d'importation",
          import_time: "Heure d'importation",
          no_records: "Nombre d'enregistrements",
          imp_history: "Historique des importations",
          wrg_niu_no: "Mauvais numéro de niu",
          wrg_loc_allo: "Attribution d'un emplacement erroné du niu",
          dup_niu: "Numéro de niu en double",
          err_type: "Type d'erreur",
          error_rep_date: "Date de l'erreur signalée",
          error_cor_date: "Date de correction de l'erreur",
          edit_niu: "Editer le niu",
          update_niu: "Mettre à jour le numéro de niu",
          niu_number: "Numéro du niu",
          odk_mng: "ODK Record Management",
          imp_type: "Importer un type",
          fetch_rec: "Extraire des enregistrements",
          fetch_rec_msg:
            "Etes-vous sûr de vouloir extraire des enregistrements ?",
          processing: "Traitement...",
          ok: "D'accord",
          enter_mail: "Entrez l'e-mail",
          enter_pass: "Entrer le mot de passe",
          enter_username: "Saisissez votre nom d'utilisateur",
          nospace_username: "L'espace n'est pas autorisé dans le nom d'utilisateur",
          enter_valid_mail: "Entrez une adresse email valide",
          enter_valid_pass: "Le mot de passe doit contenir 8 caractères",
          enter_conf_pass: "Entrez le mot de passe de confirmation",
          match_pass:
            "Le mot de passe et le mot de passe de confirmation ne correspondent pas",
          enter_last_name: "Entrer le nom de famille",
          enter_first_name: "entrez votre prénom",
          enter_dept: "Entrez le département",
          enter_contact: "Entrez le numéro de contact",
          enter_app_add: "Entrer l'adresse du rendez-vous",
          enter_app_status: "Entrer le statut du rendez-vous",
          enter_app_date: "Entrer la date du rendez-vous",
          enter_app_time: "Saisir l'heure du rendez-vous",
          enter_app_by: "Entrez désigné par",
          error: "Une erreur s'est produite, veuillez réessayer",
          appoint: "HOTENDRENA",
          transfer: "Nafindra",
          post_await: "Andrasana ny fandefasana",
          success: "Informations mises à jour avec succès",
          addsuccess: "Informations ajoutées avec succès",
          active: "Actif",
          revoke: "Révoquer",
          noData: "Il n'y a aucun enregistrement à afficher",
          delete_success: "Informations supprimées avec succès",
          reset_pass_success: "Le mot de passe a été envoyé à l'adresse e-mail de l'utilisateur",
          data_info: "Informations de données",
          warning: "Avertissement!",
          add_user_msg: "Nouvel utilisateur créé avec succès",
          update_user: "Utilisateur mis à jour avec succès",
          active_status: "Statut utilisateur activé",
          revoke_status: "Statut utilisateur révoqué",
          add_reg_msg: "Nouveau bureau d'enregistrement créé avec succès",
          update_reg_msg: "Le bureau d'enregistrement a été mis à jour avec succès",
          up_file_msg: "Téléverser un fichier",
          fetch_record_msg: "Enregistrements récupérés avec succès",
          up_file_suc_msg: "Fichier téléchargé avec succès",
        },
      },
    },
  });
