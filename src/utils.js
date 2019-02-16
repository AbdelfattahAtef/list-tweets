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
     * Tweet Text Color
     * @param color
     */
    tweetTextColor(color){
        const usersItems = document.getElementsByClassName('tweets__user');
        for(let i = 0; i < usersItems.length; i++){
            document.getElementsByClassName('tweets__user')[i].style.borderColor = color;
        }
        const userDataItems = document.getElementsByClassName('tweets__user-data');
        for(let i = 0; i < userDataItems.length; i++){
            document.getElementsByClassName('tweets__user-data')[i].style.color = color;
            document.getElementsByClassName('tweets__user-data')[i].style.borderColor = color;
        }

        const userTweetsItems = document.getElementsByClassName('tweets__data');
        for(let i = 0; i < userTweetsItems.length; i++){
            document.getElementsByClassName('tweets__data')[i].style.borderColor = color;
        }
    },

    /**
     * Update text color for any user text
     * @param color
     * @param e
     */
    updateTextColor(color, e) {
        if(color){
            this.tweetTextColor(color);
            localStorage.setItem('tweetsColor', color);
        }else{
            setTimeout(() => {
                this.tweetTextColor(localStorage.getItem('tweetsColor'))
            })
        }

        const colorsItems = document.getElementsByClassName('sidebar__section--color__item');
        for(let i = 0; i < colorsItems.length; i++){
            document.getElementsByClassName('sidebar__section--color__item')[i].style.borderWidth = '1px';
        }
        if(e){
            e.target.style.borderWidth = '3px'
        }
    },

    /**
     * Tweet Font Family
     * @param fontFamily
     */
    tweetFontFamily(fontFamily){
        const tweetsList = document.getElementsByClassName('tweets__user-data');
        for(let i = 0; i < tweetsList.length; i++){
            document.getElementsByClassName('tweets__user-data')[i].style.fontFamily = fontFamily
        }
    },

    /**
     * Update font family for tweets
     * @param fontFamily
     */
    updateTweetsFontFamily(fontFamily) {
        if(fontFamily){
            this.tweetFontFamily(fontFamily);
            localStorage.setItem('fontFamily', fontFamily);
        }else{
            setTimeout(() => {
                this.tweetFontFamily(localStorage.getItem('fontFamily'));
            })
        }

    },

    /**
     * Tweet Font Size
     * @param fontSizeVal
     */
    tweetFontSize(fontSizeVal){
        const tweetsList = document.getElementsByClassName('tweets__user-data');
        for(let i = 0; i<tweetsList.length; i++){
            document.getElementsByClassName('tweets__user-data')[i].style.fontSize = fontSizeVal
        }
    },

    /**
     * Update font size for tweets
     * @param fontSizeVal
     */
    handleFontSizeChange(fontSizeVal) {
        if(fontSizeVal){
            this.tweetFontSize(fontSizeVal);
            localStorage.setItem('fontSize', fontSizeVal);
        }else{
            setTimeout(() => {
                this.tweetFontSize(localStorage.getItem('fontSize'));
            })
        }
    },

    /**
     * Load Twitter Script
     * @return {boolean}
     */
    loadTwitterScript(){
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://platform.twitter.com/widgets.js";
        script.charset = "utf-8";
        document.getElementsByTagName("head")[0].appendChild(script);
        return false;
    },
}
