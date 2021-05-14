const translation = {
    0: 'sıfır',
    1: 'bir',
    2: 'iki',
    3: 'üç',
    4: 'dörd',
    5: 'beş',
    6: 'altı',
    7: 'yeddi',
    8: 'səkkiz',
    9: 'doqquz',
    10: 'on',
    20: 'iyirmi',
    30: 'otuz',
    40: 'qırx',
    50: 'əlli',
    60: 'altımış',
    70: 'yetmiş',
    80: 'səksən',
    90: 'doxsan',
    100: 'yüz',
    1000: 'min',
    1000000: 'milyon',
}


function numberToWords(num) {
    if (translation[num]) {
        return translation[num];
    }

    const length = num.toString().length;

    if (length > 9) {
        return 'Zehmet olmasa milyarddan asagi eded daxil edin';
    }

    if (length === 2) {
        const ten = Math.floor(num / 10) * 10;
        return numberToWords(ten) + ' ' + numberToWords(num % 10);
    }

    if (length === 3) {
        const hundred = Math.floor(num / 100);
        if (hundred === 1) {
            return numberToWords(100) + ' ' + numberToWords(num % 100);
        }
        return numberToWords(hundred) + ' ' + numberToWords(100) + ' ' + numberToWords(num % 100);
    }

    if (length === 4 || length === 5 || length === 6) {
        const thousand = Math.floor(num / 1000);
        if (thousand === 1) {
            return numberToWords(1000) + ' ' + numberToWords(num % 1000);
        }
        return numberToWords(thousand) + ' ' + numberToWords(1000) + ' ' + numberToWords(num % 1000);
    }

    if (length > 6) {
        return numberToWords(Math.floor(num / 1000000)) + ' ' + numberToWords(1000000) + ' ' + numberToWords(num % 1000000);
    }
};