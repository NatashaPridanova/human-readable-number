module.exports = function toReadable(number) {
    let smallNums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundred = 'hundred';
    let numStr = number.toString();
    if (number < 20) {
        return smallNums[number]

    } else if (number < 100) {
        if (numStr[1] == 0) {
            return dozens[numStr[0]]
        } else {
            return dozens[numStr[0]] + ' ' + smallNums[numStr[1]]
        }

    } else {
        if (numStr[1] == 1) {
            return smallNums[numStr[0]] + ' ' + hundred + ' ' + smallNums[numStr.substring(1)]
        } else if (numStr[1] == 0) {
            if (numStr[2] == 0) { return smallNums[numStr[0]] + ' ' + hundred } else {
                return smallNums[numStr[0]] + ' ' + hundred + ' ' + smallNums[numStr[2]]
            }
        } else if (numStr[2] == 0) {
            return smallNums[numStr[0]] + ' ' + hundred + ' ' + dozens[numStr[1]]
        } else {
            return smallNums[numStr[0]] + ' ' + hundred + ' ' + dozens[numStr[1]] + ' ' + smallNums[numStr[2]]
        }
    }
}