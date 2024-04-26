import { Block } from 'payload/types'

const ExampleBlock: Block = {
  slug: 'example-block',
  fields: [
    {
        name: 'not-reserved',
        type: 'text',
    },
    {
      name: 'value',
      type: 'text',
    },
  ],
}

export default ExampleBlock