import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import styled from '@emotion/styled';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useNotification } from '../../../context/notification.context';
import { characterSchema } from '../../../config/schemas';

function CharacterForm({ initialState }) {
  const { notify } = useNotification();
  const [disabled, setDisabled] = useState(true);

  console.log(initialState);

  const {
    formState: { errors },
    control,
    handleSubmit,
    reset,
  } = useForm({ resolver: zodResolver(characterSchema), defaultValues: initialState });

  const onSubmit = (fieldValues): void => console.log(fieldValues);
  const onError = (error): void => notify.error(error);

  useEffect(() => {
    // set values from the API, remove fields that are not related to the form
    const { created, edited, ...rest } = initialState;
    reset(rest);
  }, [initialState]);

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit, onError)}>
      <Stack direction="row" justifyContent="space-between" alignItems="flex-end" spacing={2}>
        <Box>
          <Typography variant="h6" component="div">
            Character
          </Typography>
          <Typography sx={{ fontSize: '14px' }} variant="p" component="div">
            Created at: {initialState.created}
          </Typography>
        </Box>
        {disabled ? (
          <Button
            sx={{ height: '32px', width: '96px' }}
            onClick={() => setDisabled(false)}
            variant="outlined"
            size="small"
          >
            Edit
          </Button>
        ) : (
          <Stack direction="row" spacing={2}>
            <Button
              sx={{ height: '32px', width: '96px' }}
              onClick={() => setDisabled(true)}
              variant="outlined"
              size="small"
            >
              Cancel
            </Button>
            <Button
              sx={{ height: '32px', width: '96px' }}
              onClick={() => setDisabled(true)}
              variant="outlined"
              size="small"
            >
              Save
            </Button>
          </Stack>
        )}
      </Stack>
      <Stack spacing={2} mt={2}>
        <Stack direction="row" spacing={2}>
          <Controller
            name="name"
            control={control as any}
            render={({ field }) => (
              <StyledTextField
                label="Name"
                variant="outlined"
                size="small"
                margin="normal"
                error={!!errors.name}
                helperText={errors.name?.message}
                required
                {...field}
                disabled={disabled}
              />
            )}
          />
          <Controller
            name="height"
            control={control as any}
            render={({ field }) => (
              <StyledTextField
                label="Height"
                variant="outlined"
                size="small"
                margin="normal"
                error={!!errors.height}
                helperText={errors.height?.message}
                required
                {...field}
                disabled={disabled}
              />
            )}
          />
        </Stack>
        <Stack direction="row" spacing={2}>
          <Controller
            name="mass"
            control={control as any}
            render={({ field }) => (
              <StyledTextField
                label="Mass"
                variant="outlined"
                size="small"
                margin="normal"
                error={!!errors.mass}
                helperText={errors.mass?.message}
                required
                {...field}
                disabled={disabled}
              />
            )}
          />
          <Controller
            name="hair_color"
            control={control as any}
            render={({ field }) => (
              <StyledTextField
                label="Hair color"
                variant="outlined"
                size="small"
                margin="normal"
                error={!!errors.hair_color}
                helperText={errors.hair_color?.message}
                required
                {...field}
                disabled={disabled}
              />
            )}
          />
        </Stack>
        <Stack direction="row" spacing={2}>
          <Controller
            name="skin_color"
            control={control as any}
            render={({ field }) => (
              <StyledTextField
                label="Skin color"
                variant="outlined"
                size="small"
                margin="normal"
                error={!!errors.skin_color}
                helperText={errors.skin_color?.message}
                required
                {...field}
                disabled={disabled}
              />
            )}
          />
          <Controller
            name="eye_color"
            control={control as any}
            render={({ field }) => (
              <StyledTextField
                label="Eye color"
                variant="outlined"
                size="small"
                margin="normal"
                error={!!errors.eye_color}
                helperText={errors.eye_color?.message}
                required
                {...field}
                disabled={disabled}
              />
            )}
          />
        </Stack>
        <Stack direction="row" spacing={2}>
          <Controller
            name="birth_year"
            control={control as any}
            render={({ field }) => (
              <StyledTextField
                label="Birth year"
                variant="outlined"
                size="small"
                margin="normal"
                error={!!errors.birth_year}
                helperText={errors.birth_year?.message}
                required
                {...field}
                disabled={disabled}
              />
            )}
          />
          <Controller
            name="gender"
            control={control as any}
            render={({ field }) => (
              <StyledTextField
                label="Gender"
                variant="outlined"
                size="small"
                margin="normal"
                error={!!errors.gender}
                helperText={errors.gender?.message}
                required
                {...field}
                disabled={disabled}
              />
            )}
          />
        </Stack>
        <Typography sx={{ textAlign: 'right', fontSize: '14px' }} variant="p" component="div">
          Edited at: {initialState.edited}
        </Typography>
      </Stack>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledTextField = styled(TextField)`
  width: 300px;
`;

export default CharacterForm;
