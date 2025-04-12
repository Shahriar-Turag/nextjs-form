import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const formApi = createApi({
	reducerPath: 'formApi',
	baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
	endpoints: (builder) => ({
		submitForm: builder.mutation({
			query: (formData) => ({
				url: 'submit',
				method: 'POST',
				body: formData,
			}),
		}),
	}),
});

export const { useSubmitFormMutation } = formApi;
