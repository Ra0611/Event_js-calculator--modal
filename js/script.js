
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	return new bootstrap.Popover(popoverTriggerEl)
})

const login = document.getElementById('login')
const pass = document.getElementById('psw')
const sub = document.getElementById('sub')
const mod = document.getElementById('modal')

login.onchange = function (e) {
	const test = e.target.value.toString()
	login.innerHTML = test
	if (test.length > 3) {
		login.style.borderColor = 'red'
	}
	console.log(test.length)
}

login.onchange = function (e) {
	if (e.target.value == 'ШАГ')
		pass.onchange = function (e) {
			if (e.target.value == 'F03') {
				mod.style.display = 'none'
			} else {
				alert('Неверный пароль!')
			}
		}
	else {
		alert('Неверный логин!')
	}
}
console.log(login.value)


//---------------------------------------------------------------------------------------------------------------------//
// const screen = document.getElementById('screen')
// let res = 0
// screen.innerHTML = res

// //!--------Функция eval() возвращает number из string!---------//

// function resulter(elem) {
// 	const operator = elem.getAttribute('data-operator')
// 	const number = elem.getAttribute('data-value')
// 	res = eval(`${res}${operator}${number}`)
// 	screen.innerHTML = res

// }
// const changeBorder = document.getElementById('formControl')

// formControl.onchange = function (e) {
// 	const test = e.target.value.toString()
// 	screen.innerHTML = test
// 	if (test.length > 3) {
// 		changeBorder.style.borderColor = 'red'
// 	}
// 	console.log(test.length)
// }

// formControl.oninput = function () {
// 	console.log('input')
// }
// const btnFocus = document.querySelector('block-btn__btn')
// btnFocus.onfocus = function () {
// 	btnFocus.style.background = ''
// }

// formControl.onblur = function () {
// 	console.log('blur')
// }

// btnPlus.onclick = function () {
// 	res++
// 	screen.innerHTML = res
// }
// btnMin.onclick = function () {
// 	res--
// 	screen.innerHTML = res
// }
// btnMulty.onclick = function () {
// 	res = res * 2
// 	screen.innerHTML = res
// }
// btnSpl.onclick = function () {
// 	res = res / 2
// 	screen.innerHTML = res
// }