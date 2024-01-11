export default function List() {
    let itemMap = ['Tomatoes', 'Pasta', 'Coconut'];

    return (
        <div>
            <h4 className='title'>상품 목록</h4>
            {
                itemMap.map((item, i) => {
                    return (
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} className="food-img" />
                            <h4>{i + 1}번 {item} $40</h4>
                        </div>
                    )
                })
            }

        </div>
    )
}
