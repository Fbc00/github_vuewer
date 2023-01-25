
export const helpersChildren = {
 addChildren (items) { 
	const data = items.map(item => { 
			if (item.type === 'dir') {
				item.children = []
			}
			return item
		})
		return data
	},

	organizeItems (items) { 
		return items.sort((a, b) => { 
			if (a.type === 'dir' && b.type === 'file') {
				return -1
			} else if (a.type === 'file' && b.type === 'dir') {
				return 1
			} else {
				return a.name.localeCompare(b.name)
			}
			
		})
	}


}
