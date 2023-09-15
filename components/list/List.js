import Item from "../item/Item"

function List({ arr }) {

    const items = arr.map((item, index) => {
        return <Item key={index} text={item} />
    })

    return (
        <ul>
            {items}
        </ul>
    )
}

export default List