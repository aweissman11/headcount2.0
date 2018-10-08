export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.cleanData(stats);
  }

  cleanData = (data) => {
    let cleanData = data.reduce( (schools, year) => {
      let roundedYear = Math.round(year.Data * 1000)/1000 || 0;

      if (!schools[year.Location]) {
        schools[year.Location] = {
          [year.TimeFrame]: roundedYear
        };
      } else {
        Object.assign(schools[year.Location], {[year.TimeFrame]: roundedYear});
      }
      return schools;
    }, {});
    return cleanData;
  }

  findByName = (enteredName) => {
    const locations = Object.keys(this.stats);

    if (enteredName) {
      enteredName = enteredName.toLowerCase();
      let correctDistrict = locations.find( location => {
        if (enteredName === location.toLowerCase()) {
          return location;
        } else {
          return false;
        }
      });

      if (correctDistrict) {
        return {
          location: correctDistrict.toUpperCase(),
          stats: this.stats[correctDistrict]
        };
      }
    } else {
      return undefined;
    }
  }

  findAllMatches = (entry) => {
    const locations = Object.keys(this.stats);
    const returnData = [];

    if (entry) {
      locations.forEach( location => {
        if (location.toLowerCase().includes(entry.toLowerCase())) {
          returnData.push({
            stats: this.stats[location],
            location: location.toUpperCase()
          });
        }
      });
    } else {
      locations.forEach( location => {
        returnData.push({
          stats: this.stats[location],
          location: location.toUpperCase()
        });
      });
    }
    return returnData;
  }

  findAverage = (place) => {
    const thisPlace = this.findByName(place).stats;
    const placeArray = Object.keys(thisPlace);

    const total = placeArray.reduce( (avg, year) => {
      return avg += thisPlace[year];
    }, 0);

    return Math.round((total / placeArray.length) * 1000) / 1000;
  }

  compareDistrictAverages = (school1, school2) => {
    return ({
      [school1.toUpperCase()]: this.findAverage(school1),
      [school2.toUpperCase()]: this.findAverage(school2),
      compared: Math.round(
        (this.findAverage(school1) / this.findAverage(school2)) * 1000) / 1000
    });
  }


}
