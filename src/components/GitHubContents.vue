<template>
	<v-container v-if="items !== null">
    <v-treeview
    hoverable
	open-on-click
    :items="items"
	:load-children="fetchChildren"
	item-text="''"

	
  >
  
	<template v-slot:prepend="{ item }"  >
		<a :href="item.type === 'dir' ? item.html : item.download_url" target="_blank" style="text-decoration:none;" >
			<v-icon v-if="item.type === 'dir'" color="blue">
				mdi-folder
			</v-icon>
			<v-icon v-else >
				mdi-file
			</v-icon>
		</a>
		<span @click="mandaAbrir(item)" >{{ item.name }}</span>
	
	</template>
  </v-treeview>
  </v-container>
</template>

<script>
import {api} from '~api'
import {helpersChildren} from '@/helpers/helperChildren'
export default {	
	props: {
		dados: Object,
	},
	data() {
		return {
			items: null,
		}
	},
	watch : {
		dados() {
			this.listCOntents()
		}
	},
	methods: {
		async listCOntents() {
			const data = await api.lista_contents(this.dados.user, this.dados.repo.name)
			this.items = helpersChildren.organizeItems(helpersChildren.addChildren([...data]))
		},
		async fetchChildren(item){
			if (item.type === 'file') return
			const data = await api.fetch_children(item.url)
			const sort = helpersChildren.organizeItems(helpersChildren.addChildren(data))
			return item.children.push(...sort)
		},
		mandaAbrir(item) {
			if (item.type === 'file') {
				this.$emit('showpopup', item.download_url)
			}
		}
	},
	
}
</script>

<style>

</style>