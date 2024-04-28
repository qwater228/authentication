import CommunityImages from '../components/svg/CommunityImages'
import Logo from '../components/svg/Logo'
import './leftSide.css'

export default function LeftSide() {
	// const img = ''
	return (
		<>
			<div className='leftSide'>
				<div className='boxLogoAndImage'>
					<Logo />
					<CommunityImages />
				</div>
				<div className='textLeftSide'>
					<div className='headerInLeftSide'>
						{' '}
						<p className='first'>Присоединяйся к</p>{' '}
						<p className='second'> онлайн сообществу!!!</p>
					</div>
					<div className='discription'>
						{' '}
						<p className='fristPart'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
							ipsum,
						</p>{' '}
						<p className='secondPart'>Quasi culpa laborum dolorum deleniti</p>
					</div>
				</div>
			</div>
		</>
	)
}
