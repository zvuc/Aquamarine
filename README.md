# Aquamarine
A dark-themed userstyle for [IRCCloud](https://www.irccloud.com)

![Image](https://raw.githubusercontent.com/zvuc/Aquamarine/master/aquamarine-screenshot.png)

Darkens and recolorizes IRCCloud. Fine-tuned to every detail, carefully tested to make sure it doesn't break.

This repo is for code maintenance. Whenever there is a need to update, it will be updated both here and at [userstyles.org page](https://userstyles.org/styles/104692/).


## How to Use
### 1. Install with userstyles extension
First install the extension depending on your browser: [Firefox](https://addons.mozilla.org/en-US/firefox/addon/stylish/), [Chrome](https://chrome.google.com/webstore/detail/stylish/fjnbnpbmkenffdnngjfgmeleoegfcffe?hl=en), [Safari](http://code.grid.in.th/)

### 2a. Install userstyle from userstyles.org
Go to [the userstyles.org page](https://userstyles.org/styles/104692/), select your customize options, click the install button. 

This way is recommended because you can easily update the style whenever there is an update pushed by me, and you can also select some options with a click.


## Custom building
Aquamarine uses [Grunt](http://gruntjs.com/) to automate the LESS stylesheet compiling and building process.
Install the latest version of [Node.js](http://nodejs.org/download/) first if you don't have it already.

Navigate to the repository directory and run `npm install` on Terminal or Command Prompt to automatically install required grunt plugin packages.

You can customize options like self nick color by modifying the variables on top of `src/source.less` file.

Run `grunt` to build the stylesheet when you're done tweaking.

Copy and paste the code from compiled `aquamarine.css` as a new userstyle in your browser. 

For browsers other than Firefox, remove the top `@-moz-document url-prefix("https://www.irccloud.com/") {` line and the closing bracket `}` at the bottommost line of `aquamarine.css` when you're pasting the code into the extension. Make sure the code applies to site domains beginning with `https://www.irccloud.com/`. 


## Changelog
See [CHANGELOG.md](/CHANGELOG.md).


## Disclaimer
This is purely an unofficial mod; I am in no way affiliated to IRCCloud Ltd., although I am an active user that faithfully offers them 5 bucks every month. ;)

This code is licensed in MIT, and is provided "as is" with no warranty. I am in no way responsible for any problems that might arise when using this, though it is highly likely that any problems that DO float up will get fixed as soon enough as it will boggle my inner designer's heart until everything looks proper.