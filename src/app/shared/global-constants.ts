export class GlobalConstants {
  static readonly CANT_RECOGNIZE_PREFS = 'Nie mogę zweryfikować czy %gend% ma preferencje. Proszę odpowiedzieć jeszcze raz.';
  /* Cookies */
  static readonly IS_NAME_KNOWN = 'IS_NAME_KNOWN';
  static readonly ASKED_ABOUT_COUNTRY_PREFS = 'ASKED_ABOUT_COUNTRY_PREFS';
  static readonly IS_COUNTRY_KNOWN = 'IS_COUNTRY_KNOWN';
  static readonly HAS_FAMILY = 'HAS_FAMILY';
  static readonly LIVING_LOCATION_KNOWN = 'LIVING_LOCATION_KNOWN';
  static readonly YEARS_OF_RIDING_KNOWN = 'YEARS_OF_RIDING_KNOWN';
  static readonly ABLE_TO_PAY_EXTRA = 'ABLE_TO_PAY_EXTRA';

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
  static readonly ASK_ABOUT_FAMILY = 'Czy ma %gend% rodzinę?';


}
