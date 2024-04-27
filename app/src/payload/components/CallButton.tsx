'use client'

import { useForm } from '@payloadcms/ui/forms/Form'

export default function CallButton() {
  const { addFieldRow } = useForm();

    return (
        <button
        onClick={(e) => {
          e.preventDefault()
          console.log("About to add value example value")
          addFieldRow({
            schemaPath: "hello-array.blocky.example-block",
            path: "blocky",
            data: {
              blockType: "example-block",
              "not-reserved": "kebab-case",
              "value": "example value",
            },
          });
        }}
        type="button"
      >
        Add Row
      </button>
    )
}