const { convertTimeToWords } = require('./index');

describe('Time to words', () => {
    it('Handles midnight', () => {
        const timeInWords = convertTimeToWords('0:00');
        expect(timeInWords).toBe('midnight');
    });

    it('Handles 30 - 8:30', () => {
        const timeInWords = convertTimeToWords('8:30');
        expect(timeInWords).toBe('half past eight');
    });

    it('Handles times after 30 mins - 2:45', () => {
        const timeInWords = convertTimeToWords('2:45');
        expect(timeInWords).toBe('quarter to three');
    });

    it('Handles times before 30 mins - 2:17', () => {
        const timeInWords = convertTimeToWords('2:17');
        expect(timeInWords).toBe('seventeen past two');
    });

    it('Handles times after 45 mins - 2:49', () => {
        const timeInWords = convertTimeToWords('2:49');
        expect(timeInWords).toBe('eleven to three');
    });
});
