import Dish from './Dish';
import { useState } from 'react';

export default function Menu(props) {
    const { menuItems, onAdd, onRemove, dishes } = props;
    const [soupFilter, setSoupFilter] = useState(false);
    const [sideFilter, setSideFilter] = useState(false);
    const [mainFilter, setMainFilter] = useState(false);
    const [dessertFilter, setDessertFilter] = useState(false);
    const [sortType, setSortType] = useState('default');

    const getDishes = (sort) => {
        if (sort === 'default') {
            dishes.sort((dish1, dish2) => {
                return dish1.id - dish2.id
            });
        }
        else if (sort === 'costAsc') {
            dishes.sort((dish1, dish2) => {
                return dish1.cost - dish2.cost
            });
        }
        else if (sort === 'prepTimeAsc') {
            dishes.sort((dish1, dish2) => {
                return dish1.preptime - dish2.preptime
            });
        }
        else if (sort === 'cookTimeAsc') {
            dishes.sort((dish1, dish2) => {
                return dish1.cooktime - dish2.cooktime
            });
        }
        else if (sort === 'costDes') {
            dishes.sort((dish1, dish2) => {
                return dish2.cost - dish1.cost
            });
        }
        else if (sort === 'prepTimeDes') {
            dishes.sort((dish1, dish2) => {
                return dish2.preptime - dish1.preptime
            });
        }
        else if (sort === 'cookTimeDes') {
            dishes.sort((dish1, dish2) => {
                return dish2.cooktime - dish1.cooktime
            });
        }
        return dishes.map((dish) => {
            if (soupFilter) {
                if (dish.category == "Soup") {
                    return(
                    <Dish
                        key={dish.id}
                        dish={dish}
                        item={menuItems.find((x) => x.id === dish.id)}
                        onAdd={onAdd} 
                        onRemove={onRemove}
                        >
                    </Dish>
                    );
                }
            }
            if (sideFilter) {
                if (dish.category == "Side") {
                    return(
                    <Dish 
                        key={dish.id}
                        dish={dish}
                        item={menuItems.find((x) => x.id === dish.id)}
                        onAdd={onAdd} 
                        onRemove={onRemove}
                        >
                    </Dish>
                    );
                }
            }
            if (mainFilter) {
                if (dish.category == "Main") {
                    return(
                    <Dish 
                        key={dish.id}
                        dish={dish}
                        item={menuItems.find((x) => x.id === dish.id)}
                        onAdd={onAdd} 
                        onRemove={onRemove}
                        >
                    </Dish>
                    );
                }
            }
            if (dessertFilter) {
                if (dish.category == "Dessert") {
                    <h3>DESSERT</h3>
                    return(
                        <Dish 
                            key={dish.id}
                            dish={dish}
                            item={menuItems.find((x) => x.id === dish.id)}
                            onAdd={onAdd} 
                            onRemove={onRemove}
                            >
                        </Dish>
                    );
                }
            } 
            else if (!soupFilter & !sideFilter & !mainFilter & !dessertFilter) {
            return(
                <Dish 
                    key={dish.id}
                    dish={dish}
                    item={menuItems.find((x) => x.id === dish.id)}
                    onAdd={onAdd} 
                    onRemove={onRemove}
                    >
                </Dish>
                )}
            })
    };
      
    return (
        <div className="col-2">
            <div className="row block-header">
                <div className="col-2">
                    <h3>Dishes</h3>
                </div>
            </div>
            <div className = "block">
                <p> Show:
                    <button className="button button-all"
                    onClick={() => {
                        setSoupFilter(false)
                        setSideFilter(false)
                        setMainFilter(false)
                        setDessertFilter(false)
                    }}>
                        All
                    </button>
                    <button className="button button-filter" style={{
                    background: soupFilter ? "#824308":"#fff7f0",
                    color: soupFilter ? "#fff7f0" : "black"}}
                    onClick={() => {
                        setSoupFilter(!soupFilter)
                    }}>
                        Soups
                    </button>
                    <button className="button button-filter" style={{
                    background: sideFilter ? "#824308":"#fff7f0",
                    color: sideFilter ? "#fff7f0" : "black"}}
                    onClick={() => {
                        setSideFilter(!sideFilter)
                    }}>
                        Sides
                    </button>
                    <button className="button button-filter" style={{
                    background: mainFilter ? "#824308":"#fff7f0",
                    color: mainFilter ? "#fff7f0" : "black"}}
                    onClick={() => {
                        setMainFilter(!mainFilter)
                    }}>
                        Mains
                    </button>
                    <button className="button button-filter" style={{
                    background: dessertFilter ? "#824308":"#fff7f0",
                    color: dessertFilter ? "#fff7f0" : "black"}}
                    onClick={() => {
                        setDessertFilter(!dessertFilter)
                    }}>
                        Desserts
                    </button>
                </p>
                <p>
                    Sort By: 
                    <select onChange={(e) => setSortType(e.target.value)}>
                        <option value="default">Default</option>
                        <option value="costAsc">Cost (Low to High)</option>
                        <option value="costDes">Cost (High to Low)</option>
                        <option value="prepTimeAsc">Prep Time (Short to Long)</option>
                        <option value="prepTimeDes">Prep Time (Long to Short)</option>
                        <option value="cookTimeAsc">Cook Time (Short to Long)</option>
                        <option value="cookTimeDes">Cook Time (Long to Short)</option>
                    </select>
                </p>
                <div className="row">
                    {getDishes(sortType)}
                </div>
            </div>
        </div>
    );
}
