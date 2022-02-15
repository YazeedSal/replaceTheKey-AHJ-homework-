const replaceKey = function (str, value) { // this function finds the word that is surroned with hashtags
    let isReadingKey = false
    let messege = ''
    let foundKey = ''

    for (let i = 0; str[i]; i++) {
        if (str[i] == '#') {
            isReadingKey = !isReadingKey
            foundKey = false
            i++
        }
        if (isReadingKey) {
            if (!foundKey) {
                messege += value
                foundKey = true
            }

        } else {
            messege += str[i] || ' '  // we used or here because at the top we made the code skip an index when finding a hashtag so 
                                     // if it happens that a hashtag comes at the end of a string what will happen is the str[i] is undefined and we don't want that
        }
    }
    return messege
}

console.log(replaceKey(`Hi #cat# you're welcome`, 'yazeed'));