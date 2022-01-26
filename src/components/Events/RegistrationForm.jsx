import { Box, Button, FormControl, FormControlLabel, FormLabel, MenuItem, Modal, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UnivAxios, Axios } from "../../helpers/AxiosInstance";

const PrimaryButton = styled(Button)({
    maxWidth: 100,
    padding: '10px 15px',
    margin: '10px 0',
    backgroundColor: '#2ACC18',
    borderRadius: 0,
    color: '#000000',
    '&:hover': {
        backgroundColor: '#35ff1f',
    }
})

const StyledTextField = styled(TextField)({
    margin: '16px 0',
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#ffffff',
        },
        '&:hover fieldset': {
            borderColor: '#35ff1f',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#35ff1f',
        }
    },
    '& .MuiInputLabel-root': {
        color: '#ffffff',
        '&.Mui-focused': {
            color: '#ffffff'
        }
    },
    '& .MuiOutlinedInput-input': {
        color: '#ffffff'
    }
})

const StyledFormControl = styled(FormControl)({
    margin: '16px 0',
    '& .MuiFormLabel-root': {
        color: '#ffffff',
        '&.Mui-focused': {
            color: '#ffffff'
        }
    },
    '& .MuiFormGroup-root': {
        color: '#ffffff',
        '& .MuiRadio-root': {
            color: '#ffffff',
            '&.Mui-checked': {
                color: '#35ff1f',
            }
        }
    }
})

const RegistrationForm = ({open, event, handleClose}) => {
    const {register, handleSubmit} = useForm()
    const [branches, setBranches] = useState([])
    const onSubmit = (d) => {
        if(d.whatsapp_no.length !== 10){
            alert('Please enter a 10-digit whatsapp number')
            return;
        }
        d.event = event.id
        // console.log(d)
    }
    
    useEffect(() => {
        UnivAxios.get('core/department-list/?is_academic=true/')
        .then(res => {
            // console.log(res.data)
            setBranches(res.data)
        })
        .catch(err => console.log(err.message))
    }, [])

    return (
        <Modal
            open={open}
            onClose={handleClose}
            sx={{
                py: 2,
                overflowY: 'scroll'
            }}
        >
            
            <Box
                maxWidth={600}
                component='form'
                sx={{
                    width: '100%',
                    p: 4,
                    mx: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: '#000000'
                }}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Typography
                    variant="h4"
                    mb={2}
                    color='#35ff1f'
                >
                    Registration Form
                </Typography>
                <StyledTextField
                    variant='outlined'
                    label='First Name'
                    { ...register('firstname') }
                    required
                />
                <StyledTextField
                    variant='outlined'
                    label='Last Name'
                    { ...register('lastname') }
                    required
                />
                <StyledFormControl>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Male"
                        name="gender-group"
                    >
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </StyledFormControl>
                <StyledTextField
                    variant='outlined'
                    label='Email'
                    type='email'
                    { ...register('email') }
                    required
                />
                <StyledTextField
                    variant='outlined'
                    label='WhatsApp Number'
                    type='tel'
                    pattern='[0-9]{10}'
                    { ...register('whatsapp_no') }
                    required
                />
                <StyledTextField
                    select
                    variant='outlined'
                    label='Year'
                    { ...register('year') }
                    required
                >
                    <MenuItem value='1'>1st</MenuItem>
                    <MenuItem value='2'>2nd</MenuItem>
                    <MenuItem value='3'>3rd</MenuItem>
                    <MenuItem value='4'>4th</MenuItem>
                </StyledTextField>
                <StyledTextField
                    select
                    variant='outlined'
                    label='Branch'
                    defaultValue=''
                    { ...register('branch') }
                    required
                >

                    { branches && branches.map(branch => (
                        <MenuItem value={branch.name}>{branch.name}</MenuItem>
                    ))}
                </StyledTextField>
                {/* radio group : gender */}
                
                <StyledTextField 
                    variant='outlined'
                    label='Registration No'
                    { ...register('reg_number') }
                    pattern='[0-9]'
                    required
                />

                

                <StyledTextField
                    variant='outlined'
                    label='What are your expectations from this event?'
                    { ...register('expectations') }
                />
                <Stack direction='row'>
                    <PrimaryButton
                        variant='contained'
                        type='submit'
                    >
                        Submit
                    </PrimaryButton>
                    <Button
                        onClick={handleClose}
                        sx={{
                            ml: 2,
                            color: '#fff',
                        }}
                    >Cancel</Button>
                </Stack>
            </Box>
        </Modal>
    );
}
 
export default RegistrationForm;