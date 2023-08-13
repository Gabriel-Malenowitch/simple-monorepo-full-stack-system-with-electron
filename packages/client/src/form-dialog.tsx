import { Form, TextInput, useRecordContext } from 'react-admin'
import { Button, Dialog } from '@mui/material'
import { useState } from 'react'


export const FormDialog = ()=> {
    const [isOpen, setIsOpen] = useState(false)
    const record = useRecordContext()

    const toggle = () => setIsOpen(state=> !state)

    const handleSubmit = formValues => {
        alert('Hello world!')
    }

    return (
        <>
            <Button onClick={toggle}>Edit</Button>
            <Dialog onClose={toggle} open={isOpen}>
                <Form onSubmit={handleSubmit} defaultValues={record}>
                    <TextInput source="name" label="Name" />
                    <TextInput source="age" label="Age" />
                </Form>
            </Dialog>
        </>
    )
}
