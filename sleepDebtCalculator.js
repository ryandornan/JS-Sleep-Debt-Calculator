const getSleepHours = day => {
    switch (day) {
      case 'monday':
        return 8
        break;
      case 'tuesday':
        return 7
        break;
      case 'wednesday':
        return 8
        break;
      case 'thursday':
        return 7
        break;
      case 'friday':
        return 8
        break;
      case 'saturday':
        return 5
        break;
      case 'sunday':
        return 8
        break;
      default:
        return 'Error!'
    }
  }
  
  const getActualSleepHours = () => {
    return (
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday') 
    )
  }
  
  const getIdealSleepHours = () => {
    let idealHours = 8
    return idealHours * 7
  }
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours()
    const idealSleepHours = getIdealSleepHours()
  
    if (actualSleepHours == idealSleepHours) {
      console.log("user got the perfect amount of sleep.")
    } else if (actualSleepHours > idealSleepHours) {
      console.log ("user got more sleep than needed. you slept " + (idealSleepHours - actualSleepHours) + " more hours than needed")
    } else {console.log("user should get some rest. you need " + (idealSleepHours - actualSleepHours) + "more hours sleep")}
  }
  
  calculateSleepDebt()