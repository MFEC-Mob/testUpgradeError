export default {
	async init () {
		storeValue('page',"Page1")
		console.log('Page1')
		const data = await Shiba.getShiba()
		console.log('Page1 getShiba', data)
	}
}