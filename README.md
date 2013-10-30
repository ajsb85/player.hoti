Wordpress Plugin for Hotï Player
(based on SoundCloud is Gold)

Contributors: Alexander Salas, Marcos Colina
Tags: soundcloud, integrated, media, shortcode, browse, design, easy, simple, music, sound, js, live preview, flash, html5, hoti
Requires at least: 3.2
Tested up to: 3.5.1
Stable tag: 2.2.1

Browse through your soundcloud tracks, sets and favourites. Select and add tracks, sets or favourites to your posts. Live preview, easy.

== Description ==

**Now with soundcloud's official html5 player!**

** Compatible with new WP 3.5 **

**New Widget to display latest and random track, favorites or sets for one user, multiple users or random users.**

**Hotï Player** integrates perfectly into wordpress. Browse through your soundcloud tracks, sets and favorites from the 'Hotï Player' tab in the post's 'upload media' popup window. Select, set and add track, sets, favorites to your post using the soundcloud player. Live Preview, easy, smart and straightforward.
You can set default settings in the option page, choose your defaut soundcloud player (Mini, Standard, Artwork, Html5), it's width, add extra classes for you CSS lovers, show comments, autoplay and your favorite color.
You'll also be able to set players to different settings before adding to your post if you fancy a one off change.

**Save multiple users, very useful for labels, collectives or artists with many projects.**

**Hotï Player** use a shortcode but the "Hotï Player" tab will write it for you dynamicly as you select parameters, and on top of this it will provide a nice live preview of your player so you know what does what. When done just press the 'insert soundcloud player' and it will added to your post just like when you're adding a photo or gallery.

If you love it please rate it! If you use it and want to help, [donations are always welcomed](http://www.mightymess.com/wp-hoti-wordpress-plugin) or you could like, tweet or spread the love on your blog ;)

Latest developments updates on twitter: [#hotiplayer](https://twitter.com/#!/search/realtime/%23hotitv) or follow me on [twitter](http://twitter.com/#!/hotitv)

Check out my [TM soundcloud profile](http://www.soundcloud.com/hotitv), more [Hotï](http://hoti.tv).

= Features =

* Browse through your soundcloud tracks, sets and favorites from a tab in the media upload window (see screenshot), no need to go back and forth between soundcloud and your website.
* Save multiple users, very useful for labels, collectives or artists with many projects
* Live Preview in the Tab, see what does what instantly (see screenshot).
* Integrates perfectly with wordpress media upload by using the same listing style that you get with the images (see screenshot).
* See track's info directly in the tab (description, url, cover, etc...).
* Set default settings from the option page (see screenshot):
    * Default player type (Mini, Standard, Artwork, Html5)
    * Width
    * Extra Classes for the div that wraps around the player
    * Auto Play
    * Show/Hide Comments
    * Player's Colors
* Use shortcode
* Plugin construct shortode for you, no need to remember any syntax.
* Style sortcode for neat layout in your editor.
* Implement Soundcloud Html5 player (beta).
* Widget for showing latest and random track, favorites or sets for one user, multiple users or random users.
* Follow WP developpers guidelines (enqueue scripts and styles just for the plugin, clean code, commented, secure and leave no trace when uninstall ).

= Advantages against pasting embed code from soundcloud =

* By changing the main settings in the options, all players on your site using the default settings will change. If green isn't trendy anymore and black is the new white, it won't be a problem and you keep your street credibility safe.
* If Soundcloud update their player or release a even cooler new player that let you scratch your track while streaming to google+, I will most defenetly update the plugin to use those new features.

That's just my opinion of course...


= To Do List =

* v1.1: new UI.
* V1.1: Advance Settings (change background color and comments color, playcounts, buy link, font, wmode, etc, show/hide styled shortcode, number of tracks per page)
* v1.1: url attribute for shortcode: easier for people using the shortcode manually.
* v1.1: other soundcloud shortcode conflict fix (jetpack)
* Add Soundcloud default Width to the options
* Trigger live preview when changing Soundcloud user name
* Live search while typing a name in the user name field. So if you're looking for someone it's kind of easier.
* Add 'activities' to a widget
* Fall Back for smartphone to html5 player when using flash player.


== Installation ==

= Updating =
When updating to 1.0, if you're experiencing issues, deactivate and reactivate the plugin from the plugin page. This is due to switching to the Settings API. Sorry for the inconvenient. 

Just follow the usual procedure. Log on to your wordpress, go to plugin -> add new -> search 'Hoti Player' -> click install


== Frequently Asked Questions ==

= I can't see my tracks? =

* Have you entered your real username? Your username is what you see in your soundcloud url when you click your name in soundcloud or view public profile (e.g http://soundcloud.com/anna-chocola ).
* Bare in mind is that all tracks that are set as private on soundcloud won't appear.
* Have you got other soundcloud plugin installed? That generally happen as you've been 'shopping around', disable them or even delete them and this if it works.

= It's behaving strangely or working partially or I've check everything but it still doesn't work =

Here's a simple method to track down incompatibilities with plugins and themes:

* Disable all plugins
* Enable 'Hotï Player' and check if it works (add a track to a post to be sure)
* If it worked: enable the other plugins one by one and check if it breaks
* If it didn't worked: enable the default Worpress theme and check if it works (add a track to a post to be sure).

Remenber that even if a plugin is popular, most of the plugins are badly coded or the developer didn't follow Wordpress guidelines on plugin development. Therefor conflict happens. The method is useful not just for this plugin. 

= Can't play my tracks on my iphone, ipad or ipod? =

Soundcloud has just released a html5 player. It's currently in it's beta version, which means that there might be bugs. Hotï Player give you the option to use the html5 player but it's either flash all flash or all html5 for now.

= How can I use the shortcode manually? =

If for some reason you wish to use the shortcode manually, like for embeding someone else tracks, you can use:

**[soundcloud id='10450254']**
or
**[soundcloud user='t-m']** to always display the latest track
 
This will use your default setting of with, classes, colors, autoplay, comments. (Replace *10450254* with the track id you want to show)

If you wish to have more control here is an example:

**[soundcloud id='10450254' comments='true' autoplay='false' playertype='Standard' width='100%' color='#005bff']**

= Can I request features? =

Yes, you can. If asked nicely and the requests are sensibles, I almost always integrate them to new releases.

= Can you help me? =

Sometimes, I generally keep a eye on my plugin's forums and website's comments. Bear in mind that I've got a full time job and a life, so I can't always help straight away. I will not reply to people who obviously don't read the faqs or the forum or just say 'it doesn't work'.

== Upgrade Notice ==

= 1.0.0 =
* Security Update. Thanks to Samuel Wood for his help and time.


== Screenshots ==

1. screenshot-1.jpg
2. screenshot-2.jpg
3. screenshot-3.jpg
4. screenshot-4.jpg
5. screenshot-5.jpg


== Changelog ==

= 1.0.0 =
* Security Update. Thanks to Samuel Wood for his help and time.


== License ==

    Hotï - Venezuelan Artistic Material
    Copyright (C) 2013 Marcos Colina
	
	Contributors
		Marcos Colina <ceo@hoti.tv>
		Alexander Salas <a.salas@ieee.org>
	
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
	
