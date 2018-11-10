export class GlobalConstants {
  /* Cookies */
  static readonly IS_NAME_KNOWN = 'IS_NAME_KNOWN';
  static readonly ASKED_ABOUT_COUNTRY_PREFS = 'ASKED_ABOUT_COUNTRY_PREFS';
  static readonly IS_COUNTRY_KNOWN = 'IS_COUNTRY_KNOWN';
  static readonly HAS_COUNTRY_PREFS = 'HAS_COUNTRY_PREFS';
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
  static readonly FAMILY_PATH = GlobalConstants.rootPath + 'family';
  static readonly LOCATION_PATH = GlobalConstants.rootPath + 'location';
  static readonly EXPERIENCE_PATH = GlobalConstants.rootPath + 'experience';
  static readonly PAY_FOR_COMFORT_PATH = GlobalConstants.rootPath + 'pay-extra';

  /* Questions templates */
  static readonly ASK_NAME_QUESTION = 'Dzień dobry. Wita doradca samochodowy CarAdvisor. Jak Pan/Pani ma na imię?';
  static readonly ASK_COUNTRY_PREFERENCES = 'Czy ma %gend% preferencje dotyczące kraju pochodzenia producenta?';
  static readonly ASK_ABOUT_COUNTRY = 'Proszę podać preferowany kraj';
  static readonly ASK_ABOUT_FAMILY = 'Czy ma %gend% rodzinę?';
  static readonly ASK_ABOUT_LIVING_LOCATION = 'Czy często %gend% będzie jeździć po terenach podmiejskich?';
  static readonly ASK_ABOUT_EXPERIENCE = 'Ile lat doświadczenia jazdy posiada %gend%?';
  static readonly ASK_ABOUT_ABILITY_TO_PAY_FOR_COMFORT = 'Czy jest %gend% w stanie zapłacić więcej za wygodę?';

  /* Failure to recognize */
  static readonly CANT_RECOGNIZE_PREFS = 'Nie mogę zweryfikować czy %gend% ma preferencje. Proszę odpowiedzieć jeszcze raz.';
  static readonly IMPOSSIBLE_RECOGNIZE_NAME = 'Niestety nie mogę rozpoznać imię. Proszę podać ponownie.';
  static readonly CANT_RECOGNIZE_COUNTRY = 'Nie mogę zweryfikować podany kraj. Proszę podać ponownie.';
  static readonly CANT_RECOGNIZE_FAMILY = 'Nie mogę rozpoznać czy %gend% ma rodzinę. Proszę odpowiedzieć jeszcze raz.';
  static readonly CANT_RECOGNIZE_OFTEN_DRIVEN_LOCATION = 'Nie mogę rozpoznać na jakich terenach %gend% będzie częściej jeżdzić. Proszę odpowiedzieć ponownie.';
  static readonly CANT_RECOGNIZE_YEAR_EXPERIENCE = 'Niestety nie mogę na podstawie uzyskanej odpowiedzi oszacować ile %gend% ma lat doświadczenia w prowadzeniu samochodu.';
  static readonly CANT_RECOGNIZE_ABILITY_TO_PAY_EXTRA = 'Nie mogę zrozumieć czy %gend% będzie w stanie przepłacić za wygodę. Poproszę jeszcze raz.';

}
