import { checkResponse } from '@shared/api/general.api'
const SERVER_URL = import.meta.env.VITE_PS_API_URL
import type { TGetMessagesResponse } from '@shared/types/messages/messages.types'

export const getMessages = (): Promise<TGetMessagesResponse> =>
	fetch(`${SERVER_URL}messages`)
		.then((res: Response) => checkResponse<TGetMessagesResponse>(res))
		.then(data => {
			if (data) return data
			return Promise.reject(data)
		})
