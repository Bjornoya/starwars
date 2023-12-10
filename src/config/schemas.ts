import { z } from 'zod';

export const characterSchema = z.object({
  name: z.string({ required_error: 'Name is required', invalid_type_error: 'Name must be a string' }),
  height: z.string({ required_error: 'Height is required' }),
  mass: z.string({ required_error: 'Mass is required', invalid_type_error: 'Mass must be a number' }),
  hair_color: z.string({ required_error: 'Hair color is required' }),
  skin_color: z.string({ required_error: 'Skin color is required' }),
  eye_color: z.string({ required_error: 'Eye color is required' }),
  birth_year: z
    .string({ required_error: 'Date of birth is required' })
    .endsWith('BBY', { message: 'It should be in BBY format' }),
  gender: z.string({ required_error: 'Gender is required' }),
});
