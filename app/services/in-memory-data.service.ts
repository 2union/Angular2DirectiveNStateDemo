import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let profile_types = [
      {
        "id": 1,
        "alias": "tech",
        "class": "corner_tl",
        "title": "Технарь",
        "description": "Технарь необходимый человек в любой миссии. Ни одно приключение не обходиться без поломок и не начинается без технического оснащения."
      },
      {
        "id": 2,
        "alias": "humanities",
        "class": "corner_tr",
        "title": "Гуманитарий",
        "description": "Знает и умеет всё что связано со словом. Красивым оборотом придаст уверенности союзникам и понизит мораль противника. Иногда владеет заморскими языками."
      },
      {
        "id": 2,
        "alias": "medicine",
        "class": "corner_bl",
        "title": "Медик",
        "description": "Какое приключение обходится без хорошей травмы? Но миссия должна продолжаться и задача медика держать союзника в строю и в хорошем настроении."
      },
      {
        "id": 4,
        "alias": "support",
        "class": "corner_br",
        "title": "Поддержка",
        "description": "Каждому бравому войну нужен его верный оруженосец, без таких людей не может состоятья ни одно стоящее приключение."
      }
    ];
    return {profile_types};
  }
}
