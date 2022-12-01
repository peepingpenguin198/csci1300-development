export default function Dish(props) {
    const { item, dish, onAdd, onRemove } = props;
    return (
        <div className="card block-card" alt="card">
            <img className="image-card" src={dish.image} alt={dish.image} />
            <h3>
                {dish.name}
            </h3>
            <div className="dish-info" alt="dish-info">
            <b>Category:</b> {dish.category}
            </div>
            <div className="dish-info" alt="dish-info">
                <b>Prep Time:</b> {dish.preptime} hrs
            </div>
            <div className="dish-info" alt="dish-info">
                <b>Cook Time:</b> {dish.cooktime} hrs
            </div>
            <div className="dish-info" alt="dish-info">
                <b>Unit Cost:</b> ${dish.cost.toFixed(2)} 
            </div>
            <div className="button-block">  
                <p> 
                    {/* Servings: */}
                    {item ? (
                        <div> 
                            <button className="button button-dark remove" onClick={() => onRemove(item)}>
                                -
                            </button>
                            <span className="number-padding">{item.qty}</span>
                            <button className="button button-dark add" onClick={() => onAdd(item)}>
                                +
                            </button>
                        </div>
                    ) : (
                        <button className="button button-dark" onClick={() => onAdd(dish)}>Add to Menu</button>
                    )}
                </p> 
            </div>
        </div>
    )
}