import { CategoryT } from '../types'

class Category {
	id: string
	title: string
	color: string

	constructor({ id, title, color }: CategoryT) {
		this.id = id
		this.title = title
		this.color = color
	}
}

export default Category
