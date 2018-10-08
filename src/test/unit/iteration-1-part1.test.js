import DistrictRepository from '../../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('DistrictRepository iteration 1 - part 1', () =>  {
  const district = new DistrictRepository(kinderData);

  test('findByName returns undefined if no arguments are provided', () => {
    expect(district.findByName()).toBe(undefined);
  });

  test('findByName returns undefined when there are no matching arguments', () => {
    expect(district.findByName('Vikings')).toBe(undefined);
  });

  test('findByName returns an object with its individual district information', () => {
    expect(typeof district.findByName('Colorado')).toEqual('object');
    expect(district.findByName('Colorado').location).toEqual('COLORADO');
  });

  test('findByName search is not case sensitive', () => {
    expect(district.findByName('ColoRAdo').location).toEqual('COLORADO');
    expect(district.findByName('ACADEmY 20').location).toEqual('ACADEMY 20');
  });

  test('each district has a data object containing each year and its data as key value pairs.', () => {
    const academy = district.findByName('ACADEmY 20');

    expect(academy.location).toEqual('ACADEMY 20');
    expect(typeof academy.stats).toBe('object');
  });

  test('district data is rounded to the nearest hundredth', () => {
    const result = {"2004": 0.302, "2005": 0.267, "2006": 0.354, "2007": 0.392, "2008": 0.385, "2009": 0.39, "2010": 0.436, "2011": 0.489, "2012": 0.479, "2013": 0.488, "2014": 0.49}
    const academy = district.findByName('ACADEmY 20');

    expect(academy.stats).toEqual(result);
  });

  test('district data is sanitized and defaults to 0', () => {
    const academy = district.findByName('ARICKAREE R-2');
    const result = {"2004": 1, "2005": 0, "2006": 0.125, "2007": 0, "2008": 1, "2009": 1, "2010": 1, "2011": 1, "2012": 1, "2013": 1, "2014": 1}

    expect(academy.stats).toEqual(result)
  });

});
