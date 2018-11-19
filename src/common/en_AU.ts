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
    connect_to_service_description: "Connect to N/A to create new wells and save readings from your device.",
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
    resource_detail_empty_hint: "Press the QR scanner or search for a reading type to find a reading location.",
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
      case 'gwmbgs': return `Groundwater level below ground surface`
      case 'gwmmsl':
      default: return `Groundwater level below ground surface`
    }
  },
  }
}

export {en_AU};
