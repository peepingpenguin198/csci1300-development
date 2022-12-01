export default function Aggregator(props) {
    const { menuItems, onAdd, onRemove } = props;
    const totalCost = menuItems.reduce((a,c) => a + c.qty * c.cost, 0 );
    const totalPrepTime = menuItems.reduce((a,c) => a + c.qty * c.preptime, 0 );
    const totalCookTime = menuItems.reduce((a,c) => a + c.qty * c.cooktime, 0 );
    return (
        <div className = "block col-1">
            <div className="block-header">
                <h3>Menu Summary</h3>
            </div>
            <aside className="block col-1">
                <div className="row">
                    <div className="col-1"> <h4>Dishes</h4> </div>
                    <div className="col-1"> <h4>Adjust quantity</h4> </div>
                    <div className="col-1 text-right"> <h4>Units & Costs</h4> </div>
                </div>
                <div>
                    {menuItems.map((item) => (
                        <div key={item.id} className="row">
                            <div className="col-1">{item.name}</div>
                            <div className="col-1">
                                <button className="button button-dark remove" onClick={() => onRemove(item)}>
                                        -
                                    </button>
                                <span className="number-padding">{item.qty}</span>
                                <button className="button button-dark add" onClick={() => onAdd(item)}>
                                    +
                                </button>
                            </div>
                            <div className="col-1 text-right">
                                {item.qty} x ${item.cost.toFixed(2)}
                            </div>
                        </div>
                    ))}
                <>
                <hr/>
                    <div className="row">
                        <div className="col-2">
                            <b>Total Cost: </b> 
                            ${totalCost.toFixed(2)}
                                <br/>
                            <b>Total Prep Time:</b> {totalPrepTime.toFixed(2)} hrs
                                <br/>
                            <b>Total Cook Time:</b> {totalCookTime.toFixed(2)} hrs
                        </div>
                    </div>
                </>
                </div>
            </aside>
        </div>
    );
}
