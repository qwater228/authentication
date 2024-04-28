import { useState } from 'react'
import './inputs.css'

import { IoEyeOutline } from 'react-icons/io5'

export default function Inputs() {
	const [on, setOff] = useState(false)

	const sw = () => {
		if (on == false) {
			return setOff(true)
		} else if (on == true) {
			return setOff(false)
		}
	}
	return (
		<>
			<div className='inputs'>
				<div className='TI'>
					<p className='textName text'>Имя</p>
					<input type='text' className='inputName input' />
				</div>
				<div className='TI'>
					<p className='textEmail text'>Email</p>
					<input type='text' className='inputEmail input' />
				</div>
				<div className='TI'>
					<p className='textPassword text'>Пароль</p>
					<input
						type={on == true ? `text` : `password`}
						className='inputPassword input'
					/>
					<IoEyeOutline onClick={sw} size={20} className='iconEye' />
				</div>

				<div className='CHB'>
					<div className='divCheckbox'>
						<input type='checkbox' name='' id='' className='checkbox' />
						<p className='condition'>Я принимаю условие соглашение </p>
					</div>
					<div className='enter'>Войти</div>
				</div>
				<p className='linkOfLogin'>
					у вас есть аккаунт?
					<a href='#' className='link'>
						ПЕРЕХОДИТЕ ПРЯМО СЕЙЧАС
					</a>
				</p>
			</div>
		</>
	)
}
