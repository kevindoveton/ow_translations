/**
 * Do not edit this file directly. 
 * Instead, edit the appropriate spreadsheet 
 * https://docs.google.com/spreadsheets/d/102zLqEWj4xlqqNgVUFCiMLqdcvaLY6GntS1xmlHdAE8/edit#gid=0
 * and recompile in order to change these fields
 */

import { TranslationFile } from "../Types";

const guj_IN: TranslationFile = {
  metadata: {
    language: 'gujarati',
    region: 'india',
  },
  templates: {
    app_resource_load_error: "સ્થાનોને લોડ કરવામાં ભૂલ, કૃપા કરીને ફરી પ્રયાસ કરો.",
    app_resource_not_found: "પસંદ કરેલ સ્થાન મળ્યું નથી",
    settings_connect_to_pending_title: "ઓવરરાઇડ",
    settings_connect_to_connected_title: "ઓવરરાઇડ",
    settings_connect_to_subtitle_error: "ઓવરરાઇડ",
    settings_login_error: "લૉગ ઇન કરવામાં ભૂલ.",
    settings_sync_heading: "માયવેલ સિંક",
    settings_new_resource: "નવી જગ્યા",
    search_heading: "શોધો",
    search_error: "શોધ શોધી શકાતી નથી, મહેરબાની કરી ફરીથી પ્રયત્ન કરો.",
    search_more: "વધુ માહિતી ...",
    search_no_results: "કોઈ પરિણામો મળ્યાં નથી",
    search_hint: "ID દ્વારા શોધો",
    search_recent_searches: "પાછલી શોધો",
    search_offline_line_1: "તમે હાલમાં ઑફલાઇન છો.",
    search_offline_line_2: "મર્યાદિત શોધ પરિણામો",
    new_reading_invalid_error_heading: "ભૂલ",
    new_reading_invalid_error_description: "અમાન્ય રીડિંગ્સ, કૃપા કરીને તપાસો અને ફરી પ્રયાસ કરો.",
    new_reading_invalid_error_ok: "બરાબર",
    new_reading_unknown_error_heading: "ભૂલ",
    new_reading_unknown_error_description: "તમારા વાંચનને રેકોર્ડ કરવામાં સમસ્યા છે, કૃપા કરીને ફરી પ્રયાસ કરો.",
    new_reading_unknown_error_ok: "બરાબર",
    new_reading_saved_popup_title: "",
    new_reading_saved: "તમારું  વાંચન રેકોર્ડ થયેલ છે",
    new_reading_warning_login_required: "તમારા વાંચનો ફક્ત તમારા ફોન પર જ રેકોર્ડ કરવામાં આવે છે; ઇન્ટરનેટ પર તેને સેવ કરવા માટે MyWell પર લૉગિન કરો.",
    new_reading_dialog_one_more: "એકવાર વધુ",
    new_reading_dialog_done: "થઈ ગયું",
    new_reading_date_field: "તારીખ વાંચો",
    new_reading_date_field_invalid: "અમાન્ય તારીખ",
    new_reading_value_field: (units: string) => `${units} માં માપન`,
    new_reading_value_field_invalid: "અમાન્ય રીડિંગ્સ",
    new_reading_timeseries: "વાંચન પ્રકાર",
    new_reading_save_button: "તેને સાચવો",
    connect_to_service_username_field: "વપરાશકર્તા નામ",
    connect_to_service_username_invalid: "આવશ્યક છે",
    connect_to_service_password_field: "પાસવર્ડ",
    connect_to_service_password_invalid: "આવશ્યક છે",
    connect_to_service_mobile_field: "ફોન નંબર",
    connect_to_service_mobile_invalid: "ફોન નંબર આવશ્યક છે",
    connect_to_service_verify_field: "અહીં આપેલ 4 અંકનો કોડ દાખલ કરો, અહીં દાખલ કરો.",
    connect_to_service_verify_invalid: "તમે ખોટો કોડ દાખલ કર્યો. ફરીથી પ્રયાસ કરો.",
    connect_to_service_logout_button: "લોકો બહાર",
    connect_to_service_submit_button: "સબમિટ કરો",
    connect_to_service_description: "નવા કૂવાને જોડતા પહેલા, તમારા ઉપકરણમાંથી વાંચન સબમિટ કર્યું છે.",
    connect_to_service_connected_test: (fieldName: string, username: string) => `તમે MyWell સાથે ${fieldName} થી જોડાયેલા છો: ${username}`,
    connect_to_service_error: "સાઇન ઇન કરવામાં ભૂલ ફરીથી પ્રયાસ કરો",
    connect_to_service_org_selector: "જરૂરી નથી",
    favourite_resource_heading: "પ્રિય",
    favourite_resource_hint_1: "પ્રેસ",
    favourite_resource_hint_2: "મનપસંદ ઉમેરવા માટે બટન",
    recent_resource_heading: "હમણાં જ",
    recent_resource_none: "કોઈ પાછલા સ્થાનો નથી",
    resource_detail_latest: "તાજેતરના વાંચન",
    resource_detail_new: "નવી વાંચન",
    sync_login_message: "MyWell સાથે સમન્વયિત કરવા માટે લૉગ ઇન કરો",
    sync_start_sync_button: "સિંક પ્રારંભ કરો",
    sync_start_sync_button_loading: "માયવેલ સાથે સમન્વયિત",
    sync_section_resources: "વાંચન સ્થળ",
    sync_section_readings: "વાંચન",
    sync_empty_heading: "સમન્વય કરવા માટે કંઈ નથી!",
    sync_empty_content: "ગ્રાઉન્ડ વોટર સ્ટેશનની નોંધણી કરીને વાંચન અથવા નોંધણી શરૂ કરો.",
    select_language_heading: "ભાષા પસંદ કરો",
    resource_detail_summary_tab: "સારાંશ",
    resource_detail_empty_heading: "તમને હજી સુધી કોઈ વાંચવાની જગ્યા મળી નથી.",
    resource_detail_empty_hint: "QR સ્કેનર દબાવો અથવા અંતર મેળવવા માટે માપન પ્રકાર શોધો.",
    new_resource_saved_dialog: "વાંચન સ્થાન સફળતાપૂર્વક જમા કરાયું!",
    new_resource_saved_dialog_warning: "સ્થાન સ્થાનિક ફોર્મ સબમિશન વાંચી. સમન્વયિત કરવા માટે MyWell માં લૉગ ઇન કરો.",
    resource_name: "વાંચન સ્થળ",
    new_resource_lat: "અક્ષાંશ",
    new_resource_lng: "રેખાંશ",
    new_resource_asset_type_label: "પ્રકારનો પ્રકાર વાંચો",
    new_resource_owner_name_label: "માલિકનું નામ",
    new_resource_submit_button: "સબમિટ કરો",
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

export {guj_IN};
