/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_config.html

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		// { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		// { name: 'editing',     groups: ['spellchecker' ] },
		{ name: 'links' },
		// { name: 'tools' },
		{ name: 'colors' },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'styles' },
		{ name: 'insert' },
		{ name: 'paragraph',   groups: [ /*'list', 'indent', 'blocks',*/ 'align' ] },
		{ name: 'document',	   groups: [ 'mode' ] },
		// { name: 'about' }
	];

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Table,HorizontalRule,SpecialChar,Subscript,Superscript,JustifyBlock,Styles,Font,FontSize';

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';

	// Add plugins.
	config.extraPlugins = 'colorbutton,panelbutton,button,floatpanel,panel,font,richcombo,justify';

	// Disable security notifications.
	config.versionCheck = false;
};
