export default {
	async getShiba () {
		const data = await getShiba.run()
		console.log('getShiba', data)
		return data
	}
}