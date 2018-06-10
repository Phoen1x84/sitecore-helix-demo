import gulp from 'gulp';
import msbuild from 'gulp-msbuild';
import fs from 'fs';



gulp.task('build-solution', () => {
    var targets = ['Build'];
    return gulp.src('./HelixExample.sln')
        .pipe(msbuild({
            targets: targets,
            toolsVersion: 15.0
        }))
});

gulp.task('deploy-all', () => {    
    return publishProjects([
        `./src/Feature/**/code/**/*.csproj`,
        `./src/Foundation/**/code/**/*.csproj`,
        `./src/Project/**/code/**/*.csproj`
    ]);
});

const publishProjects = (location) => {
    var dest = 'C:/x';
    var targets = ['Build'];    
    return gulp.src(location)
        .pipe(msbuild({
            targets: targets,
            configuration: 'Debug',
            logCommand: false,
            verbosity: 'minimal',
            stdout: true,
            errorOnFail: true,
            maxcpucount: 0,
            nodeReuse: false,
            toolsVersion: 15.0,
            properties: {
                Platform: "anyCpu",
                DeployOnBuild: "true",
                DeployDefaultTarget: "WebPublish",
                WebPublishMethod: "FileSystem",
                DeleteExistingFiles: "false",
                publishUrl: dest,
                _FindDependencies: "false"
            }
        }))
}