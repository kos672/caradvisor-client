export class GlobalConstants {
  static readonly CANT_RECOGNIZE_PREFS = 'Nie mogę zweryfikować czy %gend% ma preferencje. Proszę odpowiedzieć jeszcze raz.';
  /* Cookies */
  static readonly IS_NAME_KNOWN = 'IS_NAME_KNOWN';
  static readonly HAS_COUNTRY_PREFS = 'HAS_COUNTRY_PREFS';
  static readonly IS_COUNTRY_KNOWN = 'IS_COUNTRY_KNOWN';
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
  static readonly rootPath = 'http://localhost:8080/';

  static readonly NAME_PATH = GlobalConstants.rootPath + 'name';
  static readonly PREFERENCES_PATH = GlobalConstants.rootPath + 'preferences';
  static readonly COUNTRY_PATH = GlobalConstants.rootPath + 'country';
  static readonly ENGINE_TYPE_PATH = GlobalConstants.rootPath + 'engine-path';

  /* Questions templates */
  static readonly ASK_NAME_QUESTION = 'Dzień dobry. Wita doradca samochodowy CarAdvisor. Jak Pan/Pani ma na imię?';
  static readonly IMPOSSIBLE_RECOGNIZE_NAME = 'Niestety nie mogę rozpoznać imię. Proszę podać ponownie.';
  static readonly ASK_COUNTRY_PREFERENCES = 'Czy ma %gend% preferencje dotyczące kraju pochodzenia producenta?';
  static readonly ASK_ABOUT_COUNTRY = 'Proszę podać preferowany kraj';
  static readonly CANT_RECOGNIZE_COUNTRY = 'Nie mogę zweryfikować podany kraj. Proszę podać ponownie.';


}
