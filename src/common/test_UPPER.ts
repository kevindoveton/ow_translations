/**
 * Do not edit this file directly. 
 * Instead, edit the appropriate spreadsheet 
 * https://docs.google.com/spreadsheets/d/102zLqEWj4xlqqNgVUFCiMLqdcvaLY6GntS1xmlHdAE8/edit#gid=0
 * and recompile in order to change these fields
 */

import { TranslationFile } from "../Types";

const test_UPPER: TranslationFile = {
  metadata: {
    language: 'test',
    region: 'uppercase',
  },
  templates: {
    app_resource_load_error: "ERROR LOADING LOCATIONS. PLEASE TRY AGAIN.",
    app_resource_not_found: "",
    settings_connect_to_pending_title: "OVERRIDE",
    settings_connect_to_connected_title: "OVERRIDE",
    settings_connect_to_subtitle_error: "OVERRIDE",
    settings_login_error: "",
    settings_sync_heading: "",
    settings_new_resource: "",
    search_heading: "SEARCH",
    search_error: "",
    search_more: "",
    search_no_results: "",
    search_hint: "",
    search_recent_searches: "",
    search_offline_line_1: "",
    search_offline_line_2: "",
    new_reading_invalid_error_heading: "",
    new_reading_invalid_error_description: "",
    new_reading_invalid_error_ok: "",
    new_reading_unknown_error_heading: "",
    new_reading_unknown_error_description: "",
    new_reading_unknown_error_ok: "",
    new_reading_saved_popup_title: "",
    new_reading_saved: "",
    new_reading_warning_login_required: "",
    new_reading_dialog_one_more: "",
    new_reading_dialog_done: "",
    new_reading_date_field: "",
    new_reading_date_field_invalid: "",
    new_reading_value_field: (units: string) => `Measurement in ${units}`,
    new_reading_value_field_invalid: "",
    new_reading_timeseries: "",
    new_reading_save_button: "",
    connect_to_service_username_field: "",
    connect_to_service_username_invalid: "",
    connect_to_service_password_field: "",
    connect_to_service_password_invalid: "",
    connect_to_service_mobile_field: "",
    connect_to_service_mobile_invalid: "",
    connect_to_service_verify_field: "",
    connect_to_service_verify_invalid: "",
    connect_to_service_logout_button: "",
    connect_to_service_submit_button: "",
    connect_to_service_description: "",
    connect_to_service_connected_test: (fieldName: string, username: string) => `You are connected to MyWell with the ${fieldName}: ${username}`,
    connect_to_service_error: "",
    connect_to_service_org_selector: "",
    favourite_resource_heading: "",
    favourite_resource_hint_1: "",
    favourite_resource_hint_2: "",
    recent_resource_heading: "",
    recent_resource_none: "",
    resource_detail_latest: "",
    resource_detail_new: "",
    sync_login_message: "",
    sync_start_sync_button: "",
    sync_start_sync_button_loading: "",
    sync_section_resources: "",
    sync_section_readings: "",
    sync_empty_heading: "",
    sync_empty_content: "",
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
  }
}

export {test_UPPER};
