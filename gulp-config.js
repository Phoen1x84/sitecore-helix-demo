const config = (options) => {
    const x = {
        targets: options.targets,
        configuration: options.configuration,
        logCommand: false,
        verbosity: 'minimal',
        stdout: true,
        errorOnFail: true,
        maxcpucount: 0,
        nodeReuse: false,
        toolsVersion: options.toolsVersion
    }
    return x;
};

export default config;
