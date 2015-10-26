/**
 * Created by eandreweccleston on 10/26/15.
 */

module.exports = function(grunt){
    // project configuration
    grunt.initConfig({
        pkg:grunt.file.readJSON(package.json),
        uglify:{
            options:{
                banner: '*!<%= pkg.name%> <%= grunt.template.today("yyyy-mm-dd")%> */\n'
            }
        build:{
            src:'client/app.js',
        }
        }
    })


}
