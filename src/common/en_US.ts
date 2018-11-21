/**
 * Do not edit this file directly. 
 * Instead, edit the appropriate spreadsheet 
 * https://docs.google.com/spreadsheets/d/102zLqEWj4xlqqNgVUFCiMLqdcvaLY6GntS1xmlHdAE8/edit#gid=0
 * and recompile in order to change these fields
 */

import { TranslationFile } from "../Types";

const en_US: TranslationFile = {
  metadata: {
    language: 'english',
    region: 'united states',
  },
  templates: {
    app_resource_load_error: "Error loading reading locations. Please try again.",
    app_resource_not_found: "Could not find the selected reading location",
    settings_connect_to_pending_title: "OVERRIDE",
    settings_connect_to_connected_title: "OVERRIDE",
    settings_connect_to_subtitle_error: "OVERRIDE",
    settings_login_error: "Error logging in.",
    settings_sync_heading: "MyWell Sync",
    settings_new_resource: "New reading Location",
    search_heading: "Search",
    search_error: "Couldn't perform search. Please try again.",
    search_more: "More...",
    search_no_results: "No Results Found",
    search_hint: "Search By Id",
    search_recent_searches: "Recent Searches",
    search_offline_line_1: "You are currently offline.",
    search_offline_line_2: "Showing limited search results.",
    new_reading_invalid_error_heading: "Error",
    new_reading_invalid_error_description: "Invalid reading. Please check and try again.",
    new_reading_invalid_error_ok: "OK",
    new_reading_unknown_error_heading: "Error",
    new_reading_unknown_error_description: "There was a problem saving your reading. Please try again.",
    new_reading_unknown_error_ok: "OK",
    new_reading_saved_popup_title: "",
    new_reading_saved: "Reading Saved",
    new_reading_warning_login_required: "Reading saved locally only. Login with MyWell to save in cloud.",
    new_reading_dialog_one_more: "One More",
    new_reading_dialog_done: "Done",
    new_reading_date_field: "Reading Date",
    new_reading_date_field_invalid: "Invalid Date",
    new_reading_value_field: (units: string) => `Measurement in ${units}`,
    new_reading_value_field_invalid: "Invalid Measurement",
    new_reading_timeseries: "N/A",
    new_reading_save_button: "Save",
    connect_to_service_username_field: "N/A",
    connect_to_service_username_invalid: "N/A",
    connect_to_service_password_field: "N/A",
    connect_to_service_password_invalid: "N/A",
    connect_to_service_mobile_field: "Phone number",
    connect_to_service_mobile_invalid: "Phone number is required",
    connect_to_service_verify_field: "Enter the 4 digit code we sent you.",
    connect_to_service_verify_invalid: "You entered the wrong code. Please try again.",
    connect_to_service_logout_button: "Log Out",
    connect_to_service_submit_button: "",
    connect_to_service_description: "",
    connect_to_service_connected_test: (fieldName: string, username: string) => `You are connected to MyWell with the ${fieldName}: ${username}`,
    connect_to_service_error: "Error signing in. Please try again",
    connect_to_service_org_selector: "N/A",
    favourite_resource_heading: "Favorites",
    favourite_resource_hint_1: "Press the",
    favourite_resource_hint_2: "button to add a favourite",
    recent_resource_heading: "Recents",
    recent_resource_none: "No recent locations",
    resource_detail_latest: "Latest readings",
    resource_detail_new: "New Reading",
    sync_login_message: "Login to sync with MyWell",
    sync_start_sync_button: "Start Sync",
    sync_start_sync_button_loading: "Syncing with MyWell",
    sync_section_resources: "Reading Locations",
    sync_section_readings: "Readings",
    sync_empty_heading: "Nothing to sync!",
    sync_empty_content: "Start taking readings or creating groundwater stations to get started.",
    select_language_heading: "",
    resource_detail_summary_tab: "",
    resource_detail_empty_heading: "",
    resource_detail_empty_hint: "",
    new_resource_saved_dialog: "",
    new_resource_saved_dialog_warning: "",
    resource_name: "",
    new_resource_lat: "",
    new_resource_lng: "",
    new_resource_asset_type_label: "",
    new_resource_owner_name_label: "",
    new_resource_submit_button: "",
    resource_detail_name_label: "",
    new_resource_id: "",
    new_resource_id_check_error: "",
    new_resource_id_check_taken: "",
    qr_code_not_found: "",
    calendar_input_confirm: "",
    calendar_input_cancel: "",
    timeseries_name_title: (tsName: string) => {
    switch (tsName.toLowerCase()) {
      case 'gwmbgs': return `Groundwater level below ground surface`
      case 'gwmmsl':
      default: return `Groundwater level below ground surface`
    }
  },
    resource_detail_heading_label: "ID: ",
    timeseries_date_format: "YYYY-MM-DD",
    resource_detail_new_reading_button: "NEW READING",
    sync_manual_text: "GROUNDWATER STATIONS NEED TO BE SYNCED MANUALLY",
    sync_manual_show_me_how: "SHOW ME HOW",
    sync_date_format: "YYYY-MM-DD",
    sync_error_station_not_created: "STATION HASN'T BEEN CREATED YET.",
    sync_error_get_timeseries_id_transport: "REQUEST FAILED OR TIMED OUT. PLEASE TRY AGAIN.",
    sync_error_get_timeseries_id_none: "COULD NOT FIND TIMESERIES",
    sync_error_get_timeseries_id_too_many: "COULD NOT FIND TIMESERIES",
    sync_error_get_timeseries_id_no_timeseries: "COULD NOT FIND TIMESERIES",
    sync_error_save_reading_not_logged_in: "YOU MUST BE LOGGED IN TO PERFORM A SYNC.",
    sync_error_generic_transport: "REQUEST FAILED OR TIMED OUT. PLEASE TRY AGAIN.",
    sync_error_save_reading_unknown: "AN UNKNOWN ERROR OCCOURED",
    sync_error_delete_pending_reading: "CLEANUP ERROR",
    sync_error_unknown: "AN UNKNOWN ERROR OCCOURED",
    sync_email_error: "THERE WAS A PROBLEM SENDING THE EMAIL. PLEASE TRY AGAIN.",
    sync_email_success: "EMAIL SENT!",
    sync_screen_heading: "IN ORDER TO FINISH SAVING YOUR GROUNDWATER STATIONS TO GGMN, YOU NEED TO MANUALLY REGISTER THEM ON THE GGMN SITE.",
    sync_screen_step_1_heading: "STEP 1.",
    sync_screen_step_1_body: "CLICK THE 'SEND EMAIL' BUTTON BELOW TO SEND AN EMAIL TO YOUR GGMN ACCOUNT. THIS EMAIL WILL CONTAIN THE SHAPEFILES NEEDED TO REGISTER THE GROUNDWATER STATIONS",
    sync_screen_step_2_heading: "STEP 2.",
    sync_screen_step_2_body: "ONCE YOU HAVE RECIEVED THE EMAIL, LOG INTO GGMN AT HTTPS://GGMN.UN-IGRAC.ORG/ AND SELECT 'UPLOAD' IN THE TOP RIGHT CORNER.",
    sync_screen_step_3_heading: "STEP 3.",
    sync_screen_step_3_body: "SCROLL DOWN TO 'IMPORT A SUFHYD OR SHAPE FILE' SELECT THE ORGANISATION YOUR ACCOUNT IS ASSOCIATED WITH, AND THE FILE FROM THE EMAIL.",
    sync_screen_step_4_heading: "STEP 4.",
    sync_screen_step_4_body: "ONCE THIS IS DONE, LOG BACK INTO GGMN ON YOUR DEVICE, AND YOU WILL SEE THAT RESOURCES HAVE CHANGED COLOR, AND AND PENDING REAADINGS WILL START TO SAVE.",
    sync_screen_help_heading: "NEED SOME HELP?",
    sync_screen_help_body: "JUST REACH OUT TO ____ AT ____. WE'D BE GLAD TO ASSIST YOU.",
    sync_screen_send_email_button: "SEND EMAIL",
    settings_language: "LANG",
    timeseries_none: "No timeseries found for this Station.",
  }
}

export {en_US};
