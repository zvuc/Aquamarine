# Aquamarine
A dark-themed userstyle for [IRCCloud](https://www.irccloud.com)

![Image](https://raw.githubusercontent.com/zvuc/Aquamarine/master/aquamarine-screenshot.png)

Darkens and recolorizes IRCCloud. Fine-tuned to every detail, carefully tested to make sure it doesn't break.

This repo is for code maintenance. Whenever there is a need to update, it will be updated both here and at [userstyles.org page](https://userstyles.org/styles/104692/).

**Note**: The userstyle should not apply when you visit http://irccloud.com the first time. The stylesheet targets urls starting with `/#` after the domain, which is utomatically appended after the 'chat view' loads. Refresh the page after it's loaded or just type the `#` after the url. (Reason why it's done like this is explained [here](https://github.com/zvuc/Aquamarine/issues/1))


## How to use
### 1. Install userstyle extensions

- Firefox: https://addons.mozilla.org/en-US/firefox/addon/stylish/
- Chrome: https://chrome.google.com/webstore/detail/stylish/fjnbnpbmkenffdnngjfgmeleoegfcffe?hl=en
- Safari: http://code.grid.in.th/

### 2a. Install userstyle from userstyle
Go to [the userstyles.org page](https://userstyles.org/styles/104692/) click the install button. 

This way is recommended because you can easily update the style whenever there is an update pushed by me, and you can also select some options with a click.


### 2b. Custom installation
Copy and paste the code from `style.css` as a new userstyle in your browser. 

For browsers other than Firefox, remove the top `@-moz-document url-prefix("https://www.irccloud.com/#") {` line and the closing bracket `}` at the bottommost line of `style.css` when you're pasting the code into the extension. Make sure the code applies to site domains beginning with `https://www.irccloud.com/#`. 

The reason why `#` is included at the end is to prevent the style altering other pages such as the login page. The `#` sign is automatically added when you're in chat view, so if the style does not apply at first, just hit refresh and it'll go dark.

The `_colors.css` also in the repo is not a standalone stylesheet, it's for the self-nick color select option on userstyles.org. Copy a color hex code you like and replace it with where it says `/*[[nick_color]]*/` inside `style.css` and it that will be your alternative nick color.


## Changelog
See [CHANGELOG.md](/CHANGELOG.md).


## Disclaimer
This is purely an unofficial mod; I am in no way affiliated to IRCCloud Ltd., although I am an active user that faithfully offers them 5 bucks every month. ;)

This code is licensed in MIT, and is provided "as is" with no warranty. I am in no way responsible for any problems that might arise when using this, though it is highly likely that any problems that DO float up will get fixed as soon enough as it will boggle my inner designer's heart until everything looks proper.