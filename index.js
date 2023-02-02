const gifts = ['teddy bear', 'drone', 'doll']

function wrapGifts(gifts) {
	for (let i = 0; i < gifts.length; i++) {
		console.log(`Wrapped ${gifts[i]} and added a bow!`)
		debugger
	}

	return gifts
}

wrapGifts(gifts)

function writeCards(names, event) {
	const returnArray = []
	for (let i = 0; i < names.length; i++) {
		returnArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
	}
    return returnArray
}

function countDown(n) {
    while (n>=0) {
        console.log(n)
        n--
    }
}