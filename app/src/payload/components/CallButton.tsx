'use client'

import { useForm } from '@payloadcms/ui/forms/Form'
//import { useForm } from "payload/components/forms";


export default function CallButton() {
  const { addFieldRow } = useForm();

    return (
        <button
        onClick={(e) => {
          e.preventDefault()
          console.log("About to add value example value")
          addFieldRow({
            schemaPath: "hello-array",
            path: "blocky",
            data: {
              blockType: "example-block",
              notReserved: "not-reserved",
              value: "example value",
            },
          });
        }}
        type="button"
      >
        Add Row
      </button>
    )
}