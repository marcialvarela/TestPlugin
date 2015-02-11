cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.test.plugin.calendarPlugin/www/calendar.js",
        "id": "com.test.plugin.calendarPlugin.calendarPlugin",
        "clobbers": [
            "window.calendarPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.test.plugin.calendarPlugin": "0.1.0"
}
// BOTTOM OF METADATA
});