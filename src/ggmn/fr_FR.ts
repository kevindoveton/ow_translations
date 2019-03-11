/**
 * Do not edit this file directly. 
 * Instead, edit the appropriate spreadsheet 
 * https://docs.google.com/spreadsheets/d/102zLqEWj4xlqqNgVUFCiMLqdcvaLY6GntS1xmlHdAE8/edit#gid=0
 * and recompile in order to change these fields
 */

import { TranslationOrg, TranslationOverrideFile } from "../Types";

const ggmn_fr_FR: TranslationOverrideFile = {
  org: TranslationOrg.ggmn,
  overrides: {
    settings_connect_to_pending_title: "Connection au GGMN",
    settings_connect_to_connected_title: "Connecté au GGMN",
    settings_connect_to_subtitle_error: "Erreur de connection au GGMN",
    settings_sync_heading: "Synchronisation au GGMN",
    settings_new_resource: "Nouvelle station de suivi",
    search_hint: "Rechercher une station de suivi par identifiant.",
    new_reading_warning_login_required: "Mesure sauvegardée localement. Veuillez vous identifier dans MyWell pour l'enregistrer.",
    new_reading_value_field: (units: string) => `Mesures en ${units}`,
    new_reading_value_field_invalid: "Mesure invalide",
    connect_to_service_description: "Connectez-vous au GGMN pour créer de nouvelles stations de suivi et enregistrer des mesures à partir de votre appareil mobile.",
    connect_to_service_connected_test: (fieldName: string, username: string) => `Vous êtes connecté au GGMN en tant que ${fieldName}: ${username}`,
    connect_to_service_org_selector: "Sélectionner une organisation",
    recent_resource_none: "Pas de station récente",
    resource_detail_new: "Nouvelle mesure",
    sync_login_message: "Identifiez-vous pour synchroniser votre appareil avec le GGMN.",
    sync_start_sync_button_loading: "Synchronisation au GGMN",
    sync_section_resources: "Stations de suivi",
    sync_empty_content: "Vous devez d'abord enregistrer des mesures ou créer une station de suivi.",
    resource_detail_empty_heading: "Aucune station de suivi n'a pu être trouvée pour l'instant.",
    resource_detail_empty_hint: "Cliquez sur le bouton de recherche ou utiliser le navigateur de carte pour en trouver une.",
    new_resource_saved_dialog_warning: "La position a été sauvegardée localement. Identifiez-vous pour synchroniser votre appareil avec le GGMN.",
    resource_name: "Station de suivi",
    timeseries_name_title: (tsName: string) => {
    switch (tsName.toLowerCase()) {
      case 'gwmbgs': return `Niveau d'eau sous la surface`
      case 'gwmmsl':
      default: return `Niveau d'eau au-dessus du niveau de la mer`
    }
  },
    sync_manual_text: "Les stations de suivi doivent être synchronisées manuellement",
    sync_screen_heading: "Pour finir d'enregistrer les stations de suivi dans le GGMN, veuillez les enregistrer manuellenet sur le site du GGMN.",
    sync_screen_step_1_body: "Cliquez sur 'Envoyer un courriel' ci-dessous pour envoyer un courriel à votre compte GGMN. Le courriel contiendra les fichiers shapefile nécessaires à l'enregistrement des stations.",
    sync_screen_step_2_body: "Une fois le courriel reçu, identifiez-vous sur le site du GGMN (https://ggmn.un-igrac.org/) et chargez les fichiers dans l'espace de travail de votre organisation.",
    sync_screen_step_3_body: "Retournez sur l'application du GGMN. Vous devriez voir que les stations de suivi ont changé de couleur et que les mesures en attente peuvent être sauvegardées.",
    sync_screen_step_4_heading: "",
    sync_screen_step_4_body: "",
    sync_screen_help_body: "Contactez ____ via ____. Nous ferons de notre mieux pour vous aider.",
    sync_screen_step_5_heading: "",
    sync_screen_step_5_body: "",
    sync_screen_help_email: "claudia.ruz-vargas@un-igrac.org",
    sync_screen_help_end: "Nous serons heureux de vous aider.",
    resource_email_subject: "GGMN Manual Resources",
    resource_email_message: "Voici votre shapefile et vos fichiers csv pour la synchronisation manuelle au GGMN. <br/>Allez sur https://ggmn.un-igrac.org/ pour commencer. <br/><strong>Attention:</strong>Si une station a un identifiant déjà attribué, la nouvelle station sera supprimée et les mesures seront ajoutées à la station existante. Vérifiez que vos stations ont des identifiants distincts.",
    resource_loading_error: "Erreur de chargement de la station",
    edit_resource_delete_modal_text: "Supprimer cette station entraînera la suppression définitive des mesures.",
    about_html: "<p>Le GGMN (pour « Global Groundwater Monitoring Network », autrement dit le Réseau Mondial de Suivi des Eaux Souterraines) est un programme qui vise à approfondir nos connaissances sur l’état des eaux souterraines à travers le monde en améliorant la qualité et l'accessibilité des informations de suivi des eaux souterraines. Le GGMN repose sur l’échange de données et d’expériences entre organisations en charge du suivi des eaux souterraines. Le GGMN est un programme de l'UNESCO mis en œuvre par IGRAC (Centre International d'Evaluation des Ressources en Eaux Souterraines) et soutenu par de nombreux partenaires mondiaux et régionaux.</p></br><strong>Portail GGMN</strong></br><p>Le portail internet du GGMN (<a href='https://ggmn.un-igrac.org/'>https://ggmn.un-igrac.org/</a>) facilite l’échange et l'analyse spatiotemporelle des données de suivi des eaux souterraines. Les organisations qui y contribuent peuvent partager leurs données publiquement ou avec un nombre restreint d’utilisateurs. Le portail du GGMN est aussi accessible via une application pour téléphones intelligents.</p></br><strong>GGMN et MyWell</strong></br><p> L'application du GGMN est basée sur MyWell, une application pour smartphone et SMS développée dans le cadre du projet MARVI, <a href='https://www.westernsydney.edu.au/marvi/managed_aquifer_recharge_through_village-level_intervention'>(Managed Aquifer Recharge and Sustaining Groundwater Use through Village-level Intervention)</a> financé par le Centre Australien pour la Recherche Internationale en Agriculture (ACIAR). MARVI mise sur l’implication des villageois afin d’implémenter des solutions de recharge artificielle des aquifères et de gérer durablement les eaux souterraines dans les zones rurales de l’Inde. L’application MyWell assiste les villageois qui, sur base volontaire, opèrent le suivi des niveaux piézométriques, des précipitations, des barrages et de la qualité de l’eau. Pour plus d'informations sur MyWell et MARVI, visitez <a href='http://www.marvi.org.in/home'>marvi.org.in</a>.</p></br><strong>Rejoignez le réseau!</strong></br><p>Si vous souhaitez faire partie du GGMN et utiliser son portail, veuillez nous contacter via <a  href='mailto:info@un-igrac.org'>info@un-igrac.org</a>. L'application est accessible à tous, seules certaines fonctionnalités sont réservées aux membres du GGMN. Pour plus d’informations, visitez notre <a  href='https://www.un-igrac.org/ggmn'>site</a> internet.</p>",
    settings_about: "À propos de GGMN",
    powered_by_html: "<p>Powered by MyWell</p>",
  }
}

export {ggmn_fr_FR};
