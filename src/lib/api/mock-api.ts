export interface DescriptionContent {
    title: string
    content: string
}

export interface ExtraContent {
    title: string
    content: string
    details: Array<{
        label: string
        value: string
        hasCheckmark?: boolean
    }>
}

export interface Asset {
    id: string
    name: string
    ipAddress: string
    icon: 'server' | 'database'
}

export interface RiskAssessment {
    id: string
    asset: Asset
    contextualRisk: 'Critical' | 'High' | 'Medium' | 'Low'
}

export interface RiskSummary {
    critical: number
    high: number
    medium: number
    low: number
}

export interface NetworkNode {
    id: string
    name: string
    type: 'primary' | 'secondary'
    risk?: 'critical' | 'normal'
    position: { x: number; y: number }
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const mockApi = {
    getDescriptionContent: async (): Promise<DescriptionContent> => {
        await delay(600)
        return {
            title: 'Description',
            content: `Lorem Ipsum Dolor Sit Amet Consectetur. Aenean 
  Sodales Pellentesque Gravida Nibh Et Magna Faucibus. 
  Dui Commodo Ut Metus Amet Egestas Habitant Viverra. 
  Quisque Fusce Senectus Facilisis Non Diam Leo Nulla 
  Sem Pellentesque. Sit In Vel Sed Cursus Metus Sit 
  Fringilla Vestibulum.`
        }
    },

    getExtraContent: async (): Promise<ExtraContent> => {
        await delay(800)
        return {
            title: 'Extra',
            content: `Lorem ipsum dolor sit amet consectetur. Tempus a id 
  adipiscing fames egestas tellus dis pretium tempus. 
  Justo nisl nisl lorem lectus id ornare. Rhoncus in egestas 
  in amet porttitor pellentesque sit. Amet gravida integer 
  velit felis. Eu consectetur interdum auctor sed aliquam. 
  Eu pulvinar accumsan sed ut. Duis a aliquam eu quisque 
  commodo lectus. Lectus ipsum velit purus viverra 
  vulputate viverra in nunc nulla. Euismod rhoncus mauris 
  urna orci gravida sagittis netus. Amet mus in vel etiam. 
  Interdum habitant congue massa in etiam sit. Commodo 
  nibh viverra lobortis augue lorem quam lorem 
  suspendisse.`,
            details: [
                { label: 'Lorem Ipsum Dolor', value: '10/19/2017' },
                { label: 'Lorem Ipsum Dolor', value: 'Ut' },
                { label: 'Lorem Ipsum Dolor', value: 'Eros' },
                { label: 'Lorem Ipsum Dolor', value: 'Yes', hasCheckmark: true },
                { label: 'Lorem Ipsum Dolor', value: 'Sit' },
                { label: 'Lorem Ipsum Dolor', value: 'Lorem Ipsum Dolor' },
                { label: 'Lorem Ipsum Dolor', value: 'Lorem Ipsum Dolor' }
            ]
        }
    },

    getRiskAssessments: async (): Promise<RiskAssessment[]> => {
        await delay(700)
        return [
            {
                id: '1',
                asset: {
                    id: 'asset1',
                    name: 'Loremipsumdolorsit',
                    ipAddress: '192.168.1.1',
                    icon: 'database'
                },
                contextualRisk: 'Critical'
            },
            {
                id: '2',
                asset: {
                    id: 'asset2',
                    name: 'Loremipsumdolorsit002',
                    ipAddress: '192.168.1.2',
                    icon: 'database'
                },
                contextualRisk: 'Critical'
            }
        ]
    },

    getRiskSummary: async (): Promise<RiskSummary> => {
        await delay(500)
        return {
            critical: 2,
            high: 0,
            medium: 0,
            low: 0
        }
    },

    getNetworkNodes: async (): Promise<NetworkNode[]> => {
        await delay(900)
        return [
            { id: 'main', name: 'Lorem Lorem Lorem', type: 'primary', position: { x: 400, y: 100 } },
            { id: 'node1', name: 'Loremipsum', type: 'secondary', position: { x: 200, y: 200 } },
            { id: 'node2', name: 'Loremipsu', type: 'secondary', position: { x: 350, y: 200 } },
            { id: 'node3', name: 'Loremipsu', type: 'secondary', position: { x: 500, y: 200 } },
            { id: 'node4', name: 'Loremipsumdolorsit', type: 'secondary', risk: 'critical', position: { x: 600, y: 300 } },
            { id: 'node5', name: 'Loremipsumdolorsit002', type: 'secondary', risk: 'critical', position: { x: 600, y: 400 } }
        ]
    }
}