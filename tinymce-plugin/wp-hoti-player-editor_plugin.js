/*
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
	
*/

(function() {
	tinymce.create('tinymce.plugins.hoti', {
	
		init : function(ed, url) {
			var t = this;
			
			t.url = url;
			t._createButtons();

			// Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('...');
			ed.addCommand('hoti', function() {
				var el = ed.selection.getNode(), post_id, vp = tinymce.DOM.getViewPort(),
					H = vp.h - 80, W = ( 640 < vp.w ) ? 640 : vp.w;

				if ( el.nodeName != 'IMG' ) return;
				if ( ed.dom.getAttrib(el, 'class').indexOf('hoti') == -1 )	return;

				post_id = tinymce.DOM.get('post_ID').value;
				tb_show('', tinymce.documentBaseURL + '/media-upload.php?post_id='+post_id+'&tab=hoti&TB_iframe=true&width='+W+'&height='+H);
				
				tinymce.DOM.setStyle( ['TB_overlay','TB_window','TB_load'], 'z-index', '999999' );
			});
			
			
			ed.onMouseDown.add(function(ed, e) {
				if ( e.target.nodeName == 'IMG' && ed.dom.hasClass(e.target, 'hoti') )
					t._showButtons(t, e.target, 'hotibtns');
			});
						
			//Replace Shortcode with Styled img or whatever
			ed.onBeforeSetContent.add(function(ed, o) {
				o.content = t._do_hoti(o.content);
			});
			//Put Back the shortcode when saving
			ed.onPostProcess.add(function(ed, o) {
				if (o.get)
					o.content = t._get_hoti(o.content);
			});
		},
		
		_showButtons : function(that, n, id) {
			var ed = tinyMCE.activeEditor, p1, p2, vp, DOM = tinymce.DOM, X, Y;

			vp = ed.dom.getViewPort(ed.getWin());
			p1 = DOM.getPos(ed.getContentAreaContainer());
			p2 = ed.dom.getPos(n);

			X = Math.max(p2.x - vp.x, 0) + p1.x;
			Y = Math.max(p2.y - vp.y, 0) + p1.y;

			DOM.setStyles(id, {
				'top' : Y+5+'px',
				'left' : X+5+'px',
				'display' : 'block',
				'position' : 'absolute'
			});

			if ( this.mceTout )
				clearTimeout(this.mceTout);

			this.mceTout = setTimeout( function(){that._hideButtons();}, 5000 );
		},
		
		_hideButtons : function() {
			if ( !this.mceTout )
				return;

			if ( document.getElementById('hoti_edit_shortcode') )
				tinymce.DOM.hide('hoti_edit_shortcode');

			if ( document.getElementById('hotibtns') )
				tinymce.DOM.hide('hotibtns');

			clearTimeout(this.mceTout);
			this.mceTout = 0;
		},
		
		//Replace Shortcode with Styled img or whatever
		_do_hoti : function(co) {
			return co.replace(/\[soundcloud([^\]]*)\]/g, function(a,b){
				return '<img src="../wp-content/plugins/wp-hoti-player-master/tinymce-plugin/img/t.gif" class="hoti mceItem" title="soundcloud'+tinymce.DOM.encode(b)+'" />';
			});
		},
		
		//Put Back the shortcode when saving
		_get_hoti : function(co) {

			function getAttr(s, n) {
				n = new RegExp(n + '=\"([^\"]+)\"', 'g').exec(s);
				return n ? tinymce.DOM.decode(n[1]) : '';
			};

			return co.replace(/(?:<p[^>]*>)*(<img[^>]+>)(?:<\/p>)*/g, function(a,im) {
				var cls = getAttr(im, 'class');

				if ( cls.indexOf('soundcloud') != -1 )
					return '<p>['+tinymce.trim(getAttr(im, 'title'))+']</p>';

				return a;
			});
		},

		
		_createButtons : function() {
			var t = this, ed = tinyMCE.activeEditor, DOM = tinymce.DOM, soundcloudIGold_editButton, soundcloudIGold_dellButton;

			DOM.remove('hotibtns');

			DOM.add(document.body, 'div', {
				id : 'hotibtns',
				style : 'display:none;'
			});
			
			//Create Edit Button: Keep wp_editgallery as id to herite style for gallery edit button
			soundcloudIGold_editButton = DOM.add('hotibtns', 'img', {
				src : '../wp-content/plugins/wp-hoti-player-master/tinymce-plugin/img/edit.png',
				id : 'wp_editgallery',
				width : '24',
				height : '24',
				title : 'Replace or edit Player'
			});

			tinymce.dom.Event.add(soundcloudIGold_editButton, 'mousedown', function(e) {
				var ed = tinyMCE.activeEditor;
				ed.windowManager.bookmark = ed.selection.getBookmark('simple');
				ed.execCommand("hoti");
			});
			
			//Create Delite Button: Keep wp_editgallery as id to herite style for gallery edit button
			soundcloudIGold_dellButton = DOM.add('hotibtns', 'img', {
				src : '../wp-content/plugins/wp-hoti-player-master/tinymce-plugin/img/delete.png',
				id : 'wp_delgallery',
				width : '24',
				height : '24',
				title : 'Remove Player'
			});

			tinymce.dom.Event.add(soundcloudIGold_dellButton, 'mousedown', function(e) {
				var ed = tinyMCE.activeEditor, el = ed.selection.getNode();

				if ( el.nodeName == 'IMG' && ed.dom.hasClass(el, 'hoti') ) {
					ed.dom.remove(el);
					t._hideButtons();
					ed.execCommand('mceRepaint');
					return false;
				}
			});
		},

		getInfo : function() {
			return {
				longname : 'Hotï Player Shortcode Settings',
				author : 'TM',
				authorurl : 'http://www.mightymess.com',
				infourl : '',
				version : "1.0"
			};
		}
	});

	tinymce.PluginManager.add('hoti', tinymce.plugins.hoti);
})();
