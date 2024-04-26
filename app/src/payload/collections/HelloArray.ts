import type { CollectionConfig } from 'payload/types'

import CallButton from '../components/CallButton'
import ExampleBlock from '../blocks/ExampleBlock'

export const HelloArray: CollectionConfig = {
    slug: 'hello-array',
    admin: {
      useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'blocky',
            type: 'blocks',
            blocks: [ExampleBlock],
        },
        { 
            name: 'call',
            type: 'ui',
            admin: {
                components: {
                    Field: CallButton,
                }
            },
        }
    ],
}