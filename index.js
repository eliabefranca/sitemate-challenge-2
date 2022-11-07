// expecting time to be a string in the format like '8:15' or '12:30'
// - 2:00 > two o'clock
// - 2:03 > three past two
// - 2:11 > eleven past two
// - 2:15 > quarter past two
// - 2:30 > half past two
// - 2:33 > twenty seven to three
// - 2:40 > twenty to three
// - 2:55 > five to three

const numbers = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    45: 'fourty five',
};

function getMinuteName(minutes) {
    let n = parseInt(minutes);

    if (n === 15) {
        return 'quarter';
    }
    if (n === 30) {
        return 'half';
    }

    return numbers[minutes];
}

function convertTimeToWords(time) {
    const [hour, minutes] = time.split(':');

    if (time === '0:00') {
        return 'midnight';
    }

    if (minutes === '00') {
        return `${numbers[hour]} o'clock`;
    }

    if (minutes === '30') {
        return `half past ${numbers[hour]}`;
    }

    if (minutes === '15') {
        return `quarter past ${numbers[hour]}`;
    }

    if (parseInt(minutes) < 30) {
        return `${numbers[minutes]} past ${numbers[hour]}`;
    }

    const minutesToNextHour = 60 - parseInt(minutes);

    return `${getMinuteName(minutesToNextHour)} to ${
        numbers[parseInt(hour) + 1]
    }`;
}

module.exports = { convertTimeToWords };
