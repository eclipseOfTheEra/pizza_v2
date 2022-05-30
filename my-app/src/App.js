import React from 'react';
import './scss/app.scss';
import PizzaBlock from './components/PizzaBlock';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<div className='container'>
					<div className='content__top'>
						<Categories />
						<Sort />
					</div>
					<h2 className='content__title'>Все пиццы</h2>
					<div className='content__items'>
						<PizzaBlock title='Пеперони' price='390' />
						<PizzaBlock title='Мексиканская' price='450' />
						<PizzaBlock title='Гавайская' price='480' />
						<PizzaBlock title='Четыре сыра' price='380' />
						<PizzaBlock title='Мясная' price='460' />
						<PizzaBlock title='Студенческая' price='300' />
						<PizzaBlock title='Песто' price='340' />
						<PizzaBlock title='Двойной цыпленок' price='380' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
