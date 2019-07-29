type extractorSyncType = import('icons-to-sprite').extractorSyncType
type extractionTry = import('icons-to-sprite').iconExtractTryType

export const iconSetName: string = 'material-design-icons'

import { readFileSync } from 'fs'

export const extractorSync: extractorSyncType = (
    group: string,
    iconName: string
): extractionTry => {
    const filePath: string = `node_modules/material-design-icons/${group}/svg/production/ic_${iconName}_24px.svg`
    const fileContent: string = readFileSync(filePath, { encoding: 'utf-8' })
    const content: string = fileContent.slice(83, -6)

    return [
        undefined,
        {
            content,
            viewBox: [0, 0, 24, 24]
        }
    ]
}
