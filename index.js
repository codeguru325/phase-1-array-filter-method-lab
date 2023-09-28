const drivers = ["bobby", "sammy", "sally", "annette", "sarah", "Bobby", "Bobby"];

function findMatching(array, searchName) {
  const searchNameLower = searchName.toLowerCase();

  return array.filter(function (element) {
    const elementLower = element.toLowerCase();
    return elementLower === searchNameLower;
  });
}

console.log(findMatching(drivers, "bobby"))

function fuzzyMatch(drivers, query) {
    const queryLower = query.toLowerCase();
  
    return drivers.filter(function (driver) {
      const driverLower = driver.toLowerCase();
      return driverLower.startsWith(queryLower);
    });
  }
   
  function matchName(drivers, name) {
    return drivers.filter(function (driver) {
      return driver.name === name;
    });
  }
   
  
  