export default {
    /**
     * Handle change tweets view
     * @param type
     */
    handleTweetsView(type){
        if(type === 'list'){
            document.getElementsByClassName('tweets__wrapper')[0].style.flexDirection = 'column';
            const users = document.getElementsByClassName('tweets__user');
            for(let i = 0; i < users.length; i++){
                document.getElementsByClassName('tweets__user')[i].style.width = 'calc(100% - 40px)';
                document.getElementsByClassName('tweets__user')[i].style.marginBottom = '15px';
                document.getElementsByClassName('tweets__user-followers')[i].style.justifyContent = 'center';
            }
            localStorage.setItem("view", "list");
        }else{
            document.getElementsByClassName('tweets__wrapper')[0].style.flexDirection = 'row';
            const users = document.getElementsByClassName('tweets__user');
            for(let i = 0; i < users.length; i++){
                document.getElementsByClassName('tweets__user')[i].style.width = 'calc(30% - 40px)';
                document.getElementsByClassName('tweets__user')[i].style.marginBottom = '0px';
                document.getElementsByClassName('tweets__user-followers')[i].style.justifyContent = 'space-between';
            }
            localStorage.setItem("view", "grid");
        }
    },
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

        const userTweetsItems = document.getElementsByClassName('tweets__data');
        for(let i = 0; i < userTweetsItems.length; i++){
            document.getElementsByClassName('tweets__data')[i].style.borderColor = color;
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
        const tweetsList = document.getElementsByClassName('tweets__user-data');
        for(let i = 0; i < tweetsList.length; i++){
            document.getElementsByClassName('tweets__user-data')[i].style.fontFamily = fontFamily
        }
        localStorage.setItem('fontFamily', fontFamily);
    },

    /**
     * Update font size for tweets
     * @param fontSizeVal
     */
    handleFontSizeChange(fontSizeVal) {
        const tweetsList = document.getElementsByClassName('tweets__user-data');
        for(let i = 0; i<tweetsList.length; i++){
            document.getElementsByClassName('tweets__user-data')[i].style.fontSize = fontSizeVal
        }
        localStorage.setItem('fontSize', fontSizeVal);
    },
}
