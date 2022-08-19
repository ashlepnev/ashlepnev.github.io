import React from 'react'

const Contacts = () => {

  document.title = "Контакты Андрея Шлепнёва";
	
  return (
    <section className="content-section">
				<div className="content article with-navbar contacts">
				
					<h1>Контакты</h1>
				
					<p><b>Telegram:</b> <a target='_blank' href='https://t.me/ashlepnev'>@ashlepnev</a></p>
					<p><b>E-mail:</b> <a target='_blank' href='mailto:ashlepnev@gmail.com'>ashlepnev@gmail.com</a></p>
					<p><b>Телефон:</b> <a target='_blank' href='tel://+79137767355'>+7 913 776-73-55</a></p>

				</div>
				
				<div className="navbar"></div>
				
			</section>
  )
}

export default Contacts