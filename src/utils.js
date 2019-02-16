export default {
    /**
     * Update background color for the body
     * @param color
     * @param e
     */
    updateBackgroundColor(color, e) {
        document.body.style.backgroundColor = color;
        const colorsItems = document.getElementsByClassName('sidebar__section--background__item');
        for(let i = 0; i < colorsItems.length; i++){
            document.getElementsByClassName('sidebar__section--background__item')[i].style.borderWidth = '1px';
        }

        if(e){
            e.target.style.borderWidth = '3px'
        }
        localStorage.setItem('bodyBg', color);
    },

    /**
     * Update text color for any user text
     * @param color
     * @param e
     */
    updateTextColor(color, e) {
        const usersItems = document.getElementsByClassName('tweets__user');
        for(let i = 0; i < usersItems.length; i++){
            document.getElementsByClassName('tweets__user')[i].style.color = color;
            document.getElementsByClassName('tweets__user')[i].style.borderColor = color;
        }
        const userDataItems = document.getElementsByClassName('tweets__user-data');
        for(let i = 0; i < userDataItems.length; i++){
            document.getElementsByClassName('tweets__user-data')[i].style.borderColor = color;
        }
        const colorsItems = document.getElementsByClassName('sidebar__section--color__item');
        for(let i = 0; i < colorsItems.length; i++){
            document.getElementsByClassName('sidebar__section--color__item')[i].style.borderWidth = '1px';
        }
        if(e){
            e.target.style.borderWidth = '3px'
        }

        localStorage.setItem('tweetsColor', color);
    },

    /**
     * Update font family for tweets
     * @param fontFamily
     */
    updateTweetsFontFamily(fontFamily) {
        const tweetsList = document.getElementsByClassName('tweets__text');
        for(let i = 0; i < tweetsList.length; i++){
            document.getElementsByClassName('tweets__text')[i].style.fontFamily = fontFamily
        }
        localStorage.setItem('fontFamily', fontFamily);
    },

    /**
     * Update font size for tweets
     * @param fontSizeVal
     */
    handleFontSizeChange(fontSizeVal) {
        const tweetsList = document.getElementsByClassName('tweets__text');
        for(let i = 0; i<tweetsList.length; i++){
            document.getElementsByClassName('tweets__text')[i].style.fontSize = fontSizeVal
        }
        localStorage.setItem('fontSize', fontSizeVal);
    },
}
