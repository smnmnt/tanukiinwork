const modal = document.querySelector('.modal');
const btnCart = document.getElementById('cart');
const btnClose = document.querySelector('.btn-close');
const btnCancel = document.querySelector('.cart-popup__bottom-cancel');
const rows = modal.querySelectorAll('.row');
const total = modal.querySelector('.modal-sum');


btnCart.addEventListener('click', toggleModal);
btnClose.addEventListener('click', toggleModal);
btnCancel.addEventListener('click', toggleModal);



function toggleModal() {
    modal.classList.toggle('modal--close')
};

modal.addEventListener('click', (event)=>{
	if(event.target == modal){
		toggleModal()
	}
})



const getFullPrice = () => {
	let fullPrice = 0;
	const rows = modal.querySelectorAll('.row');
	rows.forEach(row => {
		let priceBlock = row.querySelector('.price')
		let price = +priceBlock.textContent 
		fullPrice += price;
	})
	total.textContent = fullPrice
}


rows.forEach(row => {
	let newPrice = 0;
	let priceBlock = row.querySelector('.price')
	let price = +priceBlock.textContent 
	let countBlock = row.querySelector('.count')
	let count = countBlock.textContent
	const btnMinus = row.querySelector('.btn-count-minus')
	const btnPlus = row.querySelector('.btn-count-plus')

	const getNewPrice = (count, price) => {
		newPrice = count * price
		priceBlock.textContent = newPrice
		getFullPrice()
	}
	
	btnMinus.addEventListener('click', () => {
		if (count > 0) {
			count--
			countBlock.textContent = count
			getNewPrice(count, price)
		}
	})

	btnPlus.addEventListener('click', () => {
		count++
		countBlock.textContent = count
		getNewPrice(count, price)
	})
	
})

getFullPrice()