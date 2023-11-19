const fs = require('fs');

async function generateConfig() {
    const configFolderPath = "../config";
    const generatedPath = "../src/generated";

    let projectsList = [];

    let allItemsInProjectsFolder = fs.readdirSync(configFolderPath + "/projects");
    for (let projectName of allItemsInProjectsFolder) {
        if (fs.lstatSync(configFolderPath + "/projects/" + projectName).isDirectory) {
            projectsList.push(projectName);
        }
    }

    let configRaw;
    try {
        configRaw = fs.readFileSync(configFolderPath + "/config.json");
    } catch (e) {
        console.log("Unable to load " + (configFolderPath + "/config.json"));
        exit(2);
    }

    let config;
    try {
        config = JSON.parse(configRaw);
    } catch (e) {
        console.log("Unable to parse " + (configFolderPath + "/config.json"));
        exit(-1);
    }

    let projectsConfig = [];
    for (let projectName of projectsList) {
        let projectConfigRaw;
        try {
            projectConfigRaw = fs.readFileSync(configFolderPath + "/projects/" + projectName + "/config.json");
        } catch(e) {
            console.log("Unable to load " + (configFolderPath + "/projects/" + projectName + "/config.json"));
            exit(2);
        }

        let projectConfig;
        try {
            projectConfig = JSON.parse(projectConfigRaw);
        } catch (e) {
            console.log("Unable to parse " + (configFolderPath + "/projects/" + projectName + "/config.json"));
            exit(-1);
        }

        let page;
        try {
            page = fs.readFileSync(configFolderPath + "/projects/" + projectName + "/page.md", "utf-8");
        } catch (e) {
            console.log("Unable to load " + (configFolderPath + "/projects/" + projectName + "/page.md"));
            exit(2);
        }

        projectConfig.page = page;

        projectsConfig.push(projectConfig);
    }

    config.projects = projectsConfig;

    let configJSContent = "";

    for (key in config) {
        configJSContent += "export const " + key + " = " + JSON.stringify(config[key]) + "\n";
        console.log(JSON.stringify(config[key]));
    }

    fs.mkdirSync(generatedPath);
    fs.writeFileSync(generatedPath + "/Config.js", configJSContent);
}

generateConfig();