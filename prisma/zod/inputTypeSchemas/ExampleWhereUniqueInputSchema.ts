import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ExampleWhereInputSchema } from './ExampleWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ExampleWhereUniqueInputSchema: z.ZodType<Prisma.ExampleWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => ExampleWhereInputSchema),z.lazy(() => ExampleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ExampleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ExampleWhereInputSchema),z.lazy(() => ExampleWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export default ExampleWhereUniqueInputSchema;
