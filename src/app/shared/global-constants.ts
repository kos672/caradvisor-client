export class GlobalConstants {
  /* Cookies */
  static readonly IS_NAME_KNOWN = 'IS_NAME_KNOWN';
  static readonly HAS_COUNTRY_PREFS = 'HAS_COUNTRY_PREFS';
  static readonly IS_ENGINE_TYPE_KNOWN = 'IS_ENGINE_TYPE_KNOWN';
  static readonly IS_ENGINE_DISPLACEMENT_KNOWN = 'IS_ENGINE_DISPLACEMENT_KNOWN';
  static readonly IS_TRANSMISSION_KNOWN = 'IS_TRANSMISSION_KNOWN';
  static readonly IS_DRIVETRAIN_KNOWN = 'IS_drivetrain_KNOWN';
  static readonly IS_DOORS_KNOWN = 'IS_DOORS_KNOWN';
  static readonly IS_SEATS_KNOWN = 'IS_SEATS_KNOWN';

  /* Boolean representation */
  static readonly TRUE = 'true';
  static readonly FALSE = 'false';

  /* API paths */
  static readonly NAME_PATH = 'http://localhost:8080/name';

  /* Questions templates */
  static readonly ASK_NAME_QUESTION = 'Dzień dobry. Wita doradca samochodowy CarAdvisor. Jak Pan/Pani ma na imię?';
  static readonly IMPOSSIBLE_RECOGNIZE_NAME = 'Niestety nie mogę rozpoznać imię. Proszę podać ponownie.';
  static readonly ASK_COUNTRY_PREFERENCES = 'Czy ma %gend% preferencje dotyczące kraju pochodzenia producenta?';


}
