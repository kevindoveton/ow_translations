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
    recent_resource_none: "Pas de ressources récentes",
    resource_detail_new: "Nouvelle mesure",
    sync_login_message: "Identifiez-vous pour synchroniser votre appareil avec le GGMN.",
    sync_start_sync_button_loading: "Synchronisation au GGMN",
    sync_section_resources: "Stations de suivi",
    sync_empty_content: "",
    resource_detail_empty_heading: "Aucune station de suivi n'a pu être trouvée pour l'instant.",
    resource_detail_empty_hint: "Cliquez sur le bouton de recherche ou utiliser le navigateur de carte pour en trouver une.",
    new_resource_saved_dialog_warning: "La position a été sauvegardée localement. Identifiez-vous pour synchroniser votre appareil avec le GGMN.",
    resource_name: "Station de suivi",
    timeseries_name_title: (tsName: string) => {
    switch (tsName.toLowerCase()) {
      case 'gwmbgs': return `Groundwater level below ground surface`
      case 'gwmmsl':
      default: return `Groundwater level below ground surface`
    }
  },
    sync_manual_text: "Les stations de suivi doivent être synchronisées manuellement",
    sync_screen_heading: "Pour finir d'enregistrer les stations de suivi dans le GGMN, veuillez les enregistrer manuellenet sur le site du GGMN.",
    sync_screen_step_1_body: "Cliquez sur 'Envoyer un courriel' ci-dessous pour envoyer un courriel à votre compte GGMN. Le courriel contiendra les fichiers shapefile nécessaires à l'enregistrement des stations.",
    sync_screen_step_2_body: "Après réception du courriel, connectez-vous au GGMN sur https://ggmn.un-igrac.org/ and sélectionnez 'Téléverser' dans le coin supérieur droit.",
    sync_screen_step_3_body: "Défilez vers le bas jusqu'à 'Importer un fichier SufHyd ou shapefile'. Sélectionnez l'organisation à laquelle votre compte est associé, ainsi que le fichier du courriel.",
    sync_screen_step_4_body: "Ensuite, connectez-vous au GGMN sur votre appareil mobile. Les stations de suivi auront changé de couleur, et les mesures en attente vont être enregistrées.",
    sync_screen_help_body: "Contactez ____ via ____. Nous ferons de notre mieux pour vous aider.",
    sync_screen_step_5_body: "Ensuite, connectez-vous au GGMN sur votre appareil mobile. Les stations de suivi auront changé de couleur, et les mesures en attente vont être enregistrées.",
    sync_screen_help_email: "",
    sync_screen_help_end: "",
    resource_email_subject: "GGMN Manual Resources",
    resource_email_message: "Here are your shapefile and csv files for manually syncing to GGMN. <br/>Go to https://ggmn.un-igrac.org/ to get started. <br/><strong>Note:</strong>If a new well has the same id as one that already exists in GGMN, the newly created well will be deleted and the new measurements will be added to the existing well, so please be sure that all your wells have a unique ID",
    resource_loading_error: "",
    edit_resource_delete_modal_text: "",
  }
}

export {ggmn_fr_FR};
