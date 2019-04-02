/**
 * Do not edit this file directly. 
 * Instead, edit the appropriate spreadsheet 
 * https://docs.google.com/spreadsheets/d/102zLqEWj4xlqqNgVUFCiMLqdcvaLY6GntS1xmlHdAE8/edit#gid=0
 * and recompile in order to change these fields
 */

import { TranslationFile } from "../Types";

const en_US: TranslationFile = {
  metadata: {
    language: 'English',
    region: 'US',
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
    sync_manual_text: "GROUNDWATER STATIONS NEED TO BE SYNCED MANUALLY",
    sync_manual_show_me_how: "SHOW ME HOW",
    sync_date_format: "DD-MM-YYYY",
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
    sync_screen_heading: "",
    sync_screen_step_1_heading: "",
    sync_screen_step_1_body: "",
    sync_screen_step_2_heading: "",
    sync_screen_step_2_body: "",
    sync_screen_step_3_heading: "",
    sync_screen_step_3_body: "",
    sync_screen_step_4_heading: "",
    sync_screen_step_4_body: "",
    sync_screen_help_heading: "",
    sync_screen_help_body: "",
    sync_screen_send_email_button: "",
    settings_language: "LANG",
    timeseries_none: "No timeseries found for this Station.",
    resource_detail_new_reading: "NEW READING",
    connect_to_error_message: "ERROR SIGNING IN. PLEASE TRY AGAIN.",
    connect_to_invalid_phone_number: "PHONE NUMBER IS INVALID",
    connect_to_login_code: (mobile: string) => `Enter the login code we sent to ${mobile}. Or wait as we verify you automatically`,
    connect_to_resend: "DIDN'T GET THE TEXT?",
    connect_to_signed_in_heading: "YOU ARE SIGNED IN.",
    connect_to_edit: "EDIT",
    connect_to_name_label: "FULL NAME",
    connect_to_nickname_label: "Short Name",
    connect_to_email_label: "Email",
    connect_to_profile_mobile: "MOBILE",
    connect_to_sign_out: "SIGN OUT",
    menu_well: "WELLS",
    menu_rainfall: "RAINFALL",
    menu_water_quality: "WATER QUALITY",
    menu_checkdam: "CHECK DAM",
    scan_hint: "Scan for a Location using a QR Code",
    sync_screen_step_5_heading: "",
    sync_screen_step_5_body: "",
    timeseries_card_not_enough: "Not enough readings for this time range.",
    resource_detail_edit_resource: "EDIT STATION",
    resource_detail_edit_readings: "EDIT READINGS",
    new_resource_name: "Name:",
    edit_resource_delete_button: "DELETE",
    general_is_required_error: "is required.",
    sync_screen_help_email: "",
    sync_screen_help_end: "",
    resource_email_subject: "",
    resource_email_message: "",
    resource_loading_error: "Error loading resource",
    timeseries_loading_error: "Error loading readings",
    connect_to_login_error: "Error logging you in",
    edit_resource_delete_modal_title: "Are You Sure?",
    edit_resource_delete_modal_text: "Deleting this station will delete any associated readings, and cannot be undone.",
    edit_resource_delete_modal_ok: "DELETE",
    edit_resource_delete_modal_cancel: "CANCEL",
    settings_pending_heading: "Save Pending Resources",
    new_resource_water_column_height: "Depth (m):",
    pending_status_rejected: "Your account has been suspended. You won't be able to save anything until an administrator fixes your account.",
    pending_status_unapproved: "Your account is still waiting for approval. If it's been too long, reach out to an administrator at info@marvi.org.in to rectify the problem.",
    pending_status_approved: "Your account is approved! Your readings and resources will be synced shortly, or you can sync manually now.",
    resource_detail_sync_required: "Location needs to be synced before you can save any readings.",
    about_html: "",
    settings_about: "ABOUT MYWELL",
    powered_by_html: "",
    long_date_format: "DD-MM-YYYY h:mm",
    default_datetime_format: "HH:MM DD/MM/Y",
    pending_resource_heading: "Pending Resources",
    resource_detail_owner_section: "About:",
    resource_detail_owner_name: "Owner Name",
    open_url_error: "Can't open url",
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
    rejected_description: "Your account has been rejected. Reach out to info@marvi.org.in to learn more.",
    formatSubtitlekey: (key: string) => { 
  switch (key) {
    case 'legacyResourceId': return "OldId";
    case 'pincode': return 'Pincode';
    case 'country': return 'Country';
   default:
   return key;
  }
},
    about_html_url: "https://our-water.firebaseapp.com/about_mywell_en.html",
    reading_image_url_builder: (id: string) => `https://us-central1-our-water.cloudfunctions.net/public/mywell/image/${id}`,
    select_language_popup: (language: string) => `Changed Language to: ${language}`,
    new_label: "",
    rainfall_total_heading: "",
    rainfall_total_subtitle: "",
    rainfall_total_content_subtitle: "",
    legend_text_year_one: "",
    legend_text_year_two: "",
    legend_text_year_three: "",
    load_location_error_message: "",
    resource_detail_placeholder_url: "https://our-water.firebaseapp.com/placeholder_placeholder.png",
    sync_error_message: "",
    connect_to_must_accept_conditions: "",
    connect_to_service_conditions: "",
    take_picture_error_message: "",
    add_image_text: "",
  }
}

export {en_US};
