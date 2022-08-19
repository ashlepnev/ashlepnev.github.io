import React from 'react'
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import photos from "../store/certificates";

const Resume = () => {

  document.title = "Резюме Андрея Шлепнёва";


  const [index, setIndex] = React.useState(-1);

  return (
    <section className="content-section">
				<div className="content article with-navbar">
				
					<h1>Шлепнёв Андрей Владимирович</h1>
				
					<p>Bitrix-разработчик, суммарный опыт работы — более 10 лет, из них более 4 лет — полностью удаленно.</p>
					
					<h2>Опыт работы</h2>

					<div className='work-item'>
						<div className='work-item-content'>
							<div className='work-item-company'>Веб-студия «Verstkovo»</div>
							<div className='work-item-description'><i>Bitrix-разработчик</i><br/>
							Разработка сайтов с нуля на 1С-Битрикс, поддержка сайтов клиентов компании, внедрение нового функционала.
							</div>
						</div>
						<div className='work-item-date'>
							Июль 2019 — май 2022 <br/>
							(2 года 11 месяцев)
						</div>
					</div>

					<div className='work-item'>
						<div className='work-item-content'>
							<div className='work-item-company'>SEO-агентство «Intelsib»</div>
							<div className='work-item-description'><i>Bitrix-разработчик</i><br/>
							Поддержка сайтов клиентов компании, SEO-доработки. Интеграция с CRM и системами аналитики.
							</div>
						</div>
						<div className='work-item-date'>
							Март 2018 — июнь 2019 <br/>
							(1 год 4 месяца)
						</div>
					</div>

					<div className='work-item'>
						<div className='work-item-content'>
							<div className='work-item-company'>Рекламное агентство «Bormakot»</div>
							<div className='work-item-description'><i>Bitrix-разработчик</i><br/>
							Поддержка сайтов клиентов компании. Интеграция с 1С, Битрикс24, Roistat, AmoCRM и др.
							</div>
						</div>
						<div className='work-item-date'>
							Июнь 2017 — февраль 2018 <br/>
							(9 месяцев)
						</div>
					</div>

					<div className='work-item'>
						<div className='work-item-content'>
							<div className='work-item-company'>Web-студия «AplayWeb»</div>
							<div className='work-item-description'><i>Web-разработчик</i><br/>
							Разработка сайтов с нуля и поддержка (технический аудит, доработки (функционал, SEO, системы аналитики).
							Верстка макетов (html5, CSS3, JS, jQuery).
							Опыт работы с CMS: Diafan, OpenCart, Wordpress, MODx (evo, revo); с 2014 года полностью перешли на 1С-Битрикс. Получил 6 сертификатов (включая "Разработчик Bitrix Framework") и сдал экзамен "Интеграция дизайна и настройка платформы". Выполнил более 20 проектов с нуля на 1С-Битрикс, сделал 3 готовых сайта для marketplace.1c-bitrix.ru. Также выполнил множество доработок сайтов, включая интеграции с 1С УТ (кастомизация на событиях и компонентах обмена), установок/кастомизаций готовых решений от Аспро, Intec, Альфа-системс, Romza.
							</div>
						</div>
						<div className='work-item-date'>
							Февраль 2012 — май 2017 <br/>
							(5 лет 4 месяца)
						</div>
					</div>

					<h2>Образование</h2>

					<div className='work-item'>
						<div className='work-item-content'>
							<div className='work-item-company'>Сибирский государственный университет телекоммуникаций и информатики, Новосибирск</div>
							<div className='work-item-description'><i>Факультет информатики и вычислительной техники</i><br/>
							Специализация: программное обеспечение вычислительной техники и автоматизированных систем
							</div>
						</div>
						<div className='work-item-date'>
							2005 — 2010
						</div>
					</div>

					<h2>Технологии</h2>

					<p>PHP, MySQL, JavaScript, CSS, GIT, Bitrix, Linux<br/>
					Базовые знания: NodeJS, Express, React, React-Bootstrap, Ant Design, Sequelize, GraphQL, MongoDB, PostgreSQL, Laravel, Yii2, Composer</p>

					<h2>Сертификаты</h2>

					<PhotoAlbum
						layout="rows"
						photos={photos}
						targetRowHeight={150}
						onClick={(event, photo, index) => setIndex(index)}
						componentsProps={{ imageProps: { loading: "lazy" } }}
					/>



					<p><a target='_blank' className='blank-link' href='https://dev.1c-bitrix.ru/learning/resume.php?ID=35351911-247420'>эти сертификаты на сайте Битрикса</a></p>

				</div>
				
				<div className="navbar"></div>

				<Lightbox
					styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
					open={index >= 0}
					index={index}
					close={() => setIndex(-1)}
					slides={photos}
				/>
				
			</section>
			
  )
}

export default Resume