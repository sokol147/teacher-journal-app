import { StatisticService } from './statistic.service';
import { TranslateService } from '@ngx-translate/core';

describe('StatisticService', () => {
  let service: StatisticService;

  let testSubject = {
    id: 1,
    name: 'Biology',
    teacher: 'Mr. Plus',
    cabinet: 12,
    description: '',
    date: [],
    students: []
  }

  let testSubject1 = {
    id: 1,
    name: 'Biology',
    teacher: 'Mr. Plus',
    cabinet: 12,
    description: '',
    date: ['04/26'],
    students: []
  }

  beforeEach(() => {
    const fakeTranslateService = {
      instant: (value) => 'there was no'
    }
    service = new StatisticService(fakeTranslateService as TranslateService);
  })

  it('should return observable with info message', (done: DoneFn) => {
    service.getStatistic(testSubject, '04/26').subscribe(value => {
      expect(value[1]).toBe('04/26 there was no Biology');
      done();
    })
  })

  it('should return observable without message', (done: DoneFn) => {
    service.getStatistic(testSubject1, '04/26').subscribe(value => {
      expect(value[1]).toBe('');
      done();
    })
  })
})