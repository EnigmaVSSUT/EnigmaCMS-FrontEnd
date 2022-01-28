import { Box, Button, FormControl, FormControlLabel, FormLabel, MenuItem, Modal, Radio, RadioGroup, Slide, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UnivAxios, Axios } from "../../helpers/AxiosInstance";
import CloseIcon from '@material-ui/icons/Close';

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
            <Slide
                direction='right'
                in={open}
                mountOnEnter
                unmountOnExit
            >
                <Box
                    maxWidth={600}
                    component='form'
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        bgcolor: '#000000'
                    }}
                    onSubmit={handleSubmit(onSubmit)}

                >
                    <Box
                        sx={{
                            display: 'flex',
                            mb: 2,
                            alignItems: 'center'
                        }}
                    >
                        <Typography
                            sx={{
                                flexGrow: 1
                            }}
                            variant="h4"
                            color='#35ff1f'
                        >
                            Registration Form
                        </Typography>
                        <CloseIcon style={{color: '#ffffff', cursor: 'pointer'}} fontSize='large' onClick={handleClose} />
                    </Box>
                    
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
                        type='number'
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
                        value='1'
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
                        type='number'
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
            </Slide>
            
            
        </Modal>
    );
}
 
export default RegistrationForm;