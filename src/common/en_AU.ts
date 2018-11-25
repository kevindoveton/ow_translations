/**
 * Do not edit this file directly. 
 * Instead, edit the appropriate spreadsheet 
 * https://docs.google.com/spreadsheets/d/102zLqEWj4xlqqNgVUFCiMLqdcvaLY6GntS1xmlHdAE8/edit#gid=0
 * and recompile in order to change these fields
 */

import { TranslationFile } from "../Types";

const en_AU: TranslationFile = {
  metadata: {
    language: 'English',
    region: 'Australia',
  },
  templates: {
    app_resource_load_error: "Error loading locations. Please try again.",
    app_resource_not_found: "Could not find the selected reading location",
    settings_connect_to_pending_title: "Login to MyWell",
    settings_connect_to_connected_title: "Logged in to MyWell",
    settings_connect_to_subtitle_error: "Error logging into MyWell.",
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
    new_reading_timeseries: "Reading Type",
    new_reading_save_button: "Save",
    connect_to_service_username_field: "Username",
    connect_to_service_username_invalid: "is Required.",
    connect_to_service_password_field: "Password",
    connect_to_service_password_invalid: "is Required.",
    connect_to_service_mobile_field: "Phone number",
    connect_to_service_mobile_invalid: "Phone number is required",
    connect_to_service_verify_field: "Enter the 4 digit code we sent you.",
    connect_to_service_verify_invalid: "You entered the wrong code. Please try again.",
    connect_to_service_logout_button: "Log Out",
    connect_to_service_submit_button: "Submit",
    connect_to_service_description: "Login to MyWell to create new wells and save readings from your device.",
    connect_to_service_connected_test: (fieldName: string, username: string) => `You are connected to MyWell with the ${fieldName}: ${username}`,
    connect_to_service_error: "Error signing in. Please try again",
    connect_to_service_org_selector: "N/A",
    favourite_resource_heading: "Favourites",
    favourite_resource_hint_1: "Press the",
    favourite_resource_hint_2: "button to add a favourite",
    recent_resource_heading: "Recents",
    recent_resource_none: "No recent locations",
    resource_detail_latest: "Latest readings:",
    resource_detail_new: "New Reading",
    sync_login_message: "Login to sync with MyWell",
    sync_start_sync_button: "Start Sync",
    sync_start_sync_button_loading: "Syncing with MyWell",
    sync_section_resources: "Reading Locations",
    sync_section_readings: "Readings",
    sync_empty_heading: "Nothing to sync!",
    sync_empty_content: "Start taking readings or creating groundwater stations to get started.",
    select_language_heading: "Select a Language",
    resource_detail_summary_tab: "Summary",
    resource_detail_empty_heading: "You haven't found any reading locations yet.",
    resource_detail_empty_hint: "Press the QR scanner or Look on the map to find locations near you.",
    new_resource_saved_dialog: "Successfully Saved  Reading Location!",
    new_resource_saved_dialog_warning: "Saved Location Locally. Login to MyWell to sync.",
    resource_name: "Reading Locations",
    new_resource_lat: "Latitude",
    new_resource_lng: "Longitude",
    new_resource_asset_type_label: "Reading Location Type",
    new_resource_owner_name_label: "Owner Name",
    new_resource_submit_button: "SUBMIT",
    resource_detail_name_label: "Name",
    new_resource_id: "Id",
    new_resource_id_check_error: "Error checking the Id. Please try again.",
    new_resource_id_check_taken: "Id is not valid or already taken.",
    qr_code_not_found: "Could not find a location from the QR Code. Please try scanning again.",
    calendar_input_confirm: "CONFIRM",
    calendar_input_cancel: "CANCEL",
    timeseries_name_title: (tsName: string) => {
    switch (tsName.toLowerCase()) {
      case 'gwmbgs': return `Depth to water Level`
      case 'gwmmsl':
      default: return `Depth to water Level`
    }
  },
    resource_detail_heading_label: "ID: ",
    timeseries_date_format: "YYYY-MM-DD",
    resource_detail_new_reading_button: "NEW READING",
    sync_manual_text: "Groundwater Stations need to be synced manually",
    sync_manual_show_me_how: "Show Me How",
    sync_date_format: "YYYY-MM-DD",
    sync_error_station_not_created: "Station hasn't been created yet.",
    sync_error_get_timeseries_id_transport: "Request failed or timed out. Please try again.",
    sync_error_get_timeseries_id_none: "Could not find timeseries",
    sync_error_get_timeseries_id_too_many: "Could not find timeseries",
    sync_error_get_timeseries_id_no_timeseries: "Could not find timeseries",
    sync_error_save_reading_not_logged_in: "You must be logged in to perform a sync.",
    sync_error_generic_transport: "Request failed or timed out. Please try again.",
    sync_error_save_reading_unknown: "An unknown error occoured",
    sync_error_delete_pending_reading: "Cleanup error",
    sync_error_unknown: "An unknown error occoured",
    sync_email_error: "There was a problem sending the email. Please try again.",
    sync_email_success: "Email Sent!",
    sync_screen_heading: "In order to finish saving your groundwater stations to GGMN, you need to manually register them on the GGMN site.",
    sync_screen_step_1_heading: "Step 1.",
    sync_screen_step_1_body: "Click the 'Send Email' button below to send an email to your GGMN account. This email will contain the shapefiles needed to register the groundwater stations",
    sync_screen_step_2_heading: "Step 2.",
    sync_screen_step_2_body: "Once you have recieved the email, log into GGMN at https://ggmn.un-igrac.org/ and select 'Upload' in the top right corner.",
    sync_screen_step_3_heading: "Step 3.",
    sync_screen_step_3_body: "Scroll down to 'Import a SufHyd or shape File' select the organisation your account is associated with, and the file from the email.",
    sync_screen_step_4_heading: "Step 4.",
    sync_screen_step_4_body: "Once this is done, log back into GGMN on your device, and you will see that resources have changed color, and and pending reaadings will start to save.",
    sync_screen_help_heading: "Need some help?",
    sync_screen_help_body: "Just reach out to ____ at ____. We'd be glad to assist you.",
    sync_screen_send_email_button: "Send Email",
    settings_language: "Language",
    timeseries_none: "No timeseries found for this Station.",
    resource_detail_new_reading: "NEW READING",
    connect_to_error_message: "Error signing in. Please try again.",
    connect_to_invalid_phone_number: "Phone number is invalid",
    connect_to_login_code: (mobile: string) => `Enter the login code we sent to ${mobile}. Or wait as we verify you automatically`,
    connect_to_resend: "Didn't get the text?",
    connect_to_signed_in_heading: "You are signed in.",
    connect_to_edit: "EDIT",
    connect_to_name_label: "Full Name",
    connect_to_nickname_label: "Short Name",
    connect_to_email_label: "Email",
    connect_to_profile_mobile: "Mobile",
    connect_to_sign_out: "SIGN OUT",
    menu_well: "WELLS",
    menu_rainfall: "RAINFALL",
    menu_water_quality: "WATER QUALITY",
    menu_checkdam: "CHECKDAMS",
    scan_hint: "Scan for a Location using a QR Code",
  }
}

export {en_AU};
