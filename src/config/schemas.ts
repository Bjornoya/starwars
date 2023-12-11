import { z } from 'zod';

export const characterSchema = z.object({
  name: z.string().min(1, { message: 'Firstname is required' }),
  height: z.string().min(1, { message: 'Height is required' }),
  mass: z.string().min(1, { message: 'Mass is required' }),
  hair_color: z.string().min(1, { message: 'Hair color is required' }),
  skin_color: z.string().min(1, { message: 'Skin color is required' }),
  eye_color: z.string().min(1, { message: 'Eye color is required' }),
  birth_year: z.string().endsWith('BBY', { message: 'It should be in BBY format' }),
  gender: z.string().min(1, { message: 'Gender is required' }),
});
