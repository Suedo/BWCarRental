import { InMemoryDbService } from 'angular-in-memory-web-api';

import { LocationI } from '../../shared/models/Location';
import { UserI } from '../../shared/models/User';

export class InMemWebDb implements InMemoryDbService {
  createDb() {
    const locations: LocationI[] = [
      {
        id: 1,
        city: 'Delhi',
        state: 'Delhi_NCR',
        country: 'India'
      },
      {
        id: 2,
        city: 'Mumbai',
        state: 'Maharashtra',
        country: 'India'
      },
      {
        id: 3,
        city: 'Chennai',
        state: 'Tamil_Nadu',
        country: 'India'
      },
      {
        id: 4,
        city: 'Bangalore',
        state: 'Karnataka',
        country: 'India'
      },
      {
        id: 5,
        city: 'Kolkata',
        state: 'West_Bengal',
        country: 'India'
      }
    ];

    const users: UserI[] = [
      {
        id: 1,
        first_name: 'Gwendolin',
        last_name: 'Elrick',
        email: 'gelrick0@last.fm',
        gender: 'Female',
        driver_license: 'MM93-21052144',
        credit_card_num: '3535796346798896',
        credit_card_type: 'visa'
      },
      {
        id: 2,
        first_name: 'Garrik',
        last_name: 'Ludman',
        email: 'gludman1@fda.gov',
        gender: 'Male',
        driver_license: 'PZ79-53074625',
        credit_card_num: '3575457364436338',
        credit_card_type: 'visa'
      },
      {
        id: 3,
        first_name: 'Amalita',
        last_name: 'Bonehill',
        email: 'abonehill2@drupal.org',
        gender: 'Female',
        driver_license: 'LQ41-23286579',
        credit_card_num: '3585490108148594',
        credit_card_type: 'visa'
      },
      {
        id: 4,
        first_name: 'Barbee',
        last_name: 'Dewbury',
        email: 'bdewbury3@trellian.com',
        gender: 'Female',
        driver_license: 'SJ80-24311006',
        credit_card_num: '201767339960669',
        credit_card_type: 'americanexpress'
      },
      {
        id: 5,
        first_name: 'Harv',
        last_name: 'Ingliby',
        email: 'hingliby4@over-blog.com',
        gender: 'Male',
        driver_license: 'HX60-78824712',
        credit_card_num: '5100135017265598',
        credit_card_type: 'mastercard'
      },
      {
        id: 6,
        first_name: 'Alberta',
        last_name: 'Klesse',
        email: 'aklesse5@list-manage.com',
        gender: 'Female',
        driver_license: 'CB72-00972208',
        credit_card_num: '349441191085089',
        credit_card_type: 'americanexpress'
      },
      {
        id: 7,
        first_name: 'Claiborne',
        last_name: 'Densham',
        email: 'cdensham6@altervista.org',
        gender: 'Male',
        driver_license: 'MW86-62873548',
        credit_card_num: '50183901631385948',
        credit_card_type: 'maestro'
      },
      {
        id: 8,
        first_name: 'Edik',
        last_name: 'Dilley',
        email: 'edilley7@sphinn.com',
        gender: 'Male',
        driver_license: 'NO20-30969547',
        credit_card_num: '30215063457640',
        credit_card_type: 'maestro'
      },
      {
        id: 9,
        first_name: 'Daffi',
        last_name: 'Dunkinson',
        email: 'ddunkinson8@pinterest.com',
        gender: 'Female',
        driver_license: 'OB35-65455082',
        credit_card_num: '6762378145704854914',
        credit_card_type: 'maestro'
      },
      {
        id: 10,
        first_name: 'Xylia',
        last_name: 'Bruckman',
        email: 'xbruckman9@cbslocal.com',
        gender: 'Female',
        driver_license: 'FF80-45508012',
        credit_card_num: '677119549069013059',
        credit_card_type: 'laser'
      },
      {
        id: 11,
        first_name: 'Jemmie',
        last_name: 'Speerman',
        email: 'jspeermana@purevolume.com',
        gender: 'Female',
        driver_license: 'NO82-08436241',
        credit_card_num: '3564983960069283',
        credit_card_type: 'visa'
      },
      {
        id: 12,
        first_name: 'Yorgos',
        last_name: 'Pregel',
        email: 'ypregelb@so-net.ne.jp',
        gender: 'Male',
        driver_license: 'XT54-07540565',
        credit_card_num: '3587451732712518',
        credit_card_type: 'visa'
      },
      {
        id: 13,
        first_name: 'Cherlyn',
        last_name: 'Doe',
        email: 'cdoec@constantcontact.com',
        gender: 'Female',
        driver_license: 'MX52-00770878',
        credit_card_num: '201497732727586',
        credit_card_type: 'americanexpress'
      },
      {
        id: 14,
        first_name: 'Albert',
        last_name: 'Castagnier',
        email: 'acastagnierd@bigcartel.com',
        gender: 'Male',
        driver_license: 'TE01-48886191',
        credit_card_num: '50202534110034211',
        credit_card_type: 'maestro'
      },
      {
        id: 15,
        first_name: 'Jobye',
        last_name: 'Yude',
        email: 'jyudee@diigo.com',
        gender: 'Female',
        driver_license: 'ER76-47408927',
        credit_card_num: '633110427314051061',
        credit_card_type: 'switch'
      },
      {
        id: 16,
        first_name: 'Mirella',
        last_name: 'Mulryan',
        email: 'mmulryanf@japanpost.jp',
        gender: 'Female',
        driver_license: 'HF98-87718116',
        credit_card_num: '3578032322408732',
        credit_card_type: 'visa'
      },
      {
        id: 17,
        first_name: 'Thorvald',
        last_name: 'Trow',
        email: 'ttrowg@mediafire.com',
        gender: 'Male',
        driver_license: 'HI55-31674588',
        credit_card_num: '36771704536386',
        credit_card_type: 'diners-club-international'
      },
      {
        id: 18,
        first_name: 'Celeste',
        last_name: 'Scrivinor',
        email: 'cscrivinorh@yahoo.co.jp',
        gender: 'Female',
        driver_license: 'EH15-88135855',
        credit_card_num: '6390308989943677',
        credit_card_type: 'instapayment'
      },
      {
        id: 19,
        first_name: 'Herold',
        last_name: 'Balle',
        email: 'hballei@washingtonpost.com',
        gender: 'Male',
        driver_license: 'VO14-44805946',
        credit_card_num: '6759884302621920764',
        credit_card_type: 'maestro'
      },
      {
        id: 20,
        first_name: 'Dianna',
        last_name: 'Dietz',
        email: 'ddietzj@cdbaby.com',
        gender: 'Female',
        driver_license: 'YM71-30178977',
        credit_card_num: '3532516370264752',
        credit_card_type: 'visa'
      }
    ];
    return { locations, users };
  }
}
