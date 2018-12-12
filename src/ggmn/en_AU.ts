/**
 * Do not edit this file directly. 
 * Instead, edit the appropriate spreadsheet 
 * https://docs.google.com/spreadsheets/d/102zLqEWj4xlqqNgVUFCiMLqdcvaLY6GntS1xmlHdAE8/edit#gid=0
 * and recompile in order to change these fields
 */

import { TranslationOrg, TranslationOverrideFile } from "../Types";

const ggmn_en_AU: TranslationOverrideFile = {
  org: TranslationOrg.ggmn,
  overrides: {
    settings_connect_to_pending_title: "Connect to GGMN",
    settings_connect_to_connected_title: "Connected to GGMN",
    settings_connect_to_subtitle_error: "Error connecting to GGMN",
    settings_sync_heading: "GGMN Sync",
    settings_new_resource: "New GW Station",
    search_hint: "Search for Groundwater Stations by their ID.",
    new_reading_warning_login_required: "Reading saved locally only. Login with GGMN to save.",
    new_reading_value_field: (units: string) => `Measurement in ${units}`,
    new_reading_value_field_invalid: "Invalid Measurement",
    connect_to_service_description: "Connect to GGMN to create new groundwater stations and save readings from your device.",
    connect_to_service_connected_test: (fieldName: string, username: string) => `You are connected to GGMN with the ${fieldName}: ${username}`,
    connect_to_service_org_selector: "Select an organisation",
    recent_resource_none: "No recent groundwater stations",
    resource_detail_new: "New Reading",
    sync_login_message: "Login to sync with GGMN",
    sync_start_sync_button_loading: "Syncing with GGMN",
    sync_section_resources: "Groundwater Stations",
    sync_empty_content: "Start making measurements or creating groundwater stations to get started.",
    resource_detail_empty_heading: "You haven't found any groundwater stations yet.",
    resource_detail_empty_hint: "Press the search button or browse the map to find some.",
    new_resource_saved_dialog_warning: "Saved Location Locally. Login to GGMN to sync.",
    resource_name: "Groundwater Station",
    timeseries_name_title: (tsName: string) => {
    switch (tsName.toLowerCase()) {
      case 'gwmbgs': return `Groundwater level below ground surface`
      case 'gwmmsl':
      default: return `Groundwater level below ground surface`
    }
  },
    sync_manual_text: "Groundwater Stations need to be synced manually",
    sync_screen_heading: "In order to finish saving your groundwater stations to GGMN, you need to manually register them on the GGMN site.",
    sync_screen_step_1_body: "Click the 'Send Email' button below to send an email to your GGMN account. This email will contain the shapefiles needed to register the groundwater stations",
    sync_screen_step_2_body: "Once you have recieved the email, log into GGMN at https://ggmn.un-igrac.org/ and select 'Upload' in the top right corner. ",
    sync_screen_step_3_body: "Scroll down to 'Import a SufHyd or shape File' select the organisation your account is associated with, and the file from the email.",
    sync_screen_step_4_body: "Once this is done, log back into GGMN on your device, and you will see that resources have changed color, and and pending readings will start to save. If a new well has the same id as one that already exists in GGMN, the newly created well will be deleted and the new measurements will be added to the existing well, so please be sure that all your wells have a unique ID",
    sync_screen_help_body: "Just reach out to Claudia at",
    sync_screen_step_5_body: "Once this is done, log back into GGMN on your device, and you will see that the groundwater stations have changed color, and pending readings will start to save.",
    sync_screen_help_email: "claudia.ruz-vargas@un-igrac.org",
    sync_screen_help_end: ". We'd be glad to assist you.",
    resource_email_subject: "GGMN Manual Resources",
    resource_email_message: "Here are your shapefile and csv files for manually syncing to GGMN. <br/>Go to https://www.un-igrac.org/ggis/ggmn-portal to get started. <br/><strong>Note:</strong>If a new well has the same id as one that already exists in GGMN, the newly created well will be deleted and the new measurements will be added to the existing well, so please be sure that all your wells have a unique ID",
    resource_loading_error: "Error loading groundwater station",
    edit_resource_delete_modal_text: "Deleting this station will delete any associated readings, and cannot be undone.",
  }
}

export {ggmn_en_AU};
