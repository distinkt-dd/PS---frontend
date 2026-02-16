export type TMessage = {
	id: string
	firstName: string
	lastName: string
	email: string
	comment: string
	createAt: string
	updateAt: string
}

export type TGetMessagesResponse = TMessage[]

