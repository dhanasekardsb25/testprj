const gulp = require('gulp');
var run = require('gulp-run-command').default
 
gulp.task('genearteAPK', run('expo build:android -t apk'))

gulp.task('installPrerequest',run('npm install expo-cli --global'))

gulp.task('genearteIos', run('expo build:ios -t archive'))

gulp.task('buildStatus',run('expo build:status'))