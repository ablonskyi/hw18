let str = prompt('Введіть речення з датами:');

function findDates(str) {
    const check = /\b(\d{4})-(\d{2})-(\d{2})\b/g;
    const monthNames = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];
  
    const matches = [];
    let match;
    
    while ((match = check.exec(str)) !== null) {
      const year = parseInt(match[1], 10);
      const month = parseInt(match[2], 10);
      const day = parseInt(match[3], 10);
  
      if (month >= 1 && month <= 12 && day >= 1 && day <= 31) {
        const dateObj = {
          year: year,
          month: month,
          day: day,
          monthName: monthNames[month - 1]
        };
        matches.push(dateObj);
      }
    }
  
    return matches;
  }
  

  const datesArray = findDates(str);
  console.log(datesArray);