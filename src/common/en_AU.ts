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
    connect_to_service_logout_button: "LOG OUT",
    connect_to_service_submit_button: "SUBMIT",
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
    new_resource_owner_name_label: "Owner Name*",
    new_resource_submit_button: "SUBMIT",
    resource_detail_name_label: "Name:",
    new_resource_id: "Id",
    new_resource_id_check_error: "Error checking the Id. Please try again.",
    new_resource_id_check_taken: "Id is not valid or already taken.",
    qr_code_not_found: "Hmm. That doesn't look like a MyWell QR Code. Please check the code and try again.",
    calendar_input_confirm: "CONFIRM",
    calendar_input_cancel: "CANCEL",
    timeseries_name_title: (tsName: string) => {
    switch (tsName.toLowerCase()) {
      case 'gwmbgs': return ``
      case 'gwmmsl':
      default: return ``
    }
  },
    resource_detail_heading_label: "ID: ",
    timeseries_date_format: "DD-MM-YYYY",
    resource_detail_new_reading_button: "NEW READING",
    sync_manual_text: "Manual sync is required for some Stations and Measurements.",
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
    sync_error_unknown: "Couldn't perform sync. Please try again.",
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
    sync_screen_step_4_body: "Then scroll to 'Import a csv File' and select the .csv file you recieved in your email. Make sure you select the same organization and set the asset associated with the file to 'groundwater station'.",
    sync_screen_help_heading: "Need some help?",
    sync_screen_help_body: "Just reach out to Claudia at ",
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
    menu_checkdam: "CHECK DAMS",
    scan_hint: "Scan for a Location using a QR Code",
    sync_screen_step_5_heading: "Step 5.",
    sync_screen_step_5_body: "Once this is done, log back into GGMN on your device, and you will see that the groundwater stations have changed color, and and pending readings will start to save.",
    timeseries_card_not_enough: "Not enough readings for this time range.",
    resource_detail_edit_resource: "EDIT STATION",
    resource_detail_edit_readings: "EDIT READINGS",
    new_resource_name: "Name:",
    edit_resource_delete_button: "DELETE",
    general_is_required_error: "is required.",
    sync_screen_help_email: "claudia.ruz-vargas@un-igrac.org",
    sync_screen_help_end: ". We'd be glad to assist you.",
    resource_email_subject: "GGMN Manual Resources",
    resource_email_message: "Here are your shapefile and csv files for manually syncing to GGMN. Go to https://www.un-igrac.org/ggis/ggmn-portal to get started.",
    resource_loading_error: "Error loading resource",
    timeseries_loading_error: "Error loading readings",
    connect_to_login_error: "Error logging you in",
    edit_resource_delete_modal_title: "Are You Sure?",
    edit_resource_delete_modal_text: "Deleting this station will delete any associated readings, and cannot be undone.",
    edit_resource_delete_modal_ok: "DELETE",
    edit_resource_delete_modal_cancel: "CANCEL",
    settings_pending_heading: "Save Pending Resources",
    new_resource_water_column_height: "Water Column Height (m):",
    pending_status_rejected: "Your account has been suspended. You won't be able to save anything until an administrator fixes your account.",
    pending_status_unapproved: "Your account is still waiting for approval. If it's been too long, reach out to an administrator at ____ to rectify the problem.",
    pending_status_approved: "Your account is approved! Your readings and resources will be synced shortly, or you can sync manually now.",
    resource_detail_sync_required: "Location needs to be synced before you can save any readings.",
    about_html: "<h2>MyWell</h2>",
    settings_about: "ABOUT MYWELL",
    powered_by_html: "",
    long_date_format: "DD-MM-YYYY h:mm",
    default_datetime_format: "HH:MM DD/MM/Y",
    pending_resource_heading: "Pending Resources",
    resource_detail_owner_section: "About:",
    resource_detail_owner_name: "Owner Name",
    open_url_error: "Can' open url",
    edit_readings_no_readings: "No Pending Readings for this Station",
    edit_readings_new_reading: "New Reading",
    settings_map: "Browse on Map",
    menu_browse_text: "Browse",
    menu_scan_text: "Scan",
    menu_search_text: "Search",
    menu_new_text: "New",
    country_label: "Country",
    pincode_invalid_message: "Pincode is not valid",
    connect_to_edit_heading: "Tell Us More About Yourself",
    connect_to_invalid_message: "is not valid.",
    unapproved: "unapproved",
    approved: "approved",
    rejected: "rejected",
    unapproved_description: "We're still waiting for an admin to verify your account.",
    approved_description: "Your account is approved! Feel free to sync measurements and locations now.",
    rejected_description: "Your account has been rejected. Reach out to ___@___ to learn more.",
    formatSubtitlekey: (key: string) => { 
  switch (key) {
    case 'legacyResourceId': return "OldId";
    case 'pincode': return 'Pincode';
    case 'country': return 'Country';
   default:
   return key;
  }
},
  }
}

export {en_AU};
