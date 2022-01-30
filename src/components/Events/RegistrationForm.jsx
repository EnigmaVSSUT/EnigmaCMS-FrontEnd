import { CircularProgress, Box, Button, FormControl, FormControlLabel, FormLabel, MenuItem, Modal, Radio, RadioGroup, Slide, Stack, TextField, Typography,Alert } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { UnivAxios, Axios } from "../../helpers/AxiosInstance";
import CloseIcon from '@material-ui/icons/Close';
import { toast } from 'react-toastify';

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
  const [loading, setloading] = useState(false);
    const [alert, setAlert] = useState(false);
    const {register, handleSubmit, getValues, control} = useForm()
    const [branches, setBranches] = useState()
    const [reg,setReg] = useState({
        "firstname": "",
        "lastname": "",
        "email": "",
        "year": "",
        "branch": "",
        "gender": "",
        "whatsapp_no": "",
        "expectations": "",
        "reg_number" : ""
    })

    // Form Submit
    const onSubmit = async(d) => {
      setloading(true);
        if(d.whatsapp_no.length !== 10){
            toast.warn('Please enter a 10-digit whatsapp number', {
              position: "top-right",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
            setloading(false);
            return;
        }
        if(d.gender === null || d.gender === undefined){
            toast.warn('Please choose your gender!', {
              position: "top-right",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
        }
        d.event = event.id
        console.log(d)
       await Axios.post('events/register/', d)
        .then(response => {
            if(response.status === 201)
              {

                setAlert(true);
              setloading(false);

              toast.success('Registration Successful', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                handleClose();
              }

           })
            .catch(err => {
              console.log(err.message)
              setloading(false);
              toast.success(`${err.message}`, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            })

    }

    useEffect(() => {
        UnivAxios.get('core/department-list/?is_academic=true/')
        .then(res => {
            console.log(res.data)
            setBranches(res.data)
        })
        .catch(err => console.log(err.message))
        console.log(reg.firstname)
    }, [])
    // const submit = ()=>{
    //     Axios.post('events/register/',reg)
    //     .then(res=>{
    //         console.log(res)
    //     })
    //     .catch(err=>console.log(err.message))

    // }

    return (
        <>


          <Modal
            open={open}
            onClose={handleClose}
            sx={{
                py: 2,
                overflowY: 'scroll'
            }}
          >
            {/* <form onSubmit={submit}> */}
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
                  <FormLabel id='gender'>Gender</FormLabel>
                  <Controller
                    control={control}
                    name='gender'
                    render={({
                      field: {onChange, value}
                    }) => (
                      <RadioGroup
                        aria-labelledby="gender"
                        row
                        value={value}
                        onChange={onChange}
                      >
                        <FormControlLabel value="Male" control={<Radio />} label="Male"/>
                        <FormControlLabel value="Female" control={<Radio />} label="Female"/>
                        <FormControlLabel value="Other" control={<Radio />} label="Other"/>
                      </RadioGroup>
                    )}
                  />
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
                  {/* Uncomment this if branch list is updated */}
                  {/* { branches && branches.map(branch => (
                    <MenuItem value={branch.name}>{branch.name}</MenuItem>
                  ))} */}
                  <MenuItem value='Chemical Engineering'>Chemical Engineering</MenuItem>
                  <MenuItem value='Civil Engineering'>Civil Engineering</MenuItem>
                  <MenuItem value='Computer Science and Engineering'>Computer Science and Engineering</MenuItem>
                  <MenuItem value='Electrical Engineering'>Electrical Engineering</MenuItem>
                  <MenuItem value='Electrical & Electronics Engineering'>Electrical & Electronics Engineering</MenuItem>
                  <MenuItem value='Electronics & Telecommunication Engineering'>Electronics & Telecommunication Engineering</MenuItem>
                  <MenuItem value='Information Technology'>Information Technology</MenuItem>
                  <MenuItem value='Mechanical Engineering'>Mechanical Engineering</MenuItem>
                  <MenuItem value='Metallurgical & Materials Engineering'>Metallurgical & Materials Engineering</MenuItem>
                  <MenuItem value='Production Engineering'>Production Engineering</MenuItem>
                  <MenuItem value='Architecture'>Architecture</MenuItem>
                  <MenuItem value='Integrated MSc'>Integrated MSc</MenuItem>
                </StyledTextField>

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
                  {loading ? <Box><CircularProgress size={30} color="success"/></Box>
                  :<PrimaryButton
                    variant='contained'
                    type='submit'
                    //  onClick={()=>{
                    //      setReg(getValues())
                    //  }}

                   >
                    Submit
                  </PrimaryButton>}
                  <Button
                    onClick={handleClose}
                    sx={{
                      ml: 2,
                      color: '#fff',
                    }}
                  >Cancel</Button>

                </Stack>
                {alert ?   <Alert severity="success">Registration Successful</Alert> : <></> }
              </Box>
            </Slide>
            {/* </form> */}

        </Modal>
        </>
    );
}

export default RegistrationForm;
