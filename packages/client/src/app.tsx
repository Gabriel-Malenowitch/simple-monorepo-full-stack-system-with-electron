import { Box, ThemeProvider, createTheme } from '@mui/material'
import { Datagrid, TextField, AdminContext } from 'react-admin'
import { FormDialog } from './form-dialog'

const App = () => {
    const theme = createTheme()
    
    return(
        <ThemeProvider theme={theme}>
            <Box>
                <Datagrid data={[
                    {id: 1, name: 'John Doe', age: 424},
                    {id: 2, name: 'John ihhh', age: 412},
                    {id: 3, name: 'John huu', age: 432},
                ]}>
                <TextField source="name" label="Name"/>
                    <FormDialog />
                </Datagrid>
            </Box>
        </ThemeProvider>        
)}

export default App
