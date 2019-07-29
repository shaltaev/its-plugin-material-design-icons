"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iconSetName = 'material-design-icons';
const fs_1 = require("fs");
exports.extractorSync = (group, iconName) => {
    const filePath = `node_modules/material-design-icons/${group}/svg/production/ic_${iconName}_24px.svg`;
    const fileContent = fs_1.readFileSync(filePath, { encoding: 'utf-8' });
    const content = fileContent.slice(91, -9);
    return [
        undefined,
        {
            content,
            viewBox: [0, 0, 24, 24]
        }
    ];
};
