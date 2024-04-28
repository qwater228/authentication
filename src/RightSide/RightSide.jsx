import './rightSide.css'

import { FcGoogle } from 'react-icons/fc'
import { SlSocialVkontakte } from 'react-icons/sl'

import Inputs from '../Inputs/Inputs'

export default function RightSide() {
	return (
		<>
			<div>
				<div className='headerInRightSide'>
					<p className='one'>Присоединяйтесь к самому</p>
					<p className='two'>быстрорастущему онлайн-сообществу и</p>
					<p className='three'>подключайтесь к нему</p>
				</div>
				<div className='accountlogin'>
					<div className='google'>
						<FcGoogle className='iconGoogle' size={28} />
						<p>Войти через Google</p>
					</div>
					<div className='vk'>
						<SlSocialVkontakte className='VKIcon' size={28} />
						<p>Войти через VK</p>
					</div>
				</div>
				<div>
					<Inputs />
				</div>
			</div>
		</>
	)
}
