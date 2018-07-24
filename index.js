// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue; 
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const names = [];
  drivers.filter(function(driver) {
    if (driver.revenue > revenue) {names.push(driver.name);}
  });
  return names;
}

function exactMatch(drivers, att_obj) {
  return drivers.filter(function(driver) {
    for(const key in att_obj) {
      return driver[key] === att_obj[key];
    }
  });
}

function exactMatchToList(drivers, att_obj) {
  const driver_objects = exactMatch(drivers,att_obj)
  return drivers.map(function(driver) { return driver.name })
}