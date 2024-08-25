import { TRPCError } from '@trpc/server';
import { z, ZodError } from 'zod';

import {
	createTRPCRouter,
	// protectedProcedure,
	publicProcedure,
} from '../../server/api/trpc';

export const getAll = async () => {
	try {
		// ... your code goes here
	} catch (error) {
		if (error instanceof ZodError) {
			throw new TRPCError({
				code: 'BAD_REQUEST',
				message: error.message,
			});
		}

		if (error instanceof TRPCError) {
			if (error.code === 'UNAUTHORIZED') {
				throw new TRPCError({
					code: 'UNAUTHORIZED',
					message: 'Unauthorized',
				});
			}

			throw new TRPCError({
				code: 'INTERNAL_SERVER_ERROR',
				message: error.message,
			});
		}
	}
};
